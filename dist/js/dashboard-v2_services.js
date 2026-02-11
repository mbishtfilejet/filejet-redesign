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
    ["#E73B18", "#FFB60C", "#00B2EB", "#00BA70"],
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
    colors = ["#E73B18", "#FFB60C", "#00B2EB", "#00BA70"];
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
        case "tagContainer": return "Filter By Tag";
        case "orderTaskContainer": return "Service";
        case "addjurisdictionContainer":
        case "exaddjurisdictionContainer": return "Select States";
        case "entityStatusContainer": return "Entity Status";
        case "roleContainer1":
        case "roleContainer2":
        case "roleContainer4":
        case "memberroleContainer": return "Role";
        case "roleContainer5":
        case "roleContainer6": return "Select Role";
        case "selectEntityContainer":
        case "selectEntityContainer2":
        case "reqselectEntityContainer":
        case "reqselectEntityContainer2":
        case "reqselectEntityContainer3": return "Select Entity";
        case "entityDetailOwnershipContainer": return "As of Today";
        case "entityDetailDirectorContainer": return "As of Today";
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
    ["entityDetailOwnershipContainer", "entityDetailOwnershipDropdown", "entityDetailOwnershipSearch", "entityDetailOwnership-checkbox"],
    ["entityDetailDirectorContainer", "entityDetailDirectorDropdown", "entityDetailDirectorSearch", "entityDetailDirector-checkbox"],
    ["entityStatusContainer", "entityStatusDropdown", "entityStatusSearch", "entityStatus-checkbox", "entityStatusSelectAll"],
    ["orderStatusContainer", "orderStatusDropdown", "orderStatusSearch", "orderStatus-checkbox", "orderStatusSelectAll"],
    ["taskContainer", "taskDropdown", "taskSearch", "task-checkbox", "taskSelectAll"],
    ["tagContainer", "tagDropdown", "tagSearch", "tag-checkbox"],
    ["orderTaskContainer", "orderTaskDropdown", "orderTaskSearch", "orderTask-checkbox", "orderTaskSelectAll"],
    ["addjurisdictionContainer", "addjurisdictionDropdown", "addjurisdictionSearch", "addjurisdiction-checkbox", "addjurisdictionSelectAll"],
    ["exaddjurisdictionContainer", "exaddjurisdictionDropdown", "exaddjurisdictionSearch", "exaddjurisdiction-checkbox", "exaddjurisdictionSelectAll"],
    ["roleContainer1", "roleDropdown1", "roleSearch1", "role-checkbox1", "roleSelectAll1"],
    ["roleContainer2", "roleDropdown2", "roleSearch2", "role-checkbox2", "roleSelectAll2"],
    ["roleContainer4", "roleDropdown4", "roleSearch4", "role-checkbox4", "roleSelectAll4"],
    ["roleContainer5", "roleDropdown5", "roleSearch5", "role-checkbox5"],
    ["roleContainer6", "roleDropdown6", "roleSearch6", "role-checkbox6"],
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
      {
        data: "entity_name",
        render: function (data, type, row) {
          return `<a href="./entities-details-v1.html">${data}</a>`;
        }
      },
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


// entity details table start
$(document).ready(function () {

  // entity detail Registration Table
  $("#entitydetails-registration-table").DataTable({
    ajax: {
      url: "data5.json",
      dataSrc: 'registration_data'
    },
    processing: true,
    serverSide: true,
    scrollX: true,
    scrollY: false,
    columns: [
      { data: "entity_name" },
      { data: "type" },
      { data: "jurisdiction" },
      { data: "registrations" },
      { data: "entity_file" },
      {
        data: "status", render: function (data, type, row) {
          return `<span class="badge badge-${row.status.class}">${row.status.label}</span>`
        }
      },
      {
        data: null, render: function (data, type, row) {
          return `<span class="d-inline-block ms-3" role="button" data-bs-toggle="modal" data-bs-target="#archiveJuridication" data-toggle="tooltip" aria-label="Archive" data-bs-original-title="Archive">
                <span class="icon icon-stop-line m-0"></span>
            </span>`;
        }
      }
    ],
    createdRow: function (row, data) {
      const isForeign = (data.registrations || '').toLowerCase() === 'foreign';
      if (isForeign) $(row).find('td').addClass('text-light-blue');
    },
    order: [[0, "asc"]],
    lengthChange: false,  // Removed pagination
    paging: false,  // Disable pagination
    info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  });

  // entity detail Business Table
  $("#entitydetails-business-table").DataTable({
    ajax: {
      url: "data5.json",
      dataSrc: 'business_license_data'
    },
    scrollX: true,
    scrollY: false,
    columns: [
      {
        data: "license_Name", render: function (data, type, row) {
          return `<a href="./business-licences.html">${data}</a>`;
        }
      },
      { data: "city_county" },
      { data: "registration_date" },
      { data: "license" },
      { data: "entity_name" },
      { data: "state" },
      { data: "renewal_date" },
      {
        data: "status", render: function (data, type, row) {
          return `<span class="badge badge-${row.status.class}">${row.status.label}</span>`
        }
      }
    ],
    order: [[0, "asc"]],
    lengthChange: false,  // Removed pagination
    paging: false,  // Disable pagination
    info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  });

  // entity detail DBAS Table
  $("#entitydetails-dbas-table").DataTable({
    ajax: {
      url: "data5.json",
      dataSrc: 'dbas_data'
    },
    scrollX: true,
    scrollY: false,
    columns: [
      {
        data: "fictitious_trade_name", render: function (data, type, row) {
          return `<a href="./trade.html">${data}</a>`;
        }
      },
      { data: "registration_date" },
      { data: "registration_number" },
      { data: "entity_name" },
      { data: "county" },
      { data: "state" },
      { data: "renewal_date" },
      {
        data: "status", render: function (data, type, row) {
          return `<span class="badge badge-${row.status.class}">${row.status.label}</span>`
        }
      }
    ],
    order: [[0, "asc"]],
    lengthChange: false,  // Removed pagination
    paging: false,  // Disable pagination
    info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  })

  // entity detail Business Table
  $("#entitydetails-ownership-table").DataTable({
    ajax: {
      url: "data5.json",
      dataSrc: 'ownership_data'
    },
    scrollX: true,
    scrollY: false,
    columns: [
      { data: "owner" },
      { data: "primary_owner" },
      { data: "ownership_perc" },
      { data: "start_date" },
      { data: "end_date" },
      {
        data: null, render: function (data, type, row) {
          return `
          <div class="d-flex align-items-center">
            <span data-toggle="tooltip" data-bs-original-title="EDIT" class="me-1 me-md-2 d-inline-block" role="button" data-bs-toggle="modal" data-bs-target="#edit-owner-modal">
              <span class="icon icon-entity-edit m-0"></span>
            </span>
            <span data-toggle="tooltip" data-bs-original-title="DELETE" class="me-1 me-md-2 d-inline-block" role="button" data-bs-toggle="modal" data-bs-target="#delete-modal">
              <span class="icon icon-entity-delete m-0"></span>
            </span>
          </div>
          `
        }
      }
    ],
    order: [[0, "asc"]],
    lengthChange: false,  // Removed pagination
    paging: false,  // Disable pagination
    info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  });

  // entity detail Director Table
  $("#entitydetails-director-table").DataTable({
    ajax: {
      url: "data5.json",
      dataSrc: 'director_data'
    },
    scrollX: true,
    scrollY: false,
    columns: [
      { data: "name" },
      { data: "role" },
      { data: "email" },
      { data: "start_date" },
      { data: "end_date" },
      {
        data: null, render: function () {
          return `<input class="d-flex form-check-input" type="checkbox" />`;
        }
      },
      {
        data: null, render: function () {
          return `
          <div class="d-flex align-items-center">
            <span data-toggle="tooltip" data-bs-original-title="EDIT" class="me-1 me-md-2 d-inline-block" role="button" data-bs-toggle="modal" data-bs-target="#edit-stakeholder-modal" aria-label="editStakeHolder"">
              <span class="icon icon-entity-edit m-0"></span>
            </span>
            <span data-toggle="tooltip" data-bs-original-title="DELETE" class="me-1 me-md-2 d-inline-block" role="button" data-bs-toggle="modal" data-bs-target="#delete-modal">
              <span class="icon icon-entity-delete m-0"></span>
            </span>
          </div>
          `;
        }
      }
    ],
    order: [[0, "asc"]],
    lengthChange: false,  // Removed pagination
    paging: false,  // Disable pagination
    info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  });

  $('#entitydetails-opentask-table').DataTable({
    scrollX: true,
    scrollY: false,
    order: [[0, "asc"]],
    lengthChange: false,  // Removed pagination
    paging: false,  // Disable pagination
    info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  })

  $('#entitydetails-orders-table').DataTable({
    scrollX: true,
    scrollY: false,
    order: [[0, "asc"]],
    lengthChange: false,  // Removed pagination
    paging: false,  // Disable pagination
    info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  })

  // Trigger or route to associated tabs
  $('.tab-trigger').on('click', function () {
    const target = $(this).data('bs-target');
    $(`[data-bs-toggle="tab"][data-bs-target="${target}"]`).tab('show');
  });

});

//document table initialization code with subfolder logic
$(document).ready(function () {
  const table = $("#entitydetails-documents-table").DataTable({
    ajax: {
      url: "data5.json",
      dataSrc: 'documents_data',
    },
    createdRow: function (row, data, dataIndex) {
      $(row).addClass('parent editable-parent');
      $(row).attr('data-type', data.type)
    },
    scrollX: true,
    scrollY: false,
    columns: [
      {
        data: null, render: function (data, type, row) {
          return `<input class="d-flex form-check-input row-select" type="checkbox" value="${row?.id}">`;
        }
      },
      {
        data: "name", render: function (data, type, row) {
          return `
         <div class="d-flex align-items-center gap-3">
          <button class="dt-control ${!row?.expanded_rows ? "no-control" : ""} m-0" role="button"></button>
          <div class="d-flex align-items-center gap-2">
            <span class="icon ${row?.type === "state" ? "icon-folder-upload-danger" : "icon-folder-upload-purple"} icon-md flex-shrink-0 m-0"></span>
            <span class="input-item text-break">${data}</span>
          </div>
         </div>
        `;
        }
      },
      {
        data: "tags", render: function (data, type, row) {
          return renderTagsOnRow(data)
        }
      },
      {
        data: "modified_by", render: function (data, type, row) {
          return row.modified_by === "filejet" ? null : `<span class="text-break">${data}</span>`;
        }
      },
      {
        data: "date_modified", render: function (data, type, row) {
          return row.modified_by === "filejet" ? null : data;
        }
      },
      // {
      //   data: "sync_status", render: function (data, type, row) {
      //     return `
      //     <div class="d-flex align-items-center gap-1">
      //       <span class="icon ${data === "Synced" ? "icon-file-synced" : "icon-file-error"} icon-md m-0"></span>
      //       <span>${data}</span>
      //     </div>
      //     `;
      //   }
      // },
      {
        data: null, render: function (data, type, row) {
          if (row?.type === "custom") {
            return `
          <div class="d-flex align-items-center">
            <span role="button" tabindex="0" class="edit-content"> 
              <span data-toggle="tooltip" aria-label="EDIT" data-bs-original-title="EDIT" 
                class="icon icon-entity-edit me-1 me-md-2"></span>
            </span>
            <span role="button" tabindex="0" class="save-content"> 
              <span data-toggle="tooltip" aria-label="SAVE" data-bs-original-title="SAVE" 
                class="icon icon-save me-1 me-md-2"></span>
            </span>
            <span role="button" tabindex="0" class="delete-btn" data-bs-toggle="modal" data-bs-target="#delete-modal"> 
              <span data-toggle="tooltip" aria-label="DELETE" data-bs-original-title="DELETE" 
                class="icon icon-entity-delete me-1 me-md-2"></span>
            </span>
          </div>
          `
          }
          return null;
        }
      }
    ],
    order: [[1, "asc"]],
    lengthChange: false,  // Removed pagination
    paging: false,  // Disable pagination
    info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  });

  // Folder/SUbfolder like structure logic 
  $("#entitydetails-documents-table tbody").on("click", "td .dt-control", function (e) {
    e.preventDefault();
    e.stopPropagation();
    let tr = $(this).closest("tr");
    let dataId = tr.data('id') || "";
    let row = table.row(tr);
    let rowId = row?.data()?.id || $(tr).data('level-id');


    if (tr.hasClass("expanded-row")) {
      collapseRow(rowId);
      tr.removeClass("expanded-row");
    } else {
      let parentData = dataId ? table.row($(`tr.parent[data-id=${dataId}]`).first())?.data() : row?.data();
      const rowData = findChildData(parentData, n => n?.id === rowId);
      let expandedRowContent = formatChildRows(rowData, rowId, dataId || rowId);
      tr.after(expandedRowContent);
      tr.addClass("expanded-row");
      if (!dataId) {
        tr.attr('data-id', rowId)
      }
    }
    table.columns.adjust();
    applyAlternateRowStyling("entitydetails-documents-table");

    const parentPadding = parseInt($(tr).children('td.doc_indent').css('padding-left'), 10) || 0;
    $(`.expanded-content[data-parent="${rowId}"]`).each(function () {
      if (parentPadding === 0) return;
      $(this).children('td.doc_indent')[0].style.setProperty('padding-left', parentPadding + 30 + 'px', 'important');
    });
  });


  // Remove expand-row on sorting 
  table.on('order.dt draw.dt', function () {
    $(this).find(".expanded-row").each((_, element) => {
      element.classList.remove("expanded-row");
    });
  })

  // function to find child Data
  function findChildData(data, cb) {
    const stack = [data];
    while (stack.length) {
      const node = stack.pop();
      if (cb(node)) return node;
      if (node.expanded_rows) {
        stack.push(...node.expanded_rows);
      }
    }
    return null;
  }

  // function collapseRow based on clicked row ID
  function collapseRow(parentId) {
    $(`.expanded-content[data-parent="${parentId}"]`).each(function (index, el) {
      const row = $(el);
      if (row.hasClass("expanded-row")) {
        const subFolderId = row.data('level-id');
        collapseRow(subFolderId);
      }
      row.remove();
      row.removeClass("expanded-row")
    });
  }

  // get expanded row structure
  function formatChildRows(data, parentId, dataLevelId = "") {
    return data.expanded_rows.map((row, index, arr) =>
      `
        <tr class="expanded-content editable-parent" data-parent="${parentId}" data-level-id="${row?.id || ""}" data-id="${dataLevelId}" data-type="${row.type}">
          <td>
            <input class="d-flex form-check-input row-select" type="checkbox" value="${row?.id}">
          </td>
          <td class="doc_indent">
            ${row?.type !== "file" ?
        `<div class="d-flex align-items-center gap-3">
              <button class="dt-control ${!row?.expanded_rows ? "no-control" : ""} m-0" role="button"></button>
              <div class="d-flex align-items-center gap-2">
                  <span class="icon icon-folder-upload-purple icon-md flex-shrink-0 m-0"></span>
                  <span class="input-item text-break">${row.name}</span>
              </div>
          </div>`:
        `<div class="d-flex align-items-center gap-2">
                    <span class="icon icon-document-gray icon-md flex-shrink-0 m-0"></span>
                    <span class="input-item text-break">${row.name}</span>
                </div>`}
              </td>
              <td >${renderTagsOnRow(row.tags)}</td>
              <td> <span class="text-break">${row.modified_by || data.modified_by}</span></td>
              <td >${row.date_modified}</td>
              ${null && `<td >
                <div class="d-flex align-items-center gap-1">
                  <span class="icon ${row.sync_status === "Synced" ? "icon-file-synced" : "icon-file-error"} icon-md m-0"></span>
                  <span>${row.sync_status}</span>
                </div>
              </td>`}
              <td>
                <div class="d-flex align-items-center">
                  <span role="button" tabindex="0" class="edit-content"> 
                    <span data-toggle="tooltip" aria-label="EDIT" data-bs-original-title="EDIT" 
                    class="icon icon-entity-edit me-1 me-md-2 ${row?.type !== "file" ? row.isEditable ? "" : "icon-disabled" : ""}"></span>
                  </span>
                  <span role="button" tabindex="0" class="save-content"> 
                    <span data-toggle="tooltip" aria-label="SAVE" data-bs-original-title="SAVE" 
                      class="icon icon-save me-1 me-md-2"></span>
                  </span>
                  <span role="button" tabindex="0" class-"delete-btn" data-bs-toggle="modal" data-bs-target="#delete-modal"> 
                    <span data-toggle="tooltip" aria-label="DELETE" data-bs-original-title="DELETE" 
                      class="icon icon-entity-delete me-1 me-md-2 ${row?.type !== "file" ? row.isDeleteable ? "" : "icon-disabled" : ""}"></span>
                  </span>
                </div>
              </td>
          </tr>
      `
    ).join("");
  }


  //function to render tags
  function renderTagsOnRow(tagdata, maxTag = 4) {
    const tagWrapper = document.createElement("div");
    tagWrapper.className = "d-flex gap-1 align-items-center";

    tagdata.slice(0, maxTag).forEach((value, index) => {
      const span = document.createElement("span");
      span.innerHTML = `
        <span class="badge text-black" style="background-color:${value.tagColor}">${value.tagName}</span>
      `;
      tagWrapper.appendChild(span);
    })

    if (tagdata.length > maxTag) {
      const span = document.createElement("span");
      span.innerHTML = `
        <span class="badge text-black" style="background-color:#E6E8EC;">+${tagdata.length - maxTag}</span>
      `;
      tagWrapper.appendChild(span);
    }
    return tagWrapper.outerHTML;
  }

})


// filjet services table initialization code 
$(document).ready(function () {
  const table = $("#entitydetails-services-table").DataTable({
    ajax: {
      url: "data5.json",
      dataSrc: 'services_data'
    },
    scrollX: true,
    scrollY: false,
    columns: [
      {
        data: "entity_name", render: function (data, type, row) {
          return `
         <div class="d-flex align-items-center gap-3">
          <button class="dt-control ${!row?.expanded_rows ? "no-control" : ""} m-0" role="button"></button>
          <span class="input-item">${data}</span>
         </div>
        `;
        }
      },
      { data: "jurisdiction_count" },
      {
        data: "annual_report_date", render: function (data, type, row) {
          return `
          <div class="d-flex align-items-center gap-2">
            <input id="" class="d-flex form-check-input" type="checkbox" checked />
            <label class="m-0 fw-normal">${data}</label>
          </div>
          `;
        }
      },
      {
        data: "registered_date", render: function (data, type, row) {
          return `
          <div class="d-flex align-items-center gap-2">
            <input id="" class="d-flex form-check-input" type="checkbox" checked />
            <label class="m-0 fw-normal">${data}</label>
          </div>
          `;
        }
      },
      { data: "dba_count" },
      { data: "business_license_count" }
    ],
    order: [[0, "asc"]],
    lengthChange: false,  // Removed pagination
    paging: false,  // Disable pagination
    info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
  })

  $("#entitydetails-services-table tbody").on("click", "td .dt-control", function () {
    let tr = $(this).closest("tr");
    let row = table.row(tr);
    let rowId = row.data().id;

    if (tr.hasClass("expanded-row")) {
      $(`.expanded-content[data-parent="${rowId}"]`).remove();
      tr.removeClass("expanded-row");
    } else {
      let expandedRows = formatExpandedRows(row.data(), rowId);
      tr.after(expandedRows);
      tr.addClass("expanded-row");
    }

    table.columns.adjust();
    applyAlternateRowStyling("entitydetails-services-table");
  });

  // Remove expand-row on sorting 
  table.on('order.dt draw.dt', function () {
    $(this).find(".expanded-row").each((_, element) => {
      element.classList.remove("expanded-row");
    });
  })

  function formatExpandedRows(d, rowId) {
    return d.expanded_rows.map((row, index, arr) => `
          <tr class="expanded-content" data-parent="${rowId}">
              <td>
                ${row.entity_name}
              </td>
              <td>${row.jurisdiction}</td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <input id="" class="d-flex form-check-input" type="checkbox" checked />
                  <label class="m-0 fw-normal">${row.annual_report_date}</label>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <input id="" class="d-flex form-check-input" type="checkbox" checked />
                  <label class="m-0 fw-normal">${row.registered_date}</label>
                </div>
              </td>
              <td>${row.dbas_name}</td>
              <td>${row.business_license_name}</td>
          </tr>
      `).join("");
  }


})


// function to keep alternative row design
function applyAlternateRowStyling(id) {
  const rows = $(`#${id} tbody tr`);
  rows.removeClass('odd even');
  rows.each(function (index) {
    $(this).addClass(index % 2 === 0 ? 'odd' : 'even');
  });
}

//adjusting table on tabs change
$(document).on('shown.bs.tab shown.bs.modal', function () {

  const entityDetailsTables = ["entitydetails-registration-table", "entitydetails-business-table", "entitydetails-dbas-table",
    "entitydetails-ownership-table", "entitydetails-documents-table", "entitydetails-director-table", "entitydetails-opentask-table", "entitydetails-orders-table", "entitydetails-services-table"]

  entityDetailsTables.forEach((tableId) => $(`#${tableId}`).DataTable().columns.adjust())


  const tabsSelect = [
    { id: "editOwner-select_1", placeholder: "Select Entity" },
    { id: "editOwner-select_2", placeholder: "Select Entity Type" },
    { id: "editOwner-select_3", placeholder: "Select State" },
    { id: "addOwner-select_1", placeholder: "Select Entity" },
    { id: "addOwner-select_2", placeholder: "Select Entity Type" },
    { id: "addOwner-select_3", placeholder: "Select State" },
  ]

  tabsSelect.forEach(select => {
    $(`.tab-content #${select.id}.select2`).select2({
      dropdownParent: $(`#${select.id}`).closest("fieldset"),
      placeholder: select.placeholder,
      allowClear: true
    });
  })

  $('.tab-content .select2').on('select2:open select2:select', () => {
    $('.select2-search__field').attr('placeholder', 'Search...');
  });
});


// context menu logic start
$(function () {
  const contextMenu = $('#contextmenu').get(0);
  $(".entityDetailDocumentsTableV2 .dataTables_scrollBody").on("contextmenu", "tr>td:nth-child(2)", function (e) {
    e.preventDefault();
    e.stopPropagation()
    this.hidden = false;
    contextMenu.classList.add("show");
    const menuWidth = contextMenu.offsetWidth;
    const menuHeight = contextMenu.offsetHeight;

    // Get viewport dimensions
    let windowWidth = window.innerWidth || document.documentElement.clientWidth;
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calculating the 'left' position
    let leftPos = e.clientX;
    if (leftPos + menuWidth > windowWidth) {
      leftPos = e.clientX - menuWidth;
    }

    // Calculating the 'top' position
    let topPos = e.clientY;
    if (topPos + menuHeight > windowHeight) {
      topPos = e.clientY - menuHeight;
    }

    // Set the menu's position
    contextMenu.style.left = `${leftPos}px`;
    contextMenu.style.top = `${topPos}px`;
  });

  $(this).on('contextmenu click scroll', function (e) {
    if (contextMenu.classList.contains("show")) {
      contextMenu.classList.remove('show');
    }
  })
});

// Logic for intializeing date and format date 
$(document).ready(function () {

  function formatAsOfDate(date) {
    if (!date) return '';
    const today = moment().startOf('day');
    const picked = moment(date).startOf('day');
    if (picked.isSame(today, 'day')) {
      return 'As of Today';
    }
    return 'As of ' + picked.format('MM/DD/YYYY');
  }

  function initializeTableFilterDatePicker(selector) {
    let $dateInput = $(selector);
    $dateInput.datepicker({
      format: 'mm/dd/yyyy',
      autoclose: true
    })
    $dateInput.on('hide', function () {
      const date = $(this).datepicker('getDate');
      $(this).val(formatAsOfDate(date));
      $(this).closest('.asofcalender-wrapper').find('.remove-calenderdate').show();
    });
  }

  initializeTableFilterDatePicker('.asofdatepicker');

  $(this).on('click', ".remove-calenderdate", function () {
    const $wrapper = $(this).closest('.asofcalender-wrapper');
    const $input = $wrapper.find('.asofdatepicker');

    // Clear input value
    $input.val('');

    $(this).hide();
  })
});

//handle row click to show document/folder information
$(document).ready(function () {
  let activeRow = null;
  $(".entityDetailDocumentsTableV2 tbody").on('click', 'tr', function (e) {
    if ($('#contextmenu').hasClass('show')) return;
    if ($(e.target).closest('input[type="checkbox"], .edit-content, .save-content, .delete-btn').length) return;
    if (activeRow) {
      $(activeRow).removeClass("rowSelect")
    }
    activeRow = this;
    if ($(activeRow).attr('data-type') === "file") {
      $('#documentflyout-modal').modal("show");
    } else {
      $('#folderflyout-modal').modal("show");
    }

    $(activeRow).addClass("rowSelect");
  });

  //Listen for the modal close event
  $('#documentflyout-modal').on('hidden.bs.modal', function () {
    // When the modal is completely hidden, remove the class from the active row
    if (activeRow) {
      $(activeRow).removeClass('rowSelect');
      activeRow = null; // Clear the reference
    }
  });

  $('#folderflyout-modal').on('hidden.bs.modal', function () {
    // When the modal is completely hidden, remove the class from the active row
    if (activeRow) {
      $(activeRow).removeClass('rowSelect');
      activeRow = null; // Clear the reference
    }
  })
})

// function for adding editable functionality to folder/docuemnt name and make editable content 
function editSaveableContent() {
  $(document).off('click', '.edit-content').on('click', '.edit-content', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.tooltip').remove();
    $(this).hide();
    $(this).parents('.editable-parent').find('.input-item').attr('contentEditable', true).css('border', '1px solid #ccc').focus();
    $(this).parents('.editable-parent').find('.save-content').show();
  });

  $(document).off('click', '.save-content').on('click', '.save-content', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).hide();
    const $editableItem = $(this).parents('.editable-parent').find('.input-item');
    $editableItem.removeAttr('contentEditable', true).css('border', '0px solid #ccc');
    if ($editableItem.scrollTop()) $editableItem.animate({ scrollTop: 0 }, 100);
    $(this).parents('.editable-parent').find('.edit-content').show();
  });
}

editSaveableContent();

// code for multiple file upload and drag & drop
function multipleFileUploadInput() {
  document.querySelectorAll(".dropupload-zone__input").forEach(function (inputElement, index) {
    const dropZoneElement = inputElement.closest('.dropupload-zone');

    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateUploadFileList(dropZoneElement, index, inputElement.files);
      }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("dragupload-over");
    })

    $(dropZoneElement).on("dragend dragleave", function () {
      dropZoneElement.classList.remove("dragupload-over");
    })

    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
      if (e.dataTransfer?.files?.length) {
        updateUploadFileList(dropZoneElement, index, e.dataTransfer.files);
      }

      dropZoneElement.classList.remove("dragupload-over");
    });
  });
}



// function for listing upload/drag & drop files
function updateUploadFileList(dropZoneElement, index, files) {
  let mainWrapperElement = dropZoneElement.closest("form")
  let uploadFileListElement = document.querySelector(`#uploadFilelist_${index}`);

  if (!uploadFileListElement) {
    uploadFileListElement = document.createElement("div");
    uploadFileListElement.className = "uploadfilelist-wrapper m-0 mb-4 p-3 bg-white rounded-2";
    uploadFileListElement.id = `uploadFilelist_${index}`;
    mainWrapperElement.append(uploadFileListElement)
  }
  const htmlContent = [...files].map((item, index) => {
    let filename = item.name.split(".");
    let ext = filename.pop();
    filename = filename.join("")
    return `<div class="uploadfilelist-item editable-parent">
              <div class="uploadfile-info">
                <span class="icon ${ext === "pdf" ? "icon-pdf-file icon-lg" : "icon-document-gray icon-lg"} m-0"></span>
                <div class="d-flex flex-column"> 
                  <span class="text-capitalize input-item">${filename}</span>
                  <span class="context">Loream iplslum</span>
                </div>
              </div>
              <div class="action">
                <span class="icon icon-new-edit edit-content icon-lg m-0" data-toggle="tooltip"
                  aria-label="EDIT" data-bs-original-title="EDIT"></span>
                <span class="icon icon-save-purple save-content icon-lg m-0"
                  data-toggle="tooltip" aria-label="SAVE" data-bs-original-title="SAVE"></span>
                <span class="icon icon-new-delete icon-lg m-0" data-toggle="tooltip"
                  aria-label="DELETE" data-bs-original-title="DELETE"></span>
              </div>
            </div>`;
  }).join("");
  uploadFileListElement.innerHTML += htmlContent;
}
multipleFileUploadInput();

Dropzone.autoDiscover = false;

$(function () {
  $('[data-plugin="dropzone"]').each(function () {
    let dropzoneContainer = $(this)
    let previewSelector = dropzoneContainer.data('previewsContainer');
    let uploadTemplate = dropzoneContainer.data('uploadPreviewTemplate');

    console.log(dropzoneContainer, previewSelector)

    let opts = {
      url: '/',
      previewsContainer: previewSelector,
      previewTemplate: $(uploadTemplate).html(),
      init: function () {
        this.on('addedfile', function (file) {
          const previewEl = file.previewElement;
          if (!previewEl) return;

          const typeEl = previewEl.querySelector('[data-type]');
          if (!typeEl) return;


          let iconClass = '';

          if (file.type === 'application/pdf') {
            iconClass = 'icon-pdf-file';
          }
          else {
            iconClass = 'icon-document-gray';
          }

          typeEl.classList.add(iconClass);

          $(previewSelector).removeClass('d-none');
        }).on('uploadprogress', function (file, progress, bytesSent) {
        }).on('removedfile', function (file) {
        })
      }

    }


    dropzoneContainer.dropzone(opts);
  });

})

// function to handle tags creation and apply custom tags with remove option
$(document).ready(function () {
  $(".tag-color-picker").on('input change', function (e) {
    const $picker = $(this);
    const tagContainer = $picker.closest(".modal-tags-container");
    const tagColorPicker_wrapper = $picker.closest(".tag-colorPicker-wrapper");
    const colorType = $picker.data('color-type');
    const svg = tagColorPicker_wrapper.find('.tagSvg');
    const gradientID = svg.find('linearGradient').attr('id');

    const pickedColor = $picker.val() || "";
    const fillColor = pickedColor || `url(#${gradientID})`

    svg.find('.svgBackground').attr("fill", fillColor);

    const colors = tagContainer.data('colors') || {};
    colors[colorType] = pickedColor;
    tagContainer.data('colors', colors);
  });

  $(".addtag-btn").on('click', function () {
    const tagContainer = $(this).closest(".modal-tags-container");
    const colors = tagContainer.data('colors') || {};
    const svg = tagContainer.find(".tagSvg");
    const tagCreateInput = tagContainer.find(".tagfields input");
    const tagBadgeWrapper = tagContainer.find(".tagsbadge-wrapper");
    const svgBackground = svg.find('.svgBackground');

    const tagValue = tagCreateInput.val().trim();
    const bgColor = colors.bg;
    const textColor = colors.text;
    const gradientID = svg.find('linearGradient').attr('id');

    const existingTags = tagBadgeWrapper.children().map((_, el) => $(el).data('value')).get();

    // reset state
    const resetState = () => {
      svgBackground.attr("fill", `url(#${gradientID})`);
      tagCreateInput.val("");
      tagContainer.data('colors', {});
    }

    if (existingTags.length === 20) {
      resetState();
      return

    };

    if (existingTags.includes(tagValue)) {
      resetState();
      return;
    };

    if (bgColor && tagValue && textColor) {
      const newTag = `<div class="badge text-black position-relative" data-value="${tagValue}" style="background-color:${bgColor}; color:${textColor} !important;">${tagValue} <span class="position-absolute icon icon-remove-tag m-0 remove-tag"></span></div>`;
      tagBadgeWrapper.append(newTag);
      resetState();
    }
  })

  $(this).on('click', ".remove-tag", function () {
    $(this).closest('.badge').remove();
  })
})