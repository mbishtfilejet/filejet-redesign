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
                data: null, render: function (data, type, row) {
                    return `
                    <div class="d-flex align-items-center justify-content-end me-1">
                        ${row.due > 0 ? '<span class="icon icon-money-red cursor-pointer" data-toggle="tooltip" title="Complete payment" data-bs-toggle="modal" data-bs-target="#payBill_modal"></span>' : ''}
                        <span class="icon icon-pdf-black me-0 cursor-pointer" data-toggle="tooltip" title="VIEW INVOICE" data-bs-toggle="modal" data-bs-target="#invoiceModal"></span>
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
            { data: "store_no" },
            { data: "state" },
            {
                data: "amount_to_be_paid", render: function (data) {
                    return formatCurrency(data)
                }
            },
            {
                data: "status", render: function (data) {
                    return `<span class="${data?.toLowerCase() === "pending" ? "text-danger" : ""}">${data}</span>`
                }
            },
            { data: "orderDate" },
            { data: "datePaid" },
            { data: "orderStatus" },
            {
                data: null, render: function (data, type, row) {
                    return `
                    <div class="d-flex align-items-center justify-content-end me-1">
                        ${row.status?.toLowerCase() === "pending" ? '<span class="icon icon-money-red cursor-pointer" data-toggle="tooltip" title="Complete payment" data-bs-toggle="modal" data-bs-target="#payBill_modal"></span>' : ''}
                        <span class="icon icon-pdf-black me-0 cursor-pointer" data-toggle="tooltip" title="VIEW INVOICE" data-bs-toggle="modal" data-bs-target="#invoiceModal"></span>
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

    $('#invoices-payhistory-table').DataTable(options)
})


$(document).on('shown.bs.tab', function (e) {
    const currentTab = $(e.target);
    const tableKey = currentTab.data('table-key');
    $(`#${tableKey}`).DataTable().columns.adjust();
});


$(function () {
    $('input[name="daterange"]').daterangepicker({
        ranges: {
            'Today': [moment(), moment()],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'Last 90 Days': [moment().subtract(89, 'days'), moment()],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            '3 Months': [moment().subtract(2, 'month').startOf('month'), moment().endOf('month')],
            '6 Months': [moment().subtract(5, 'month').startOf('month'), moment().endOf('month')],
            '1 Year': [moment().subtract(11, 'month').startOf('month'), moment().endOf('month')]
        },
        opens: 'center',
        linkedCalendars: false,
        alwaysShowCalendars: true,
        cancelClass: 'btn-secondary',
        locale: {
            format: 'MMM D, YYYY',
        },
        startDate: moment().subtract(89, 'days'),
        endDate: moment(),
    });

    // $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
    //     if (picker.chosenLabel !== "Custom Range") {
    //         $(this).val(picker.chosenLabel)
    //     }
    // });
    // $('input[name="daterange"]').val('Last 90 Days');
})