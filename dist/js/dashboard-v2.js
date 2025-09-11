// Google Chart Script Start
google.charts.load("current", { packages: ["corechart"] });
let lastClickedChart = null;

google.charts.setOnLoadCallback(() => {
  drawDonutChart(
    "donut_chart",
    [
      ["Task", "Count"],
      ["Overdue", 50],
      ["Urgent", 10],
      ["Upcoming", 30],
      ["Unacknowledged", 10],
    ],
    ["#E73B18", "#FFB60C" , "#00B2EB", "#00BA70"],
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
      ["Unknown", 5],
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
    ["#4744D1", "#00B2EB", "#00BA70"],
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
    pieHole: 0.55,
    colors: colors,
    legend: "none",
    pieSliceText: "none",
    backgroundColor: "transparent",
    chartArea: chartAreaSize,
    pieSliceBorderColor: "#FFFFFF",
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
      ["Urgent", 10],
      ["Upcoming", 30],
      ["Unacknowledged", 10],
    ];
    colors = ["#E73B18", "#FFB60C" , "#00B2EB", "#00BA70"];
  } else if (chartId === "donut_chart_2") {
    chartData = [
      ["Task", "Count"],
      ["In Good Standing", 15],
      ["Not Good Standing", 8],
      ["Inactive", 3],
      ["Unknown", 5],
    ];
    colors = ["#00BA70", "#E73B18", "#8690A0", "#1a4d9e"];
  } else if (chartId === "donut_chart_3") {
    chartData = [
      ["Task", "Count"],
      ["In Process", 5],
      ["Sent", 5],
      ["Completed", 5],
    ];
    colors = ["#4744D1", "#00B2EB", "#00BA70"];
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
    const dropdown = document.getElementById(dropdownId);
    const multiSelectContainer = document.getElementById(containerId);
    const selectAllCheckbox = document.getElementById(selectAllId);

    // ✅ Skip setup if container or dropdown not present
    if (!dropdown || !multiSelectContainer) return;

    const checkboxes = dropdown.querySelectorAll(`.${checkboxClass}`);

    function getMaxSelection() {
      if (window.innerWidth < 1300) {
        if ([
          "addjurisdictionContainer", "roleContainer1", "roleContainer2", "roleContainer4",
          "memberroleContainer", "annualroleContainer", "reqselectEntityContainer2",
          "reqselectEntityContainer3", "selectEntityContainer", "exaddjurisdictionContainer"
        ].includes(containerId)) {
          return 3;
        }
        return 1;
      }
      return maxSelection;
    }

    // Insert search box
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.classList.add("dropdown-search-input");
    searchInput.placeholder = "Search...";
    searchInput.autocomplete = "off";
    dropdown.prepend(searchInput);

    // Set default checkboxes
    checkboxes.forEach(cb => {
      if (defaultSelected.includes(cb.getAttribute("data-value"))) {
        cb.checked = true;
      }
    });

    updateSelectedOptions(false);

    // Search filter
    searchInput.addEventListener("input", function () {
      const filter = searchInput.value.toLowerCase();
      const items = dropdown.querySelectorAll(".dropdown-item");
      items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(filter) ? "" : "none";
      });
    });

    dropdown.addEventListener("change", function (event) {
      if (event.target.classList.contains(checkboxClass)) {
        updateSelectedOptions(true);
      }
    });

    if (selectAllCheckbox) {
      selectAllCheckbox.addEventListener("change", function () {
        checkboxes.forEach(cb => {
          cb.checked = selectAllCheckbox.checked;
        });
        updateSelectedOptions(true);
      });
    }

    function updateSelectedOptions(shouldFocus = true) {
      const selectedCheckboxes = dropdown.querySelectorAll(`.${checkboxClass}:checked`);
      const selectedValues = Array.from(selectedCheckboxes).map(cb => cb.getAttribute("data-value"));
      
      // Clear container
      multiSelectContainer.innerHTML = "";

      // Add selected options
      selectedValues.slice(0, getMaxSelection()).forEach(value => {
        const span = document.createElement("span");
        span.classList.add("selected-option");
        span.innerHTML = `
          <span class="selected-option-text">${value}</span>
          <span class="remove-option">
            <img src="dist/images/icons/filter-close.svg" alt="Remove" class="remove-icon-img">
          </span>
        `;
        span.querySelector(".remove-option").addEventListener("click", function () {
          const checkbox = [...dropdown.querySelectorAll(`.${checkboxClass}`)].find(cb => cb.getAttribute("data-value") === value);
          if (checkbox) checkbox.checked = false;
          updateSelectedOptions(true);
        });
        multiSelectContainer.appendChild(span);
      });

      if (selectedValues.length > getMaxSelection()) {
        const summarySpan = document.createElement("span");
        summarySpan.classList.add("selected-option");
        summarySpan.innerHTML = `+${selectedValues.length - getMaxSelection()}`;
        multiSelectContainer.appendChild(summarySpan);
      }

      const input = document.createElement("input");
      input.type = "button";
      input.classList.add("search-input");
      input.id = searchInputId;
      input.value = selectedValues.length === 0 ? getPlaceholder(containerId) : "";
      input.autocomplete = "off";
      multiSelectContainer.appendChild(input);

      if (shouldFocus) input.focus();
    }

    function getPlaceholder(containerId) {
      switch (containerId) {
        case "jurisdictionContainer":
        case "entityJurisdictionContainer":
        case "orderJurisdictionContainer":
          return "Jurisdictions";
        case "taskContainer": return "Tasks";
        case "orderTaskContainer": return "Service";
        case "addjurisdictionContainer":
        case "exaddjurisdictionContainer": return "Select States";
        case "entityStatusContainer": return "Entity Status";
        case "roleContainer1":
        case "roleContainer2":
        case "roleContainer4":
        case "memberroleContainer":
        case "annualroleContainer": return "Role";
        case "selectEntityContainer":
        case "selectEntityContainer2":
        case "reqselectEntityContainer":
        case "reqselectEntityContainer2":
        case "reqselectEntityContainer3": return "Select Entity";
        default: return "Status";
      }
    }

    // Recalculate on resize
    window.addEventListener("resize", updateSelectedOptions);
  }

  // 🔁 Register all multi-select dropdowns (safe with check)
  const dropdownConfigs = [
    ["jurisdictionContainer", "jurisdictionDropdown", "jurisdictionSearch", "jurisdiction-checkbox", "jurisdictionSelectAll"],
    ["entityJurisdictionContainer", "entityJurisdictionDropdown", "entityJurisdictionSearch", "entityJurisdiction-checkbox", "entityJurisdictionSelectAll"],
    ["orderJurisdictionContainer", "orderJurisdictionDropdown", "orderJurisdictionSearch", "orderJurisdiction-checkbox", "orderJurisdictionSelectAll"],
    ["entityStatusContainer", "entityStatusDropdown", "entityStatusSearch", "entityStatus-checkbox", "entityStatusSelectAll"],
    ["orderStatusContainer", "orderStatusDropdown", "orderStatusSearch", "orderStatus-checkbox", "orderStatusSelectAll"],
    ["taskContainer", "taskDropdown", "taskSearch", "task-checkbox", "taskSelectAll"],
    ["orderTaskContainer", "orderTaskDropdown", "orderTaskSearch", "orderTask-checkbox", "orderTaskSelectAll"],
    ["addjurisdictionContainer", "addjurisdictionDropdown", "addjurisdictionSearch", "addjurisdiction-checkbox", "addjurisdictionSelectAll"],
    ["exaddjurisdictionContainer", "exaddjurisdictionDropdown", "exaddjurisdictionSearch", "exaddjurisdiction-checkbox", "exaddjurisdictionSelectAll"],
    ["roleContainer1", "roleDropdown1", "roleSearch1", "role-checkbox1", "roleSelectAll1"],
    ["roleContainer2", "roleDropdown2", "roleSearch2", "role-checkbox2", "roleSelectAll2"],
    ["roleContainer4", "roleDropdown4", "roleSearch4", "role-checkbox4", "roleSelectAll4"],
    ["memberroleContainer", "memberroleDropdown", "memberroleSearch", "memberrole-checkbox", "memberroleSelectAll"],
    ["annualroleContainer", "annualroleDropdown", "annualroleSearch", "annualrole-checkbox", "annualroleSelectAll", ["CEO"]],
    ["selectEntityContainer", "selectEntityDropdown", "selectEntitySearch", "selectEntity-checkbox"],
    ["selectEntityContainer2", "selectEntityDropdown2", "selectEntitySearch2", "selectEntity-checkbox2"],
    ["reqselectEntityContainer", "reqselectEntityDropdown", "reqselectEntitySearch", "reqselectEntity-checkbox"],
    ["reqselectEntityContainer2", "reqselectEntityDropdown2", "reqselectEntitySearch2", "reqselectEntity-checkbox2"],
    ["reqselectEntityContainer3", "reqselectEntityDropdown3", "reqselectEntitySearch3", "reqselectEntity-checkbox3"],
    ["statusContainer", "statusDropdown", "statusSearch", "status-checkbox", "statusSelectAll", ["Overdue", "Upcoming"]]
  ];

  dropdownConfigs.forEach(args => setupMultiSelect(...args));
});


// filter end




// external entity table start
$(document).ready(function () {
  let isExternalDashboard = typeof dashboardType !== "undefined" && dashboardType === "external_dashboard";

  let table1 = $("#ra-other-table").DataTable({
      ajax: "data4.json",
      columns: [
          { className: "dt-control", orderable: false, data: null, defaultContent: "" },
          { data: "group" },
          { data: "entity_name",
            render: function(data, type, row) {
                return `<a href="/entities/${row.entity_id}">${data}</a>`;
            }},
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
              <td >${row.type || d.type}</td>
              <td >${row.jurisdiction || d.jurisdiction}</td>
              <td >${row.registrations || d.registrations}</td>
              ${!hideDBAAndLicense ? `<td >${row.dbas ?? d.dbas}</td><td>${row.business_licenses ?? d.business_licenses}</td>` : ""}
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
          <div class="status-dot status-unknown" data-bs-toggle="tooltip" title="Unknown">1</div>

      </div>
  `;
}
// external entity end


// group select dropdown
document.addEventListener("DOMContentLoaded", function () {
  const selects = document.querySelectorAll(".groupSelect");

  function getMaxCharacters(el) {
    const span = Object.assign(document.createElement("span"), {
      style: "visibility:hidden;position:absolute;white-space:nowrap;font:" + getComputedStyle(el).font
    });
    document.body.appendChild(span);
    let maxChars = 0;
    for (let i = 5; i <= 100; i++) {
      span.textContent = "A".repeat(i);
      if (span.offsetWidth > el.clientWidth - 20) break;
      maxChars = i;
    }
    document.body.removeChild(span);
    return maxChars;
  }

  function applyTruncation() {
    selects.forEach(select => {
      const maxLength = getMaxCharacters(select);
      select.querySelectorAll("option").forEach(option => {
        option.title = option.dataset.fullText || option.text;
        option.textContent = option.title.length > maxLength
          ? option.title.slice(0, maxLength) + "..."
          : option.title;
      });
    });
  }

  // Store full text
  selects.forEach(select => {
    select.querySelectorAll("option").forEach(option => {
      option.dataset.fullText = option.text;
    });
  });

  // Delay to ensure layout is calculated correctly
  setTimeout(() => {
    applyTruncation();
    window.addEventListener("resize", applyTruncation);
  }, 100); // Try increasing if needed
});







