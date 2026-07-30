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
        const filterTemplate = $('.filter-template')
            .clone()
            .removeClass('d-none filter-template').hide();

        $('.filterSection').append(filterTemplate);

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

    $('.toggleSection').css('display', 'none');

    $(document).on("click", ".new-report, .view-report", function () {
        const element = $(this);

        const parent = element.closest(".reportNav");

        const targetElement = element.data('target');

        parent.fadeOut(50)

        $(targetElement).fadeIn(300)
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
