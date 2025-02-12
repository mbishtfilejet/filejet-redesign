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
      ["Future Tasks", 25],
      ["Unacknowledged", 10],
    ],
    ["#E73B18", "#3498db", "#00BA70", "#62539F"],
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

// Function to draw a donut chart
function drawDonutChart(containerId, chartData, colors, width, height) {
  var data = google.visualization.arrayToDataTable(chartData);

  var chartAreaSize =
    width === "140%"
      ? { right: "5%", left: "5%", bottom: "5%", top: "5%", width: "140%", height: "140%" }
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

  var chart = new google.visualization.PieChart(document.getElementById(containerId));

  // Add click event listener to each chart
  google.visualization.events.addListener(chart, "select", function () {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var sliceLabel = chartData[selectedItem.row + 1][0]; // Get clicked slice label
      highlightStatus(sliceLabel);
    }
  });

  chart.draw(data, options);
}

// Attach click events to increase chart size on click
function attachClickEvents() {
  document.querySelectorAll(".nav-item").forEach((li) => {
    li.addEventListener("click", function () {
      if (lastClickedChart) {
        redrawChart(lastClickedChart, "78%", "78%"); // Reset previous chart size
      }

      const chartId = this.querySelector(".piechart").id;
      redrawChart(chartId, "140%", "140%"); // Increase clicked chart size
      lastClickedChart = chartId;
    });
  });
}

// Function to redraw the chart with increased size
function redrawChart(chartId, width, height) {
  let chartData, colors;

  if (chartId === "donut_chart") {
    chartData = [
      ["Task", "Count"],
      ["Overdue", 50],
      ["Upcoming", 30],
      ["Future Tasks", 25],
      ["Unacknowledged", 10],
    ];
    colors = ["#E73B18", "#3498db", "#00BA70", "#62539F"];
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

// Function to highlight status when a pie slice is clicked
function highlightStatus(status) {
  // Remove existing highlights
  document.querySelectorAll(".list-group-item").forEach((item) => {
    item.classList.remove("active-status");
  });

  // Find and highlight the matching status
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


// entity table start
$(document).ready(function () {
  let table1 = $("#ra-other-table").DataTable({
      ajax: "data4.json",
      columns: [
          { className: "dt-control", orderable: false, data: null, defaultContent: "" },
          { data: "group" },
          { data: "entity_name" },
          { data: "type" },
          { data: "jurisdiction" },
          { data: "registrations" },
          { data: "dbas" },
          { data: "business_licenses" },
          { data: "status", render: renderDotsTable1 }
      ],
      order: [[1, "asc"]],
      lengthChange: false,
  });

  $("#ra-other-table tbody").on("click", "td.dt-control", function () {
      let tr = $(this).closest("tr");
      let row = table1.row(tr);
      let rowId = row.data().id;

      if (tr.hasClass("expanded-row")) {
          // Collapse: Remove expanded rows
          $(`.expanded-content[data-parent="${rowId}"]`).remove();
          tr.removeClass("expanded-row");
      } else {
          // Expand: Insert new rows below
          let expandedRows = formatExpandedRows(row.data(), rowId);
          tr.after(expandedRows);
          tr.addClass("expanded-row");

          // Apply pagination to the expanded rows
          paginateExpandedRows(rowId);
      }
  });

  function formatExpandedRows(d, rowId) {
      let rowsHtml = d.expanded_rows.map(row => `
          <tr class="expanded-content" data-parent="${rowId}">
              <td></td>
              <td>${row.group || d.group}</td>
              <td>${row.entity_name || d.entity_name}</td>
              <td>${row.type || d.type}</td>
              <td>${row.jurisdiction || d.jurisdiction}</td>
              <td>${row.registrations || d.registrations}</td>
              <td>${row.dbas || d.dbas}</td>
              <td>${row.business_licenses || d.business_licenses}</td>
              <td><span class="badge badge-${row.status.class}">${row.status.label}</span></td>
          </tr>
      `).join("");

      // Pagination controls
      return `
          ${rowsHtml}
          <tr class="expanded-content pagination-row" data-parent="${rowId}">
        <td colspan="9" class="text-center">
            <button class="prev-page btn btn-md" data-parent="${rowId}">&lt;</button>
            <span class="page-info" data-parent="${rowId}"></span>
            <button class="next-page btn btn-md" data-parent="${rowId}">&gt;</button>
        </td>
    </tr>
      `;
  }

  function paginateExpandedRows(rowId) {
      const pageSize = 5;
      let rows = $(`.expanded-content[data-parent="${rowId}"]:not(.pagination-row)`);
      let totalRows = rows.length;
      let currentPage = 0;

      function showPage(page) {
          rows.hide();
          let start = page * pageSize;
          let end = start + pageSize;
          rows.slice(start, end).show();

          // Update page info
          let totalPages = Math.ceil(totalRows / pageSize);
          $(`.page-info[data-parent="${rowId}"]`).text(`Page ${page + 1} of ${totalPages}`);

          // Enable/disable buttons
          $(`.prev-page[data-parent="${rowId}"]`).prop("disabled", page === 0);
          $(`.next-page[data-parent="${rowId}"]`).prop("disabled", page === totalPages - 1);
      }

      // Initial page load
      showPage(0);

      // Handle pagination button clicks
      $(document).on("click", `.prev-page[data-parent="${rowId}"]`, function () {
          if (currentPage > 0) {
              currentPage--;
              showPage(currentPage);
          }
      });

      $(document).on("click", `.next-page[data-parent="${rowId}"]`, function () {
          if (currentPage < Math.ceil(totalRows / pageSize) - 1) {
              currentPage++;
              showPage(currentPage);
          }
      });
  }
});

// Render dots for #ra-other-table
function renderDotsTable1(data) {
  return `
      <div class="status-dots">
          <div class="status-dot status-good" data-bs-toggle="tooltip" title="In Good Standing">1</div>
          <div class="status-dot status-not-good" data-bs-toggle="tooltip" title="Not Good Standing">1</div>
          <div class="status-dot status-inactive" data-bs-toggle="tooltip" title="Inactive">1</div>
      </div>
  `;
}
// entity table end






