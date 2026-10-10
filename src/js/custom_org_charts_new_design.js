const CARD = { w: 260, h: 124, strip: 48 };
const SLIM = { w: 260, h: 76 };

const SHAPE = { Trust: 'diamond', Corporation: 'rectangle', Partnership: 'triangle', Others: 'oval' };


var expandAllIcon = '<span class="icon me-0 icon-expand-all"></span>';

var fitIcon = '<span class="icon me-0 icon-fit"></span>';

var zoomInIcon = '<span class="icon me-0 icon-zoom-in"></span>';

var zoomOutIcon = '<span class="icon me-0 icon-zoom-out"></span>';

var actionIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">' +
    '<path d="M2.56367 12.2571L7.56524 3.25712C7.73988 2.94286 8.16874 2.91667 8.38575 3.17856L8.43933 3.25712L13.4409 12.2571C13.6119 12.5648 13.4197 12.9374 13.0892 12.993L13.0039 13H3.00072C2.64878 13 2.41637 12.651 2.52837 12.3352L2.56367 12.2571L7.56524 3.25712L2.56367 12.2571ZM8.00229 9.87694C7.58783 9.87694 7.25185 10.2129 7.25185 10.6274C7.25185 11.0418 7.58783 11.3778 8.00229 11.3778C8.41674 11.3778 8.75273 11.0418 8.75273 10.6274C8.75273 10.2129 8.41674 9.87694 8.00229 9.87694ZM8.002 6.87757C7.6882 6.87733 7.42824 7.10838 7.38337 7.40973L7.37652 7.50209L7.37576 8.49952L7.38247 8.59188C7.42688 8.8933 7.68648 9.12476 8.00028 9.125C8.31408 9.12524 8.57404 8.89418 8.61891 8.59283L8.62576 8.50048L8.62652 7.50304L8.61982 7.41068C8.57541 7.10926 8.3158 6.87781 8.002 6.87757Z"/>' +
    '<defs>' +
    '<linearGradient id="paint0_linear_7756_5925" x1="14.6921" y1="3" x2="4.42803" y2="14.6925" gradientUnits="userSpaceOnUse">' +
    '<stop stop-color="#000"/>' +
    '<stop offset="1" stop-color="#000"/>' +
    '</linearGradient>' +
    '</defs>' +
    '</svg>';

var openEntity = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M8 2.75C8 2.33579 8.33579 2 8.75 2H13.25C13.6642 2 14 2.33579 14 2.75V7.25C14 7.66421 13.6642 8 13.25 8C12.8358 8 12.5 7.66421 12.5 7.25V4.56077L8.28044 8.78033C7.98755 9.07322 7.51268 9.07322 7.21978 8.78033C6.92689 8.48744 6.92689 8.01256 7.21978 7.71967L11.4395 3.5H8.75C8.33579 3.5 8 3.16421 8 2.75ZM2 6.25C2 4.45507 3.45507 3 5.25 3H6.25C6.66421 3 7 3.33579 7 3.75C7 4.16421 6.66421 4.5 6.25 4.5H5.25C4.2835 4.5 3.5 5.2835 3.5 6.25V10.75C3.5 11.7165 4.2835 12.5 5.25 12.5H9.75C10.7165 12.5 11.5 11.7165 11.5 10.75V9.75C11.5 9.33579 11.8358 9 12.25 9C12.6642 9 13 9.33579 13 9.75V10.75C13 12.5449 11.5449 14 9.75 14H5.25C3.45507 14 2 12.5449 2 10.75V6.25Z"/>' +
    '</svg>';

var updateEntity = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M13.6569 2.3436C14.4379 3.12465 14.4379 4.39098 13.6569 5.17203L6.27044 12.5585C5.95004 12.8789 5.54859 13.1062 5.10901 13.2161L2.81801 13.7888C2.45182 13.8804 2.12013 13.5487 2.21167 13.1825L2.78442 10.8915C2.89432 10.4519 3.12161 10.0505 3.44201 9.73006L10.8285 2.3436C11.6095 1.56255 12.8759 1.56255 13.6569 2.3436ZM10.1213 4.46481L4.14912 10.4372C3.95688 10.6294 3.8205 10.8703 3.75457 11.134L3.38393 12.6166L4.86648 12.2459C5.13022 12.18 5.37109 12.0436 5.56333 11.8514L11.5353 5.87881L10.1213 4.46481ZM11.5356 3.05071L10.8283 3.75781L12.2423 5.17181L12.9498 4.46492C13.3403 4.07439 13.3403 3.44123 12.9498 3.05071C12.5593 2.66018 11.9261 2.66018 11.5356 3.05071Z"/>' +
    '</svg>';

var summaryEntity = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M5.08535 2C5.29127 1.4174 5.84689 1 6.5 1H9.5C10.1531 1 10.7087 1.4174 10.9146 2H11.5C12.3284 2 13 2.67157 13 3.5V13.5C13 14.3284 12.3284 15 11.5 15H4.5C3.67157 15 3 14.3284 3 13.5V3.5C3 2.67157 3.67157 2 4.5 2H5.08535ZM6.5 2C6.22386 2 6 2.22386 6 2.5C6 2.77614 6.22386 3 6.5 3H9.5C9.77614 3 10 2.77614 10 2.5C10 2.22386 9.77614 2 9.5 2H6.5ZM5.08535 3H4.5C4.22386 3 4 3.22386 4 3.5V13.5C4 13.7761 4.22386 14 4.5 14H11.5C11.7761 14 12 13.7761 12 13.5V3.5C12 3.22386 11.7761 3 11.5 3H10.9146C10.7087 3.5826 10.1531 4 9.5 4H6.5C5.84689 4 5.29127 3.5826 5.08535 3Z"/>' +
    '</svg>';

var addEntity = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M7.91012 3.00806L8 3C8.24546 3 8.44961 3.17688 8.49194 3.41012L8.5 3.5V7.5H12.5C12.7455 7.5 12.9496 7.67688 12.9919 7.91012L13 8C13 8.24546 12.8231 8.44961 12.5899 8.49194L12.5 8.5H8.5V12.5C8.5 12.7455 8.32312 12.9496 8.08988 12.9919L8 13C7.75454 13 7.55039 12.8231 7.50806 12.5899L7.5 12.5V8.5H3.5C3.25454 8.5 3.05039 8.32312 3.00806 8.08988L3 8C3 7.75454 3.17688 7.55039 3.41012 7.50806L3.5 7.5H7.5V3.5C7.5 3.25454 7.67688 3.05039 7.91012 3.00806L8 3L7.91012 3.00806Z"/>' +
    '</svg>';
var deleteIcon = '<span class="icon icon-sm icon-delete m-0"></span>'
var downloadTempMenu = '<span class="icon me-0 icon-md icon-download-template-menu"></span>';
var exportCSV = '<span class="icon icon-md me-0 icon-export-csv"></span>';
var exportJPG = '<span class="icon icon-md me-0 icon-export-jpg"></span>';


const nodeMenuTab = (x) => `
<g class="card-menu" style="cursor:pointer;" transform="matrix(1,0,0,1,${x},0)">
 <path d="M 0,4 
          h 22 
          a 4,4 0 0 1 4,4 
          v 10 
          a 4,4 0 0 1 -4,4 
          h -22 
          z" 
       fill="#4f46e5" />
 <circle cx="7" cy="13" r="1.6" fill="#ffffff"></circle>
 <circle cx="13" cy="13" r="1.6" fill="#ffffff"></circle>
 <circle cx="19" cy="13" r="1.6" fill="#ffffff"></circle>
 </g>
 `


function taxShapeTemplate(node, data) {

    let cx = CARD.strip / 2;
    let cy = node.h / 2;

    let shape = SHAPE[data.taxShape]


    switch (shape) {
        case "diamond":
            return `<path d="M${cx - 15},${cy} L${cx},${cy + 20} L${cx + 15},${cy} L${cx},${cy - 20} Z" fill="#ffffff" />`;

        case "triangle":
            return `<polygon points="${cx},${cy - 15} ${cx + 15},${cy + 10} ${cx - 15},${cy + 10}" fill="#ffffff" />`;

        case "rectangle":
            return `<rect width="30" height="20" x="${cx - 15}" y="${cy - 10}" fill="#ffffff" />`

        default:
            return `<ellipse rx="17" ry="11" cx="${cx}" cy="${cy}" fill="#ffffff" />`

    }
}

OrgChart.RENDER_LINKS_BEFORE_NODES = true;

OrgChart.toolbarUI.expandAllIcon = expandAllIcon;
OrgChart.toolbarUI.fitIcon = fitIcon;
OrgChart.toolbarUI.zoomInIcon = zoomInIcon;
OrgChart.toolbarUI.zoomOutIcon = zoomOutIcon;
OrgChart.miniMap.width = 156;
OrgChart.miniMap.height = 110;
OrgChart.miniMap.padding = 5;
OrgChart.miniMap.position = {
    top: undefined,
    left: undefined,
    right: 'padding',
    bottom: 'padding',
}


// Increased from 20 to 26 to accommodate the larger circle
OrgChart.templates.ana.expandCollapseSize = 26;

// Plus: shows how many children are hidden
OrgChart.templates.ana.plus =
    `<circle cx="13" cy="13" r="13" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>
   <text x="13" y="17" text-anchor="middle" font-size="11" font-family="Arial" fill="#757575">
     {collapsed-children-count}
   </text>`;

// Minus: stays a simple minus
OrgChart.templates.ana.minus =
    `<circle cx="13" cy="13" r="13" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>
   <line x1="7" y1="13" x2="19" y2="13" stroke="#aeaeae" stroke-width="1.5"></line>`;



OrgChart.templates.entityCard = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.entityCard.size = [CARD.w, CARD.h];

OrgChart.templates.entityCard.node = function (node, data, template, config) {
    return `<rect class="node-card" x="0" y="0" height="${node.h}" width="${node.w}" fill="#ffffff" stroke-width="1" stroke="#C9CDD2" rx="6" ry="6">
    </rect>
    <path d="M6,0 H${CARD.strip} V${node.h} H6 A6,6 0 0 1 0,${node.h - 6} V6 A6,6 0 0 1 6,0 Z" fill="#00B2EB"></path>
    `;
};


OrgChart.templates.entityCard.tax_shape = function (node, data, template, config) {
    return taxShapeTemplate(node, data);
}


OrgChart.templates.entityCard.entityName = `<text style="font-weight: 700;" fill="#0f172a" x="${CARD.strip + 20}" y="30">{val}</text>`;

OrgChart.templates.entityCard.entityStatus = function (node, data, template, config) {
    let { label, value } = data.entityStatus;
    return `<foreignobject width="270" height="30" x="${CARD.strip + 20}"" y="${node.h - 45}">
            <div class="badge badge-${label}">
                ${value}
            </div>
    </foreignobject>`
}

OrgChart.templates.entityCard.link = '<path class="boc-hoverable" stroke-linejoin="round" stroke="#9AA0A6" stroke-width="1px" fill="none" d="{rounded}" />';

OrgChart.templates.entityCard.nodeMenuButton = nodeMenuTab(CARD.w);




OrgChart.templates.externalEntityNode = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.externalEntityNode.size = [CARD.w, CARD.h];

OrgChart.templates.externalEntityNode.node = function (node, data, template, config) {
    return `<rect class="node-card" x="0" y="0" height="${node.h}" width="${node.w}" fill="#ffffff" stroke-width="1" stroke="#C9CDD2" rx="6" ry="6">
    </rect>
    <path d="M6,0 H${CARD.strip} V${node.h} H6 A6,6 0 0 1 0,${node.h - 6} V6 A6,6 0 0 1 6,0 Z" fill="#FF551A" stroke="#C9CDD2"></path>
    `;
};


OrgChart.templates.externalEntityNode.tax_shape = function (node, data, template, config) {
    return taxShapeTemplate(node, data);
}

OrgChart.templates.externalEntityNode.entityName = `
    <text
        style="font-weight: 700;"
        fill="#0f172a"
        x="${CARD.strip + 20}"
        y="30"
    >{val}</text>
`;

OrgChart.templates.externalEntityNode.entityStatus = function (node, data, template, config) {
    let { label, value } = data.entityStatus;
    return `<foreignobject width="270" height="30" x="${CARD.strip + 20}"" y="${node.h - 45}">
            <div class="badge badge-${label}">
                ${value}
            </div>
    </foreignobject>`
}

OrgChart.templates.externalEntityNode.nodeMenuButton = nodeMenuTab(CARD.w);
OrgChart.templates.externalEntityNode.link = '<path class="boc-hoverable" stroke-linejoin="round" stroke="#9AA0A6" stroke-width="1px" fill="none" d="{rounded}" />';




OrgChart.templates.additionalOwners = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.additionalOwners.size = [SLIM.w, SLIM.h];

OrgChart.templates.additionalOwners.node = function (node, data, template, config) {
    return `<rect class="node-card" x="0" y="0" height="${node.h}" width="${node.w}" fill="#F1F9F4" stroke-width="1" stroke="#14AE5C59" rx="3" ry="3">
    </rect>
    <path d="M6,0 H4 V${node.h} H4 A3,3 0 0 1 0,${node.h - 3} V3 A3,3 0 0 1 3,0 Z" fill="#14AE5C"></path>
    <text style="font-weight: 700;" fill="#5F6368" x="20" y="20">ADDITIONAL OWNERS</text>
    `;
}

OrgChart.templates.additionalOwners.link = `<path class="path1 boc-hoverable" stroke="#9AA0A6" stroke-width="2px" stroke-dasharray="6,4" fill="none" d="{rounded}" />`;

OrgChart.templates.additionalOwners.nodeMenuButton = nodeMenuTab(CARD.w);



OrgChart.templates.foreignRegistrations = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.foreignRegistrations.size = [SLIM.w, SLIM.h];

OrgChart.templates.foreignRegistrations.node = function (node, data, template, config) {
    return `<rect class="node-card" x="0" y="0" height="${node.h}" width="${node.w}" fill="#F4F4F5" stroke-width="1" stroke="#92939459" rx="3" ry="3">
    </rect>
    <path d="M6,0 H4 V${node.h} H4 A3,3 0 0 1 0,${node.h - 3} V3 A3,3 0 0 1 3,0 Z" fill="#5F6368"></path>
    <text style="font-weight: 700;" fill="#5F6368" x="20" y="20">FOREIGN REGISTRATIONS</text>
    `;
}

OrgChart.templates.foreignRegistrations.link = `<path class="path1 boc-hoverable" stroke="#9AA0A6" stroke-width="2px" stroke-dasharray="6,4" fill="none" d="{rounded}" />`;

OrgChart.templates.foreignRegistrations.nodeMenuButton = nodeMenuTab(CARD.w);




var editForm = function () {
    this.nodeId = null;
};

editForm.prototype.init = function (obj) {

    var that = this;

    this.obj = obj;

    var orgchart = this.obj;

    this.editForm = $("#editForm");

    this.entityName = this.editForm.find('#editForm_entity_Name');
    this.entityType = this.editForm.find('#editForm_entity_type');
    this.entityJurisdiction = this.editForm.find('#editForm_entity_jurs');

    this.cancelButton = this.editForm.find('#cancel_editForm');
    this.saveButton = this.editForm.find('#save_editForm');

    // Bootstrap 5 modal
    this.modal = new bootstrap.Modal(this.editForm);

    this.cancelButton.on("click", function () {
        that.hide();
    });

    this.saveButton.on("click", function () {

        var node = orgchart.get(that.nodeId);

        node.Entity_Name = that.entityName.val();
        node.Entity_Type = that.entityType.val();
        node.state = that.entityJurisdiction.val();

        console.log(node);

        orgchart.updateNode(node);

        that.hide();
    });
};


editForm.prototype.show = function (nodeId) {

    this.nodeId = nodeId;

    var node = this.obj.get(nodeId);

    this.entityName.val(node.Entity_Name || "");
    this.entityType.val(node.Entity_Type || "");
    this.entityJurisdiction.val(node.state || "");

    this.modal.show();
};


editForm.prototype.hide = function () {
    this.modal.hide();
};




OrgChart.scroll.smooth = 12;
OrgChart.scroll.speed = 120;


var chart = new OrgChart(document.getElementById("tree"), {
    template: 'entityCard',
    columns: 6,
    siblingSeparation: 70,
    levelSeparation: 70,
    sticky: false,
    mouseScroll: OrgChart.action.scroll,
    align: OrgChart.align.center,
    movable: OrgChart.movable.node,
    movable: OrgChart.movable.tree,
    enableDragDrop: true,
    highlightOnHover: "parents",
    searchDisplayField: 'entityName',
    orderBy: "order",
    lazyLoading: true,
    enableSearch: false,
    miniMap: true,
    layout: OrgChart.layout.normal,
    filterBy: ['DBA', 'Business_License', 'Group_Name', 'Compliance', 'Jurisdiction', 'Status', 'Entity_Name', 'Entity_Type'],
    toolbar: {
        layout: false,
        zoom: true,
        fit: true,
        expandAll: true,
    },
    tags: {
        "externalEntityNode": {
            template: "externalEntityNode"
        },
        "additionalOwners": {
            template: "additionalOwners",
        },
        "partnerNode": {
            template: "foreignRegistrations",
            nodeMenu: {
                details: {
                    text: "Entity Summary",
                    icon: summaryEntity,
                },
                action: {
                    text: "Take Action",
                    icon: actionIcon
                },
                open_entity: {
                    text: "Open Entity",
                    icon: openEntity,
                },
                edit: {
                    text: "Update Entity",
                    icon: updateEntity,
                },
            },
        },
        "subLevels0": {
            subLevels: 0
        },
        "subLevels1": {
            subLevels: 1
        },
        "subLevels2": {
            subLevels: 2
        },
        "subLevels3": {
            subLevels: 3
        }
    },
    nodeMenu: { details: { text: "Details" }, edit: { text: "Edit entity" } },
    nodeBinding: {
        additionalEntityName: "Entity_Name",
        entityName: "Entity_Name",
        entityType: "Entity_Type",
        entityData: "entityData",
        additionalEntityData: "additionalEntityData",
        tax_shape: "Entity_Type",
        state: "state",
        entityStatus: "entityStatus",
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
    },
    editUI: new editForm(),

});


fetch('data-reboot-redesign.json')
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