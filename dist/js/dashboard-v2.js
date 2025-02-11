// google chart script start
// Load Google Charts
google.charts.load("current", { packages: ["corechart"] });
let lastClickedChart = null; 
// Draw the charts
google.charts.setOnLoadCallback(() => {
  drawDonutChart(
    "donut_chart",
    [
      ["Task", "Count", { role: "tooltip" }],
      ["Overdue", 50, "50"],
      ["Upcoming", 30, "30"],
      ["Future Tasks", 25, "25"],
      ["Unknowledged", 10, "10"],
    ],
    ["#E73B18", "#3498db", "#00BA70", "#62539F"],
    '90%' , '90%',
  );

  drawDonutChart(
    "donut_chart_2",
    [
      ["Status", "Count", { role: "tooltip" }],
      ["In Good Standing", 15, "15"],
      ["Not in Good Standing", 8, "8"],
      ["Inactive", 3, "3"],
      ["Externally Managed", 1, "1"],
    ],
    ["#00BA70", "#E73B18", "#1080F8", "#1a4d9e"],
    '90%' , '90%',
  );

  drawDonutChart(
    "donut_chart_3",
    [
      ["Task", "Count", { role: "tooltip" }],
      ["In Process", 5, "5"],
      ["Sent", 5, "5"],
      ["Completed", 5, "5"],
    ],
    ["#62539F", "#3498db", "#00BA70"],
    '90%' , '90%',
  );
  attachClickEvents();
});

// Reusable function to draw a donut chart
function drawDonutChart(containerId, chartData, colors,width, height) {
  
  // Convert data to DataTable format
  var data = google.visualization.arrayToDataTable(chartData);

  // Chart options
  var options = {
    pieHole: 0.5, // Donut hole size
    colors: colors, // Custom colors
    legend: "none", // Disable legend
    pieSliceText: "none", // Hide text on slices
    backgroundColor: "transparent", // Transparent background
    chartArea: { width: width, height:height, backgroundColor: "none" }, // Adjust chart area
    pieSliceBorderColor: "transparent",
  };

  // Create and draw the chart
  var chart = new google.visualization.PieChart(
    document.getElementById(containerId)
  );
  chart.draw(data, options);
}

function attachClickEvents() {
  document.querySelectorAll(".nav-item").forEach((li) => {
    li.addEventListener("click", function () {
      if (lastClickedChart) {
        // document.getElementById(lastClickedChart).style.width = "90%";
        // document.getElementById(lastClickedChart).style.height = "90%";
        redrawChart(lastClickedChart, '90%', '90%'); // Redraw with normal size
      }

      // Find the chart inside the clicked li
      const chartId = this.querySelector(".piechart").id;
      // document.getElementById(chartId).style.width = "120%";
      // document.getElementById(chartId).style.height = "120%";

      // Redraw chart with increased size
      redrawChart(chartId, '140%', '140%');

      // Update lastClickedChart to track previous selection
      lastClickedChart = chartId;
    });
  });
}

// Function to redraw chart with increased size
function redrawChart(chartId,width,height) {
  let chartData, colors;

  if (chartId === "donut_chart") {
    chartData = [
      ["Task", "Count", { role: "tooltip" }],
      ["Overdue", 50, "50"],
      ["Upcoming", 30, "30"],
      ["Future Tasks", 25, "25"],
      ["Unknowledged", 10, "10"],

    ];
    colors = ["#E73B18", "#3498db", "#00BA70", "#62539F"],width,height;
  } else if (chartId === "donut_chart_2") {
    chartData = [
      ["Status", "Count", { role: "tooltip" }],
      ["In Good Standing", 15, "15"],
      ["Not in Good Standing", 8, "8"],
      ["Inactive", 3, "3"],
      ["Externally Managed", 1, "1"],
    ];
    colors = ["#00BA70", "#E73B18", "#1080F8", "#1a4d9e"],width,height;
  } else if (chartId === "donut_chart_3") {
    chartData = [
      ["Task", "Count", { role: "tooltip" }],
      ["In Process", 5, "5"],
      ["Sent", 5, "5"],
      ["Completed", 5, "5"],
    ];
    colors = ["#62539F", "#3498db", "#00BA70"],width,height;
  }

  drawDonutChart(chartId, chartData, colors,width,height);
}

// google chart script end

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
  initializeDropdown("#StatusDropdown", "#status-select-all", ".status-checkbox", ".status-dropdown-menu", ["Overdue", "Upcoming", "Unacknowledged SOPS"]);
  initializeDropdown("#JurisdictionDropdown", "#jurisdiction-select-all", ".jurisdiction-checkbox", ".jurisdiction-dropdown-menu");
  initializeDropdown("#TaskDropdown", "#task-select-all", ".task-checkbox", ".task-dropdown-menu");
  initializeDropdown("#EntityJurisdictionDropdown", "#entity-jurisdiction-select-all", ".entity-jurisdiction-checkbox", ".entity-jurisdiction-dropdown-menu");
  initializeDropdown("#EntityStatusDropdown", "#entity-status-select-all", ".entity-status-checkbox", ".entity-status-dropdown-menu");
  initializeDropdown("#OrderJurisdictionDropdown", "#order-jurisdiction-select-all", ".order-jurisdiction-checkbox", ".order-jurisdiction-dropdown-menu");
  initializeDropdown("#OrderTaskDropdown", "#order-task-select-all", ".order-task-checkbox", ".order-task-dropdown-menu");
  initializeDropdown("#OrderStatusDropdown", "#order-status-select-all", ".order-status-checkbox", ".order-status-dropdown-menu");

});
// filter dropdown end




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
          <div class="status-dot status-not-good" data-bs-toggle="tooltip" title="Not in Good Standing">1</div>
          <div class="status-dot status-inactive" data-bs-toggle="tooltip" title="Inactive">1</div>
      </div>
  `;
}







