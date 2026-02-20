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
      if (window.innerWidth < 1600 && ["sopStatusContainer", "sopCheckContainer", "SOPjurisdictionContainer", "RAjurisdictionContainer"].includes(containerId)) return 1;

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

    // add search field only when search is allowed
    if (!dropdown.classList.contains('search-disabled')) {
      dropdown.prepend(searchInput);
    }

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
        case "RAjurisdictionContainer":
        case "SOPjurisdictionContainer":
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
        case "registeredAgentContainer": return "Filejet and Others";
        case "sopCheckContainer": return "Has Check";
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
    ["statusContainer", "statusDropdown", "statusSearch", "status-checkbox", "statusSelectAll", ["Overdue", "Upcoming"]],
    ["RAjurisdictionContainer", "RAjurisdictionDropdown", "RAjurisdictionSearch", "RAjurisdiction-checkbox", "RAjurisdictionSelectAll"],
    ["SOPjurisdictionContainer", "SOPjurisdictionDropdown", "SOPjurisdictionSearch", "SOPjurisdiction-checkbox", "SOPjurisdictionSelectAll"],
    ["registeredAgentContainer", "registeredAgentDropdown", "registeredAgentSearch", "registeredAgent-checkbox"],
    ["sopStatusContainer", "sopStatusDropdown", "sopStatusSearch", "sopStatus-checkbox"],
    ["sopCheckContainer", "sopCheckDropdown", "sopCheckSearch", "sopCheck-checkbox"]
  ];

  dropdownConfigs.forEach(args => setupMultiSelect(...args));
});

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


//adjusting table on tabs change
$(document).on('shown.bs.tab shown.bs.modal', function () {

  const SOPTables = ["sopNotification-table", "registeredAgent-table"]

  SOPTables.forEach((tableId) => $(`#${tableId}`).DataTable().columns.adjust())

});


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
          ${row.acknowledged_by ? '<button data-bs-toggle="modal" data-bs-target="#sopDocView-modal" class="btn btn-secondary p-2 m-0">View</button>' : '<button data-bs-toggle="modal" data-bs-target="#sopAcknowledge-modal" class="btn btn-secondary btn-acknowledge p-2 m-0">Acknowledge</button>'}
              <span class="icon icon-download-dark icon-sm m-0"></span>
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
    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });
})
