$(function () {

    function formatCurrency(amount, locale = 'en-US', currency = 'USD') {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(amount)
    }

    const tableOptions = {
        ajax: {
            url: "data5.json",
            dataSrc: 'invoice_history_data'
        },
        processing: true,
        scrollX: true,
        scrollY: false,
        columns: [
            { data: "group_name" },
            { data: "entity_name" },
            { data: "store_no" },
            { data: "orderId" },
            { data: "external_reference_no" },
            { data: "date" },
            {
                data: "amount", render: function (data) {
                    return formatCurrency(data)
                }
            },
            {
                data: "due", render: function (data) {
                    return formatCurrency(data)
                }
            },
            {
                data: null, render: function () {
                    return `
                    <button data-bs-toggle="modal" data-bs-target="#" aria-label="View Invoice" 
                        type="button" class="btn btn-secondary rounded-1 px-3 py-2 m-0 text-white">
                        View Invoice
                    </button>
                `
                }
            }
        ],
        order: [[0, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    }
    $('#invoices-history-table').DataTable(tableOptions)

    const options = {
        ajax: {
            url: "data5.json",
            dataSrc: 'invoice_history_data'
        },
        processing: true,
        scrollX: true,
        scrollY: false,
        columns: [
            { data: "orderId" },
            { data: "external_reference_no" },
            { data: "entity_name" },
            { data: "state" },
            {
                data: "amount", render: function (data) {
                    return formatCurrency(data)
                }
            },
            { data: "status" },
            { data: "orderDate" },
            { data: "datePaid" },
            { data: "orderStatus" },
            {
                data: null, render: function () {
                    return `
                    <button data-bs-toggle="modal" data-bs-target="#" aria-label="View Invoice" 
                        type="button" class="btn btn-secondary rounded-1 px-3 py-2 m-0 text-white">
                        View Invoice
                    </button>
                `
                }
            }
        ],
        order: [[0, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    }

    $('#invoices-payhistory-table').DataTable(options)
})


$(document).on('shown.bs.tab', function (e) {
    const currentTab = $(e.target);
    const tableKey = currentTab.data('table-key');
    $(`#${tableKey}`).DataTable().columns.adjust();
});