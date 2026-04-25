function highlightTabs(tab) {

    const tabOffset = tab.position();

    $(".registeredAgent_tablist").css({
        '--tab-left': tabOffset.left + 'px',
        '--tab-top': tabOffset.top + 'px',
        '--tab-width': tab.outerWidth() + 'px',
        '--tab-height': tab.outerHeight() + 'px'
    })
}