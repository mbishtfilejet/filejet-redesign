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


// filter start

document.addEventListener("DOMContentLoaded", function () {
  function setupMultiSelect(containerId, dropdownId, searchInputId, checkboxClass, selectAllId, defaultSelected = [], maxSelection = 2) {
      const searchInput = document.getElementById(searchInputId);
      const dropdown = document.getElementById(dropdownId);
      const multiSelectContainer = document.getElementById(containerId);
      const selectAllCheckbox = document.getElementById(selectAllId);
      const checkboxes = dropdown.querySelectorAll(`.${checkboxClass}`);

      // ✅ Set default selections
      checkboxes.forEach(cb => {
          if (defaultSelected.includes(cb.value)) {
              cb.checked = true;
          }
      });

      // ✅ Update selected options on load
      updateSelectedOptions(false); // Prevent auto-focus on page load

      // 🔍 Search Filtering
      searchInput.addEventListener("input", function () {
          const filter = searchInput.value.toLowerCase();
          const items = dropdown.querySelectorAll(".dropdown-item");

          items.forEach(item => {
              const text = item.innerText.toLowerCase();
              item.style.display = text.includes(filter) ? "" : "none";
          });
      });

      // ✅ Handle Checkbox Clicks
      dropdown.addEventListener("change", function (event) {
          if (event.target.classList.contains(checkboxClass)) {
              updateSelectedOptions(true); // Only focus when user interacts
          }
      });

      // ✅ Handle "Select All" Functionality
      if (selectAllCheckbox) {
          selectAllCheckbox.addEventListener("change", function () {
              checkboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
              updateSelectedOptions(true); // Only focus when user interacts
          });
      }

      function updateSelectedOptions(shouldFocus = true) {
          const selectedOptionsContainer = multiSelectContainer;
          const selectedCheckboxes = document.querySelectorAll(`.${checkboxClass}:checked`);
          const selectedValues = Array.from(selectedCheckboxes).map(cb => cb.value);

          selectedOptionsContainer.innerHTML = "";

          selectedValues.slice(0, maxSelection).forEach(value => {
              const span = document.createElement("span");
              span.classList.add("selected-option");
              span.innerHTML = `${value} <span class="remove-option"><img src="dist/images/icons/filter-close.svg" alt="Remove" class="remove-icon-img"></span>`;

              span.querySelector(".remove-option").addEventListener("click", function () {
                  const checkbox = [...document.querySelectorAll(`.${checkboxClass}`)].find(cb => cb.value === value);
                  checkbox.checked = false;
                  updateSelectedOptions(true); // Only focus when user interacts
              });

              selectedOptionsContainer.appendChild(span);
          });

          if (selectedValues.length > maxSelection) {
              const extraCount = selectedValues.length - maxSelection;
              const summarySpan = document.createElement("span");
              summarySpan.classList.add("selected-option");
              summarySpan.innerHTML = `+${extraCount}`;
              selectedOptionsContainer.appendChild(summarySpan);
          }

<<<<<<< HEAD
          // 🔄 Preserve Placeholder in Search Input
=======
          // Add search input field after selection
>>>>>>> 0e3b2625adf029d110a7dd1bca264fa9c1a2ea7f
          const input = document.createElement("input");
          input.type = "text";
          input.classList.add("search-input");
          input.id = searchInputId;
<<<<<<< HEAD
          input.placeholder = selectedValues.length === 0 ? 
                              (containerId === "jurisdictionContainer" ? "Jurisdictions" : 
                                containerId === "entityJurisdictionContainer" ? "Jurisdictions" : 
                                containerId === "orderJurisdictionContainer" ? "Jurisdictions" : 
                                containerId === "taskContainer" ? "Tasks" : 
                                containerId === "orderTaskContainer" ? "Tasks" : 
                                containerId === "entityStatusContainer" ? "Entity Status" : 
                               "Status") : ""; // Keep placeholder if nothing is selected
          input.autocomplete = "off";

          selectedOptionsContainer.appendChild(input);

          // ✅ Focus on input only when user clicks, not on page load
          if (shouldFocus) {
              input.focus();
          }
      }
  }

  // 🏷️ Initialize dropdowns with placeholders
  setupMultiSelect("jurisdictionContainer", "jurisdictionDropdown", "jurisdictionSearch", "jurisdiction-checkbox", "jurisdictionSelectAll");
  setupMultiSelect("entityJurisdictionContainer", "entityJurisdictionDropdown", "entityJurisdictionSearch", "entityJurisdiction-checkbox", "entityJurisdictionSelectAll");
  setupMultiSelect("orderJurisdictionContainer", "orderJurisdictionDropdown", "orderJurisdictionSearch", "orderJurisdiction-checkbox", "orderJurisdictionSelectAll");
  setupMultiSelect("entityStatusContainer", "entityStatusDropdown", "entityStatusSearch", "entityStatus-checkbox", "entityStatusSelectAll");
  setupMultiSelect("orderStatusContainer", "orderStatusDropdown", "orderStatusSearch", "orderStatus-checkbox", "orderStatusSelectAll");
  setupMultiSelect("taskContainer", "taskDropdown", "taskSearch", "task-checkbox", "taskSelectAll");
  setupMultiSelect("orderTaskContainer", "orderTaskDropdown", "orderTaskSearch", "orderTask-checkbox", "orderTaskSelectAll");


  // ✅ Set "Overdue" and "Upcoming" as default selected
  setupMultiSelect("statusContainer", "statusDropdown", "statusSearch", "status-checkbox", "statusSelectAll", ["Overdue", "Upcoming"]);
});
=======
          input.placeholder = "";
          input.autocomplete = "off";
          selectedOptionsContainer.appendChild(input);
          input.focus();
      }
  }

  setupMultiSelect("jurisdictionContainer", "jurisdictionDropdown", "jurisdictionSearch", "jurisdiction-checkbox", "jurisdictionSelectAll");
  setupMultiSelect("taskContainer", "taskDropdown", "taskSearch", "task-checkbox", "taskSelectAll");
  setupMultiSelect("statusContainer", "statusDropdown", "statusSearch", "status-checkbox", "statusSelectAll");
});



>>>>>>> 0e3b2625adf029d110a7dd1bca264fa9c1a2ea7f
// filter end




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




