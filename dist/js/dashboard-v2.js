// google chart script start
// Load Google Charts
google.charts.load("current", { packages: ["corechart"] });

// Draw the charts
google.charts.setOnLoadCallback(() => {
  drawDonutChart(
    "donut_chart",
    [
      ["Task", "Count", { role: "tooltip" }],
      ["Overdue", 50, "50"],
      ["Upcoming", 30, "30"],
      ["Future Tasks", 25, "25"],
    ],
    ["#E73B18", "#3498db", "#00BA70"]
  );

  drawDonutChart(
    "donut_chart_2",
    [
      ["Status", "Count", { role: "tooltip" }],
      ["In Good Standing", 15, "15"],
      ["Not in Good Standing", 8, "8"],
      ["Inactive", 3, "3"],
      ["Dissolved", 2, "2"],
      ["Archived", 1, "1"],
    ],
    ["#00BA70", "#BB0F23", "#8690A0", "#1080F8", "#1A4D9E"]
  );

  drawDonutChart(
    "donut_chart_3",
    [
      ["Task", "Count", { role: "tooltip" }],
      ["In Process", 5, "5"],
      ["Sent", 5, "5"],
      ["Completed", 5, "5"],
    ],
    ["#4744D1", "#3498db", "#00BA70"]
  );
});

// Reusable function to draw a donut chart
function drawDonutChart(containerId, chartData, colors) {
  // Convert data to DataTable format
  var data = google.visualization.arrayToDataTable(chartData);

  // Chart options
  var options = {
    pieHole: 0.5, // Donut hole size
    colors: colors, // Custom colors
    legend: "none", // Disable legend
    pieSliceText: "none", // Hide text on slices
    backgroundColor: "transparent", // Transparent background
    chartArea: { width: "90%", height: "90%", backgroundColor: "none" }, // Adjust chart area
    pieSliceBorderColor: "transparent",
  };

  // Create and draw the chart
  var chart = new google.visualization.PieChart(
    document.getElementById(containerId)
  );
  chart.draw(data, options);
}
// google chart script end



// select2 dropdown filter start
$(document).ready(function () {
  // Initialize Select2 for Group
  initializeSelect2("#Group-Select", "Group");

  // Initialize Select2 for open task
  initializeSelect2("#Jurisdiction-Select", "Jurisdictions");

  initializeSelect2("#Task-Select", "Task");

  initializeSelect2("#Status-Select", "Status");

  // Initialize Select2 for Entity
  initializeSelect2("#Entity-Jurisdiction-Select", "Jurisdictions");

  initializeSelect2("#Entity-Status-Select", "Status");

  // Initialize Select2 for Order status
  initializeSelect2("#Order-Jurisdiction-Select", "Jurisdictions");

  initializeSelect2("#Order-Task-Select", "Task");

  initializeSelect2("#Order-Status-Select", "Status");

  // Function to initialize Select2 with checkboxes
  function initializeSelect2(selector, placeholderText) {
    $(selector).select2({
      placeholder: placeholderText,
      allowClear: true, // Allows clearing the selection
      closeOnSelect: false, // Keeps dropdown open for multi-select
      templateResult: formatOption, // Custom option rendering with checkboxes
      templateSelection: formatSelection, // Custom selection rendering
    });

    // Add event listeners for "All" and "None" options
    $(selector).on("select2:select select2:unselect", function (e) {
      handleSelectAllOrNone(selector, e.params.data.id);
      synchronizeCheckboxState(selector); // Update checkbox states
    });
  }

  // Custom rendering for dropdown options with checkboxes
  function formatOption(option) {
    if (!option.id) {
      return option.text;
    }
    return $(
      '<span><input type="checkbox" class="form-check-input me-2"/> ' +
        option.text +
        "</span>"
    );
  }

  // Custom rendering for selected items
  function formatSelection(selection) {
    return selection.text;
  }

  // Synchronize checkbox state with selection
  function synchronizeCheckboxState(selector) {
    $(selector)
      .next(".select2")
      .find(
        '.select2-results__option[aria-selected="true"] input[type="checkbox"]'
      )
      .prop("checked", true);
    $(selector)
      .next(".select2")
      .find(
        '.select2-results__option[aria-selected="false"] input[type="checkbox"]'
      )
      .prop("checked", false);
  }

  // Handle "Select All" and "Deselect All" functionality
  function handleSelectAllOrNone(selector, selectedValue) {
    const $select = $(selector);
    const allValues = $select
      .find("option")
      .map(function () {
        return this.value;
      })
      .get();

    if (selectedValue === "all") {
      // Select all options
      $select.val(allValues).trigger("change");
    } else if (selectedValue === "none") {
      // Deselect all options
      $select.val(null).trigger("change");
    }
  }
});
// select2 dropdown filter end



// expand table start
        // Formatting function for expandable rows
        function format(d) {
            return `
                <tr class="expand-row">
                    <td colspan="9">
                        <table class="table table-striped w-100 table-nowrap inner-table">
                            <tr>
                                <td>${d.group}</td>
                                <td>${d.entity_name}</td>
                                <td>${d.type}</td>
                                <td>${d.jurisdictions}</td>
                                <td>${d.registrations}</td>
                                <td>${d.dbas}</td>
                                <td>${d.bus_licenses}</td>
                                <td>
                                    <span class="badge badge-${d.status.class}">${d.status.label}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr> ,
                <tr class="expand-row">
                    <td colspan="9">
                        <table class="table table-striped w-100 table-nowrap inner-table">
                            <tr>
                                <td>${d.group}</td>
                                <td>${d.entity_name}</td>
                                <td>${d.type}</td>
                                <td>${d.jurisdictions}</td>
                                <td>${d.registrations}</td>
                                <td>${d.dbas}</td>
                                <td>${d.bus_licenses}</td>
                                <td>
                                    <span class="badge badge-${d.status.class}">${d.status.label}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr> ,
                <tr class="expand-row">
                    <td colspan="9">
                        <table class="table table-striped w-100 table-nowrap inner-table">
                            <tr>
                                <td>${d.group}</td>
                                <td>${d.entity_name}</td>
                                <td>${d.type}</td>
                                <td>${d.jurisdictions}</td>
                                <td>${d.registrations}</td>
                                <td>${d.dbas}</td>
                                <td>${d.bus_licenses}</td>
                                <td>
                                    <span class="badge badge-${d.status.class}">${d.status.label}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            `;
            
        }

        // Initialize DataTable
        $(document).ready(function () {
            let table = $('#ra-other-table').DataTable({
                ajax: "data4.json",
                columns: [
                    {
                        className: 'dt-control',
                        orderable: false,
                        data: null,
                        defaultContent: ''
                    },
                    { data: 'group' },
                    { data: 'entity_name' },
                    { data: 'type' },
                    { data: 'jurisdictions' },
                    { data: 'registrations' },
                    { data: 'dbas' },
                    { data: 'bus_licenses' },
                    { 
                        data: 'status', 
                        render: renderDots 
                    }
                ],
                order: [[1, 'asc']],
                lengthChange: false
            });

            // Handle row click
            $('#ra-other-table tbody').on('click', 'td.dt-control', function () {
                let tr = $(this).closest('tr');
                let row = table.row(tr);

                if (row.child.isShown()) {
                    row.child.hide();
                    tr.removeClass('expanded-row');
                } else {
                    row.child(format(row.data())).show();
                    tr.addClass('expanded-row');
                }
            });
        });

        // Render dots for status column in the parent row
        function renderDots(data) {
            return `
                <div class="status-dots">
                    <div class="status-dot status-good">2</div>
                    <div class="status-dot status-not-good">1</div>
                    <div class="status-dot status-inactive">1</div>
                    <div class="status-dot status-dissolved">2</div>
                    <div class="status-dot status-archived">1</div>
                </div>
            `;
        }
// expand table end
