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

// filter dropdown start
$(document).ready(function () {
  function initializeDropdown(
    dropdownId,
    selectAllId,
    checkboxClass,
    dropdownMenuClass
  ) {
    const dropdownInput = $(dropdownId);
    const dropdownMenu = $(dropdownMenuClass);
    const checkboxes = $(checkboxClass);
    const selectAllCheckbox = $(selectAllId);
    const selectedItemsContainer = $(
      '<div class="filter-selected-items-container"></div>'
    );

    // Attach selected items container to the dropdown input field
    dropdownInput.after(selectedItemsContainer);

    function updateInputText() {
      const selectedOptions = checkboxes
        .filter(":checked")
        .map(function () {
          return $(this).val();
        })
        .get();

      // Clear previous selected items
      selectedItemsContainer.empty();

      if (selectedOptions.length === 0) {
        dropdownInput.val("");
        dropdownInput.attr("placeholder", "Select items");
      } else {
        const visibleItems = selectedOptions.slice(0, 2); // Limit to first 2 items
        const remainingCount = selectedOptions.length - visibleItems.length;

        // Add the visible items
        visibleItems.forEach((option) => {
          const selectedItem = $('<span class="filter-selected-item"></span>').text(
            option
          );
          const clearIcon = $('<span class="filter-clear-icon"><img src="dist/images/icons/filter-close.svg" alt="Clear" class="clear-icon-image"/</span>');

          // Attach the clear icon and item
          selectedItem.append(clearIcon);
          selectedItemsContainer.append(selectedItem);

          // Clear item click handler
          clearIcon.on("click", function () {
            $(`input[value="${option}"]`).prop("checked", false);
            updateInputText();
          });
        });

        // Show the summary if there are more than 3 items selected
        if (remainingCount > 0) {
          const summary = $('<span class="more-items-summary ms-2"></span>').text(
            `+ ${remainingCount}`
          );
          selectedItemsContainer.append(summary);
        }

        // Update dropdown input with no placeholder if items are selected
        dropdownInput.attr("placeholder", "");
      }
    }

    // Filter dropdown options based on input
    dropdownInput.on("input", function () {
      const searchValue = $(this).val().toLowerCase();
      dropdownMenu.find("label").each(function () {
        const label = $(this).text().toLowerCase();
        $(this).toggle(label.includes(searchValue));
      });
    });

    // Handle checkbox changes
    checkboxes.on("change", function () {
      updateInputText();
    });

    // Handle "Select All" checkbox
    selectAllCheckbox.on("change", function () {
      const isChecked = $(this).is(":checked");
      checkboxes.prop("checked", isChecked);
      updateInputText();
    });

    // Sync "Select All" checkbox state
    checkboxes.on("change", function () {
      const allChecked =
        checkboxes.length === checkboxes.filter(":checked").length;
      selectAllCheckbox.prop("checked", allChecked);
    });

    // Prevent dropdown from closing on click inside
    dropdownMenu.on("click", function (e) {
      e.stopPropagation();
    });
  }

  // Initialize all dropdowns with unique identifiers 
  initializeDropdown( "#JurisdictionDropdown","#jurisdiction-select-all",".jurisdiction-checkbox",".jurisdiction-dropdown-menu" );
  initializeDropdown("#TaskDropdown","#task-select-all",".task-checkbox",".task-dropdown-menu");
  initializeDropdown("#StatusDropdown","#status-select-all",".status-checkbox",".status-dropdown-menu");

  initializeDropdown("#EntityJurisdictionDropdown","#entity-jurisdiction-select-all",".entity-jurisdiction-checkbox",".entity-jurisdiction-dropdown-menu" );
  initializeDropdown("#EntityStatusDropdown","#entity-status-select-all",".entity-status-checkbox",".entity-status-dropdown-menu");

  initializeDropdown( "#OrderJurisdictionDropdown","#order-jurisdiction-select-all",".order-jurisdiction-checkbox",".order-jurisdiction-dropdown-menu" );
  initializeDropdown("#OrderTaskDropdown","#order-task-select-all",".order-task-checkbox",".order-task-dropdown-menu");
  initializeDropdown("#OrderStatusDropdown","#order-status-select-all",".order-status-checkbox",".order-status-dropdown-menu");

});
// filter dropdown end

// expand table start
// Formatting function for expandable rows
function format(d) {
  return `
                <tr class="expand-row" >
                    <td colspan="9" style="padding: 0px !important;">
                        <table class="inner-table table table-striped w-100 table-nowrap table-v2-scrol">
                            <tr>
                                <td style="width:10px;"></td>
                                <td>${d.group}</td>
                                <td>${d.entity_name}</td>
                                <td>${d.type}</td>
                                <td>${d.jurisdiction}</td>
                                <td>${d.registrations}</td>
                                <td>${d.dbas}</td>
                                <td>${d.business_licenses}</td>
                                <td>
                                    <span class="badge badge-${d.status.class}">${d.status.label}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr> ,
                <tr class="expand-row">
                    <td colspan="9" style="padding: 0px !important;">
                        <table class="inner-table table table-striped w-100 table-nowrap table-v2-scrol">
                            <tr>
                                 <td style="width:10px;"></td>
                                <td>${d.group}</td>
                                <td>${d.entity_name}</td>
                                <td>${d.type}</td>
                                <td>${d.jurisdiction}</td>
                                <td>${d.registrations}</td>
                                <td>${d.dbas}</td>
                                <td>${d.business_licenses}</td>
                                <td>
                                    <span class="badge badge-${d.status.class}">${d.status.label}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr> ,
                <tr class="expand-row" style="padding: 0px !important;border:0px !important;">
                    <td colspan="9" style="padding: 0px !important;">
                        <table class="inner-table table table-striped w-100 table-nowrap table-v2-scrol">
                            <tr>
                                 <td style="width:10px;"></td>
                                <td>${d.group}</td>
                                <td>${d.entity_name}</td>
                                <td>${d.type}</td>
                                <td>${d.jurisdiction}</td>
                                <td>${d.registrations}</td>
                                <td>${d.dbas}</td>
                                <td>${d.business_licenses}</td>
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
  let table = $("#ra-other-table").DataTable({
    ajax: "data4.json",
    columns: [
      {
        className: "dt-control",
        orderable: false,
        data: null,
        defaultContent: "",
      },
      { data: "group" },
      { data: "entity_name" },
      { data: "type" },
      { data: "jurisdiction" },
      { data: "registrations" },
      { data: "dbas" },
      { data: "business_licenses" },
      {
        data: "status",
        render: renderDots,
      },
    ],
    order: [[1, "asc"]],
    lengthChange: false,
  });

  // Handle row click
  $("#ra-other-table tbody").on("click", "td.dt-control", function () {
    let tr = $(this).closest("tr");
    let row = table.row(tr);

    if (row.child.isShown()) {
      row.child.hide();
      tr.removeClass("expanded-row");
    } else {
      row.child(format(row.data())).show();
      tr.addClass("expanded-row");
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
