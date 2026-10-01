console.log(OrgChart);


const CARD = { w: 260, h: 124, strip: 48 };
const SLIM = { w: 260, h: 76 };



OrgChart.templates.entityCard = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.entityCard.size = [CARD.w, CARD.h];

OrgChart.templates.entityCard.node = function (node, data, template, config) {
    return `<rect x="0" y="0" height="${node.h}" width="${node.w}" fill="#ffffff" stroke-width="1" stroke="#C9CDD2" rx="6" ry="6">
    </rect>
    <path d="M6,0 H${CARD.strip} V${node.h} H6 A6,6 0 0 1 0,${node.h - 6} V6 A6,6 0 0 1 6,0 Z" fill="#00B2EB"></path>
    `;
};

OrgChart.templates.entityCard.entityName = `
    <text
        style="font-weight: 700;"
        fill="#0f172a"
        x="${CARD.strip + 20}"
        y="30"
    >{val}</text>
`;

var chart = new OrgChart(document.getElementById("tree"), {
    template: 'entityCard',
    columns: 6,
    siblingSeparation: 50,
    levelSeparation: 50,
    sticky: false,
    showYScroll: OrgChart.scroll.visible,
    showXScroll: OrgChart.scroll.visible,
    mouseScrool: OrgChart.action.scroll,
    align: OrgChart.align.center,
    movable: OrgChart.movable.node,
    movable: OrgChart.movable.tree,
    enableDragDrop: true,
    searchDisplayField: 'entityName',
    orderBy: "order",
    lazyLoading: true,
    enableSearch: true,
    // miniMap: true,
    layout: OrgChart.normal,
    toolbar: {
        layout: false,
        zoom: true,
        fit: true,
        expandAll: true,
    },
    nodeBinding: {
        additionalEntityName: "Entity_Name",
        entityName: "Entity_Name",
        entityType: "Entity_Type",
        entityData: "entityData",
        additionalEntityData: "additionalEntityData",
        state: "state",
        entityTitle: "entityTitle",
        externalEntity: "externalEntity",
        html: "html",
        icons_0: "html",
        tooltip: 'tooltip',
        individualOwnerName: "individualOwnerName",
        individualType: "individualType",
        ownershipPercentage: "ownershipPercentage",
    },
    linkBinding: {
        link_field_0: "createdAt"
    }
});


fetch('data-reboot-v2.json')
    .then(response => {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Load the JSON data into the chart after a delay of 100 milliseconds
        setTimeout(function () {
            chart.load(data);
            $("#partnerBtn").trigger('click');
            $("#slinkBtn").trigger('click');
        }, 100);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });