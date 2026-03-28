

const hierarchicalTable = function (tableContainer, options) {

    const tableId = $(tableContainer).attr('id')
    const tableoptions = {
        ajax: options.ajax,
        createdRow: function (row, data, dataIndex) {
            $(row).addClass('parent editable-parent');
            $(row).attr('data-type', data.type);

            if (['inactive', 'archived'].includes(data.folder_status.toLowerCase())) {
                $(row).attr('disabled', true).find('td').addClass('disabled-column')
            }
        },
        scrollX: true,
        scrollY: false,
        columns: [
            {
                data: null, render: function (data, type, row) {
                    return `<input class="d-flex form-check-input row-select" type="checkbox" value="${row?.id}">`;
                }
            },
            {
                data: "name", render: function (data, type, row) {
                    return `<div class="d-flex align-items-center gap-3">
                            <button class="dt-control ${!row?.expanded_rows ? "no-control" : ""} m-0" role="button"></button>
                            <div class="d-flex align-items-center gap-2"
                                role="button" data-bs-target="#folderflyout-modal" data-bs-toggle="modal">
                                <span class="icon ${row?.type === "state" ? "icon-folder-upload-danger" : "icon-folder-upload-purple"} icon-md flex-shrink-0 m-0"></span>
                                <span class="input-item text-break">${data}</span>
                            </div>
                            </div>
                    `;
                }
            },
            {
                data: "tags", render: function (data, type, row) {
                    return renderTagsOnRow(data)
                }
            },
            {
                data: "modified_by", render: function (data, type, row) {
                    return row.modified_by === "filejet" ? null : `<span class="text-break">${data}</span>`;
                }
            },
            {
                data: "date_modified", render: function (data, type, row) {
                    return row.modified_by === "filejet" ? null : data;
                }
            },
            // {
            //   data: "sync_status", render: function (data, type, row) {
            //     return `
            //     <div class="d-flex align-items-center gap-1">
            //       <span class="icon ${data === "Synced" ? "icon-file-synced" : "icon-file-error"} icon-md m-0"></span>
            //       <span>${data}</span>
            //     </div>
            //     `;
            //   }
            // },
            {
                data: null, render: function (data, type, row) {
                    if (row?.type === "custom") {
                        return `
                        <div class="d-flex align-items-center">
                            <span role="button" tabindex="0" class="edit-content ${['inactive', 'archived'].includes(row.folder_status.toLowerCase()) ? 'icon-disabled' : ''}" > 
                            <span data-toggle="tooltip" aria-label="EDIT" data-bs-original-title="EDIT" 
                                class="icon icon-entity-edit me-1 me-md-2"></span>
                            </span>
                            <span role="button" tabindex="0" class="save-content"> 
                            <span data-toggle="tooltip" aria-label="SAVE" data-bs-original-title="SAVE" 
                                class="icon icon-save me-1 me-md-2"></span>
                            </span>
                            
                            <span role="button" tabindex="0" class="${['inactive', 'archived'].includes(row.folder_status.toLowerCase()) ? 'icon-disabled' : ''}" data-bs-toggle="modal" data-bs-target="#delete-modal">
                            <span data-toggle="tooltip" aria-label="DELETE" data-bs-original-title="DELETE" 
                                class="icon icon-entity-delete me-1 me-md-2"></span> 
                            </span>
                        </div>
                        `
                    }
                    return null;
                }
            }
        ],
        order: [[1, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    }
    const table = tableContainer.DataTable(tableoptions);

    // Folder/SUbfolder like structure logic 
    $(`#${tableId} tbody`).on("click", "td .dt-control", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let tr = $(this).closest("tr");
        let dataId = tr.data('id') || "";
        let row = table.row(tr);
        let rowId = row?.data()?.id || $(tr).data('level-id');


        if (tr.hasClass("expanded-row")) {
            collapseRow(rowId);
            tr.removeClass("expanded-row");
        } else {
            let parentData = dataId ? table.row($(`tr.parent[data-id=${dataId}]`).first())?.data() : row?.data();
            const rowData = findChildData(parentData, n => n?.id === rowId);
            let expandedRowContent = formatChildRows(rowData, rowId, dataId || rowId, tr.find('.row-select').is(":checked"));
            tr.after(expandedRowContent);
            tr.addClass("expanded-row");
            if (!dataId) {
                tr.attr('data-id', rowId)
            }
        }
        // table.columns.adjust();
        applyTagOverflow();
        applyAlternateRowStyling(tableId);

        const parentPadding = parseInt($(tr).children('td.doc_indent').css('padding-left'), 10) || 0;
        $(`.expanded-content[data-parent="${rowId}"]`).each(function () {
            if (parentPadding === 0) return;
            $(this).children('td.doc_indent')[0].style.setProperty('padding-left', parentPadding + 30 + 'px', 'important');
        });
    });


    // Remove expand-row on sorting 
    table.on('order.dt draw.dt', function () {
        $(this).find(".expanded-row").each((_, element) => {
            element.classList.remove("expanded-row");
        });
    })

    table.on('column-sizing.dt', function () {
        applyTagOverflow();
    })
}

// function to find child Data
function findChildData(data, cb) {
    const stack = [data];
    while (stack.length) {
        const node = stack.pop();
        if (cb(node)) return node;
        if (node.expanded_rows) {
            stack.push(...node.expanded_rows);
        }
    }
    return null;
}

// function collapseRow based on clicked row ID
function collapseRow(parentId) {
    $(`.expanded-content[data-parent="${parentId}"]`).each(function (index, el) {
        const row = $(el);
        if (row.hasClass("expanded-row")) {
            const subFolderId = row.data('level-id');
            collapseRow(subFolderId);
        }
        row.remove();
        row.removeClass("expanded-row")
    });
}

// get expanded row structure
function formatChildRows(data, parentId, dataLevelId = "", parentCheckboxIsChecked) {
    return data.expanded_rows.map((row, index, arr) =>
        `
        <tr class="expanded-content editable-parent" data-parent="${parentId}" data-level-id="${row?.id || ""}" data-id="${dataLevelId}" data-type="${row.type}">
          <td>
            <input class="d-flex form-check-input row-select" type="checkbox" value="${row?.id}" ${parentCheckboxIsChecked ? "checked" : ""} >
          </td>
          <td class="doc_indent">
            ${row?.type !== "file"
            ?
            `<div class="d-flex align-items-center gap-3">
                      <button class="dt-control ${!row?.expanded_rows ? "no-control" : ""} m-0" role="button"></button>
                      <div class="d-flex align-items-center gap-2"
                      role="button" data-bs-target="#folderflyout-modal" data-bs-toggle="modal">
                          <span class="icon icon-folder-upload-purple icon-md flex-shrink-0 m-0"></span>
                          <span class="input-item text-break">${row.name}</span>
                      </div>
                  </div>`
            :
            `<div class="d-flex">
                  <div class="d-flex align-items-center gap-2"
                  role="button" data-bs-target="#documentflyout-modal" data-bs-toggle="modal">
                    <span class="icon icon-document-gray icon-md flex-shrink-0 m-0"></span>
                    <span class="input-item text-break">${row.name}</span>
                  </div>
                </div>`}
              </td>
              <td >${renderTagsOnRow(row.tags)}</td>
              <td> <span class="text-break">${row.modified_by || data.modified_by}</span></td>
              <td >${row.date_modified}</td>
              ${null && `<td >
                <div class="d-flex align-items-center gap-1">
                  <span class="icon ${row.sync_status === "Synced" ? "icon-file-synced" : "icon-file-error"} icon-md m-0"></span>
                  <span>${row.sync_status}</span>
                </div>
              </td>`}
              <td>
                <div class="d-flex align-items-center">
                  <span role="button" tabindex="0" class="edit-content"> 
                    <span data-toggle="tooltip" aria-label="EDIT" data-bs-original-title="EDIT" 
                    class="icon icon-entity-edit me-1 me-md-2 ${row?.type !== "file" ? row.isEditable ? "" : "icon-disabled" : ""}"></span>
                  </span>
                  <span role="button" tabindex="0" class="save-content"> 
                    <span data-toggle="tooltip" aria-label="SAVE" data-bs-original-title="SAVE" 
                      class="icon icon-save me-1 me-md-2"></span>
                  </span>
                  <span role="button" tabindex="0" class-"delete-btn" data-bs-toggle="modal" data-bs-target="#delete-modal"> 
                    <span data-toggle="tooltip" aria-label="DELETE" data-bs-original-title="DELETE" 
                      class="icon icon-entity-delete me-1 me-md-2 ${row?.type !== "file" ? row.isDeleteable ? "" : "icon-disabled" : ""}"></span>
                  </span>
                </div>
              </td>
          </tr>
      `
    ).join("");
}


//function to render tags
function renderTagsOnRow(tagdata, maxTag = 4) {
    const tagWrapper = document.createElement("div");
    tagWrapper.className = "d-flex gap-1 align-items-center d-tag-wrapper";
    tagWrapper.style.whiteSpace = "nowrap";
    tagWrapper.style.overflow = "hidden";

    tagdata.forEach((value, index) => {
        const span = document.createElement("span");
        span.className = "badge text-black d-tag";
        span.style.backgroundColor = value.tagColor;
        span.innerText = value.tagName;
        tagWrapper.appendChild(span);
    })

    // +N placeholder (keeping empty for now will alter while table draws)

    const span = document.createElement("span");
    span.className = "badge text-black d-tag-more d-none"
    span.style.backgroundColor = "#E6E8EC";
    tagWrapper.appendChild(span);

    return tagWrapper.outerHTML;
}


function applyTagOverflow() {

    $('.d-tag-wrapper').each(function () {
        const wrapper = $(this);
        const td = wrapper.closest('td');

        const tags = wrapper.find('.d-tag');
        const moreBadge = wrapper.find('.d-tag-more');

        const colIndex = td[0].cellIndex;

        const parent = td.closest('.dataTables_scroll');

        const th = parent.find('.dataTables_scrollHeadInner table thead th').eq(colIndex);

        let usedWidth = 0;
        let hiddenCount = 0;

        tags.css('display', 'inline-block');
        moreBadge.addClass('d-none').text("");

        const colWidth = th.outerWidth(true) - 60;

        tags.each(function () {
            let tag = $(this);
            
            let tagWidth = tag.outerWidth(true);


            if (usedWidth + tagWidth > colWidth) {
                tag.css('display', 'none');
                hiddenCount++;
            } else {
                usedWidth += tagWidth;
            }
        });

        if (hiddenCount > 0) {
            moreBadge.text('+' + hiddenCount).removeClass('d-none')
        }
    })
}

// function to keep alternative row design
function applyAlternateRowStyling(id) {
    const rows = $(`#${id} tbody tr`);
    rows.removeClass('odd even');
    rows.each(function (index) {
        $(this).addClass(index % 2 === 0 ? 'odd' : 'even');
    });
}

function multiSelectRow(tableContainer) {
    const CHECKBOX_SELECTOR = 'td:not(.disabled-column) .row-select';

    function getAllCheckboxes() {
        return tableContainer.find(CHECKBOX_SELECTOR);
    }

    function getCheckedCheckboxes() {
        return tableContainer.find(CHECKBOX_SELECTOR + ':checked');
    }

    // Select All Checkbox  
    tableContainer.on('change', "#document-clear-all", function () {
        const isChecked = $(this).prop('checked');

        getAllCheckboxes().prop('checked', isChecked);

        $(this).removeClass('icon-optional-check');

        toggleDownloadButton();
    })

    // row checkbox event handle

    tableContainer.on('change', '.row-select', function () {
        const checkbox = $(this);
        const row = checkbox.closest('tr');
        const isChecked = $(this).prop("checked");

        let levelId = row.hasClass("parent") ? row.data('id') : row.data('levelId');
        toggleChildren(row, isChecked, levelId);
        updateParent(row);
        updateSelectAllState();
        toggleDownloadButton();
    })

    // update children checkbox
    function toggleChildren(row, isChecked, levelId) {
        if (!levelId) return;

        const children = tableContainer.find(`tr[data-parent="${levelId}"]`);

        if (!children.length) return;

        children.find(CHECKBOX_SELECTOR).prop('checked', isChecked);

        // Parent -> toggle direct children
        children.each(function () {
            const childlevelId = $(this).data('levelId');
            toggleChildren($(this), isChecked, childlevelId);
        })
    }

    // update parent
    function updateParent(row) {
        const parentId = row.data('parent');

        if (parentId === undefined || parentId === null) return;

        const checkbox = tableContainer.find(`tr.expanded-content[data-parent="${parentId}"] ${CHECKBOX_SELECTOR}`);

        if (!checkbox.length) return;

        const totalCheckbox = checkbox.length;
        const checkedCheckbox = checkbox.filter(':checked').length;


        let parentRow = tableContainer.find(`tr.expanded-content[data-level-id="${parentId}"]`);

        if (parentRow.length === 0) {
            parentRow = tableContainer.find(`tr.parent[data-id="${parentId}"]`)
        }

        const parentCheckbox = parentRow.find('.row-select');

        if (checkedCheckbox === totalCheckbox) {
            parentCheckbox.prop('checked', true);
        } else {
            parentCheckbox.prop('checked', false);
        }

        updateParent(parentRow);
    }


    // select all state change

    function updateSelectAllState() {
        const allCheckbox = getAllCheckboxes();
        const totalCheckbox = allCheckbox.length;
        const checkedCheckbox = allCheckbox.filter(':checked').length;

        const selectAll = tableContainer.find('#document-clear-all');

        if (checkedCheckbox === totalCheckbox) {
            selectAll.prop('checked', true).removeClass("icon-optional-check");
        }
        else if (checkedCheckbox === 0) {
            selectAll.prop('checked', false).removeClass("icon-optional-check");
        }
        else {
            selectAll.prop('checked', true).addClass("icon-optional-check");
        }
    }

    // hide or show download button based on checkbox being checked
    function toggleDownloadButton() {
        const hasNoCheckedCheckbox = getCheckedCheckboxes().length === 0;
        $('.downloadBtn').toggleClass('d-none', hasNoCheckedCheckbox);
    }
}