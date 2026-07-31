$(function () {

    const operatorByType = {
        "entity_name": { operator: ["equals", "starts_with"], type: "string" },
        "entity_type": { operator: ["equals", "starts_with", "is"], type: "string" },
        "state": { operator: ["equals", "is"], type: "string" },
        "formation_date": { operator: ["is", "between"], type: "date" },
        "status": { operator: ["is"], type: "string" },
        "tax_id_ein": { operator: ["is"], type: "number" },
        "authorized_share": { operator: ["equals"], type: "number" },
        "par_value": { operator: ["equals", "between"], type: "number" },
    }

    function initializeFilterDatePicker(selector) {
        $(selector).datepicker()
    }


    

    $(document).on('click', '.dropdown-item', function (e) {

        const item = $(this);
        const selectedText = item.find('.item-name').text().trim();
        const selectkey = item.data("key");

        const dropdown = item.closest('.dropdown.report-filter');
        const parent = dropdown.closest(".filter-grid");

        // Update selected item
        dropdown.find('.dropdown-item').removeClass('selected');
        item.addClass('selected');

        // Update the toggle button text
        dropdown.find('[data-bs-toggle="dropdown"]').text(selectedText).attr('data-selected', selectkey);


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
            const valueSection = parent.find('.report-filter-value');
            valueSection.children().addClass('d-none')
            valueSection.find('.single-value').removeClass('d-none');
            return;
        }

        // Operator DropDown Selected

        if (dropdown.hasClass('operator-filter')) {
            const propertyKey = parent.find('.property-filter [data-bs-toggle="dropdown"]').attr('data-selected');
            console.log(propertyKey)
            if (!propertyKey || !operatorByType[propertyKey]) return;

            let propertyType = operatorByType[propertyKey].type;
            const isBetween = selectkey === 'between';

            const valueSection = parent.find('.report-filter-value');

            valueSection.children().addClass('d-none');

            if (propertyType === "date") {
                valueSection
                    .find(isBetween ? '.date-range' : '.single-date')
                    .removeClass('d-none');
                initializeFilterDatePicker('.datepicker');
            } else {
                valueSection
                    .find(isBetween ? '.value-range' : '.single-value')
                    .removeClass('d-none');
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
        const filters = $('.filterSection .filter-grid');

        // Keeping at least one filter
        if (filters.length > 1) {
            filter.fadeOut(200, function () {
                $(this).remove();
            });
        }
    });
})

//drag drop
$(function () {
    let draggedItem = null;

    $('.drag_container').on('dragstart', '.drag-item', function (ev) {
        draggedItem = this;
        $(this).addClass("dragging")
    })

    $('.drag_container').on('dragend', '.drag-item', function (ev) {
        $(this)
            .removeClass("dragging dragplacehoder")
            .css({
                transition: '',
                transform: ''
            });
        draggedItem = null;
    })


    //Reorder
    $('.drag_container').on('dragover', '.drag-item', function (ev) {
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

        const items = targetEl.parent().find('.drag-item');

        const oldPosition = [];

        items.each(function () {
            oldPosition.push(this.getBoundingClientRect().left)
        })

        if (before) {
            targetEl.before(draggedItem)
        } else {
            targetEl.after(draggedItem)
        }

        items.each(function (idx) {
            let oldRectLeft = oldPosition[idx];
            let newRectleft = this.getBoundingClientRect().left;

            let dx = oldRectLeft - newRectleft;

            if (!dx) return;

            this.style.transition = 'none';
            this.style.transform = `translateX(${dx}px)`;

        })

        requestAnimationFrame(() => {
            items.each(function () {

                this.style.transition = 'transform 0.2s ease';
                this.style.transform = ``

                this.addEventListener('transitionend', function handler() {
                    this.style.transition = '';
                    this.style.transform = '';
                    this.removeEventListener('transitionend', handler);
                });
            });
        });

    });


    $('.drag_container').on('dragover drop', function (ev) {
        ev.preventDefault();
    });
})


$(function () {
    $(document).on('click', '.remove-column', function (ev) {
        ev.stopPropagation();
        ev.preventDefault();

        let dragItem = $(this).closest('.drag-item');
        let suggestionSection = $(this).closest('.column_section').find('.suggestion_column');

        dragItem.prop('draggable', false);

        suggestionSection.prepend(dragItem)

    })

    $(document).on('click', '.add-column', function (ev) {
        ev.stopPropagation();
        ev.preventDefault();

        let dragItem = $(this).closest('.drag-item');
        let dragContainer = $(this).closest('.column_section').find('.drag_container');

        dragItem.prop('draggable', true);

        dragContainer.append(dragItem)

    })
})


$(function () {

    $('.toggleSection').css('display', 'none');

    $(document).on("click", ".new-report, .view-report, .generate-report", function () {
        const element = $(this);

        const parent = element.closest(".reportNav");

        const targetElement = element.data('target');

        parent.fadeOut(50)

        $(targetElement).fadeIn().removeClass('toggleSection')

        if (element.hasClass('view-report') || element.hasClass('generate-report')) {
            renderCharts();
        }
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
        ]
    };


    google.charts.load("current", {
        packages: ["corechart"]
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
            fontName: "Sora",
            fontSize: "14",
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
                        left: 120
                    }
                };

                chart = new google.visualization.BarChart(container);
        }


        chart.draw(data, options);

        google.visualization.events.addListener(chart, "select", function () {

            let pieLegendBox = box.find('.pie-legend');

            if (!pieLegendBox.length) return;

            console.log(pieLegendBox)

            pieLegendBox.find(".legend-item").removeClass("active");

            const selection = chart.getSelection();

            if (selection.length) {
                pieLegendBox
                    .find(`.legend-item[data-index="${selection[0].row}"]`)
                    .addClass("active");
            }

        });
    }


    function renderCharts() {
        $(".chart-box").each(function () {
            drawChart($(this), chartDatas);
        });
    }


    google.charts.setOnLoadCallback(() => {
        initChartBoxes();
        renderCharts();
    });


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
        renderCharts();
    });
});
