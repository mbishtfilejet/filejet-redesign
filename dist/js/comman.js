function highlightTabs(tabparent) {
    const activeTab = tabparent.find('.nav-link.active');
    const tabOffset = activeTab.position();

    tabparent.css({
        '--tab-left': tabOffset.left + 'px',
        '--tab-top': tabOffset.top + 'px',
        '--tab-width': activeTab.outerWidth() + 'px',
        '--tab-height': activeTab.outerHeight() + 'px'
    })
}