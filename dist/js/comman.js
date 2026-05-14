function highlightTabs(tabparent) {
    if(!tabparent) return;
    const activeTab = tabparent.find('.nav-link.active');
    const tabOffset = activeTab.position();

    tabparent.css({
        '--tab-left': tabOffset.left + 'px',
        '--tab-top': tabOffset.top + 'px',
        '--tab-width': activeTab.outerWidth() + 'px',
        '--tab-height': activeTab.outerHeight() + 'px'
    })
}

function multiSelectRowCheckbox(tableContainer) {

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
        console.log(column, row)

        const parentId = row.data('id') || row.data('parent');

        if (row.hasClass('expanded-content')) {
            cacheCheckBox.setChildValue(parentId, column, columnValue, isChecked)
        }

        if (row.hasClass('expanded-row') || row.hasClass('parent')) {
            const rowData = dataTable.row(row).data();

            if (!row.find('.row-select').prop('indeterminate')) {
                rowData.entities.forEach((value) => {
                    cacheCheckBox.setChildValue(parentId, column, value, isChecked)
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

        const checkboxes = table_wrapper.find(`tr:not(.group-row):not(.check-disabled) td .row-select[data-column="${column}"]`);
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


    }

    // update children checkbox
    function toggleChildren(isChecked, parentId, column) {
        if (!parentId) return;

        const children = tableContainer.find(`tr.expanded-content[data-parent="${parentId}"]:not(.check-disabled)`);

        if (!children.length) return;

        const childValidCheckBox = children.find(
            `td .row-select[data-column="${column}"]`
        );

        childValidCheckBox.prop('checked', isChecked)
    }



    // update parent
    function updateParent(parentId, column) {

        if (!parentId) return;

        const children = tableContainer.find(`tr[data-parent="${parentId}"]:not(.check-disabled)`);

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
                indeterminate: false
            });

        } else if (checkedCheckbox === totalCheckbox) {
            parentCheckbox.prop({
                checked: true,
                indeterminate: false
            });

        } else {
            parentCheckbox.prop({
                checked: false,
                indeterminate: true
            });

        }
    }


    $(document).ready(function () {
        dataTable.on('draw', function () {
            const tbodyCheckbox = tableContainer.find('td');
            const thCheckbox = tableContainer.find('.allgroup-select');

            tableContainer.find('tr:not(.check-disabled) td .row-select').each(function () {
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
        deleteKeyValue
    }
}


function formatCurrency(amount, locale = 'en-US', currency = 'USD') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(amount)
}