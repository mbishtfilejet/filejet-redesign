//adjusting table on tabs change
$(document).on('shown.bs.tab', function () {

  const SOPTables = ["sopNotification-table", "registeredAgent-table"]

  SOPTables.forEach((tableId) => $(`#${tableId}`).DataTable().columns.adjust())

});

// adding sliding effect on tabs

$(document).ready(function () {

  //tab change event
  $('.registeredAgent_tablist .nav-link').on('shown.bs.tab', function () {
    highlightTabs($('.registeredAgent_tablist'));
  });

  // handle resize
  $(window).on('resize', function () {
    highlightTabs($('.registeredAgent_tablist'));
  });

  highlightTabs($('.registeredAgent_tablist'));
})

// dashboard - registered agent start
$(document).ready(function () {
  $("#sopNotification-table").DataTable({
    ajax: {
      url: "data5.json",
      dataSrc: 'sop_registered_agent_data'
    },
    columns: [
      { data: "group" },
      { data: "entity_name" },
      { data: "jurisdiction" },
      { data: "received_by" },
      { data: "acknowledged_by" },
      { data: "responed_by" },
      { data: "case_number" },
      { data: "check_number" },
      {
        data: null, render: function (data, type, row) {
          return `<div class="d-flex align-items-center gap-2">
          ${row.acknowledged_by ?
              '<button data-bs-toggle="modal" data-bs-target="#sopDocView-modal" class="btn btn-secondary p-2 m-0">View</button>'
              :
              '<button data-bs-toggle="modal" data-bs-target="#sopAcknowledge-modal" class="btn btn-secondary btn-acknowledge p-2 m-0">Acknowledge</button>'}
              <span class="icon icon-download-dark icon-sm m-0 flex-shrink-0"></span>
          </div>
          `;
        }
      }
    ],
    scrollX: true,
    order: [[3, "desc"]],
    lengthChange: false,  // Removed pagination
    paging: false,  // Disable pagination
    info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  });

  $('#registeredAgent-table').DataTable({
    ajax: {
      url: "data5.json",
      dataSrc: 'sop_registered_agent_data'
    },
    columns: [
      { data: "group" },
      { data: "entity_name" },
      { data: "jurisdiction" },
      {
        data: "registered_agent", render: function (data, type, row) {
          return `
        <div class="d-flex align-items-center gap-1">
          ${data.toLowerCase() === "filejet" ? '<span class="icon icon-orange-white-tick m-0"></span>' : ""} 
          <span class="fw-bold">${data}</span>
        </div>
        `
        }
      },
      {
        data: null, render: function (data, type, row) {
          if (row.registered_agent.toLowerCase() === "filejet") return null;
          return `<button data-bs-toggle="modal" data-bs-target="#appointRA" type="button" class="btn  btn-secondary rounded-1 px-3 py-2 m-0 text-white">Appoint Filejet As RA</button>`
        }
      }
    ],
    scrollX: true,
    order: [[0, "asc"]],
    lengthChange: false,  // Removed pagination
    paging: false,  // Disable pagination
    info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  });
});


$(function () {
  $('input[name="daterange"]').daterangepicker({
    ranges: {
      'Today': [moment(), moment()],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      '3 Months': [moment().subtract(2, 'month').startOf('month'), moment().endOf('month')],
      '6 Months': [moment().subtract(5, 'month').startOf('month'), moment().endOf('month')],
      '1 Year': [moment().subtract(11, 'month').startOf('month'), moment().endOf('month')]
    },
    opens: 'center',
    linkedCalendars: false,
    alwaysShowCalendars: true,
    cancelClass: 'btn-secondary',
    autoUpdateInput: false,
  });

  $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('MMM D, YYYY') + ' - ' + picker.endDate.format('MMM D, YYYY'));
  });
})
