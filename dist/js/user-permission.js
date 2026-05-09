
$(document).ready(function () {
    $(".users_tablist .nav-link").on("shown.bs.tab", function () {
        highlightTabs($(".users_tablist"));
    });

    // handle resize
    $(window).on("resize", function () {
        highlightTabs($(".users_tablist"));
    });

    highlightTabs($(".users_tablist"));
})


// users listing table

$(document).ready(function () {
    const tableOptions = {
        ajax: {
            url: "../data5.json",
            dataSrc: 'account_users_data',
        },
        scrollX: true,
        scrollY: false,
        columns: [
            { data: "username" },
            { data: "email" },
            { data: "phone" },
            {
                data: "role", render: function (data, type, row) {
                    return `<span class="d-inline-block p-2 rounded-2" style="background-color:${row.bgColor};">${data}</span>`;
                }
            },
            { data: "status" },
            { data: "groups" },
            { data: "entities" },
            {
                data: null, render: function (data, type, row) {
                    return `
                        <div class="d-flex align-items-center">
                            <span role="button" tabindex="0"> 
                                <span data-toggle="tooltip" data-bs-toggle="modal" data-bs-target="#EditUser" aria-label="EDIT" data-bs-original-title="EDIT" 
                                    class="icon icon-entity-edit me-1 me-md-2"></span>
                            </span>
                            
                            ${row.role.toLowerCase().includes("admin") ? "" : `<span role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#">
                                <span data-toggle="tooltip" aria-label="DELETE" data-bs-original-title="DELETE" 
                                    class="icon icon-entity-delete me-1 me-md-2"></span> 
                            </span>`}
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

    $('#users-listing-table').DataTable(tableOptions);


    const tableOptions_1 = {
        ajax: {
            url: "../data5.json",
            dataSrc: 'account_users_data',
        },
        scrollX: true,
        scrollY: false,
        columns: [
            {
                data: "role", render: function (data, type, row) {
                    return `<span class="d-inline-block p-2 rounded-2" style="background-color:${row.bgColor};">${data}</span>`;
                }
            },
            { data: "groups" },
            { data: "entities" },
            {
                data: null, render: function (data, type, row) {
                    return `
                        <div class="d-flex align-items-center">
                            <span role="button" tabindex="0"> 
                                <span data-toggle="tooltip" aria-label="EDIT" data-bs-original-title="EDIT" data-bs-toggle="modal" data-bs-target="#EditRole"
                                    class="icon icon-entity-edit me-1 me-md-2"></span>
                            </span>
                            
                            ${row.role.toLowerCase().includes("admin") ? "" : `<span role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#">
                                <span data-toggle="tooltip" aria-label="DELETE" data-bs-original-title="DELETE" 
                                    class="icon icon-entity-delete me-1 me-md-2"></span> 
                            </span>`}
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


    $('#roles-listing-table').DataTable(tableOptions_1)
})




$(document).on('shown.bs.tab', function (e) {
    const currentTab = $(e.target);
    const tableKey = currentTab.data('table-key');
    $(`#${tableKey}`).DataTable().columns.adjust();
});

$(document).on('shown.bs.modal', function () {
    $('.user-data-table').DataTable().columns.adjust();
})


$(document).ready(function () {

    const tableAccessOption = (table) => {
        return {
            ajax: {
                url: "../data5.json",
                dataSrc: 'group_entities_data',
            },
            createdRow: function (row, data, dataIndex) {
                $(row).attr('data-id', data.id).addClass("parent");
            },
            drawCallback: function () {
                const tbody = $(this.api().table().body());
                const thead = $(this.api().table().header());

                // prevent duplicates
                thead.find('.group-row').remove();

                const columnNames = this.api().table().columns().header().toArray().slice(1).map(th => $(th).attr('column-id'));

                // add custom row at top
                thead.append(`
                    <tr class="group-row odd">
                        <th>All Groups & Entities</th>
                        ${columnNames.map(column => `<th>
                                <div class="d-flex align-item-center">
                                    <input data-column="${column}" class="form-check-input green-checkbox allgroup-select row-select ${column === "permissions" ? "ms-4" : "ms-1"}" type="checkbox" id="">
                                </div>
                                </th>` ).join("")
                    }
                        
                    </tr>
                `);

                const realRows = tbody.find('tr');
                realRows.removeClass('odd even');
                realRows.each(function (index) {
                    $(this).addClass(
                        index % 2 === 0 ? 'even' : 'odd'
                    );
                });
            },
            columns: [
                {
                    data: "group_name", render: function (data, type, row) {
                        return `
                        <div class="d-flex align-items-center gap-2">
                            <button type="button" class="dt-control ${!row?.entities?.length ? "no-control" : ""} m-0"></button>
                            <div class="d-flex align-items-center gap-2" role="button">
                                <span class="icon icon-folder-thin icon-md flex-shrink-0 m-0"></span>
                                <span class="text-break mt-1">${data}</span>
                            </div>
                        </div>
                        `
                    }
                },
                ...(
                    table === "role" ?
                        [{
                            data: null, render: function () {
                                return `<div class="d-flex align-item-center"><input data-column="permissions" class="form-check-input green-checkbox row-select ms-4" type="checkbox" id=""></div>`;
                            }
                        }] : table === "users" ? [
                            {
                                data: null, render: function (data, type, row) {
                                    const { view: { checked, someChecked } } = row.rights;
                                    return `<div class="d-flex align-item-center"><input data-column="view" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                                }
                            },
                            {
                                data: null, render: function (data, type, row) {
                                    const { edit: { checked, someChecked } } = row.rights;
                                    return `<div class="d-flex align-item-center"><input data-column="edit" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                                }
                            },
                            {
                                data: null, render: function (data, type, row) {
                                    const { submit: { checked, someChecked } } = row.rights;
                                    return `<div class="d-flex align-item-center"><input data-column="submit" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                                }
                            },
                            {
                                data: null, render: function (data, type, row) {
                                    const { upload: { checked, someChecked } } = row.rights;
                                    return `<div class="d-flex align-item-center"><input data-column="upload" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                                }
                            },
                            {
                                data: null, render: function (data, type, row) {
                                    const { download: { checked, someChecked } } = row.rights;
                                    return `<div class="d-flex align-item-center"><input data-column="download" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                                }
                            },
                            {
                                data: null, render: function (data, type, row) {
                                    const { invoices: { checked, someChecked } } = row.rights;
                                    return `<div class="d-flex align-item-center"><input data-column="invoices" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                                }
                            },
                            {
                                data: null, render: function (data, type, row) {
                                    const { acknowledge: { checked, someChecked } } = row.rights;
                                    return `<div class="d-flex align-item-center"><input data-column="acknowledge" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                                }
                            }
                        ] : [])
            ],
            lengthChange: false,
            info: false,
            order: false,
            scrollY: "400px",
            scrollCollapse: true,
            scrollX: false,
            paging: false,
        }
    }



    $('#user-access-table').DataTable(tableAccessOption("role"))
    multiSelectRowPermission($('#user-access-table'))

    $('#user-access-table-1').DataTable(tableAccessOption("role"))
    multiSelectRowPermission($('#user-access-table-1'))

    $('#user-rights-table').DataTable(tableAccessOption("users"));
    multiSelectRowPermission($('#user-rights-table'))


    $(".user-data-table tbody").on("click", "td .dt-control", function () {
        const tr = $(this).closest("tr");

        const table = tr.closest('table');
        const td = $(this).closest('td')
        const dataTable = table.DataTable();
        const row = dataTable.row(tr);

        const cacheCheckBox = table?.data('cacheCheckBox');

        const columnNames = dataTable.columns().header().toArray().slice(1).map(th => $(th).attr('column-id'));

        const rowId = row.data().id;

        if (tr.hasClass("expanded-row")) {
            table.find(`tr.expanded-content[data-parent="${rowId}"]`).remove();
            tr.removeClass("expanded-row");
        } else {
            let expandedRows = formatExpandedRows(row.data(), columnNames, rowId, tr, cacheCheckBox);
            tr.after(expandedRows);
            tr.addClass("expanded-row");
        }
        $('.user-data-table').DataTable().columns.adjust();
    });

    function formatExpandedRows(data, columnNames, rowId, row, cache) {
        return data.entities.map((value, index) => `
                <tr class="expanded-content" data-parent="${rowId}">
                    <td>
                        <div class="ms-4 d-flex align-items-center gap-2">
                            <span class="icon icon-entity-main icon-md flex-shrink-0 m-0"></span>
                            <span class="text-break mt-1">${value}</span>
                        </div>
                    </td>
                    ${columnNames.map(column => `<td data-value="${value}"> 
                        <div class="d-flex align-item-center"><input data-column="${column}" class="form-check-input row-select light-green-checkbox ${column === "permissions" ? "ms-4" : "ms-1"}" type="checkbox" ${row.find(`.row-select[data-column="${column}"]`).is(":checked") || cache.getChildValue(rowId, column, value) ? "checked" : ""} id=""></div>
                    </td>`).join("")
            }
                </tr>
            `).join("");
    }


    $(`.customSelect2`).each(function () {
        const parent = $(this).closest('.custom-dropdown')
        $(this).select2({
            dropdownParent: parent,
            placeholder: $(this).find('option[value=""]').text().trim()
        })
    });

    $('.customSelect2').on('select2:open', function () {
        // Finds the search field within the opened dropdown and sets its placeholder
        $('.select2-search__field').attr('placeholder', 'Search...');
    });

    $('.customSelect2').on('select2:select', function () {
        const selectedValue = $(this).val().trim();

        if (selectedValue === "None") {
            $('.access-table-section').fadeOut(100).addBack('d-none');
            return;
        }

        if (selectedValue === "Customer User") {
            $('.access-table-section').removeClass('d-none').hide().fadeIn(100);
            $('.access-table-section table input[type="checkbox"]').prop('disabled', false)
            $('#user-rights-table').find('tr').remove('check-disabled')
        } else {
            $('.access-table-section').removeClass('d-none').hide().fadeIn(100);
            $('.access-table-section table input[type="checkbox"]').prop('disabled', true)
            $('#user-rights-table').find('tr').add('check-disabled')
        }
        $('#user-rights-table').DataTable().columns.adjust();
    });


})

