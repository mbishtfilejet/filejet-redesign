$(function () {

    const operatorByType = {
        "entity_name": { operator: ["equals", "starts_with"], type: "string" },
        "entity_type": { operator: ["equals", "starts_with", "is"], type: "string" },
        "state": { operator: ["equals", "is"], type: "string" },
        "formation_date": { operator: ["is", "between"], type: "date" },
        "status": { operator: ["is"], type: "string" },
        "tax_id_ein": { operator: ["is"], type: "number" },
        "authorized_share": { operator: ["equals"], type: "number" },
        "par_value": { operator: ["equals"], type: "number" },
    }

    function initializeFilterDatePicker(selector) {
        let $dateInput = $(selector);
        $dateInput.datepicker({
            format: 'mm/dd/yyyy',
            autoclose: true
        })
    }


    $(document).on('click', '.dropdown-item', function (e) {
        e.preventDefault();

        const item = $(this);
        const value = item.find('.item-name').text().trim();
        const selectItemkey = item.data("key");
        const dropdown = item.closest('.dropdown.report-filter');
        const parent = dropdown.closest(".filter-grid");

        // Remove active class from this dropdown only
        dropdown.find('.dropdown-item').removeClass('selected');

        // Update the toggle button text
        dropdown.find('.filter-select-container').text(value).attr('data-selected', selectItemkey).addClass('text-black');


        // Mark clicked item as active
        item.addClass('selected');

        if (dropdown.hasClass('property-filter')) {
            let operatorDropdown = parent.find('.operator-filter');
            operatorDropdown.find('[data-bs-toggle="dropdown"]').removeClass('text-black').data('selected', '').text("Operator")
            let items = operatorDropdown.find('.dropdown-item');

            items.each(function () {
                let itemKey = $(this).data('key');
                $(this).removeClass('selected')
                $(this).toggle(operatorByType[selectItemkey].operator.includes(itemKey));
            })
        }
        else if (dropdown.hasClass('operator-filter')) {
            let operatorDropdown = parent.find('.operator-filter');
            let propertySelected = parent.find('.property-filter [data-bs-toggle="dropdown"]').data('selected');
            let valueInputSection = parent.find('.report-filter-value');
            let propertySelectedType = operatorByType[propertySelected].type;
            let inputElement = `<div 
                                    class="d-flex align-items-center border border-1 rounded shadow-sm  m-0 white-bg px-3 py-2 py-md-2 h-100">
                                      <input type="text" class="border-0 p-0 w-100" placeholder="Value">
                                </div>`
            let dateElement = `<div class="calendar-wrapper d-flex align-items-center border rounded-2 shadow-sm m-0 white-bg p-2 gap-1">
                                    <input type="text" class="form-control w-100 border-0 p-0 my-auto" placeholder="Date" value="">
                                 </div>`
            if (propertySelectedType === "date") {


            } else{

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