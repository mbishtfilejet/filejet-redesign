// Google Chart Script Start
google.charts.load("current", { packages: ["corechart"] });
let lastClickedChart = null;

google.charts.setOnLoadCallback(() => {
  drawDonutChart(
    "donut_chart",
    [
      ["Task", "Count"],
      ["Overdue", 50],
      ["Upcoming", 30],
      ["Unacknowledged", 10],
    ],
    ["#E73B18", "#3498db", "#62539F"],
    "78%",
    "78%"
  );

  drawDonutChart(
    "donut_chart_2",
    [
      ["Task", "Count"],
      ["In Good Standing", 15],
      ["Not Good Standing", 8],
      ["Inactive", 3],
      ["Externally Managed", 1],
    ],
    ["#00BA70", "#E73B18", "#8690A0", "#1a4d9e"],
    "78%",
    "78%"
  );

  drawDonutChart(
    "donut_chart_3",
    [
      ["Task", "Count"],
      ["In Process", 5],
      ["Sent", 5],
      ["Completed", 5],
    ],
    ["#62539F", "#3498db", "#00BA70"],
    "78%",
    "78%"
  );

  attachClickEvents();
});

// ✅ Fixed: Function to draw a donut chart
function drawDonutChart(containerId, chartData, colors, width, height) {
  let container = document.getElementById(containerId);
  if (!container) {
    console.error(`Error: Element with ID '${containerId}' not found.`);
    return;
  }

  var data = google.visualization.arrayToDataTable(chartData);

  var chartAreaSize =
    width === "140%"
      ? { width: "100%", height: "100%", top: 10, bottom: 10 }
      : { width: width, height: height };

  var options = {
    pieHole: 0.5,
    colors: colors,
    legend: "none",
    pieSliceText: "none",
    backgroundColor: "transparent",
    chartArea: chartAreaSize,
    pieSliceBorderColor: "transparent",
    tooltip: { trigger: "none" }, // Disable tooltip
  };

  var chart = new google.visualization.PieChart(container);

  // ✅ Fixed: Prevent errors when no selection
  google.visualization.events.addListener(chart, "select", function () {
    var selection = chart.getSelection();
    if (selection.length > 0) {
      var sliceLabel = chartData[selection[0].row + 1][0];
      highlightStatus(sliceLabel);
    }
  });

  chart.draw(data, options);
}

// ✅ Fixed: Attach click events safely
function attachClickEvents() {
  document.querySelectorAll(".nav-item").forEach((li) => {
    let piechart = li.querySelector(".piechart");
    if (!piechart) return; // Prevents errors

    li.addEventListener("click", function () {
      if (lastClickedChart) {
        redrawChart(lastClickedChart, "78%", "78%"); // Reset previous chart size
      }

      redrawChart(piechart.id, "140%", "140%"); // Increase clicked chart size
      lastClickedChart = piechart.id;
    });
  });
}

// ✅ Fixed: Function to redraw the chart with increased size
function redrawChart(chartId, width, height) {
  let chartData, colors;

  if (chartId === "donut_chart") {
    chartData = [
      ["Task", "Count"],
      ["Overdue", 50],
      ["Upcoming", 30],
      ["Unacknowledged", 10],
    ];
    colors = ["#E73B18", "#3498db", "#62539F"];
  } else if (chartId === "donut_chart_2") {
    chartData = [
      ["Task", "Count"],
      ["In Good Standing", 15],
      ["Not Good Standing", 8],
      ["Inactive", 3],
      ["Externally Managed", 1],
    ];
    colors = ["#00BA70", "#E73B18", "#8690A0", "#1a4d9e"];
  } else if (chartId === "donut_chart_3") {
    chartData = [
      ["Task", "Count"],
      ["In Process", 5],
      ["Sent", 5],
      ["Completed", 5],
    ];
    colors = ["#62539F", "#3498db", "#00BA70"];
  }

  drawDonutChart(chartId, chartData, colors, width, height);
}

// ✅ Fixed: Function to highlight status when a pie slice is clicked
function highlightStatus(status) {
  document.querySelectorAll(".list-group-item").forEach((item) => {
    item.classList.remove("active-status");
  });

  document.querySelectorAll(".list-group-item").forEach((item) => {
    if (item.textContent.toLowerCase().includes(status.toLowerCase())) {
      item.classList.add("active-status"); // Add highlight class
    }
  });
}


// Google Chart Script End 



// filter dropdown start
$(document).ready(function () {
  function initializeDropdown(
    dropdownId,
    selectAllId,
    checkboxClass,
    dropdownMenuClass,
    defaultCheckedValues = []
  ) {
    const dropdownInput = $(dropdownId);
    const dropdownMenu = $(dropdownMenuClass);
    const checkboxes = $(checkboxClass);
    const selectAllCheckbox = $(selectAllId);
    const selectedItemsContainer = $('<div class="filter-selected-items-container"></div>');

    // Attach selected items container to the dropdown input field
    dropdownInput.after(selectedItemsContainer);

    function updateInputText() {
      const selectedOptions = checkboxes.filter(":checked").map(function () {
        return $(this).val();
      }).get();

      // Clear previous selected items
      selectedItemsContainer.empty();

      if (selectedOptions.length === 0) {
        selectedItemsContainer.hide();
      } else {
        selectedItemsContainer.show();
        const visibleItems = selectedOptions.slice(0, 2); // Show only first 2 items
        const remainingCount = selectedOptions.length - visibleItems.length;

        // Add the visible selected items
        visibleItems.forEach((option) => {
          const selectedItem = $('<span class="filter-selected-item"></span>').text(option);
          const clearIcon = $('<span class="filter-clear-icon"><img src="dist/images/icons/filter-close.svg" alt="Clear" class="clear-icon-image"/></span>');

          // Attach the clear icon to item
          selectedItem.append(clearIcon);
          selectedItemsContainer.append(selectedItem);

          // Remove item when clicking the clear icon
          clearIcon.on("click", function () {
            $(`input[value="${option}"]`).prop("checked", false);
            updateInputText();
          });
        });

        // Show "+1" summary if more than 2 items selected
        if (remainingCount > 0) {
          const summary = $('<span class="more-items-summary ms-2"></span>').text(`+ ${remainingCount}`);
          selectedItemsContainer.append(summary);
        }
      }
    }

    // Ensure default items are checked
    checkboxes.each(function () {
      const checkboxValue = $(this).val();
      const checkboxLabel = $(this).closest("label").text().trim(); // Get label text

      if (defaultCheckedValues.includes(checkboxValue) || defaultCheckedValues.includes(checkboxLabel)) {
        $(this).prop("checked", true);
      }
    });

    // Trigger input update after setting default checked values
    updateInputText();

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
      const allChecked = checkboxes.length === checkboxes.filter(":checked").length;
      selectAllCheckbox.prop("checked", allChecked);
    });

    // Prevent dropdown from closing on click inside
    dropdownMenu.on("click", function (e) {
      e.stopPropagation();
    });
  }

  // Initialize dropdowns with default checked values
  initializeDropdown("#StatusDropdown", "#status-select-all", ".status-checkbox", ".status-dropdown-menu", ["Overdue", "Upcoming", "Unacknowledged"]);
  initializeDropdown("#JurisdictionDropdown", "#jurisdiction-select-all", ".jurisdiction-checkbox", ".jurisdiction-dropdown-menu");
  initializeDropdown("#TaskDropdown", "#task-select-all", ".task-checkbox", ".task-dropdown-menu");
  initializeDropdown("#EntityJurisdictionDropdown", "#entity-jurisdiction-select-all", ".entity-jurisdiction-checkbox", ".entity-jurisdiction-dropdown-menu");
  initializeDropdown("#EntityStatusDropdown", "#entity-status-select-all", ".entity-status-checkbox", ".entity-status-dropdown-menu");
  initializeDropdown("#OrderJurisdictionDropdown", "#order-jurisdiction-select-all", ".order-jurisdiction-checkbox", ".order-jurisdiction-dropdown-menu");
  initializeDropdown("#OrderTaskDropdown", "#order-task-select-all", ".order-task-checkbox", ".order-task-dropdown-menu");
  initializeDropdown("#OrderStatusDropdown", "#order-status-select-all", ".order-status-checkbox", ".order-status-dropdown-menu");

});
// filter dropdown end


// external entity table start
$(document).ready(function () {
  let isExternalDashboard = typeof dashboardType !== "undefined" && dashboardType === "external_dashboard";

  let table1 = $("#ra-other-table").DataTable({
      ajax: "data4.json",
      columns: [
          { className: "dt-control", orderable: false, data: null, defaultContent: "" },
          { data: "group" },
          { data: "entity_name" },
          { data: "type" },
          { data: "jurisdiction" },
          { data: "registrations" },
          ...(!isExternalDashboard ? [{ data: "dbas" }, { data: "business_licenses" }] : []),
          { data: "status", render: renderDotsTable1 }
      ],
      order: [[1, "asc"]],
      lengthChange: false,  // Removed pagination
      paging: false,  // Disable pagination
      info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  });

  $("#ra-other-table tbody").on("click", "td.dt-control", function () {
      let tr = $(this).closest("tr");
      let row = table1.row(tr);
      let rowId = row.data().id;

      if (tr.hasClass("expanded-row")) {
          $(`.expanded-content[data-parent="${rowId}"]`).remove();
          tr.removeClass("expanded-row");
      } else {
          let expandedRows = formatExpandedRows(row.data(), rowId, isExternalDashboard);
          tr.after(expandedRows);
          tr.addClass("expanded-row");
      }
  });

  function formatExpandedRows(d, rowId, hideDBAAndLicense) {
      return d.expanded_rows.map((row, index, arr) => `
          <tr class="expanded-content ${index === arr.length - 1 ? 'last-expanded-content' : ''}" data-parent="${rowId}">
              <td></td>
              <td>${row.type === "Domestic" ? d.group : ""}</td> <!-- Show group name only for Domestic -->
              <td>${row.entity_name || d.entity_name}</td>
              <td>${row.type || d.type}</td>
              <td>${row.jurisdiction || d.jurisdiction}</td>
              <td>${row.registrations || d.registrations}</td>
              ${!hideDBAAndLicense ? `<td>${row.dbas ?? d.dbas}</td><td>${row.business_licenses ?? d.business_licenses}</td>` : ""}
              <td><span class="badge badge-${row.status.class}">${row.status.label}</span></td>
          </tr>
      `).join("");
  }
});

function renderDotsTable1(data) {
  return `
      <div class="status-dots">
          <div class="status-dot status-good" data-bs-toggle="tooltip" title="In Good Standing">1</div>
          <div class="status-dot status-not-good" data-bs-toggle="tooltip" title="Not Good Standing">1</div>
          <div class="status-dot status-inactive" data-bs-toggle="tooltip" title="Inactive">1</div>
      </div>
  `;
}
// external entity end




