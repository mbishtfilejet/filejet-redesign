
$(document).ready(function () {
    if (!$('.users_tablist').length) return;
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
                    return `<span class="d-inline-block p-2 rounded-2" style="background-color:${row.bgColor};color:${row.textColor};">${data}</span>`;
                }
            },
            {
                data: "status", render: function (data, type, row) {
                    return `
                    <span class="d-inline-block p-1 px-2 rounded-pill badge-user-${data.toLowerCase()}">${data}</span>
                    `;
                }
            },
            { data: "groups" },
            { data: "entities" },
            {
                data: null, render: function (data, type, row) {
                    return `
                        <div class="d-flex align-items-center">
                            <span role="button" tabindex="0"> 
                                <span data-toggle="tooltip" data-bs-toggle="modal" data-bs-target="#EditUserDetails" aria-label="EDIT" data-bs-original-title="EDIT" 
                                    class="icon icon-entity-edit me-1 me-md-2"></span>
                            </span>
                            
                            ${row.role.toLowerCase().includes("admin") ? "" :
                            row.status !== "Invited" ? `<span role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#deactivateUser">
                                    <span data-toggle="tooltip" aria-label="DEACTIVATE" data-bs-original-title="DEACTIVATE" 
                                        class="icon icon-entity-delete me-1 me-md-2"></span> 
                                </span>`:
                                `<span role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#activateUser">
                                    <span data-toggle="tooltip" aria-label="RESEND INVITE" data-bs-original-title="RESEND INVITE" 
                                    class="icon icon-user-invited icon-md me-1 me-md-2"></span> 
                                </span>`
                        }
                        </div>`;
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
                    return `<span class="d-inline-block p-2 rounded-2" style="background-color:${row.bgColor};color:${row.textColor};">${data}</span>`;
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
                            
                            ${row.role.toLowerCase().includes("admin") ? "" : `<span role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#deleteRole">
                                <span data-toggle="tooltip" aria-label="REMOVE" data-bs-original-title="REMOVE" 
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
                // const thead = $(this.api().table().header());

                // prevent duplicates
                // thead.find('.group-row').remove();

                // const columnNames = this.api().table().columns().header().toArray().slice(1).map(th => $(th).attr('column-id'));

                // // add custom row at top
                // thead.append(`
                //     <tr class="group-row odd">
                //         <th>All Groups & Entities</th>
                //         ${columnNames.map(column => `<th>
                //                 <div class="d-flex align-item-center">
                //                     <input data-column="${column}" class="form-check-input green-checkbox allgroup-select row-select ${column === "permissions" ? "ms-4" : "ms-1"}" type="checkbox" id="">
                //                 </div>
                //                 </th>` ).join("")
                //     }

                //     </tr>
                // `);

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
                        <div class="d-flex align-items-start gap-2">
                            <button type="button" class="dt-control ${!row?.entities?.length ? "no-control" : ""} m-0"></button>
                            <div class="d-flex align-items-start gap-2" role="button">
                                <span class="icon icon-folder-thin icon-md flex-shrink-0 m-0"></span>
                                <span class="text-break">${data}</span>
                            </div>
                        </div>
                        `
                    }
                },
                {
                    data: null, render: function (data, type, row) {
                        if (table === "role_2") {
                            return `<div class="d-flex align-item-center"><input data-column="view" data-some-checked="false" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                        }
                        const { view: { checked, someChecked } } = row.rights;
                        return `<div class="d-flex align-item-center"><input data-column="view" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                    }
                },
                {
                    data: null, render: function (data, type, row) {
                        if (table === "role_2") {
                            return `<div class="d-flex align-item-center"><input data-column="edit" data-some-checked="false" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                        }
                        const { edit: { checked, someChecked } } = row.rights;
                        return `<div class="d-flex align-item-center"><input data-column="edit" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                    }
                },
                {
                    data: null, render: function (data, type, row) {
                        if (table === "role_2") {
                            return `<div class="d-flex align-item-center"><input data-column="submit" data-some-checked="false" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                        }
                        const { submit: { checked, someChecked } } = row.rights;
                        return `<div class="d-flex align-item-center"><input data-column="submit" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                    }
                },
                {
                    data: null, render: function (data, type, row) {
                        if (table === "role_2") {
                            return `<div class="d-flex align-item-center"><input data-column="upload" data-some-checked="false" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                        }
                        const { upload: { checked, someChecked } } = row.rights;
                        return `<div class="d-flex align-item-center"><input data-column="upload" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                    }
                },
                {
                    data: null, render: function (data, type, row) {
                        if (table === "role_2") {
                            return `<div class="d-flex align-item-center"><input data-column="download" data-some-checked="false" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                        }
                        const { download: { checked, someChecked } } = row.rights;
                        return `<div class="d-flex align-item-center"><input data-column="download" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                    }
                },
                {
                    data: null, render: function (data, type, row) {
                        if (table === "role_2") {
                            return `<div class="d-flex align-item-center"><input data-column="invoices" data-some-checked="false" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                        }
                        const { invoices: { checked, someChecked } } = row.rights;
                        return `<div class="d-flex align-item-center"><input data-column="invoices" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                    }
                },
                {
                    data: null, render: function (data, type, row) {
                        if (table === "role_2") {
                            return `<div class="d-flex align-item-center"><input data-column="acknowledge" data-some-checked="false" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                        }
                        const { acknowledge: { checked, someChecked } } = row.rights;
                        return `<div class="d-flex align-item-center"><input data-column="acknowledge" ${checked ? "checked" : ""} data-some-checked="${someChecked}" class="form-check-input green-checkbox row-select ms-1" type="checkbox" id=""></div>`;
                    }
                }
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

    const tablesId = [
        {
            id: "#rights-table_1", tableContext: "users"
        },
        {
            id: "#rights-table_2", tableContext: "users"
        },
        {
            id: "#user-rights-table-1", tableContext: "role_1"
        },
        {
            id: "#user-rights-table-2", tableContext: "role_2"
        }
    ]

    tablesId.forEach(value => {
        $(value.id).DataTable(tableAccessOption(value.tableContext))
        multiSelectRowCheckbox($(value.id))
    })

    $(".user-data-table tbody").on("click", "td .dt-control", function () {
        const tr = $(this).closest("tr");

        const table = tr.closest('table');
        const td = $(this).closest('td')
        const dataTable = table.DataTable();
        const row = dataTable.row(tr);
        const isCheckboxDisabled = tr.hasClass('check-disabled')

        const cacheCheckBox = table?.data('cacheCheckBox');

        const columnNames = dataTable.columns().header().toArray().slice(1).map(th => $(th).attr('column-id'));

        const rowId = row.data().id;

        if (tr.hasClass("expanded-row")) {
            table.find(`tr.expanded-content[data-parent="${rowId}"]`).remove();
            tr.removeClass("expanded-row");
        } else {
            let expandedRows = formatExpandedRows(row.data(), columnNames, rowId, tr, cacheCheckBox, isCheckboxDisabled);
            tr.after(expandedRows);
            tr.addClass("expanded-row");
        }
        dataTable.columns.adjust();
    });

    function formatExpandedRows(data, columnNames, rowId, row, cache, isCheckboxDisabled) {
        return data.entities.map((value, index) => `
                <tr class="expanded-content" data-parent="${rowId}">
                    <td>
                        <div class="ms-4 d-flex align-items-start gap-2">
                            <span class="icon icon-entity-main icon-smd flex-shrink-0 m-0 mt-1"></span>
                            <span class="text-break">${value}</span>
                        </div>
                    </td>
                    ${columnNames.map(column => `<td data-value="${value}"> 
                        <div class="d-flex align-item-center"><input ${isCheckboxDisabled ? 'disabled' : ''} data-column="${column}" class="form-check-input row-select light-green-checkbox ${column === "permissions" ? "ms-4" : "ms-1"}" type="checkbox" ${row.find(`.row-select[data-column="${column}"]`).is(":checked") || cache.getChildValue(rowId, column, value) ? "checked" : ""} id=""></div>
                    </td>`).join("")
            }
                </tr>
            `).join("");
    }


    $(`.customSelect2`).each(function () {
        const modal = $(this).closest('.modal')
        const options = {
            placeholder: $(this).find('option[value=""]').text().trim()
        }

        if (modal.length) {
            options.dropdownParent = modal
        } else {
            options.dropdownParent = $(this).closest('.custom-dropdown')
        }
        $(this).select2(options);

        if ($(this).hasClass('roles-select')) {
            setTimeout(() => {
                toggleTable(this);
            }, 10)
        }
    });

    $('.customSelect2').on('select2:open', function () {
        // Finds the search field within the opened dropdown and sets its placeholder
        $('.select2-search__field').attr('placeholder', 'Search...');
    });

    $('.customSelect2.roles-select').on('select2:select', function () {
        toggleTable(this);
    });

    function toggleTable(select) {
        const selectedValue = $(select).val()?.trim();

        if (!selectedValue) return;

        const accessSection = $(select).closest('.modal').find('.access-table-section');

        if (!accessSection) return;

        if (selectedValue === "None") {
            $('.access-table-section').fadeOut(100).addClass('d-none');
            return;
        }

        accessSection.removeClass('d-none').hide().fadeIn(100);
        const userRightsTable = accessSection.find('.user-data-table');

        if (!userRightsTable) return;

        const checkBoxtobeDisabled = userRightsTable.closest('.userAccessTable').find('input[type=checkbox]');

        if (selectedValue === "Custom User") {
            checkBoxtobeDisabled.prop('disabled', false)
            userRightsTable.find('tr').removeClass('check-disabled')
        } else {
            checkBoxtobeDisabled.prop('disabled', true)
            userRightsTable.find('tr').addClass('check-disabled')
        }
        userRightsTable.DataTable().columns.adjust();
    }


})


$(document).on('shown.bs.modal', '.modal', function () {
    $(this).find('.user-data-table').each(function () {
        $(this).DataTable().columns.adjust();
    });
});


//for billing js

$(function () {
    const tableOptions = {
        ajax: {
            url: "../data5.json",
            dataSrc: 'subscriptions_data',
        },
        scrollX: true,
        scrollY: false,
        columns: [
            {
                data: null, render: function (data, type, row) {
                    return `<input data-column="subsCheck" class="d-flex form-check-input row-select" type="checkbox" value="${row?.id}">`;
                }
            },
            { data: "next_billing_period" },
            { data: "group_name" },
            { data: "entity_name" },
            { data: "services" },
            {
                data: "total", render: function (data) {
                    return formatCurrency(data)
                }
            },
            {
                data: "payment_method", render: function (data, type, row) {
                    return `
                    <div class="d-flex align-items-center">
                        <span>${data}</span>
                        ${row?.verified ? '' : '<span data-toggle="tooltip" aria-label="EXPIRED" data-bs-original-title="EXPIRED" class="icon icon-error icon-sm ms-1 m-0 flex-shrink-0"></span>'}
                    </div>                    
                    `;
                }
            },
            {
                data: null, render: function (data, type, row) {
                    return `
                    <div class="d-flex align-items-center">
                            <span role="button" tabindex="0"> 
                                <span data-toggle="tooltip" aria-label="EDIT" data-bs-original-title="EDIT" data-bs-toggle="modal" data-bs-target="#"
                                    class="icon icon-entity-edit me-1 me-md-2"></span>
                            </span>
                            <span role="button" tabindex="0">
                                <span data-toggle="tooltip" aria-label="DELETE" data-bs-original-title="DELETE" data-bs-toggle="modal" data-bs-target="#"
                                    class="icon icon-entity-delete me-1 me-md-2"></span> 
                            </span>
                    </div>
                    `
                }
            }
        ],
        order: [[1, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    }

    $('#subscription-table').DataTable(tableOptions)

    multiSelectRowCheckbox($('#subscription-table'))


    const tableOptions_1 = {
        ajax: {
            url: "../data5.json",
            dataSrc: 'payment_method_data',
        },
        scrollX: true,
        scrollY: false,
        columns: [
            {
                data: null, render: function (data, type, row) {
                    return `<input data-column="payMtdCheck" class="d-flex form-check-input row-select" type="checkbox" value="${row?.id}">`;
                }
            },
            { data: "nickname" },
            { data: "account" },
            {
                data: "status", render: function (data, type, row) {
                    return `<span class="badge badge-${row.status.label} badge-text-dark">${row.status.value}</span>`
                }
            },
            {
                data: "available_to", render: function (data, type, row) {
                    return data + `${row.isDefault ? " (Default)" : ''}`;
                }
            },
            {
                data: null, render: function (data, type, row) {
                    if (row.account === "Terms") return '';

                    return `
                    <div class="d-flex align-items-center">
                            <span role="button" tabindex="0"> 
                                <span data-toggle="tooltip" aria-label="EDIT" data-bs-original-title="EDIT" data-bs-toggle="modal" data-bs-target="#editPaymentMethod"
                                    class="icon icon-entity-edit me-1 me-md-2"></span>
                            </span>
                            <span role="button" tabindex="0">
                                <span data-toggle="tooltip" aria-label="DELETE" data-bs-original-title="DELETE" data-bs-toggle="modal" data-bs-target="#deletePaymentMethod"
                                    class="icon icon-entity-delete me-1 me-md-2"></span> 
                            </span>
                    </div>
                    `
                }
            }
        ],
        order: [[1, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    }

    $('#payment-methods-table').DataTable(tableOptions_1)
    multiSelectRowCheckbox($('#payment-methods-table'))

})

