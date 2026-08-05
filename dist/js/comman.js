function highlightTabs(tabparent) {
    if (!tabparent) return;
    const activeTab = tabparent.find('.nav-link.active');
    const tabOffset = activeTab.position();

    tabparent.css({
        '--tab-left': tabOffset.left + 'px',
        '--tab-top': tabOffset.top + 'px',
        '--tab-width': activeTab.outerWidth() + 'px',
        '--tab-height': activeTab.outerHeight() + 'px'
    })
}

function multiSelectRowCheckbox(tableContainer, no_indeterminate_phase = false, key_selected = "", cta_class = "") {

    // row checkbox event handle
    const cacheCheckBox = cacheChildCheckboxState();
    tableContainer.data('cacheCheckBox', cacheCheckBox);
    const dataTable = tableContainer.DataTable();

    // checkbox event
    const table_wrapper = tableContainer.closest(".dataTables_wrapper")
    table_wrapper.on('change', '.row-select', function () {
        const checkbox = $(this);
        const row = checkbox.closest('tr');
        const td = checkbox.closest('td');
        const columnValue = td.data('value');
        const column = checkbox.data('column');
        const isChecked = $(this).prop("checked");

        const parentId = row.data('id') || row.data('parent');

        if (row.hasClass('expanded-content')) {
            cacheCheckBox.setChildValue(parentId, column, columnValue, isChecked)
        }

        if (row.hasClass('expanded-row') || row.hasClass('parent')) {
            const rowData = dataTable.row(row).data();

            if (!row.find('.row-select').prop('indeterminate')) {
                rowData.expanded_rows.forEach((value) => {
                    let correctValue = typeof (value) !== 'object' && value !== null ? value : value[key_selected]
                    cacheCheckBox.setChildValue(parentId, column, correctValue, isChecked)
                })
            }
        }


        if (row.hasClass('expanded-row')) {
            toggleChildren(isChecked, parentId, column);
        }

        if (row.hasClass('expanded-content')) {
            updateParent(parentId, column);
        }
        updateAllState(column, checkbox, isChecked);
    })

    //update All State Checkbox

    function updateAllState(column, checkbox = '', isChecked = false) {

        const checkboxes = table_wrapper.find(`tr:not(.group-row):not(.row-disabled) td .row-select[data-column="${column}"]`);
        if (checkbox && checkbox.hasClass('allgroup-select')) {
            checkboxes.prop({
                checked: isChecked,
                indeterminate: false
            }).trigger('change');
            return;
        }

        const groupallcheckbox = table_wrapper.find(`tr.group-row .allgroup-select[data-column="${column}"]`)

        const totalCheckbox = checkboxes.length;
        const checkedCheckbox = checkboxes.filter(':checked').length;

        const hasIndeterminate = checkboxes.filter(function () { return $(this).prop('indeterminate'); }).length > 0;

        if (checkedCheckbox === 0 && !hasIndeterminate) {
            groupallcheckbox.prop({
                checked: false,
                indeterminate: false
            });
        } else if (checkedCheckbox === totalCheckbox && !hasIndeterminate) {
            groupallcheckbox.prop({
                checked: true,
                indeterminate: false
            });
        } else {
            groupallcheckbox.prop({
                checked: false,
                indeterminate: true
            });
        }
        if (cta_class) {

            hideShowCTA(cta_class, checkedCheckbox ?? 0);
        }
    }

    // update children checkbox
    function toggleChildren(isChecked, parentId, column) {
        if (!parentId) return;
        const children = tableContainer.find(`tr.expanded-content[data-parent="${parentId}"]:not(.row-disabled)`);

        if (!children.length) return;

        const childValidCheckBox = children.find(
            `td .row-select[data-column="${column}"]`
        );

        childValidCheckBox.prop('checked', isChecked)
    }



    // update parent
    function updateParent(parentId, column) {

        if (!parentId) return;

        const children = tableContainer.find(`tr[data-parent="${parentId}"]:not(.row-disabled)`);

        if (!children.length) return;

        const validCheckBox = children.find(
            `td .row-select[data-column="${column}"]`
        );

        if (!validCheckBox.length) return;

        const totalCheckbox = validCheckBox.length;
        const checkedCheckbox = validCheckBox.filter(':checked').length;

        const parentCheckbox = tableContainer.find(
            `tr.expanded-row[data-id="${parentId}"] .row-select[data-column="${column}"]`
        );

        if (!parentCheckbox.length) return;

        if (checkedCheckbox === 0) {
            parentCheckbox.prop({
                checked: false,
                ...(no_indeterminate_phase ? {} : { indeterminate: false })
            });

        } else if (checkedCheckbox === totalCheckbox) {
            parentCheckbox.prop({
                checked: true,
                ...(no_indeterminate_phase ? {} : { indeterminate: false })
            });

        } else {
            parentCheckbox.prop({
                checked: false,
                ...(no_indeterminate_phase ? {} : { indeterminate: true })
            });

        }
    }


    $(document).ready(function () {
        dataTable.on('draw', function () {
            const tbodyCheckbox = tableContainer.find('td');
            const thCheckbox = tableContainer.find('.allgroup-select');

            tableContainer.find('tr:not(.row-disabled) td .row-select').each(function () {
                const checkbox = $(this);
                const isIndeterminate = checkbox.data('someChecked');
                if (isIndeterminate) {
                    checkbox.prop('indeterminate', isIndeterminate)
                }
            });

            const columnNames = thCheckbox.toArray().map(th => $(th).data('column'));
            columnNames.forEach(column => updateAllState(column, '', false))
        })
    })

    function hideShowCTA(cta_class, checkedCheckboxCount) {
        const cta = tableContainer.closest(".tab-pane").find(cta_class);
        const hasNoCheckedCheckbox = checkedCheckboxCount === 0;
        cta.toggleClass("d-none", hasNoCheckedCheckbox)
    }


}

//cache row child state

function cacheChildCheckboxState() {
    const cache = new Map();

    function getKey(parentId, column) {
        return `${parentId}_${column}`;
    }

    function cached(parentId, column) {
        const key = getKey(parentId, column);

        if (!cache.has(key)) {
            cache.set(key, {
                childValue: {}
            })
        }

        return cache.get(key)
    }

    function setChildValue(parentId, column, childId, checkboxValue) {

        const entry = cached(parentId, column);
        entry.childValue[childId] = checkboxValue;
    }

    function getChildValue(parentId, column, childId) {

        const entry = cached(parentId, column);
        return entry.childValue[childId] ?? false;
    }

    function deleteKeyValue(parentId, column) {
        const key = getKey(parentId, column);
        if (cache.has(key)) {
            cache.delete(key)
        }
    }

    return {
        setChildValue,
        getChildValue,
        deleteKeyValue,
        cache
    }
}


function formatCurrency(amount, locale = 'en-US', currency = 'USD') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(amount)
}


$(function () {

    const navTabList = {};

    const startIndexMap = {};

    const createNavItem = ({ id, targetId, startDate, endDate }) => ` 
    <li class="nav-item" role="presentation">
        <button class="nav-link"
            id="${id}" 
            data-bs-toggle="tab" 
            data-bs-target="#${targetId}"
            aria-controls="${targetId}"
            type="button" 
            role="tab">
            <span class="tab-text">${startDate} - ${endDate}</span>
            <span class="mandatory">*</span>
        </button>
    </li>`;

    const getViewPerPage = () => window.innerWidth < 992 ? 2 : 3;

    function getSectionData(element) {
        const splitSection = $(element).closest(".split_tab_section");

        if (!splitSection.length) {
            return {};
        }

        return {
            splitSection,
            sectionId: splitSection.attr("id"),
            navTabs: splitSection.find(".nav-tabs"),
            tabContent: splitSection.find(".tab-content"),
            leftBtn: splitSection.find(".left-btn"),
            rightBtn: splitSection.find(".right-btn")
        };
    }

    function renderTabs(sectionId, activeId) {

        const splitSection = $(`#${sectionId}`);
        if (!splitSection.length) return;

        const navTabs = splitSection.find('.nav-tabs');

        navTabs.empty();

        splitSection.find('.tab-pane').removeClass('active show');

        navTabList[sectionId]
            .slice(startIndexMap[sectionId], startIndexMap[sectionId] + getViewPerPage())
            .forEach((tab) => {
                navTabs.append(createNavItem(tab));
            });

        showTab(navTabs, activeId, sectionId);
    }

    const generateId = () =>
        `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    $('.add-split').on('click', function () {
        let { splitSection, sectionId, navTabs, rightBtn, leftBtn, tabContent } = getSectionData(this);

        if (!splitSection) return;


        const VIEW_PER_PAGE = getViewPerPage();

        if (!sectionId) {
            sectionId = `split-section-${generateId()}`;
            splitSection.attr('id', sectionId);
        }

        const uniqueId = generateId();

        const addSplitBtn = $(this);

        const new_tabPane = splitSection
            .find("[data-template]")
            .clone()
            .removeAttr("data-template")
            .removeClass("d-none")
            .attr("id", `tab-pane-${uniqueId}`);

        if (!navTabList[sectionId]?.length) {
            navTabList[sectionId] = navTabs
                .find(".nav-link")
                .map(function () {
                    const [startDate, endDate] = $(this).find('.tab-text').text().trim().split(" - ")
                    return {
                        id: this.id,
                        targetId: $(this).attr("data-bs-target").replace("#", ""),
                        startDate,
                        endDate
                    }
                }).get();

            startIndexMap[sectionId] = 0;
        }

        const activeIndex = getActiveIndex(sectionId);

        const tabList = navTabList[sectionId];

        // Hide/Show Alert input logic just for reference, logic will be based on backend
        if (tabList.length === 1) {
            new_tabPane.find('[data-temp-warning]').remove();
        }
        // Hide/Show Alert input logic End

        const currentTab = tabList[activeIndex];

        const { firstRange, secondRange } = splitDateRange(currentTab);

        if (!firstRange) {
            return;
        }

        currentTab.startDate = firstRange.startDate;
        currentTab.endDate = firstRange.endDate;

        navTabs.find(`#${currentTab.id} .tab-text`).text(`${currentTab.startDate} - ${currentTab.endDate}`);

        const newTab = {
            id: `tab-${uniqueId}`,
            targetId: `tab-pane-${uniqueId}`,
            startDate: secondRange.startDate,
            endDate: secondRange.endDate
        };


        // Insert after currently active tab instead of pushing to end
        tabList.splice(activeIndex + 1, 0, newTab);


        new_tabPane.find('[data-temp-warning]').removeAttr("data-temp-warning");
        new_tabPane.find('[data-temp-startdate]').removeAttr("data-temp-startdate").addClass('splitDatePicker');
        new_tabPane.find('[data-temp-table]')
            .removeAttr("data-temp-table")
            .addClass('long-data-table-listing');
        new_tabPane.find('[data-temp-shareInput]').removeAttr('data-temp-shareInput').attr('id', `split-shares-inputs-${uniqueId}`)
        new_tabPane.find('[data-temp-addShare]').removeAttr('data-temp-addShare').attr('data-bs-target', `#split-shares-inputs-${uniqueId}`)


        tabContent.append(new_tabPane);
        console.log(activeIndex)

        if (tabList.length > VIEW_PER_PAGE) {
            const newTabIndex = activeIndex + 1;
            startIndexMap[sectionId] = Math.min(
                Math.max(
                    newTabIndex - VIEW_PER_PAGE + 1, 0
                ),
                tabList.length - VIEW_PER_PAGE
            );
            console.log(startIndexMap[sectionId])
            renderTabs(sectionId, `${newTab.id}`);
        } else {
            navTabs.find('.nav-item').eq(activeIndex).after(createNavItem(newTab));
            bootstrap.Tab
                .getOrCreateInstance(navTabs.find(`#${newTab.id}`)[0])
                .show();
        }

        const totalTabs = tabList.length;

        rightBtn.toggleClass('d-none', totalTabs <= VIEW_PER_PAGE);
        leftBtn.toggleClass('d-none', totalTabs <= VIEW_PER_PAGE);
        addSplitBtn.toggleClass('ms-auto', totalTabs > VIEW_PER_PAGE);

    });

    function getActiveIndex(sectionId) {
        const activeId = $(`#${sectionId}`).find('.nav-link.active').attr('id');
        return navTabList[sectionId]
            .findIndex(tab => tab.id === activeId);
    }

    function showTab(navTabs, tabId, sectionId) {
        bootstrap.Tab
            .getOrCreateInstance(navTabs.find(`#${tabId}`)[0])
            .show();

        updateNavButtons(sectionId);
    }

    function updateNavButtons(sectionId) {

        const splitSection = $(`#${sectionId}`);
        const total = navTabList[sectionId].length;

        let activeIndex = getActiveIndex(sectionId);

        splitSection.find('.left-btn')
            .prop('disabled', activeIndex <= 0);

        splitSection.find('.right-btn')
            .prop('disabled', activeIndex >= total - 1);
    }


    $('.right-btn').on('click', function () {

        let { splitSection, sectionId, navTabs } = getSectionData(this);

        if (!splitSection) return;

        const viewPerPage = getViewPerPage();
        const lastVisibleIndex = startIndexMap[sectionId] + viewPerPage - 1;

        let activeIndex = getActiveIndex(sectionId);
        activeIndex++;

        const tabsList = navTabList[sectionId];

        if (activeIndex >= tabsList.length) return;

        let new_activeElementId = tabsList[activeIndex].id;

        if (activeIndex > lastVisibleIndex) {
            startIndexMap[sectionId]++;
            renderTabs(sectionId, new_activeElementId)
        } else {
            showTab(navTabs, new_activeElementId, sectionId);
        }
    });

    $('.left-btn').on('click', function () {
        let { splitSection, sectionId, navTabs } = getSectionData(this);

        if (!splitSection) return;

        const viewPerPage = getViewPerPage();

        let activeIndex = getActiveIndex(sectionId);
        activeIndex--;

        if (activeIndex < 0) return;

        let new_activeElementId = navTabList[sectionId][activeIndex].id;

        if (startIndexMap[sectionId] > activeIndex) {
            startIndexMap[sectionId]--;
            renderTabs(sectionId, new_activeElementId)
        } else {
            showTab(navTabs, new_activeElementId, sectionId);
        }

    });

    function formatDate(date) {
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric"
        });
    }


    function splitDateRange(activeTab, prevTab = "", splitbyDate = "") {

        const startDate = new Date(activeTab.startDate);
        const endDate = new Date(activeTab.endDate);

        if (!splitbyDate) {
            const totalMonths =
                (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                (endDate.getMonth() - startDate.getMonth()) + 1;

            if (totalMonths === 1) {
                return {};
            }

            const firstHalfMonths = Math.floor(totalMonths / 2);

            // End of first range (last day of nth month)
            const firstEnd = new Date(
                startDate.getFullYear(),
                startDate.getMonth() + firstHalfMonths,
                0
            );

            // Start of second range (1st day of next month)
            const secondStart = new Date(
                firstEnd.getFullYear(),
                firstEnd.getMonth() + 1,
                1
            );

            return {
                firstRange: {
                    "startDate": formatDate(startDate),
                    "endDate": formatDate(firstEnd)
                },
                secondRange: {
                    "startDate": formatDate(secondStart),
                    "endDate": formatDate(endDate)
                },
            };
        } else {
            const startDate = new Date(prevTab.startDate);
            const secondStart = new Date(splitbyDate);


            const firstEnd = new Date(secondStart);
            firstEnd.setDate(firstEnd.getDate() - 1);

            return {
                firstRange: {
                    "startDate": formatDate(startDate),
                    "endDate": formatDate(firstEnd)
                },
                secondRange: {
                    "startDate": formatDate(secondStart),
                    "endDate": formatDate(endDate)
                },
            };

        }
    }

    function initializeSplitDatePicker(element, sectionId, firstRange, secondRange) {

        if (!element.length || !firstRange || !secondRange) {
            return;
        }

        element.daterangepicker({
            singleDatePicker: true,
            autoApply: true,
            startDate: moment(secondRange.startDate),
            minDate: moment(firstRange.startDate).add(1, 'day'),
            maxDate: moment(secondRange.endDate),
            parentEl: $(element).closest('.modal'),
            drops: 'auto',
            minYear: 1901,
            maxYear: parseInt(moment().format('YYYY'), 10)
        });

        element.on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY'));

            const activeIndex = getActiveIndex(sectionId);

            const activeTab = navTabList[sectionId][activeIndex];

            const prevTab = navTabList[sectionId][activeIndex - 1];

            const { firstRange, secondRange } = splitDateRange(activeTab, prevTab, picker.startDate);

            prevTab.startDate = firstRange.startDate;
            prevTab.endDate = firstRange.endDate;
            activeTab.startDate = secondRange.startDate;
            activeTab.endDate = secondRange.endDate;

            $(`#${sectionId} #${prevTab.id} .tab-text`).text(`${prevTab.startDate} - ${prevTab.endDate}`);
            $(`#${sectionId} #${activeTab.id} .tab-text`).text(`${activeTab.startDate} - ${activeTab.endDate}`);
        });


        // using datepicker code

        // destroy previous instance

        // element.datepicker("destroy");

        // const viewDate = new Date(secondRange.startDate)

        // element.datepicker({
        //     format: "mm/dd/yyyy",
        //     autoclose: true,
        //     todayHighlight: true,
        //     startDate: moment(firstRange.startDate).add(1, 'day')
        //         .toDate(),
        //     endDate: moment(secondRange.endDate).toDate(),
        //     defaultViewDate: {
        //         year: viewDate.getFullYear(),
        //         month: viewDate.getMonth(),
        //         day: viewDate.getDate()
        //     },
        // });

        // element.off("changeDate");


        // element.on("changeDate", function (e) {
        //     const selectedDate = e.date;

        //     const activeIndex = getActiveIndex(sectionId);

        //     const activeTab = navTabList[sectionId][activeIndex];

        //     const prevTab = navTabList[sectionId][activeIndex - 1];

        //     const { firstRange, secondRange } = splitDateRange(activeTab, prevTab, selectedDate);

        //     prevTab.startDate = firstRange.startDate;
        //     prevTab.endDate = firstRange.endDate;
        //     activeTab.startDate = secondRange.startDate;
        //     activeTab.endDate = secondRange.endDate;

        //     $(`#${sectionId} #${prevTab.id} .tab-text`).text(`${prevTab.startDate} - ${prevTab.endDate}`);
        //     $(`#${sectionId} #${activeTab.id} .tab-text`).text(`${activeTab.startDate} - ${activeTab.endDate}`);

        // })
    }


    $(document).on('shown.bs.tab', '.nav-link', function (e) {
        const targetId = $(this).attr('data-bs-target');
        const tabPane = $(targetId);

        const splitSection = tabPane.closest('.split_tab_section');

        if (!splitSection.length) return;

        const sectionId = splitSection.attr('id');

        updateNavButtons(sectionId);

        const input = tabPane.find('.splitDatePicker');

        if (!input.length) return;

        const activeIndex = getActiveIndex(sectionId);
        const activeTab = navTabList[sectionId][activeIndex];

        if (!activeTab) return;

        const prevTab = navTabList[sectionId][activeIndex - 1];


        initializeSplitDatePicker(input, sectionId, prevTab, activeTab);

    });

})


function setupMultiSelect(containerId, dropdownId, searchInputId, checkboxClass, selectAllId, defaultSelected = [], maxSelection = 2) {
    const dropdown = document.getElementById(dropdownId);
    const multiSelectContainer = document.getElementById(containerId);
    const selectAllCheckbox = document.getElementById(selectAllId);

    // ✅ Skip setup if container or dropdown not present
    if (!dropdown || !multiSelectContainer) return;

    const checkboxes = dropdown.querySelectorAll(`.${checkboxClass}`);

    function getMaxSelection() {
        // added-code-start this need to be added to actual code of setupMultiSelect
        if (window.innerWidth <= 1600 && ["sopStatusContainer", "sopCheckContainer", "SOPjurisdictionContainer", "RAjurisdictionContainer"].includes(containerId)) return 1;
        // added-code-end

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
            <img src="/dist/images/icons/filter-close.svg" alt="Remove" class="remove-icon-img">
          </span>
        `;
            span.querySelector(".remove-option").addEventListener("click", function () {
                const checkbox = [...dropdown.querySelectorAll(`.${checkboxClass}`)].find(cb => cb.getAttribute("data-value") === value);
                if (checkbox) {
                    if (checkbox.getAttribute("data-value") === "All") {
                        checkboxes.forEach(cb => {
                            cb.checked = false;
                        });
                    }
                    checkbox.checked = false;
                };
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
            case "invoiceContainer":
            case "paymentContainer": return "Date Range";
            case "groupUserRoleContainer": return "Filter by Role";
            case "usersAccessContainer":
            case "externalUserContainer": return "Filter by Access";
            case "groupPaymentContainer": return "Available To";
            case "groupContainer": return "Group";
            default: {
                var label = $(`#${containerId}`).data('label');
                return label != null ? label : "Status";
            }
        }
    }

    // Recalculate on resize
    window.addEventListener("resize", updateSelectedOptions);
}