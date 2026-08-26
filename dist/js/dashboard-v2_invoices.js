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
        language: {
            processing: '<div  role="status"> </div>',
            emptyTable: '<p class="emptytabledata">No Records Available</p>'
        },
        processing: true,
        scrollX: true,
        scrollY: false,
        columns: [
            { data: "group_name", width: "180px" },
            { data: "entity_name", width: "180px" },
            { data: "store_no", className: "min-width-90" },
            { data: "orderId", width: "80px" },
            { data: "external_reference_no", className: "min-width-100" },
            { data: "date", width: "80px" },
            { data: "age", width: "40px" },
            {
                data: "amount", render: function (data) {
                    return formatCurrency(data)
                },
                className: "min-width-70"
            },
            {
                data: "due", render: function (data) {
                    return formatCurrency(data)
                },
                className: "min-width-70"
            },
            {
                data: null, render: function (data, type, row) {
                    return `
                    <div class="d-flex align-items-center justify-content-end me-1">
                        ${row.due > 0 ? '<span class="icon icon-money-red cursor-pointer" data-toggle="tooltip" title="Complete payment" data-bs-toggle="modal" data-bs-target="#payBill_modal"></span>' : ''}
                        <span class="icon icon-pdf-black me-0 cursor-pointer" data-toggle="tooltip" title="VIEW INVOICE" data-bs-toggle="modal" data-bs-target="#invoiceModal"></span>
                    </div>
                `
                },
                width: "55px"
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
        language: {
            processing: '<div  role="status"> </div>',
            emptyTable: '<p class="emptytabledata">No Records Available</p>'
        },
        processing: true,
        scrollX: true,
        scrollY: false,
        columns: [
            { data: "orderId", width: "70px" },
            { data: "external_reference_no", className: "min-width-90" },
            { data: "entity_name", width: "180px" },
            { data: "store_no", className: "min-width-90" },
            { data: "state", width: "50px" },
            {
                data: "total_amount", render: function (data) {
                    return formatCurrency(data)
                },
                class: "min-width-70"
            },
            {
                data: "status", render: function (data) {
                    return `<span class="${data?.toLowerCase() === "pending" ? "text-danger" : ""}">${data}</span>`
                },
                width: "80px"
            },
            { data: "orderDate", width: "80px" },
            { data: "datePaid", width: "80px" },
            { data: "orderStatus", width: "90px" },
            {
                data: null, render: function (data, type, row) {
                    return `
                    <div class="d-flex align-items-center justify-content-end me-1">
                        ${["pending", "in progress"].includes(row.status?.toLowerCase()) ? '<span class="icon icon-money-red cursor-pointer" data-toggle="tooltip" title="Complete payment" data-bs-toggle="modal" data-bs-target="#payBill_modal"></span>' : ''}
                        <span class="icon icon-pdf-black me-0 cursor-pointer" data-toggle="tooltip" title="VIEW INVOICE" data-bs-toggle="modal" data-bs-target="#invoiceModal"></span>
                    </div>
                `
                },
                width: "55px"
            }
        ],
        order: [[0, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    }

    $('#invoices-payhistory-table').DataTable(options)


    const anotheroptions = {
        ajax: {
            url: "data5.json",
            dataSrc: 'payment_history_data'
        },
        language: {
            processing: '<div  role="status"> </div>',
            emptyTable: '<p class="emptytabledata">No Records Available</p>'
        },
        processing: true,
        scrollX: true,
        scrollY: false,
        columns: [
            { data: "orderId", width: "70px" },
            { data: "external_reference_no", className: "min-width-90" },
            { data: "entity_name", width: "180px" },
            { data: "location_#", className: "min-width-90" },
            { data: "payment_date", width: "90px" },
            { data: "payment_type", width: "90px" },
            { data: "payment_method", width: "160px" },
            {
                data: "paid_amount", render: function (data) {
                    return formatCurrency(data)
                },
                class: "min-width-70"
            },
            {
                data: null, render: function (data, type, row) {
                    return `
                    <div class="d-flex align-items-center">
                        <span class="icon icon-pdf-black me-0 cursor-pointer" data-toggle="tooltip" title="VIEW INVOICE" data-bs-toggle="modal" data-bs-target="#invoiceModal"></span>
                    </div>
                `
                },
                width: "55px"
            }
        ],
        order: [[0, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    }

    $('#invoices-payhistory-table_1').DataTable(anotheroptions)
})


$(document).on('shown.bs.tab', function (e) {
    const currentTab = $(e.target);
    const tableKey = currentTab.data('table-key');
    $(`#${tableKey}`).DataTable().columns.adjust();
});


$(function () {
    $('.history-datepicker').each(
        function () {
            const element = $(this);
            const isDefaultDateNeeded = element.hasClass('default-90Days');

            const options = {
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
                autoUpdateInput: false
            }

            if (isDefaultDateNeeded) {
                options.startDate = moment().subtract(89, 'days');
                options.endDate = moment();
            }

            element.daterangepicker(options)

            if (isDefaultDateNeeded) {
                element.val(options.startDate.format('MMM D, YYYY') + ' - ' + options.endDate.format('MMM D, YYYY'));
            } else {
                element.val('')
            }

            element.on('apply.daterangepicker', function (ev, picker) {
                $(this).val(picker.startDate.format('MMM D, YYYY') + ' - ' + picker.endDate.format('MMM D, YYYY'));
            });

            element.on('cancel.daterangepicker', function (ev, picker) {
                let hasValue = $(this).val();

                if (!hasValue) {
                    $(this).val('');
                    return;
                }
            });
        }
    );
})