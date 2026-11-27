$(function () {
    // integration log table
    $('#integration-log-table').DataTable({
        ajax: {
            url: "../data5.json",
            dataSrc: 'integration_log_data'
        },
        language: {
            processing: '<div role="status"> </div>',
            emptyTable: '<p class="emptytabledata">No Records Available</p>'
        },
        scrollX: true,
        scrollY: false,
        columns: [
            { data: "date" },
            { data: "time" },
            { data: "user_name" },
            { data: "action" },
            {
                data: "status", render: function (data, type, row) {
                    return `<span class="d-inline-flex rounded-2 p-2 badge-${row.status.class}">${row.status.label}</span>`;
                }
            },
            { data: "details" }
        ],
        order: [[0, "desc"]],
        autoWidth: false,
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info
    });


    $('#in-agentic-tab').on('shown.bs.tab', function () {
        $('#integration-log-table').DataTable().columns.adjust();
    });

    const dateRangeInputs = $('.integrationTabsContent input[name="daterange"]');

    dateRangeInputs.each(function () {
        let el = $(this);
        el.daterangepicker({
            ranges: {
                'Today': [moment(), moment()],
                'Last 24 Hours': [moment().subtract(24, 'hours'), moment()],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            },
            startDate: moment().subtract(24, 'hours'),
            endDate: moment(),
            drops: 'auto',
            autoUpdateInput: false,
        })
    });

    dateRangeInputs.on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.chosenLabel === picker.locale.customRangeLabel
            ? picker.startDate.format('MMM D, YYYY') + ' - ' + picker.endDate.format('MMM D, YYYY')
            : picker.chosenLabel);
        console.log(picker.chosenLabel)
    });


    const badge = data => `<span class="d-inline-flex rounded-2 p-2 badge-${data.class}">${data.label}</span>`;

    // SharePoint / Google Drive / Webhook / API tables
    function initSyncLogTable(tableId, dataKey, tabId, columns = [
        { data: "date_time" },
        { data: "status", render: badge },
        { data: "message" }
    ]) {
        $(tableId).DataTable({
            ajax: {
                url: "../data5.json",
                dataSrc: dataKey
            },
            language: {
                processing: '<div role="status"> </div>',
                emptyTable: '<p class="emptytabledata">No Records Available</p>'
            },
            scrollX: true,
            scrollY: "32vh",
            scrollCollapse: true,
            columns: columns,
            order: [], // keep JSON order (newest first)
            autoWidth: false,
            lengthChange: false,
            paging: false,
            info: false,
        });

        // table is built inside a hidden tab, so re-measure the columns once the tab is shown
        $(tabId).on('shown.bs.tab', function () {
            $(tableId).DataTable().columns.adjust();
        });
    }

    initSyncLogTable('#sharepoint-log-table', 'sharepoint_log_data', '#in-sharepoint-tab');

    initSyncLogTable('#googleDrive-log-table', 'google_drive_log_data', '#in-googleDrive-tab')

    initSyncLogTable('#webhook-log-table', 'webhook_log_data', '#in-webhook-tab');


    initSyncLogTable('#api-keys-table', 'api_keys_data', '#in-api-tab', [
        { data: "key_name" },
        { data: "type", render: badge },
        { data: "created_by" },
        { data: "date_created" },
        { data: "last_used" },
        {
            data: null, render: function () {
                return `
                    <span role="button" tabindex="0">
                        <span data-toggle="tooltip" aria-label="EDIT" data-bs-original-title="EDIT" data-bs-toggle="modal"
                            data-bs-target="#editApiKey" class="icon icon-entity-edit"></span>
                    </span>`;
            }
        }
    ]);

    initSyncLogTable('#api-log-table', 'api_log_data', '#in-api-tab', [
        { data: "date_time" },
        { data: "key_name" },
        { data: "type", render: badge },
        { data: "action" },
        { data: "status", render: badge },
        { data: "details" }
    ]);


});