const operatorByType = {
    "entity_name": { operator: ["equals", "starts_with"], type: "string" },
    "entity_type": { operator: ["equals", "starts_with", "is"], type: "string" },
    "state": { operator: ["equals", "is"], type: "string" },
    "formation_date": { operator: ["is", "between", "less_than", "greater_than"], type: "date" },
    "status": { operator: ["one_of"], type: "list" },
    "tax_id_ein": { operator: ["is"], type: "number" },
    "authorized_share": { operator: ["equals", "less_than", "greater_than"], type: "number" },
    "par_value": { operator: ["equals", "between", "less_than", "greater_than"], type: "number" },
    "group": { operator: ["equals", "starts_with"], type: "string" },
    "business_licenses": { operator: ["equals", "starts_with"], type: "string" },
    "dba": { operator: ["equals", "starts_with"], type: "string" },
    "director": { operator: ["equals", "starts_with"], type: "string" },
    "ownership": { operator: ["equals", "starts_with"], type: "string" },
}


const dataByField = {
    "status": {
        "one_of": ['In Good Standing', "Not Good Standing", "Inactive", "Unknown", "In Process", "Draft", "Overdue"]
    }
}

function initializeFilterDatePicker(selector) {
    $(selector).datepicker()
}

function getDynamicValueField(selectedCased, uniqueId, multSelectList = []) {

    let isSearchDisabled = multSelectList.length <= 5;

    switch (selectedCased) {
        case "single-date":
            return `<div class="single-date calendar-wrapper d-flex align-items-center
                             flex-grow-1 border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                                <input id="single-date-${uniqueId}" type="text" class="form-control w-100 border-0 p-0 datepicker h-100"
                                     placeholder="Date" value="">
                                </div>`;
        case "date-range":
            return `<div class="d-flex align-items-center date-range">
                            <div class="calendar-wrapper d-flex flex-grow-1 align-items-center
                                border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                                <input id="date-range-${uniqueId}F" type="text" class="from-date form-control w-100 border-0 p-0 datepicker h-100"
                                    placeholder="Date" value="">
                            </div>
                            <span class="mx-2">to</span>
                            <div class="calendar-wrapper d-flex flex-grow-1 align-items-center 
                                border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                                <input id="date-range-${uniqueId}T" type="text" class="to-date form-control w-100 border-0 p-0 datepicker h-100"
                                    placeholder="Date" value="">
                            </div>
                        </div>`;
        case "value-range":
            return `<div class="d-flex align-items-center value-range">
                            <div class="d-flex align-items-center flex-grow-1 
                                border border-1 rounded shadow-sm  m-0 white-bg px-3 py-2 h-100">
                                <input id="value-range-${uniqueId}F" type="text" class="from-value border-0 p-0 w-100"
                                    placeholder="Value">
                            </div>
                            <span class="mx-2">to</span>
                            <div class="d-flex align-items-center flex-grow-1 
                                border border-1 rounded shadow-sm  m-0 white-bg px-3 py-2 h-100">
                                <input id="value-range-${uniqueId}T" type="text" class="to-value border-0 p-0 w-100"
                                   placeholder="Value">
                            </div>
                    </div>`;
        case "mutli-select":
            return `
            <div class="filter2-dropdown w-100 h-100 dropdown filter-option">
                <div class="multi-select-container d-flex align-items-center border border-1 rounded-2 m-0 white-bg h-100"
                    id="mutli-selectContainer-${uniqueId}" data-label="Value" data-bs-toggle="dropdown"
                    aria-expanded="false" tabindex="0">
                        <input type="text" class="search-input" id="mutli-selectSearch-${uniqueId}" placeholder="Value"
                        autocomplete="off">
                </div>
                <ul class="dropdown-menu ${isSearchDisabled ? "search-disabled" : ''}" id="mutli-selectDropdown-${uniqueId}">
                ${multSelectList.map(val => `<li>
                        <label class="dropdown-item">
                            <input type="checkbox" class="form-check-input mutli-select-checkbox-${uniqueId} me-2"
                                data-value="${val}">${val}
                        </label>
                    </li>` ).join('')}
                </ul>
            </div>`;
        default:
            return `<div class="single-value d-flex align-items-center 
                        border border-1 rounded shadow-sm m-0 white-bg px-3 py-2 h-100">
                        <input id="single-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                            placeholder="Value" value="">
                    </div>`;
    }
}

$(function () {

    setupMultiSelect("viewContainer", "viewDropdown", "viewSearch", "view-checkbox");
    setupMultiSelect("viewContainer-entity", "viewDropdown-entity", "viewSearch-entity", "view-checkbox-entity");
    setupMultiSelect("viewContainer-order", "viewDropdown-order", "viewSearch-order", "view-checkbox-order");

    $(document).on('click', '.dropdown-item', function (e) {

        const item = $(this);
        const selectedText = item.find('.item-name').text().trim();
        const selectkey = item.data("key");
        const uniqueId = generateId();

        const dropdown = item.closest('.dropdown.report-filter');
        const parent = dropdown.closest(".filter-grid");

        // Update selected item
        dropdown.find('.dropdown-item').removeClass('selected');
        item.addClass('selected');

        // Update the toggle button text
        dropdown.find('[data-bs-toggle="dropdown"]').text(selectedText).attr('data-selected', selectkey);

        const valueSection = parent.find('.report-filter-value');

        // Property Dropdown Selected

        if (dropdown.hasClass('property-filter')) {
            const config = operatorByType[selectkey];
            if (!config) return;

            const operatorDropdown = parent.find('.operator-filter');
            const operatorToggleButton = operatorDropdown.find('[data-bs-toggle="dropdown"]');

            // Reset operator dropdown
            operatorToggleButton
                .removeAttr('data-selected')
                .text(operatorToggleButton.attr('placeholder'))

            operatorDropdown.find('.dropdown-item')
                .removeClass('selected')
                .each(function () {
                    const operatorKey = $(this).data('key');
                    $(this).toggle(config.operator.includes(operatorKey));
                })
            // Reset value section
            valueSection.empty();
            valueSection.append(getDynamicValueField('single-value', uniqueId));
            return;
        }

        // Operator DropDown Selected

        if (dropdown.hasClass('operator-filter')) {
            const propertyKey = parent.find('.property-filter [data-bs-toggle="dropdown"]').attr('data-selected');

            if (!propertyKey || !operatorByType[propertyKey]) return;
            valueSection.empty();

            let propertyType = operatorByType[propertyKey].type;

            if (propertyType === "date") {
                valueSection.html(getDynamicValueField(selectkey === 'between' ? 'date-range' : 'single-date', uniqueId));
                initializeFilterDatePicker(valueSection.find('.datepicker'));
            }
            else if (propertyType === 'list') {
                const multiSelectList = dataByField[propertyKey][selectkey];
                valueSection.html(getDynamicValueField('mutli-select', uniqueId, multiSelectList));
                setupMultiSelect(`mutli-selectContainer-${uniqueId}`, `mutli-selectDropdown-${uniqueId}`, `mutli-selectSearch-${uniqueId}`, `mutli-select-checkbox-${uniqueId}`, "", multiSelectList.slice(0, 3));
            } else {
                valueSection.html(getDynamicValueField(selectkey === 'between' ? 'value-range' : 'single-value', uniqueId));
            }
        }
    });

    $(document)
        .on('shown.bs.dropdown', '.dropdown.report-filter', function () {
            const dropdown = $(this);
            const search = dropdown.find('.dropdown-search-input');

            if (!search.length) return;
            const items = dropdown.find('.dropdown-item');

            search
                .val('')
                .on('input.dropdownSearch', function () {
                    const term = $(this).val().trim().toLowerCase();

                    items.each(function () {
                        const text = $(this).find('.item-name').text().trim().toLowerCase();

                        $(this).toggle(text.includes(term));
                    });
                });
        })
        .on('hidden.bs.dropdown', '.dropdown.report-filter', function () {
            const dropdown = $(this);
            const search = dropdown.find('.dropdown-search-input');

            if (!search.length) return;

            // Reset search
            search
                .off('.dropdownSearch')
                .val('');

            // Show all items again
            dropdown.find('.dropdown-item').show();
        });


    $('.add-filter').on('click', function () {

        const parent = $(this).parent();
        const filterSection = parent.find('.filterSection');
        const filterTemplate = parent.find('.filter-template')
            .clone()
            .removeClass('d-none filter-template').hide();

        filterSection.append(filterTemplate);

        filterTemplate.fadeIn(200);
    });

    $(document).on('click', '.remove-filter', function () {
        const filter = $(this).closest('.filter-grid');
        const filters = $(this).closest('.filterSection').find('.filter-grid');

        // Keeping at least one filter
        if (filters.length > 1) {
            filter.fadeOut(200, function () {
                $(this).remove();
            });
        }
    });
})


function applySavedFilter(savedFilter, parent) {

    const propertyDropdown = parent.find('.property-filter');
    const operatorDropdown = parent.find('.operator-filter');

    // Select property
    const propertyItem = propertyDropdown
        .find('.dropdown-item[data-key="' + savedFilter.property + '"]');

    if (propertyItem.length) {
        propertyItem.trigger('click');
    }


    // Select operator after property is loaded
    const operatorItem = operatorDropdown
        .find('.dropdown-item[data-key="' + savedFilter.operator + '"]');

    if (operatorItem.length) {
        operatorItem.trigger('click');
    }


    // Set value
    const valueSection = parent.find('.report-filter-value');


    // Range value
    if (savedFilter.operator === "between") {

        valueSection.find('.value-range .from-value')
            .val(savedFilter.value.from);

        valueSection.find('.value-range .to-value')
            .val(savedFilter.value.to);

        valueSection.find('.date-range .from-date')
            .val(savedFilter.value.from);

        valueSection.find('.date-range .to-date')
            .val(savedFilter.value.to);

        return;
    }

    // Single value
    valueSection.find('.single-value input')
        .val(savedFilter.value);

    valueSection.find('.single-date input')
        .val(savedFilter.value);
}

//drag drop
$(function () {
    let draggedItem = null;

    $(document).on('dragstart', '.drag_container .drag-item', function (ev) {
        draggedItem = this;
        $(this).addClass("dragging")
    })

    $(document).on('dragend', '.drag_container .drag-item', function (ev) {
        $(this)
            .removeClass("dragging dragplacehoder")
            .css({
                transition: '',
                transform: ''
            });
        draggedItem = null;
    })


    //Reorder
    $(document).on('dragover', '.drag_container .drag-item', function (ev) {
        ev.preventDefault();

        if (!draggedItem || draggedItem === this) return;

        const targetItem = this;
        const targetEl = $(targetItem);

        let rect = targetItem.getBoundingClientRect();
        let midX = rect.left + rect.width / 2;
        let before = ev.originalEvent.clientX < midX;


        if (before && draggedItem.nextElementSibling === targetItem) return;
        if (!before && draggedItem.previousElementSibling === targetItem) return;

        $(draggedItem).removeClass('dragging').addClass('dragplacehoder');

        animateMove($(draggedItem), targetEl, before);
    });


    $(document).on('dragover drop', '.drag_container', function (ev) {
        ev.preventDefault();
    });

    // $(document).on('focusin', '.drag_container .drag-item', function () {
    //     $(this).addClass('dragging');
    // });

    // $(document).on('focusout', '.drag_container .drag-item', function () {
    //     $(this)
    //         .removeClass('dragging')
    //         .css({
    //             transition: '',
    //             transform: ''
    //         });
    // });
    // $(document).on('keydown', '.drag_container .drag-item', function (ev) {

    //     let current = $(this);

    //     if (ev.key === "ArrowLeft") {

    //         ev.preventDefault();

    //         let prev = current.prev(".drag-item");

    //         if (!prev.length) return;

    //         animateMove(current, prev, true);

    //         current.focus();
    //     }

    //     if (ev.key === "ArrowRight") {

    //         ev.preventDefault();

    //         let next = current.next(".drag-item");

    //         if (!next.length) return;

    //         animateMove(current, next, false);

    //         current.focus();
    //     }

    // });

    function animateMove($dragged, $target, before) {

        const items = $dragged.parent().find(".drag-item");

        const oldPos = [];

        items.each(function () {
            oldPos.push(this.getBoundingClientRect().left);
        });

        if (before) {
            $target.before($dragged);
        } else {
            $target.after($dragged);
        }

        items.each(function (i) {

            const dx = oldPos[i] - this.getBoundingClientRect().left;

            if (!dx) return;

            this.style.transition = "none";
            this.style.transform = `translateX(${dx}px)`;
        });

        requestAnimationFrame(() => {

            items.each(function () {

                this.style.transition = "transform .2s ease";
                this.style.transform = "";

                this.addEventListener("transitionend", function handler() {
                    this.style.transition = "";
                    this.style.transform = "";
                    this.removeEventListener("transitionend", handler);
                });

            });

        });

    }
})


$(function () {
    $(document).on('click keydown', '.remove-column', function (ev) {

        if (ev.type === "keydown" && ev.key !== " " && ev.key !== "Enter") {
            return;
        }

        ev.preventDefault();

        let dragItem = $(this).closest('.drag-item');
        let suggestionSection = $(this).closest('.column_section').find('.suggestion_column');

        dragItem.prop('draggable', false);

        suggestionSection.prepend(dragItem)

    })

    $(document).on('click keydown', '.add-column', function (ev) {

        if (ev.type === "keydown" && ev.key !== " " && ev.key !== "Enter") {
            return;
        }
        ev.preventDefault();

        let dragItem = $(this).closest('.drag-item');
        let dragContainer = $(this).closest('.column_section').find('.drag_container');

        dragItem.prop('draggable', true);

        dragContainer.append(dragItem)

    })
})


$(function () {

    function createDynamicTable(targetElement, tableclass, parentEl, selector) {
        var columns = [];

        const dragContainer = $(parentEl).find('.drag_container');

        dragContainer.find(selector).each(function () {
            columns.push({
                title: $(this).text().replace(/\s+/g, ' ').trim(),
                data: $(this).data("key"),
                ...($(this).data("width") && { width: $(this).data("width") }),
                ...($(this).data("key") === "status" && {
                    render: function (data, type, row) {
                        return `<span class="badge badge-${row.status.class}">${row.status.label}</span>`
                    }
                })
            });
        });

        const tableOptions = {
            ajax: {
                url: "data5.json",
                dataSrc: 'reporting_raw_data',
            },
            language: {
                processing: '<div  role="status"> </div>',
                emptyTable: '<p class="emptytabledata">No Records Available</p>'
            },
            scrollX: true,
            scrollY: false,
            columns: columns,
            order: [],
            autoWidth: false,
            lengthChange: false,  // Removed pagination
            paging: false,  // Disable pagination
            info: false,
        }

        const table = $(targetElement).find(tableclass);

        if ($.fn.DataTable.isDataTable(table)) {
            table.DataTable().destroy();
            table.empty();
        }


        return table.DataTable(tableOptions);
    }

    const savedFilters = {

        "registration": [
            {
                "property": "entity_name",
                "operator": "equals",
                "value": "AIC Capital VV Manager, Corp."
            },
            {
                "property": "formation_date",
                "operator": "between",
                "value": {
                    "from": "10/12/2025",
                    "to": "04/29/2026"
                }
            }
        ],
        "entity": [
            {
                "property": "entity_name",
                "operator": "equals",
                "value": "AIC Capital VV Manager, Corp."
            },
            {
                "property": "state",
                "operator": "equals",
                "value": "Alabama"
            }
        ],
        "order": [
            {
                "property": "entity_name",
                "operator": "equals",
                "value": "AIC Capital VV Manager, Corp."
            },
            {
                "property": "group",
                "operator": "quals",
                "value": "Legal IT Group"
            }
        ],
    }



    $('.toggleSection').css('display', 'none');

    $(document).on("click", ".new-report, .view-report, .edit-report, .copy-report, .generate-report", function () {
        const element = $(this);

        const reportNav = element.closest(".reportCreationNav");

        const targetElement = element.data('target');

        const target = $(targetElement);

        reportNav.fadeOut(50)


        const tooltip = bootstrap.Tooltip.getInstance(element);
        if (tooltip) {
            tooltip.dispose();
        }
        target.fadeIn()

        if (element.hasClass('new-report')) return;

        const charts_wrapper = target.find('.charts_wrapper:visible');

        if (charts_wrapper.length) {
            renderCharts(charts_wrapper);
        }

        let filterKey = target.data('filter');


        let table = '';


        if (element.hasClass('generate-report')) {
            table = createDynamicTable(targetElement, '.reports_table', element.parent(), '.columns_text');

            $('html, body').animate({ scrollTop: $(targetElement).offset().top }, 500);
        } else {

            savedFilters[filterKey].forEach((filter, index) => {
                applySavedFilter(filter, $(targetElement).find('.filter-grid').not('.filter-template').eq(index));
            });

            if (element.hasClass('view-report')) {

                target.find('.accordion-collapse').each(function () {
                    if ($(this).find('.charts_wrapper').length === 0) {
                        $(this).collapse('hide');
                    }
                });
            } else {

                target.find('.accordion-collapse').collapse('show');
            }
            
            $('html, body').animate({ scrollTop: 0 }, 300);
            table = createDynamicTable(targetElement, '.reports_table', targetElement, '.columns_text');
        }

        table.columns.adjust().draw();
    });

    const chartDatas = {
        entity_type: [
            ['Entity Type', 'Count', { role: 'style' }],
            ["LLC", 5, "#D85A30"],
            ["LLP", 10, "#E47755"],
            ["INC", 5, "#EE9478"],
            ["CORP", 1, "#F5B29D"],
            ["PLC", 4, "#FBD7CB"]
        ],

        state: [
            ['State', 'Percentage', { role: 'style' }],
            ['CA', 32, '#E73B18'],
            ['TX', 24, '#FFB60C'],
            ['NY', 18, '#00B2EB'],
            ['FL', 12, '#00BA70'],
            ['IL', 8, '#F9C6B8']
        ],
        status: [
            ["Task", "Count", { role: 'style' }],
            ["In Good Standing", 15, '#00BA70'],
            ["Not Good Standing", 8, '#E73B18'],
            ["Inactive", 3, '#8690A0'],
            ["Unknown", 5, '#1a4d9e'],
        ]
    };


    google.charts.load("current", {
        packages: ["corechart"]
    });

    let isChartsReady = false;

    google.charts.setOnLoadCallback(() => {
        initChartBoxes();
        isChartsReady = true;
    });


    function initChartBoxes() {
        $(".chart-box").each(function () {
            const box = $(this);
            const activeBtn = box.find(".chart-btn.active");

            box.data(
                "chartType",
                activeBtn.data("type") || "bar"
            );
        });
    }


    function getBaseOptions() {
        return {
            backgroundColor: "transparent",
            tooltip: {
                trigger: "none"
            },
            animation: {
                startup: true,
                duration: 1000,
                easing: 'out'
            },
            fontName: "Sora",
            fontSize: "11",
            legend: "none"
        };
    }


    function drawChart(box, chartDatas) {

        const type = box.data("chartType");
        const selectedValue = box.find(".field-select").val() || "entity_type";

        const chartData = chartDatas[selectedValue];

        if (!chartData) return;


        const data = google.visualization.arrayToDataTable(chartData);

        const container = box.find(".chart-container .chart")[0];
        const pieLegendBox = box.find(".pie-legend");

        if (pieLegendBox.length) {
            pieLegendBox.remove()
        }

        let options = getBaseOptions();
        let chart;


        switch (type) {

            case "pie":

                options = {
                    ...options,
                    colors: chartData.slice(1).map(row => row[2]),
                    pieHole: 0.55,
                    pieSliceText: "none",
                    pieSliceBorderColor: "#fff",
                    chartArea: {
                        width: '80%',
                        height: '80%'
                    }
                };

                const pieLegendBox = $('<div class="pie-legend"></div>');

                chartData.slice(1).forEach((item, index) => {

                    const total = chartData
                        .slice(1)
                        .reduce((sum, row) => sum + row[1], 0);


                    const percentage = Math.round((item[1] / total) * 100);

                    pieLegendBox.append(`
                        <div class="legend-item" data-index="${index}">
                            <span 
                                class="legend-color"
                                style="background:${item[2]}"
                            ></span>

                            <span class="legend-label">
                                ${item[0]}-${percentage}%
                            </span>
                        </div>
                    `);

                });

                $(container).after(pieLegendBox);

                chart = new google.visualization.PieChart(container);

                google.visualization.events.removeAllListeners(chart);
                break;


            case "line":

                chart = new google.visualization.LineChart(container);
                break;


            default:

                options = {
                    ...options,
                    chartArea: {
                        left: 100
                    }
                };

                chart = new google.visualization.BarChart(container);
        }


        chart.draw(data, options);

        google.visualization.events.addListener(chart, "select", function () {

            let pieLegendBox = box.find('.pie-legend');

            if (!pieLegendBox.length) return;

            pieLegendBox.find(".legend-item").removeClass("active");

            const selection = chart.getSelection();

            if (selection.length) {
                pieLegendBox
                    .find(`.legend-item[data-index="${selection[0].row}"]`)
                    .addClass("active");
            }

        });
    }


    function renderCharts(section) {
        if (!isChartsReady) return;

        section.find(".chart-box").each(function () {
            drawChart($(this), chartDatas);
        });
    }

    // $(document).on('shown.bs.collapse', '.accordion-collapse', function () {
    //     const wrapper = $(this).find('.charts_wrapper');

    //     // This accordion doesn't contain charts
    //     if (!wrapper.length) {
    //         return;
    //     }

    //     if (wrapper.data('rendered')) {
    //         return;
    //     }

    //     renderCharts(wrapper);
    //     wrapper.data('rendered', true);
    // });


    $(".chart-btn").on("click", function () {

        const btn = $(this);
        const box = btn.closest(".chart-box");

        box.find(".chart-btn").removeClass("active");
        btn.addClass("active");

        box.data(
            "chartType",
            btn.data("type")
        );

        drawChart(box, chartDatas);
    });


    $(".field-select").on("change", function () {

        drawChart(
            $(this).closest(".chart-box"), chartDatas
        );

    });


    $(window).on("resize", function () {
        const charts_wrapper = $(".charts_wrapper:visible");

        if (!charts_wrapper.length) return;
        renderCharts(charts_wrapper);
    });

    $(document).on("click", '.save-report-btn, .report-back-btn', function (ev) {

        let reportSection = $('.reportSection:visible');

        if ($(this).hasClass('report-back-btn')) {
            reportSection = $(this).closest('.reportSection')
        } else {
            $('html, body').animate({ scrollTop: 0 }, 300);
        }

        reportSection.find('.toggleSection').fadeOut();

        reportSection.find('.reportCreationNav').fadeIn();


    })
});
