$(function () {
    $(document).on('click', '.dropdown-item', function (e) {
        e.preventDefault();

        const $item = $(this);
        const value = $item.find('.item-name').text().trim();
        const $dropdown = $item.closest('.dropdown.report-filter');

        // Remove active class from this dropdown only
        $dropdown.find('.dropdown-item').removeClass('selected');

        // Update the toggle button text
        $dropdown.find('.filter-select-container').text(value).attr('data-selected', value).addClass('text-black');


        // Mark clicked item as active
        $item.addClass('selected');
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