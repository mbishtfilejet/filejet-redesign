//JavaScript

// const { template } = require("grunt");

// const { template } = require("grunt");

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

// start olivia > cyan color rectangle templates

OrgChart.templates.olivia.size = [320, 90];
OrgChart.templates.olivia.nodeMenuButton = '<g transform="matrix(1,0,0,1,280,45)" data-ctrl-n-menu-id="{id}"><rect x="-4" y="-10" fill="#fff" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#fff"></circle><circle cx="7" cy="0" r="2" fill="#fff"></circle><circle cx="14" cy="0" r="2" fill="#fff"></circle></g>';
OrgChart.templates.olivia.entityName = '<text data-width="240" class="fs-5 font-weight-500 text-white" data-text-overflow="ellipsis" x="15" y="30" fill="#fff">{val}</text>';
// OrgChart.templates.olivia.state = '<text data-width="70" class="fs-6 text-white" fill="#fff" x="15" y="60">{val}</text>';
// OrgChart.templates.olivia.entityType = '<text data-width="200" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" width="180" height="25" x="85" y="60">{val}</text>';

OrgChart.templates.olivia.entityData= '<text data-width="250" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="15" y="60">{val}</text>';

OrgChart.templates.olivia.node =
    `<rect x="0" y="0" height="{h}" width="{w}" fill="#039BE5" stroke-width="1" stroke="#039BE5" rx="10" ry="10"></rect>`;

OrgChart.templates.olivia.plus = '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
    + '<text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{collapsed-children-count}</text>';
OrgChart.templates.olivia.link = '<path stroke-linejoin="round" stroke="#000000" stroke-width="1px" fill="none" d="{rounded}" />';
OrgChart.templates.olivia.icons_0 = '<foreignobject data-width="60" class="d-block text-end" fill="#000000" width="60" height="28" x="245" y="10">{val}</foreignobject>';

// end olivia > cyan color rectangle templates

// 
OrgChart.templates.individualOwners = Object.assign({}, OrgChart.templates.olivia); 
OrgChart.templates.individualOwners.size = [320, 110];
OrgChart.templates.individualOwners.nodeMenuButton = '<g transform="matrix(1,0,0,1,280,55)" data-ctrl-n-menu-id="{id}"><rect x="-4" y="-10" fill="#fff" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#fff"></circle><circle cx="7" cy="0" r="2" fill="#fff"></circle><circle cx="14" cy="0" r="2" fill="#fff"></circle></g>';
OrgChart.templates.individualOwners.entityName = '<text data-width="240" class="fs-5 font-weight-500 text-white entityNameEllipsis" data-text-overflow="ellipsis" x="15" y="25" width="230" height="25" fill="#fff">{val}</text>';
// OrgChart.templates.individualOwners.state = '<text data-width="63" class="fs-6 text-white" fill="#fff" x="15" y="45">{val}</text>';
// OrgChart.templates.individualOwners.entityType = '<text data-width="180" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="85" y="45">{val}</text>';

OrgChart.templates.individualOwners.entityData= '<text data-width="250" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="15" y="45">{val}</text>';

OrgChart.templates.individualOwners.individualOwnerName = '<text data-width="240" class="fs-5 font-weight-500 text-white entityNameEllipsis" data-text-overflow="ellipsis" x="15" y="75" width="230" height="25" fill="#fff">{val}</text>';
// OrgChart.templates.individualOwners.individualType = '<text data-width="110" class="fs-6 font-weight-500 text-white entityNameEllipsis" data-text-overflow="ellipsis" x="15" y="92" width="150" height="25" fill="#fff">{val}</text>';
// OrgChart.templates.individualOwners.ownershipPercentage = '<text data-width="180" class="fs-6 font-weight-500 text-white entityNameEllipsis" data-text-overflow="ellipsis" x="140" y="92" width="230" height="25" fill="#fff">{val}</text>';

OrgChart.templates.individualOwners.additionalEntityData= '<text data-width="250" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="15" y="92">{val}</text>';

OrgChart.templates.individualOwners.node =
    `<rect x="0" y="0" height="{h}" width="{w}" fill="#039BE5" stroke-width="1" stroke="#039BE5" rx="10" ry="10"></rect>`;

OrgChart.templates.individualOwners.plus = '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
    + '<text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{collapsed-children-count}</text>';
OrgChart.templates.individualOwners.link = '<path stroke-linejoin="round" stroke="#000000" stroke-width="1px" fill="none" d="{rounded}" />';
OrgChart.templates.individualOwners.icons_0 = '<foreignobject data-width="60" class="d-block text-end" fill="#000000" width="60" height="28" x="245" y="10">{val}</foreignobject>';

// end

//external individual owners
OrgChart.templates.externalIndividualOwners = Object.assign({}, OrgChart.templates.olivia); 
OrgChart.templates.externalIndividualOwners.size = [320, 110];
OrgChart.templates.externalIndividualOwners.nodeMenuButton = '<g transform="matrix(1,0,0,1,280,55)" data-ctrl-n-menu-id="{id}"><rect x="-4" y="-10" fill="#fff" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#fff"></circle><circle cx="7" cy="0" r="2" fill="#fff"></circle><circle cx="14" cy="0" r="2" fill="#fff"></circle></g>';
OrgChart.templates.externalIndividualOwners.entityName = '<text data-width="240" class="fs-5 font-weight-500 text-white entityNameEllipsis" data-text-overflow="ellipsis" x="15" y="25" width="230" height="25" fill="#fff">{val}</text>';
// OrgChart.templates.externalIndividualOwners.state = '<text data-width="63" class="fs-6 text-white" fill="#fff" x="15" y="45">{val}</text>';
// OrgChart.templates.externalIndividualOwners.entityType = '<text data-width="50" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="85" y="45">{val}</text>';

OrgChart.templates.externalIndividualOwners.entityData= '<text data-width="250" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="15" y="45">{val}</text>';

OrgChart.templates.externalIndividualOwners.individualOwnerName = '<text data-width="240" class="fs-5 font-weight-500 text-white entityNameEllipsis" data-text-overflow="ellipsis" x="15" y="75" width="230" height="25" fill="#fff">{val}</text>';


// OrgChart.templates.externalIndividualOwners.individualType = '<text data-width="110" class="fs-6 font-weight-500 text-white entityNameEllipsis" data-text-overflow="ellipsis" x="15" y="92" width="150" height="25" fill="#fff">{val}</text>';
// OrgChart.templates.externalIndividualOwners.ownershipPercentage = '<text data-width="180" class="fs-6 font-weight-500 text-white entityNameEllipsis" data-text-overflow="ellipsis" x="140" y="92" width="230" height="25" fill="#fff">{val}</text>';

OrgChart.templates.externalIndividualOwners.additionalEntityData= '<text data-width="250" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="15" y="92">{val}</text>';


// OrgChart.templates.externalIndividualOwners.externalEntity= '<text data-width="200" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="140" y="45">{val}</text>';

// OrgChart.templates.externalIndividualOwners.entityData= '<text data-width="250" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="15" y="60">{val}</text>';

OrgChart.templates.externalIndividualOwners.node =
    `<rect x="0" y="0" height="{h}" width="{w}" fill="#F57C00" stroke-width="1" stroke="#F57C00" rx="10" ry="10"></rect>`;
OrgChart.templates.externalIndividualOwners.plus = '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
    + '<text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{collapsed-children-count}</text>';
OrgChart.templates.externalIndividualOwners.link = '<path stroke-linejoin="round" stroke="#000000" stroke-width="1px" fill="none" d="{rounded}" />';
OrgChart.templates.externalIndividualOwners.icons_0 = '<foreignobject data-width="60" class="d-block text-end" fill="#000000" width="60" height="28" x="245" y="10">{val}</foreignobject>';

// end 

// start ula >red rectangle templates > unmanaged entity
OrgChart.templates.ula.size = [320, 90];
OrgChart.templates.ula = Object.assign({}, OrgChart.templates.ula);
OrgChart.templates.ula.nodeMenuButton = '<g transform="matrix(1,0,0,1,280,47)" data-ctrl-n-menu-id="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#fff"></circle><circle cx="7" cy="0" r="2" fill="#fff"></circle><circle cx="14" cy="0" r="2" fill="#fff"></circle></g>';
OrgChart.templates.ula.entityName = '<text data-width="230" class="fs-5 font-weight-500 text-white entityNameEllipsis" data-text-overflow="ellipsis" x="15" y="30" fill="#fff">{val}</text>';
// OrgChart.templates.ula.state = '<text data-width="65" class="fs-6 text-white" fill="#fff" x="15" y="60">{val}</text>';
// OrgChart.templates.ula.entityType = '<text data-width="50" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="85" y="60">{val}</text>';
// OrgChart.templates.ula.externalEntity= '<text data-width="200" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="140" y="60">{val}</text>';

OrgChart.templates.ula.entityData= '<text data-width="250" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="15" y="60">{val}</text>';

OrgChart.templates.ula.node =
    `<rect x="0" y="0" height="{h}" width="{w}" fill="#F57C00" stroke-width="1" stroke="#F57C00"  rx="10" ry="10"></rect>`;

OrgChart.templates.ula.plus = '<circle cx="15" cy="15" r="15" fill="#FFFFFF" stroke="#AEAEAE" stroke-width="1"></circle>'
    + '<text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{collapsed-children-count}</text>';
OrgChart.templates.ula.icons_0 = '<foreignobject data-width="60" class="d-block text-end" fill="#000000" width="60" height="28" x="245" y="10">{val}</foreignobject>';

    // end ula >red rectangle templates > unmanaged entity

// start polina >gary rounded shape templates > foreign entity
OrgChart.templates.polina.size = [300, 70];
OrgChart.templates.polina.nodeMenuButton = '<g transform="matrix(1,0,0,1,270,35)" data-ctrl-n-menu-id="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#fff"></circle><circle cx="7" cy="0" r="2" fill="#fff"></circle><circle cx="14" cy="0" r="2" fill="#fff"></circle></g>';
OrgChart.templates.polina.entityName = '<text data-width="200" class="fs-5 font-weight-500 text-white" data-text-overflow="ellipsis" x="25" y="25" fill="#fff">{val}</text>';
// OrgChart.templates.polina.entityType = '<text data-width="240" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="85" y="50">{val}</text>';
// OrgChart.templates.polina.state = '<text data-width="60" class="fs-6 text-white" fill="#fff" x="25" y="50">{val}</text>';

OrgChart.templates.polina.entityData= '<text data-width="250" class="fs-6 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#fff" x="25" y="50">{val}</text>';

OrgChart.templates.polina.link = '<path stroke-linejoin="round" stroke="#000" stroke-width="1px" fill="none" d="{rounded}" />';
OrgChart.templates.polina.icons_0 = '<foreignobject data-width="60" class="d-block text-end" fill="#000000" width="60" height="28" x="225" y="5">{val}</foreignobject>';
OrgChart.templates.polina.node =
    `<rect x="0" y="0" height="70" width="300" fill="#929394" stroke-width="1" stroke="#929394" rx="40" ry="40"></rect>`;

OrgChart.templates.polina.plus = '<circle cx="15" cy="15" r="15" fill="#FFFFFF" stroke="#AEAEAE" stroke-width="1"></circle>'
    + '<text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{collapsed-children-count}</text>';
// end polina >gray rounded shape templates > foreign entity

// start additional owner >green one edge cut rectangle > additional owner
OrgChart.templates.additionalOwners = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.additionalOwners.size = [270, 95];
OrgChart.templates.additionalOwners.additionalEntityName = '<text data-width="230" class="fs-5 font-weight-500 fst-italic text-white entityNameEllipsis" data-text-overflow="ellipsis" x="15" y="20" width="285" height="25" fill="#fff">{val}</text>';
OrgChart.templates.additionalOwners.entityTitle = '<foreignobject data-width="240" data-marrk-field="EntityTitle" class="fs-9 font-weight-400 text-white" data-text-overflow="ellipsis" fill="#ffffff" width="230" height="22" x="15" y="20">{val}</foreignobject>';
OrgChart.templates.additionalOwners.html = '<foreignobject data-width="230" data-marrk-field="html" class="fs-7 font-weight-400 pt-0 additionalItems text-white" data-text-overflow="ellipsis" fill="#ffffff" width="255" height="54" x="15" y="40">{val}</foreignobject>';
// OrgChart.templates.additionalOwners.state = '<foreignobject data-width="240" class="fs-6 text-white" fill="#000000" width="65" height="25" x="134" y="20">{val}</foreignobject>';
// OrgChart.templates.additionalOwners.link = '<path marker-start="url(#dotSlinkYellow)" marker-end="url(#arrowSlinkYellow)"  stroke-linejoin="round" stroke="#000" stroke-width="1px" fill="none" d="{rounded}" />';
OrgChart.templates.additionalOwners.link = `
  <path marker-start="url(#dotSlinkYellow)" marker-end="url(#arrowSlinkYellow)"
    stroke-linejoin="round" stroke="#000" stroke-width="1px" fill="none" d="{rounded}" 
    stroke-dasharray="2, 2" />
`;

OrgChart.templates.additionalOwners.defs =
        `<marker id="arrowSlinkYellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
            orient="auto-start-reverse"><path fill="#000" d="M 0 0 L 10 5 L 0 10 z" />
        </marker>`
OrgChart.templates.additionalOwners.node = `
    <svg id="resizableSvg" width="320" height="95" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradAdditionalOwners" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#48af56;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#48af56;stop-opacity:1" />
            </linearGradient>
        </defs>
        <path d="M10 0 H250 Q270 0 270 20 V85 Q270 95 260 95 H10 Q0 95 0 85 V10 Q0 0 10 0 Z"
              fill="#48AF56" stroke="#52E34B" stroke-width="0"></path>
        <polygon points="250,0 270,0 270,20" fill="#F3F5F8"></polygon>
        <line x1="250" y1="0" x2="270" y2="20" stroke="#52E34B" stroke-width="1"></line>
    </svg>
    `;

// start additional owner >green one edge cut rectangle > additional owner
 

// hidden templates when toggle
OrgChart.templates.hidden = Object.assign({}, OrgChart.templates.polina);
OrgChart.templates.hidden.node = "";
OrgChart.templates.hidden.link = "";
OrgChart.templates.hidden.size = [0,0];
OrgChart.templates.hidden.entityName = "";
OrgChart.templates.hidden.entityDescription = "";
OrgChart.templates.hidden.nodeMenuButton = "";
OrgChart.templates.hidden.state = "";
OrgChart.templates.hidden.entityType = "";
OrgChart.templates.hidden.entityData = "";
OrgChart.templates.hidden.additionalEntityData = "";
OrgChart.templates.hidden.icons_0 = "";
OrgChart.slinkTemplates.hiddenSlinks = Object.assign({}, OrgChart.slinkTemplates.orange);
OrgChart.slinkTemplates.hiddenSlinks.link = '';
OrgChart.templates.hidden.html = "";
// hidden teamplates end

// label color change for additioanl owner entity
OrgChart.slinkTemplates.orange.labelPosition = 'end';
OrgChart.slinkTemplates.orange.label =
        `<text style="font-size: 16px;" dominant-baseline="middle" fill="#a1a1a1" alignment-baseline="middle" text-anchor="end" x="{x}" y="{y}">{val}</text>`;
OrgChart.slinkTemplates.orange.link =
        `<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkOrange)" marker-end="url(#arrowSlinkOrange)"
            stroke-linejoin="round" stroke="#a8a8a8" stroke-width="2" fill="none" d="{d}" />`;
OrgChart.slinkTemplates.orange.defs =
        `<marker id="arrowSlinkOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
            orient="auto-start-reverse"><path fill="#000" d="M 0 0 L 10 5 L 0 10 z" />
        </marker> 
        <marker id="dotSlinkOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
            <circle cx="5" cy="5" r="5" fill="#000" />
        </marker>`            
// end
// 
OrgChart.slinkTemplates.myTemplate3 = Object.assign({}, OrgChart.slinkTemplates.yellow);
OrgChart.slinkTemplates.myTemplate3.link = '<path  marker-start="url(#dotSlinkYellow)" marker-end="url(#arrowSlinkYellow)" stroke-linejoin="round" stroke="#000" stroke-width="2" fill="none" d="{d}" />';
OrgChart.slinkTemplates.myTemplate3.label =
        `<text style="font-size: 16px;" dominant-baseline="middle" fill="#000" alignment-baseline="middle" text-anchor="middle" x="{x}" y="{y}">{val}</text>`;
OrgChart.slinkTemplates.myTemplate3.defs =
        `<marker id="arrowSlinkYellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
            orient="auto-start-reverse"><path fill="#000" d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
        <marker id="dotSlinkYellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
            <circle cx="5" cy="5" r="5" fill="#000" />
        </marker>`
// 
OrgChart.SEARCH_PLACEHOLDER = "Search";
OrgChart.RES.IT_IS_LONELY_HERE_LINK = "Loading...";
OrgChart.CLINK_CURVE = 1.2;
OrgChart.FILTER_ALPHABETICALLY = false;

/* Edit Form start */
var editForm = function () {
    this.nodeId = null;
};
editForm.prototype.init = function (obj) {
    var that = this;
    this.obj = obj;
    this.editForm = $("#editForm");
    this.entityName = $("#entity-name");
    this.JuriState = $("#JuriState");
    this.EntityType = $("#EntityType");

    this.cancelButton = $("#cancel");

    this.cancelButton.on("click", function () {
        that.hide();
    });
};
editForm.prototype.show = function (nodeId) {
    this.nodeId = nodeId;

    var left = document.body.offsetWidth / 2 - 150;
    var node = chart.get(nodeId);

    if (!node) return;
    this.entityName.html(node.entityName ? node.entityName : "");

    this.editForm.removeClass("d-none");

    OrgChart.animate(this.editForm, { opacity: 0 }, { opacity: 1 }, 300, OrgChart.anim.inOutSin);
};
editForm.prototype.content = function (id, detailsMode, dontAnim, width, dontRenderButtons) {
    var div = document.createElement('div');
    div.innerHTML = $('#editForm').html();
    //div.innerHTML += '<style>#close{display:none !important;}</style>';
    return { element: div, focusId: '', title: '', shareText: '' };
};
editForm.prototype.hide = function (showldUpdateTheNode) {
    this.editForm.addClass("d-none");

};
//edit form closed
// edit form/summary form for external entity
var editFormExternalEntity = function () {
    this.nodeId = null;
};
editFormExternalEntity.prototype.init = function (obj) {
    var that = this;
    this.obj = obj;
    this.editFormExternalEntity = $("#editFormExternalEntity");
    this.entityName = $("#entity-name");
    this.JuriState = $("#JuriState");
    this.EntityType = $("#EntityType");

    this.cancelButton = $("#cancel");

    this.cancelButton.on("click", function () {
        that.hide();
    });
};
editFormExternalEntity.prototype.show = function (nodeId) {
    this.nodeId = nodeId;

    var left = document.body.offsetWidth / 2 - 150;
    var node = chart.get(nodeId);

    if (!node) return;
    this.entityName.html(node.entityName ? node.entityName : "");

    this.editFormExternalEntity.removeClass("d-none");

    OrgChart.animate(this.editFormExternalEntity, { opacity: 0 }, { opacity: 1 }, 300, OrgChart.anim.inOutSin);
};
editFormExternalEntity.prototype.content = function (id, detailsMode, dontAnim, width, dontRenderButtons) {
    var div = document.createElement('div');
    div.innerHTML = $('#editFormExternalEntity').html();
    //div.innerHTML += '<style>#close{display:none !important;}</style>';
    return { element: div, focusId: '', title: '', shareText: '' };
};
editFormExternalEntity.prototype.hide = function (showldUpdateTheNode) {
    this.editFormExternalEntity.addClass("d-none");

};
// end edit form/summary form for external entity


var chart = new OrgChart(document.getElementById("tree"), {
    template: 'olivia',
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
    miniMap: true,
    layout: OrgChart.normal,
    toolbar: {
        layout: false,
        zoom: true,
        fit: true,
        expandAll: true,
    },
    menu: {
        pdf: { text: "Export PDF", icon: downloadTempMenu, onClick: pdf },
        csv: { text: "Export Node Fields CSV", icon: exportCSV },
        png: { text: "Export JPG", icon: exportJPG },

    },
    
    tags: {
       "individualOwners":{
        template:"individualOwners",
       },
       "externalIndividualOwners":{
        template:"externalIndividualOwners",
        nodeMenu: {
            details: {
                text: "Entity Summary",
                icon: summaryEntity,
                onClick: externalEntitySummaryForm,
            },
            edit: {
                text: "Update Entity",
                icon: updateEntity,
                onClick: updateEntityExternalNode,
            },
            subsidiary: {
                text: "Add Owners",
                icon: addEntity,
                onClick: callHandler,
            },
            remove: {
                text: "Delete",
                onClick: deleteEntity,
            },
        },
       },
        "Subs C": {
            template: "ula",
          
        },
        "externalEntityNode":{
            template: "ula",
            nodeMenu: {
                details: {
                    text: "Entity Summary",
                    icon: summaryEntity,
                    onClick: externalEntitySummaryForm,
                },
                edit: {
                    text: "Update Entity",
                    icon: updateEntity,
                    onClick: updateEntityExternalNode,
                },
                subsidiary: {
                    text: "Add Owners",
                    icon: addEntity,
                    onClick: callHandler,
                },
                remove: {
                    text: "Delete",
                    onClick: deleteEntity,
                },
            },
        },
        "partnerNode": {
            template: "polina",
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
                    onClick: callHandler1,
                },
            },
        },
        "additionalOwners":{
            template: "additionalOwners",
            
        },
        "hidden": {
            template: "hidden"
        },
        filter: {
            template: 'dot',
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
        
    filterBy: ['DBA', 'Business_License', 'Group_Name', 'Compliance', 'Jurisdiction', 'Status', 'Entity_Name', 'Entity_Type'],
    searchFields: ["Entity_Name", "Entity_Type", "state","externalEntity","individualOwnerName","individualType","ownershipPercentage", "Company", "Ownership", "Compliance", "Manager", "Product_Manager", "President", "Parent_Entity"],

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
            onClick: callHandler1,
        },
        subsidiary: {
            text: "Add Owners",
            icon: addEntity,
            onClick: callHandler,
        }
    },
    // dottedLines: [
    //     { "from": "add-10","to": "1"},
    //     { "from": "add-8", "to": "0" },
    //     { "from": "add-11", "to": "9" },
    // ],

    nodeBinding: {
        additionalEntityName:"Entity_Name",
        entityName: "Entity_Name",
        entityType: "Entity_Type",
        entityData:"entityData",
        additionalEntityData:"additionalEntityData",
        state: "state",
        entityTitle:"entityTitle",
        externalEntity:"externalEntity",
        html:"html",
        icons_0: "html",
        tooltip: 'tooltip',
        individualOwnerName:"individualOwnerName",
        individualType: "individualType",
        ownershipPercentage:"ownershipPercentage",
    },
    linkBinding: {
        link_field_0: "createdAt"
    },
    editUI: new editForm(),
});


// toggle button show/hide partner & slinks nodes
let partnerNodeState = 'polina';
let additionalOwnersState = 'additionalOwners';
$(document).on('click', '#partnerBtn',function () {
  if (!$(this).is(":checked") && chart.config.tags.partnerNode.template == "polina") {
    partnerNodeState = 'hidden';
      chart.config.tags = {
            filter: {
                template: 'dot',
            },
          "partnerNode": {
              template: "hidden"
          },
          "hidden": {
              template: "hidden"
          },
          "additionalOwners":{
              template: additionalOwnersState
          },
          "externalEntityNode":{
              template: "ula",
              nodeMenu: externalNodeMenu()
          },
          "externalIndividualOwners":{
            template:"externalIndividualOwners",
            nodeMenu: externalNodeMenu()
          },
          "individualOwners":{
              template: "individualOwners",
          },
      }
      chart.draw()
  }
  else {
    partnerNodeState = 'polina'
      chart.config.tags = {
            filter: {
                template: 'dot',
            },
          "partnerNode":{
              template: "polina",
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
                    onClick: callHandler1,
                },
            },
          },
          "additionalOwners":{
              template: additionalOwnersState
          },
          "hidden": {
              template: "hidden"
          },
          "externalEntityNode":{
              template: "ula",
              nodeMenu: externalNodeMenu()
          },
          "externalIndividualOwners":{
            template:"externalIndividualOwners",
            nodeMenu: externalNodeMenu()
          },
          "individualOwners":{
              template: "individualOwners",
          },
      }
      chart.draw()
  }
}).change();
$(document).on('click', '#slinkBtn',function () {
  if (!$(this).is(":checked") &&  chart.config.tags.additionalOwners.template == "additionalOwners") {
    additionalOwnersState = 'hidden';
      chart.config.tags = {
        filter: {
            template: 'dot',
        },
          "partnerNode": {
              template: partnerNodeState,
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
                    onClick: callHandler1,
                },
            },
          },
          "hidden": {
              template: "hidden"
          },
          "additionalOwners":{
              template: "hidden"
          },
          "externalEntityNode":{
              template: "ula",
              nodeMenu: externalNodeMenu()
          },
          "externalIndividualOwners":{
            template:"externalIndividualOwners",
            nodeMenu: externalNodeMenu()
          },
          "individualOwners":{
              template: "individualOwners",
          },
      }
      chart.draw()
  }
  else {
    additionalOwnersState = 'additionalOwners';
      chart.config.tags = {
        filter: {
            template: 'dot',
        },
          "partnerNode":{
              template: partnerNodeState,
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
                    onClick: callHandler1,
                },
            },
          },
          "additionalOwners":{
              template: "additionalOwners"
          },
          "hidden": {
              template: "hidden"
          },
          "externalEntityNode":{
              template: "ula",
              nodeMenu: externalNodeMenu()
          },
          "externalIndividualOwners":{
            template:"externalIndividualOwners",
            nodeMenu: externalNodeMenu()
          },
          "individualOwners":{
              template: "individualOwners",
          },
      }
      chart.draw()
  }
});
let externalNodeMenu = function() {
  let nodeMenu= {
        details: {
            text: "Entity Summary",
            icon: summaryEntity,
            onClick: externalEntitySummaryForm,
        },
        edit: {
            text: "Update Entity",
            icon: updateEntity,
            onClick: updateEntityExternalNode,
        },
        subsidiary: {
            text: "Add Owners",
            icon: addEntity,
            onClick: callHandler,
        },
        remove: {
            text: "Delete",
            onClick: deleteEntity,
        },
    }
 
  return nodeMenu;
}
// 
// end
chart.searchUI.on('show-items', function (sender) {
    if (sender.lastSearch.length) {
        for (var item of sender.lastSearch) {
            var fieldElement = sender.instance.element.querySelector(`[data-n-id="${item.id}"] [data-marrk-field="${item.__searchField}"]`);
            fieldElement.innerHTML = item.__searchMarks;
        }
    }
    else {
        sender.instance.draw();
    }
});


// all search action feature start
let highlightedId = 0;

chart.onInit(function () {
    this.searchUI.input.addEventListener('input', function () {
        chart.searchUI.searchTableWrapper.style.display = '';
        if (highlightedId != 0) {
            let oldNode = chart.get(highlightedId);
            if (oldNode.tags) {
                oldNode.tags.pop("match");
            }
            chart.updateNode(oldNode)
            if($(".btnFilter").find("button").hasClass('active')){
                $(".btnFilter").find("button").trigger('click').addClass('active')
                $(".btnFilter").find("span").addClass('icon-org-filter-white');
                $("#tree").addClass('pt-10');
                orgChartTooltip.classList.toggle("mt-10");
            }
        }
        
    })
})
chart.searchUI.on('searchclick', function (sender, args) {
    if (highlightedId != 0) {
        let oldNode = chart.get(highlightedId);
        if (oldNode.tags) {
            oldNode.tags.pop("match");
        }
        chart.updateNode(oldNode)
    }
    highlightedId = args.nodeId
    let node = chart.get(args.nodeId);
    if (node.tags) {
        node.tags.push("match");
    }
    else {
        node.tags = ["match"]
    }
    chart.updateNode(node);
    if($(".btnFilter").find("button").hasClass('active')){
        $(".btnFilter").find("button").trigger('click').addClass('active')
        $(".btnFilter").find("span").addClass('icon-org-filter-white');
        $("#tree").addClass('pt-10');
        orgChartTooltip.classList.toggle("mt-10");
    }
    sender.searchTableWrapper.style.display = 'none';
    sender.instance.center(args.nodeId, null, function(){
        // sender.instance.zoom(2);
    });
});
// search action end for chart
// when click anywhere close filter dropdown option
chart.element.addEventListener('click', function(event){
    if (event.target == chart.getSvg()){
        chart.filterUI.hide();
    }
});
// end

function callHandler(nodeId) {
    let nodeData = chart.get(nodeId);
    // Open the Bootstrap modal
    $('#addOwnersEntity').modal('show');
}
function callHandler1(nodeId) {
    let nodeData = chart.get(nodeId);
    // Open the Bootstrap modal
    $('#update-profile-modal').modal('show');
}
function updateEntityExternalNode(nodeId) {
    let nodeData = chart.get(nodeId);
    // Open the Bootstrap modal
    $('#update-entity-external-node').modal('show');
}
function externalEntitySummaryForm(nodeId){
    let nodeData = chart.get(nodeId);
    // Open the Bootstrap modal
    $('#externalEntitySummaryEditForm').modal('show');
}
function deleteEntity(nodeId) {
    let nodeData = chart.get(nodeId);
    // Open the Bootstrap modal
    $('#deleteEntity').modal('show');
}
// hyperlinks end



chart.on('init', function (sender, args) {
    document.getElementById("loadPlaceholder").style.display = "none";
    sender.searchUI.find('');
    // simulate Enter
    let element = document.querySelector('input');
    setTimeout(() => {
        element.dispatchEvent(new KeyboardEvent('keyup', { 'key': 'Enter' }));
    }, 100)
})


// Make a fetch request to the JSON file
fetch('data-reboot-org-sample.json')
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

chart.on('node-layout', function (sender, args) {
    if (args.pnode.id == 6) {
        args.layout = OrgChart.treeLeftOffset;
    }

});
// end filtered chart js

// when click on nodes open summary form
chart.onNodeClick((args) => {
    const nodeElement = document.querySelector(`[data-n-id='${args.node.id}']`);

    if (nodeElement && nodeElement.classList.contains('additionalOwners')) {
        return false; // Do nothing and cancel the click event
    }

    chart.editUI.show(args.node.id, false); 
    return false; // Cancel the click event
});
// end

// pdf preview start
function pdf(nodeId) {
    OrgChart.pdfPrevUI.show(chart, {
        format: "fit",
        header: 'My Header',
        footer: 'My Footer. Page {current-page} of {total-pages}'
    });
}
OrgChart.pdfPrevUI._show = OrgChart.pdfPrevUI.show;
OrgChart.pdfPrevUI.show = function (chart, options) {
    OrgChart.pdfPrevUI._show(chart, options);
    chart.element.querySelector('#boc-prev-cancel').addEventListener('click', function(){
        // start additional owner >green one edge cut rectangle > additional owner
       
        OrgChart.templates.additionalOwners.node = `
        <svg id="resizableSvg" width="320" height="95" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradAdditionalOwners" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#48af56;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#48af56;stop-opacity:1" />
                </linearGradient>
            </defs>
            <path d="M10 0 H250 Q270 0 270 20 V85 Q270 95 260 95 H10 Q0 95 0 85 V10 Q0 0 10 0 Z"
                  fill="#48AF56" stroke="#52E34B" stroke-width="0"></path>
            <polygon points="250,0 270,0 270,20" fill="#F3F5F8"></polygon>
            <line x1="250" y1="0" x2="270" y2="20" stroke="#52E34B" stroke-width="1"></line>
        </svg>
        `;
        chart.on('field', function (sender, args) {
            if (args.name == 'html') {
                let html = args.data["html"];
            
        
                args.value = `
                                        ${html ? html  : ''}
                                `;
            }
        });
        chart.on('node-initialized', function (sender, args) {
            let node = args.node;
            let data = chart._get(node.id);
            console.log(data)
            if (data.html) {
                let html = data["html"];
        
                let sss = `
                                <div class="fields h-auto">
                                        ${html ? html : ''}
                                </div>
                            `;
        
                document.getElementById('test_height').innerHTML = sss;
        
                let rect1 = document.querySelector('#test_height .fields').getBoundingClientRect();
        
                node.h = rect1.height + 90;
            }
        });
    });
};
function preview() {
    OrgChart.pdfPrevUI.show(chart, {});
}
// pdf preview end
// export end
chart.on('exportend', function () {

    OrgChart.templates.additionalOwners.node = `
    <svg id="resizableSvg" width="320" height="95" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradAdditionalOwners" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#48af56;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#48af56;stop-opacity:1" />
            </linearGradient>
        </defs>
        <path d="M10 0 H250 Q270 0 270 20 V85 Q270 95 260 95 H10 Q0 95 0 85 V10 Q0 0 10 0 Z"
              fill="#48AF56" stroke="#52E34B" stroke-width="0"></path>
        <polygon points="250,0 270,0 270,20" fill="#F3F5F8"></polygon>
        <line x1="250" y1="0" x2="270" y2="20" stroke="#52E34B" stroke-width="1"></line>
    </svg>
    `;
    chart.on('field', function (sender, args) {
        if (args.name == 'html') {
            let html = args.data["html"];
        

            args.value = `
                                    ${html ? html  : ''}
                            `;
        }
    });
    chart.on('node-initialized', function (sender, args) {
        let node = args.node;
        let data = chart._get(node.id);
        console.log(data)
        if (data.html) {
            let html = data["html"];

            let sss = `
                                <div class="fields h-auto">
                                    ${html ? html : ''}
                                </div>
                        `;

            document.getElementById('test_height').innerHTML = sss;

            let rect1 = document.querySelector('#test_height .fields').getBoundingClientRect();

            node.h = rect1.height + 90;
        }
    });
   
})
// export end
// 
chart.on('exportstart', function (sender, args) {
    OrgChart.templates.additionalOwners.node =
    `<rect x="0" y="0" height="{h}" width="{w}" fill="#48AF56" stroke-width="1" stroke="#48AF56"  rx="10" ry="10"></rect>`;
    chart.on('field', function (sender, args) {
        if (args.name == 'html') {
            let html = args.data["html"];
           
    
            args.value = `<foreignobject x="10" y="10" width="200" height="900">
                                <div class="fields h-100" xmlns="http://www.w3.org/1999/xhtml" >
                                    ${html ? html  : ''}
    
                                </div>
                            </foreignobject>`;
        }
    });
    
    chart.on('node-initialized', function (sender, args) {
        let node = args.node;
        let data = chart._get(node.id);
        console.log(data)
        if (data.html) {
            let html = data["html"];
    
            let sss = `<foreignobject  x="10" y="10" width="200" height="900">
                                <div class="fields">
                                    ${html ? html : ''}
                                </div>
                            </foreignobject>`;
    
            document.getElementById('test_height').innerHTML = sss;
    
            let rect1 = document.querySelector('#test_height .fields').getBoundingClientRect();
    
            node.h = rect1.height + 90;
        }
    });

    args.styles += document.getElementById('exportStyles').outerHTML;
  

});
// 
// custom org select
// JavaScript to handle the custom select behavior
var selectContainer = document.querySelector(".org-custom-select");
var selectedOption = selectContainer.querySelector(".org-select-selected");
var selectItems = selectContainer.querySelector(".org-select-items");
var options = selectItems.querySelectorAll(".div1");

// Toggle select items visibility when clicking the selected option
selectedOption.addEventListener("click", function () {
    selectItems.style.display = selectItems.style.display === "block" ? "none" : "block";
});

// Handle option selection
for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
        // selectedOption.textContent = this.textContent;
        selectedOption.innerHTML = this.innerHTML;
        selectedOption.querySelector('.d-none').classList.remove('d-none');
        console.log(selectedOption.innerHTML);
        selectItems.style.display = "none";
        chart.setOrientation(parseInt(this.id));
        // Handle selected option value or perform any other desired action
    });
}

// Close select items if user clicks outside the select container
document.addEventListener("click", function (e) {
    if (!selectContainer.contains(e.target)) {
        selectItems.style.display = "none";
    }
});

// custom org select2
// JavaScript to handle the custom select behavior
var selectContainer2 = document.querySelector(".org-custom-select2");
var selectedOption2 = selectContainer2.querySelector(".org-select-selected2");
var selectItems2 = selectContainer2.querySelector(".org-select-items2");
var options2 = selectItems2.querySelectorAll(".div2");

// Toggle select items visibility when clicking the selected option
selectedOption2.addEventListener("click", function () {
    selectItems2.style.display = selectItems2.style.display === "block" ? "none" : "block";
});

// Handle option selection
for (var i = 0; i < options2.length; i++) {
    options2[i].addEventListener("click", function () {
        // selectedOption2.textContent = this.textContent;
        // selectItems2.style.display = "none";
        selectedOption2.innerHTML = this.innerHTML;
        selectedOption2.querySelector('.d-none').classList.remove('d-none');
        console.log(selectedOption2.innerHTML);
        selectItems2.style.display = "none";

        chart.setLayout(parseInt(this.id));
        // Handle selected option value or perform any other desired action
    });
}

// Close select items if user clicks outside the select container
document.addEventListener("click", function (e) {
    if (!selectContainer2.contains(e.target)) {
        selectItems2.style.display = "none";
    }
});



// skip org chart

let clickCount = 0;
function skipFunction() {
    var bocLightSkip = document.querySelector('.boc-light.boc-light-skip')
    var element = document.querySelector('.boc-edit-form.light');
    var stepText = document.querySelector('.stepText');
    var stepNum = document.querySelector(".stepNum")
    var expandButton = document.querySelector('[data-ctrl-ec-id="1"]')
    var skipOverlay = document.querySelector('.skipOverlay');
    var paraText = document.querySelector('.paraText');
    var changeButton = document.querySelector('.changeButton');
    var textButton = document.querySelector('.textButton');
    var expandButtonClicked = document.querySelector('[data-tlbr="expand"]');


    clickCount++;
    if (clickCount === 1) {
        stepText.innerHTML = '2. Add your <br/> company information';
        stepNum.innerHTML = "2";
        element.classList.add("visible");
    } else if (clickCount === 2) {
        stepText.innerHTML = '3. Add an Entity <br/> to your Organization';
        stepNum.innerHTML = "3";
        element.classList.add("invisible");
        expandButton.style.opacity = "1";
        bocLightSkip.style.height = "400px";
        // Add a click event listener to the button
        expandButtonClicked.addEventListener('click', function () {
            // Code to be executed when the button is clicked
            console.log('Button clicked!');
            // Add any other actions or functions you want to perform here
        });

        // Add a click event listener to the clickMyButton
        changeButton.addEventListener('click', function () {
            // Programmatically trigger the click event on the myButton
            expandButtonClicked.click();
        });
    } else if (clickCount === 3) {
        stepText.innerHTML = '4. You are set! <br/> Lets start to organize your chart';
        stepNum.innerHTML = "4";
        skipOverlay.style.display = "none";
        stepText.classList.remove('text-white');
        paraText.classList.remove('text-white');
        changeButton.classList.add('gradientButton');
        textButton.innerHTML = "Start Now";
        // clickCount = 0; // Reset the count after three clicks   
    }
}
// end skip org chart

// remove_Underscore from filter
function removeUnderscores(element) {
    const originalText = element.textContent;
    const updatedText = originalText.replace(/_/g, ' '); // Use regular expression with global flag to replace all underscores
    element.textContent = updatedText;
}

// select for filter
document.addEventListener("DOMContentLoaded", function () {
    var btnFilter = document.querySelector('.btnFilter button');
    var filterIcon = document.querySelector('.btnFilter button span');
    let bocFilter;

    btnFilter.addEventListener('click', function () {
        bocFilter = document.querySelector('.boc-filter');
        bocTree = document.querySelector('#tree');
        orgChartTooltip = document.querySelector('#orgChartTooltip');
        this.classList.toggle("active");
        filterIcon.classList.toggle("icon-org-filter-white");
        bocFilter.classList.toggle("d-block");
        bocTree.classList.toggle("pt-10");
        orgChartTooltip.classList.toggle("mt-10");
        bocTree.classList.toggle("vh-100");
        // remove_Underscore from filter end
        const elementsToProcess = document.querySelectorAll('[data-filter-field]');
        const listMenu = document.querySelectorAll('.boc-filter-menu');

        elementsToProcess.forEach(element => {
            removeUnderscores(element);

            // org-chart filter menu's dropdown open/close script
            element.addEventListener('click', function () {
                const menuId = element.getAttribute('data-filter-field');
                const menu = document.querySelector(`[data-filter-menu="${menuId}"]`);

                if (menu) {
                    listMenu.forEach(ele2 => {
                        if (ele2 !== menu) {
                            ele2.classList.add('d-none');
                        }
                    });

                    menu.classList.toggle('d-none');
                }
            });
        });

        // remove_Underscore from filter end


    });

});















