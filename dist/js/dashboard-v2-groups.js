$(document).ready(function () {
    //group listing Table

    const tableOptions = {
        ajax: {
            url: "data5.json",
            dataSrc: 'groups_listing_data'
        },
        processing: true,
        scrollX: true,
        scrollY: false,
        columns: [
            {
                data: "group_name", render: function (data, type, row) {
                    return `<a href="./group-details-v1.html">${data}</a>`;
                }
            },
            { data: "primary_contact" },
            { data: "entities" },
            { data: "registrations" },
            { data: "partner_users" },
            {
                data: null, render: function (data, type, row) {
                    return `
                        <div class="d-flex align-items-center">
                            <span data-toggle="tooltip" data-bs-original-title="EDIT" data-bs-toggle="modal" data-bs-target="#editGroup-modal" class="me-1 me-md-2 d-inline-block" role="button" data-bs-toggle="modal" data-bs-target="#edit-owner-modal">
                            <span class="icon icon-entity-edit m-0"></span>
                            </span>
                            <span data-toggle="tooltip" data-bs-original-title="DELETE" data-bs-toggle="modal" data-bs-target="#deleteGroup-modal" class="me-1 me-md-2 d-inline-block" role="button" data-bs-toggle="modal" data-bs-target="#delete-modal">
                            <span class="icon icon-entity-delete m-0"></span>
                            </span>
                        </div>
                    `
                }
            }
        ],
        order: [[0, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    }

    $("#group-listing-table").DataTable(tableOptions);

    const groupTagwrapper = $('.group-tags-container')

    if (groupTagwrapper.length) {
        initTagSelect(groupTagwrapper)
    }
})

//group entities table initializtion code

$(document).ready(function () {
    const tableOptions = {
        ajax: "data4.json",
        processing: true,
        scrollX: true,
        scrollY: false,
        createdRow: function (row, data) {
            $(row).find('td').toggleClass('text-light-blue', data.id == 17);
        },
        columns: [
            {
                data: "entity_name", render: function (data, type, row) {
                    return `
                        <div class="d-flex align-items-center gap-3">
                            <button class="dt-control ${row?.expanded_rows.length ? "" : "no-control"} m-0" role="button"></button>
                            ${row.id == 17
                            ?
                            `<a href="./entities-details-v1-international.html">${data}</a>`
                            :
                            `<a href="./entities-details-v2.html">
                                    <span class="text-break">${data}</span>
                            </a>`
                        }
                        </div>
                    `;
                }
            },
            { data: "type" },
            { data: "jurisdiction" },
            { data: "registrations" },
            { data: "dbas" },
            { data: "business_licenses" },
            { data: "status", render: renderDotsTable1 },
            {
                data: null, render: function (data, type, row) {
                    return `
                <div class="d-flex align-items-center">                   
                    <span role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#reAssignEnities-modal">
                        <span data-toggle="tooltip" aria-label="REASSIGN" data-bs-original-title="REASSIGN" 
                            class="icon icon-group-reassign icon-md me-1 me-md-2">
                        </span> 
                    </span>
                </div>`;
                }
            }
        ],
        order: [[0, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    }
    const table1 = $('#groupdetails-entities-table').DataTable(tableOptions)
    $("#groupdetails-entities-table tbody").on("click", "td .dt-control", function () {
        let tr = $(this).closest("tr");
        let row = table1.row(tr);
        let rowId = row.data().id;

        if (tr.hasClass("expanded-row")) {
            $(`.expanded-content[data-parent="${rowId}"]`).remove();
            tr.removeClass("expanded-row");
        } else {
            let expandedRows = formatExpandedRows(row.data(), rowId);
            tr.after(expandedRows);
            tr.addClass("expanded-row");
        }
        applyAlternateRowStyling("groupdetails-entities-table");
    });


    function formatExpandedRows(data, rowId) {
        return data.expanded_rows.map((row, index, arr) => `
          <tr class="expanded-content ${index === arr.length - 1 ? 'last-expanded-content' : ''}" data-parent="${rowId}">
              <td class="${rowId == 17 ? 'text-light-blue' : ''}">
                <a href="./entities-details-v2.html">
                    <span class="d-flex text-break" style="padding-left: 27px;">${row.entity_name}</span>
                </a>
              </td>
              <td class="${rowId == 17 ? 'text-light-blue' : ''}">${row.type}</td>
              <td class="${rowId == 17 ? 'text-light-blue' : ''}">${row.jurisdiction}</td>
              <td class="${rowId == 17 ? 'text-light-blue' : ''}">${row.registrations}</td>
              <td class="${rowId == 17 ? 'text-light-blue' : ''}">${row.dbas}</td>
              <td class="${rowId == 17 ? 'text-light-blue' : ''}">${row.business_licenses}</td>
              <td>
                <span class="badge badge-${row.status.class}">${row.status.label}</span>
              </td>
              <td>
                <div class="d-flex align-items-center">                   
                    <span role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#reAssignEnities-modal">
                        <span data-toggle="tooltip" aria-label="REASSIGN" data-bs-original-title="REASSIGN" 
                            class="icon icon-group-reassign icon-md me-1 me-md-2">
                        </span> 
                    </span>
                </div>
              </td>
          </tr>
      `).join("");
    }

    // Remove expand-row on sorting 
    table1.on('order.dt draw.dt', function () {
        $(this).find(".expanded-row").each((_, element) => {
            element.classList.remove("expanded-row");
        });
    })
})

//groups document table initialization code with subfolder logic
$(document).ready(function () {
    const tableOptions = {
        ajax: {
            url: "data5.json",
            dataSrc: 'group_entity_documents_data',
        },
        createdRow: function (row, data, dataIndex) {
            $(row).addClass('parent editable-parent');
            $(row).attr('data-type', data.type);
            $(row).attr('data-id', data.id);

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
                            ${row?.type === "entity"
                            ?
                            `<div class="d-flex align-items-center gap-2" role="button">
                                <span class="icon icon-entity-main icon-md flex-shrink-0 m-0"></span>
                                <span class="input-item text-break">${data}</span>
                            </div>`
                            :
                            `<div class="d-flex align-items-center gap-2" role="button" 
                                data-bs-target="#folderflyout-modal" data-bs-toggle="modal">
                                    <span class="icon ${row?.type === "state" ? "icon-folder-upload-danger" : "icon-folder-upload-purple"} icon-md flex-shrink-0 m-0"></span>
                                    <span class="input-item text-break">${data}</span>
                            </div>`}
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
            {
                data: null, render: function (data, type, row) {
                    if (row?.type === "custom") {
                        return `
                        <div class="d-flex align-items-center">
                            <span role="button" tabindex="0" class="edit-content" > 
                            <span data-toggle="tooltip" aria-label="EDIT" data-bs-original-title="EDIT" 
                                class="icon icon-entity-edit me-1 me-md-2"></span>
                            </span>
                            <span role="button" tabindex="0" class="save-content"> 
                            <span data-toggle="tooltip" aria-label="SAVE" data-bs-original-title="SAVE" 
                                class="icon icon-save me-1 me-md-2"></span>
                            </span>
                            
                            <span role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#deletefolder-modal">
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
    const table = $("#groupentity-documents-table").DataTable(tableOptions);

    // Folder/SUbfolder like structure logic 
    $(`#groupentity-documents-table tbody`).on("click", "td .dt-control", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($('#contextmenu').hasClass('show')) {
            $('#contextmenu').removeClass('show')
        };
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
            let expandedRowContent = formatChildRows(rowData, rowId, dataId, tr.find('.row-select').is(":checked"));
            tr.after(expandedRowContent);
            tr.addClass("expanded-row");
        }
        // table.columns.adjust();
        applyTagOverflow();
        applyAlternateRowStyling("groupentity-documents-table");

        const parentPadding = parseInt($(tr).children('td.doc_indent').css('padding-left'), 10) || 0;
        $(`.expanded-content[data-parent="${rowId}"]`).each(function () {
            if (parentPadding === 0) return;
            $(this).children('td.doc_indent')[0].style.setProperty('padding-left', parentPadding + 30 + 'px', 'important');
        });
    });

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
                          <span class="icon ${row?.type === "state" ? "icon-folder-upload-danger" : "icon-folder-upload-purple"} icon-md flex-shrink-0 m-0"></span>
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
              <td> <span class="text-break">${row.modified_by === "filejet" ? "" : row.modified_by}</span></td>
              <td> <span class="text-break">${row.modified_by === "filejet" ? "" : row.date_modified}</span></td>
              <td>
                ${row?.type !== "state"
                ?
                `<div class="d-flex align-items-center">
                  <span role="button" tabindex="0" class="edit-content"> 
                    <span data-toggle="tooltip" aria-label="EDIT" data-bs-original-title="EDIT" 
                    class="icon icon-entity-edit me-1 me-md-2 ${row?.type !== "file" ? row.isEditable == false ? "icon-disabled" : "" : ""}"></span>
                  </span>
                  <span role="button" tabindex="0" class="save-content"> 
                    <span data-toggle="tooltip" aria-label="SAVE" data-bs-original-title="SAVE" 
                      class="icon icon-save me-1 me-md-2"></span>
                  </span>
                  <span role="button" tabindex="0" class-"delete-btn" data-bs-toggle="modal" data-bs-target="#deletefolder-modal"> 
                    <span data-toggle="tooltip" aria-label="DELETE" data-bs-original-title="DELETE" 
                      class="icon icon-entity-delete me-1 me-md-2 ${row?.type !== "file" ? row.isDeleteable == false ? "icon-disabled" : "" : ""}"></span>
                  </span>
                </div>`
                :
                ''
            }
              </td>
          </tr>
      `
        ).join("");
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

        const tableContainer = $('.groupEntityDocumentsTable');
        const allCheckbox = tableContainer.find('td:not(.disabled-column) .row-select');
        const checkedCheckbox = allCheckbox.filter(':checked').length;

        const selectAll = tableContainer.find('#document-clear-all');
        if (checkedCheckbox === 0) {
            selectAll.prop('checked', false).removeClass("icon-optional-check").trigger('change');
        }
    }

    // Remove expand-row on sorting 
    table.on('order.dt draw.dt', function () {
        $(this).find(".expanded-row").each((_, element) => {
            element.classList.remove("expanded-row");
        });
    })

    table.on('column-sizing.dt', function () {
        applyTagOverflow();
    })

    // logic for document tabs select checkbox to download doc or folders
    const tableContainer = $('.groupEntityDocumentsTable');
    multiSelectRow(tableContainer)
})


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

//separating document table column adjusment
$(document).on('shown.bs.tab', function (e) {
    const currentTab = $(e.target);
    const tableKey = currentTab.data('table-key');
    $(`#${tableKey}`).DataTable().columns.adjust();
});


// context menu logic start
$(function () {
    const contextMenu = $('#contextmenu').get(0);
    $(".groupEntityDocumentsTable .dataTables_scrollBody").on("contextmenu", "tr>td:nth-child(2)", function (e) {
        e.preventDefault();
        e.stopPropagation()
        this.hidden = false;
        contextMenu.classList.add("show");
        const menuWidth = contextMenu.offsetWidth;
        const menuHeight = contextMenu.offsetHeight;

        // Get viewport dimensions
        let windowWidth = window.innerWidth || document.documentElement.clientWidth;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Calculating the 'left' position
        let leftPos = e.clientX;
        if (leftPos + menuWidth > windowWidth) {
            leftPos = e.clientX - menuWidth;
        }

        // Calculating the 'top' position
        let topPos = e.clientY;
        if (topPos + menuHeight > windowHeight) {
            topPos = e.clientY - menuHeight;
        }

        // Set the menu's position
        contextMenu.style.left = `${leftPos}px`;
        contextMenu.style.top = `${topPos}px`;
    });

    $(this).on('contextmenu click scroll', function (e) {
        if (contextMenu?.classList.contains("show")) {
            contextMenu.classList.remove('show');
        }
    })
});


$(document).ready(function () {
    //group user access Table

    const tableOptions = {
        ajax: {
            url: "data5.json",
            dataSrc: 'group_users_data'
        },
        processing: true,
        scrollX: true,
        scrollY: false,
        columns: [
            { data: "name" },
            { data: "email" },
            { data: "role" },
            { data: "access" },
            {
                data: null, render: function (data, type, row) {
                    return `
                        <div class="d-flex align-items-center">
                            <span data-toggle="tooltip" data-bs-original-title="EDIT" data-bs-toggle="modal" data-bs-target="#" class="me-1 me-md-2 d-inline-block" role="button" data-bs-toggle="modal" data-bs-target="#edit-owner-modal">
                                <span class="icon icon-entity-edit m-0"></span>
                            </span>
                            <span data-toggle="tooltip" data-bs-original-title="DELETE" data-bs-toggle="modal" data-bs-target="#" class="me-1 me-md-2 d-inline-block" role="button" data-bs-toggle="modal" data-bs-target="#delete-modal">
                                <span class="icon icon-entity-delete m-0"></span>
                            </span>
                        </div>
                    `
                }
            }
        ],
        order: [[0, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    }

    $("#group-usersAccess-table").DataTable(tableOptions);

    const table2Options = {
        ajax: {
            url: "data5.json",
            dataSrc: 'group_userExternal_data'
        },
        processing: true,
        scrollX: true,
        scrollY: false,
        columns: [
            { data: "name" },
            { data: "email" },
            { data: "access" },
            {
                data: null, render: function (data, type, row) {
                    return `
                        <div class="d-flex align-items-center">
                            <span data-toggle="tooltip" data-bs-original-title="DELETE" data-bs-toggle="modal" data-bs-target="#" class="me-1 me-md-2 d-inline-block" role="button" data-bs-toggle="modal" data-bs-target="#delete-modal">
                                <span class="icon icon-entity-delete m-0"></span>
                            </span>
                        </div>
                    `
                }
            }
        ],
        order: [[0, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    }

    $("#group-externalUser-table").DataTable(table2Options);


})