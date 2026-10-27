(function ($, OrgChart) {
    'use strict';

    const CARD = { w: 260, h: 124, strip: 48 };
    const SLIM = { w: 260, h: 76 };

    const SHAPE = { Trust: 'diamond', Corporation: 'rectangle', Partnership: 'triangle', Others: 'oval' };


    let expandAllIcon = '<span class="icon me-0 icon-expand-all"></span>';

    let fitIcon = '<span class="icon me-0 icon-fit"></span>';

    let zoomInIcon = '<span class="icon me-0 icon-zoom-in"></span>';

    let zoomOutIcon = '<span class="icon me-0 icon-zoom-out"></span>';

    let actionIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">' +
        '<path d="M2.56367 12.2571L7.56524 3.25712C7.73988 2.94286 8.16874 2.91667 8.38575 3.17856L8.43933 3.25712L13.4409 12.2571C13.6119 12.5648 13.4197 12.9374 13.0892 12.993L13.0039 13H3.00072C2.64878 13 2.41637 12.651 2.52837 12.3352L2.56367 12.2571L7.56524 3.25712L2.56367 12.2571ZM8.00229 9.87694C7.58783 9.87694 7.25185 10.2129 7.25185 10.6274C7.25185 11.0418 7.58783 11.3778 8.00229 11.3778C8.41674 11.3778 8.75273 11.0418 8.75273 10.6274C8.75273 10.2129 8.41674 9.87694 8.00229 9.87694ZM8.002 6.87757C7.6882 6.87733 7.42824 7.10838 7.38337 7.40973L7.37652 7.50209L7.37576 8.49952L7.38247 8.59188C7.42688 8.8933 7.68648 9.12476 8.00028 9.125C8.31408 9.12524 8.57404 8.89418 8.61891 8.59283L8.62576 8.50048L8.62652 7.50304L8.61982 7.41068C8.57541 7.10926 8.3158 6.87781 8.002 6.87757Z"/>' +
        '<defs>' +
        '<linearGradient id="paint0_linear_7756_5925" x1="14.6921" y1="3" x2="4.42803" y2="14.6925" gradientUnits="userSpaceOnUse">' +
        '<stop stop-color="#000"/>' +
        '<stop offset="1" stop-color="#000"/>' +
        '</linearGradient>' +
        '</defs>' +
        '</svg>';

    let openEntity = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8 2.75C8 2.33579 8.33579 2 8.75 2H13.25C13.6642 2 14 2.33579 14 2.75V7.25C14 7.66421 13.6642 8 13.25 8C12.8358 8 12.5 7.66421 12.5 7.25V4.56077L8.28044 8.78033C7.98755 9.07322 7.51268 9.07322 7.21978 8.78033C6.92689 8.48744 6.92689 8.01256 7.21978 7.71967L11.4395 3.5H8.75C8.33579 3.5 8 3.16421 8 2.75ZM2 6.25C2 4.45507 3.45507 3 5.25 3H6.25C6.66421 3 7 3.33579 7 3.75C7 4.16421 6.66421 4.5 6.25 4.5H5.25C4.2835 4.5 3.5 5.2835 3.5 6.25V10.75C3.5 11.7165 4.2835 12.5 5.25 12.5H9.75C10.7165 12.5 11.5 11.7165 11.5 10.75V9.75C11.5 9.33579 11.8358 9 12.25 9C12.6642 9 13 9.33579 13 9.75V10.75C13 12.5449 11.5449 14 9.75 14H5.25C3.45507 14 2 12.5449 2 10.75V6.25Z"/>' +
        '</svg>';

    let updateEntity = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M13.6569 2.3436C14.4379 3.12465 14.4379 4.39098 13.6569 5.17203L6.27044 12.5585C5.95004 12.8789 5.54859 13.1062 5.10901 13.2161L2.81801 13.7888C2.45182 13.8804 2.12013 13.5487 2.21167 13.1825L2.78442 10.8915C2.89432 10.4519 3.12161 10.0505 3.44201 9.73006L10.8285 2.3436C11.6095 1.56255 12.8759 1.56255 13.6569 2.3436ZM10.1213 4.46481L4.14912 10.4372C3.95688 10.6294 3.8205 10.8703 3.75457 11.134L3.38393 12.6166L4.86648 12.2459C5.13022 12.18 5.37109 12.0436 5.56333 11.8514L11.5353 5.87881L10.1213 4.46481ZM11.5356 3.05071L10.8283 3.75781L12.2423 5.17181L12.9498 4.46492C13.3403 4.07439 13.3403 3.44123 12.9498 3.05071C12.5593 2.66018 11.9261 2.66018 11.5356 3.05071Z"/>' +
        '</svg>';

    let summaryEntity = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M5.08535 2C5.29127 1.4174 5.84689 1 6.5 1H9.5C10.1531 1 10.7087 1.4174 10.9146 2H11.5C12.3284 2 13 2.67157 13 3.5V13.5C13 14.3284 12.3284 15 11.5 15H4.5C3.67157 15 3 14.3284 3 13.5V3.5C3 2.67157 3.67157 2 4.5 2H5.08535ZM6.5 2C6.22386 2 6 2.22386 6 2.5C6 2.77614 6.22386 3 6.5 3H9.5C9.77614 3 10 2.77614 10 2.5C10 2.22386 9.77614 2 9.5 2H6.5ZM5.08535 3H4.5C4.22386 3 4 3.22386 4 3.5V13.5C4 13.7761 4.22386 14 4.5 14H11.5C11.7761 14 12 13.7761 12 13.5V3.5C12 3.22386 11.7761 3 11.5 3H10.9146C10.7087 3.5826 10.1531 4 9.5 4H6.5C5.84689 4 5.29127 3.5826 5.08535 3Z"/>' +
        '</svg>';

    let addEntity = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M7.91012 3.00806L8 3C8.24546 3 8.44961 3.17688 8.49194 3.41012L8.5 3.5V7.5H12.5C12.7455 7.5 12.9496 7.67688 12.9919 7.91012L13 8C13 8.24546 12.8231 8.44961 12.5899 8.49194L12.5 8.5H8.5V12.5C8.5 12.7455 8.32312 12.9496 8.08988 12.9919L8 13C7.75454 13 7.55039 12.8231 7.50806 12.5899L7.5 12.5V8.5H3.5C3.25454 8.5 3.05039 8.32312 3.00806 8.08988L3 8C3 7.75454 3.17688 7.55039 3.41012 7.50806L3.5 7.5H7.5V3.5C7.5 3.25454 7.67688 3.05039 7.91012 3.00806L8 3L7.91012 3.00806Z"/>' +
        '</svg>';
    let deleteIcon = '<span class="icon icon-sm icon-delete m-0"></span>'
    let downloadTempMenu = '<span class="icon me-0 icon-md icon-download-template-menu"></span>';
    let exportCSV = '<span class="icon icon-md me-0 icon-export-csv"></span>';
    let exportJPG = '<span class="icon icon-md me-0 icon-export-jpg"></span>';


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
        let shape = SHAPE[data.taxShape];
        let svg;

        switch (shape) {
            case "diamond":
                svg = `<path d="M${cx - 20},${cy} L${cx},${cy + 10} L${cx + 20},${cy} L${cx},${cy - 10} Z" fill="#ffffff" />`;
                break;
            case "triangle":
                svg = `<polygon points="${cx},${cy - 15} ${cx + 15},${cy + 10} ${cx - 15},${cy + 10}" fill="#ffffff" />`;
                break;
            case "rectangle":
                svg = `<rect width="30" height="20" x="${cx - 15}" y="${cy - 10}" fill="#ffffff" />`;
                break;
            default:
                svg = `<ellipse rx="17" ry="11" cx="${cx}" cy="${cy}" fill="#ffffff" />`;
        }

        return `<g class="tax-shape">${svg}</g>`;
    }


    const textCtx = document.createElement('canvas').getContext('2d');


    function textWidth(text, font, letterSpacing) {
        textCtx.font = font;
        return textCtx.measureText(text).width + (letterSpacing || 0) * String(text).length;
    }

    // keeping same output as OrgChart.wrapText(text, template, width, maxLines)
    function wrappedText(text, template, width, maxLines) {
        const fontSize = (template.match(/font-size:\s*([\d.]+)px/) || [])[1] || 12;
        const bold = /font-weight:\s*(bold|[6-9]00)/.test(template) ? '700 ' : '';
        textCtx.font = bold + fontSize + 'px Sora, sans-serif';

        const x = (template.match(/\sx="([^"]*)"/) || [])[1] || 0;
        const lines = [];
        let line = '';

        String(text).split(' ').forEach(function (word) {
            const test = line ? line + ' ' + word : word;
            if (line && textCtx.measureText(test).width > width) {
                lines.push(line);
                line = word;
            } else {
                line = test;
            }
        });
        lines.push(line);

        if (lines.length === 1) {
            return template.replace('</text>', lines[0] + '</text>');
        }
        return template.replace('</text>', lines.slice(0, maxLines).map(function (l, i) {
            return '<tspan x="' + x + '" dy="' + (i ? '1.2em' : '0') + '">' + l + '</tspan>';
        }).join('') + '</text>');
    }


    const BADGE = {
        h: 26,
        padX: 10,
        font: '500 10px Sora, sans-serif',
        letterSpacing: 0.2,
        textColor: '#ffffff',
        colors: {
            'good': '#3AB564',
            'not-good': '#E73B18',
            'inactive': '#8690A0'
        }
    };

    function statusBadgeSvg(x, y, label, text) {
        if (text == null || text === '') return '';

        const w = Math.ceil(textWidth(text, BADGE.font, BADGE.letterSpacing) + BADGE.padX * 2);
        const fill = BADGE.colors[label] || BADGE.colors['inactive'];

        return `<g class="entity-status">
            <rect x="${x}" y="${y}" width="${w}" height="${BADGE.h}" rx="${BADGE.h / 2}" ry="${BADGE.h / 2}"
                fill="${fill}" style="fill:${fill} !important; stroke:none !important;"></rect>
            <text x="${x + w / 2}" y="${y + BADGE.h / 2}" text-anchor="middle" dominant-baseline="central"
                fill="${BADGE.textColor}"
                style="fill:${BADGE.textColor} !important; font:${BADGE.font}; letter-spacing:${BADGE.letterSpacing}px;">${text}</text>
        </g>`;
    }


    OrgChart.RENDER_LINKS_BEFORE_NODES = true;

    // OrgChart.toolbarUI.expandAllIcon = expandAllIcon;
    // OrgChart.toolbarUI.fitIcon = fitIcon;
    // OrgChart.toolbarUI.zoomInIcon = zoomInIcon;
    // OrgChart.toolbarUI.zoomOutIcon = zoomOutIcon;
    OrgChart.miniMap.width = 200;
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


    const ENTITY_NAME = {
        x: CARD.strip + 20,   // same x as now (68)
        y: 30,                // first line baseline (same as now)
        right: 16,            // space kept free before the card edge
        fontSize: 13,
        lineH: 15.6,          // 1.2 × 13px, same spacing as the <tspan> lines
        maxLines: 7
    };
    const entityNameCache = {};

    // Wrap the entity name once per name (cached)
    function getEntityName(name) {
        name = name == null ? '' : String(name);
        if (entityNameCache[name]) return entityNameCache[name];

        const N = ENTITY_NAME;
        const text = wrappedText(
            name,
            '<text style="font-weight: 700; font-size:' + N.fontSize + 'px" fill="#0f172a" x="' + N.x + '" y="' + N.y + '"></text>',
            CARD.w - N.x - N.right,
            N.maxLines
        );
        const lines = (text.match(/<tspan/g) || []).length || 1;

        return (entityNameCache[name] = {
            text: text,
            shift: (lines - 1) * N.lineH   // how far Type / State move down
        });
    }



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


    OrgChart.templates.entityCard.entityName = function (node, data, template, config, value) {
        return getEntityName(value).text;
    }

    OrgChart.templates.entityCard.entityType = function (node, data, template, config, value) {
        const shift = getEntityName(data.Entity_Name).shift;
        return `<text style="" fill="#0f172a" x="${CARD.strip + 20}" y="${50 + shift}">${value}</text>`;
    }

    OrgChart.templates.entityCard.state = function (node, data, template, config, value) {
        const shift = getEntityName(data.Entity_Name).shift;
        return `<text style="" fill="#0f172a" x="${CARD.strip + 20}"y="${70 + shift}">${value}</text>`;
    }


    OrgChart.templates.entityCard.entityStatus = function (node, data, template, config) {
        return statusBadgeSvg(CARD.strip + 20, node.h - 45, data.entityStatus_label, data.entityStatus);
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

    OrgChart.templates.externalEntityNode.entityName = function (node, data, template, config, value) {
        return getEntityName(value).text;
    }

    OrgChart.templates.externalEntityNode.entityType = function (node, data, template, config, value) {
        const shift = getEntityName(data.Entity_Name).shift;
        return `<text style="" fill="#0f172a" x="${CARD.strip + 20}" y="${50 + shift}">${value}</text>`;
    }

    OrgChart.templates.externalEntityNode.state = function (node, data, template, config, value) {
        const shift = getEntityName(data.Entity_Name).shift;
        return `<text style="" fill="#0f172a" x="${CARD.strip + 20}" y="${70 + shift}">${value}</text>`;
    }

    OrgChart.templates.externalEntityNode.entityStatus = function (node, data, template, config) {
        return statusBadgeSvg(CARD.strip + 20, node.h - 45, data.entityStatus_label, data.entityStatus);
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

    OrgChart.templates.additionalOwners.link = `<path class="boc-hoverable" stroke="#9AA0A6" stroke-width="2px" stroke-dasharray="6,4" fill="none" d="{rounded}" />`;

    OrgChart.templates.additionalOwners.nodeMenuButton = nodeMenuTab(CARD.w);

    const OWNER_LIST = {
        top: 30,
        left: 20,
        right: 12,
        pctWidth: 40,
        lineH: 13.2,
        gap: 6,
        bottom: 8,
        maxLines: 4,
        bulletR: 2,        // dot radius
        bulletGap: 8,      // space from the dot to the name
        bulletColor: '#5F6368'
    };
    const dynamicRowCache = {};

    // Wrap every owner name once per list (cached)
    function getOwnerRows(owners, nodeW) {
        const key = nodeW + '|' + JSON.stringify(owners);
        if (dynamicRowCache[key]) return dynamicRowCache[key];

        const L = OWNER_LIST;
        const textX = L.left + L.bulletR * 2 + L.bulletGap;
        const nameWidth = nodeW - textX - L.right - L.pctWidth;
        let y = 0;


        const rows = owners.map(function (o) {
            const text = wrappedText(
                String(o.name),
                '<text style="font-size:11px" fill="#0f172a" x="' + textX + '" y="0"></text>',
                nameWidth,
                L.maxLines
            );
            const lines = (text.match(/<tspan/g) || []).length || 1;
            const row = { text: text, pct: o.percent + '%', y: y };
            y += lines * L.lineH + L.gap;
            return row;
        });

        return (dynamicRowCache[key] = { rows: rows, height: rows.length ? y - L.gap : 0 });
    }

    // Draw the list
    OrgChart.templates.additionalOwners.ownerList = function (node, data) {
        const owners = data.owners || [];
        if (!owners.length) return '';

        const L = OWNER_LIST;
        return getOwnerRows(owners, node.w).rows.map(function (row) {
            const baseline = L.top + row.y + 11;
            const dotY = baseline - 4;

            return '<circle cx="' + (L.left + L.bulletR) + '" cy="' + dotY + '" r="' + L.bulletR + '" fill="' + L.bulletColor + '"/>' +
                '<g transform="translate(0,' + baseline + ')">' + row.text + '</g>' +
                '<text x="' + (node.w - L.right) + '" y="' + baseline + '" text-anchor="end" ' +
                'style="font-size:11px;font-weight:700" fill="#0f172a">' + row.pct + '</text>';
        }).join('');
    };


    OrgChart.templates.foreignRegistrations = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.foreignRegistrations.size = [SLIM.w, SLIM.h];

    OrgChart.templates.foreignRegistrations.node = function (node, data, template, config) {
        return `<rect class="node-card" x="0" y="0" height="${node.h}" width="${node.w}" fill="#F4F4F5" stroke-width="1" stroke="#92939459" rx="3" ry="3">
    </rect>
    <path d="M6,0 H4 V${node.h} H4 A3,3 0 0 1 0,${node.h - 3} V3 A3,3 0 0 1 3,0 Z" fill="#5F6368"></path>
    <text style="font-weight: 700;" fill="#5F6368" x="20" y="20">FOREIGN REGISTRATIONS</text>
    `;
    }

    OrgChart.templates.foreignRegistrations.link = `<path class="boc-hoverable" stroke="#9AA0A6" stroke-width="2px" stroke-dasharray="6,4" fill="none" d="{rounded}" />`;

    OrgChart.templates.foreignRegistrations.nodeMenuButton = nodeMenuTab(CARD.w);

    const FOREIGN_REG_LIST = {
        top: 30,
        left: 20,
        right: 12,
        colGap: 12,        // space between the two columns
        lineH: 13.2,
        gap: 6,            // space between rows
        bottom: 8,
        maxLines: 2,       // a long state name wraps to at most 2 lines
        fontSize: 11,
        bulletR: 4,        // dot radius
        bulletGap: 6,      // space from the dot to the name
        "bullet-good": '#3AB564',
        "bullet-not-good": '#E73B18',
        "bullet-inactive": '#8690A0',
    };
    const regGridCache = {};

    // Place every state in a 2-column grid (cached per list)
    function getRegistrationGrid(items, nodeW) {
        const key = nodeW + '|' + JSON.stringify(items);
        if (regGridCache[key]) return regGridCache[key];

        const L = FOREIGN_REG_LIST;
        const colW = (nodeW - L.left - L.right - L.colGap) / 2;
        const textOffset = L.bulletR * 2 + L.bulletGap;
        const nameWidth = colW - textOffset;

        const cells = items.map(function (item, i) {
            const x = L.left + (i % 2) * (colW + L.colGap);   // left or right column
            const text = wrappedText(
                String(item.name),
                '<text style="font-size:' + L.fontSize + 'px" fill="#0f172a" x="' + (x + textOffset) + '" y="0"></text>',
                nameWidth,
                L.maxLines
            );
            return {
                x: x,
                text: text,
                lines: (text.match(/<tspan/g) || []).length || 1,
                color: L['bullet-' + item.status] || L['bullet-inactive']
            };
        });

        // each row is as tall as the taller of its two states
        let y = 0;
        for (let i = 0; i < cells.length; i += 2) {
            const right = cells[i + 1];
            cells[i].y = y;
            if (right) right.y = y;
            y += Math.max(cells[i].lines, right ? right.lines : 1) * L.lineH + L.gap;
        }

        return (regGridCache[key] = { cells: cells, height: cells.length ? y - L.gap : 0 });
    }

    // Draw the grid
    OrgChart.templates.foreignRegistrations.registrationList = function (node, data) {
        const items = data.registrations || [];
        if (!items.length) return '';

        const L = FOREIGN_REG_LIST;
        return getRegistrationGrid(items, node.w).cells.map(function (cell) {
            const baseline = L.top + cell.y + L.fontSize;
            return '<circle cx="' + (cell.x + L.bulletR) + '" cy="' + (baseline - 4) + '" r="' + L.bulletR + '" fill="' + cell.color + '"/>' +
                '<g transform="translate(0,' + baseline + ')">' + cell.text + '</g>';
        }).join('');
    };


    OrgChart.templates.hidden = Object.assign({}, OrgChart.templates.polina);
    OrgChart.templates.hidden.node = "";
    OrgChart.templates.hidden.link = "";
    OrgChart.templates.hidden.size = [0, 0];
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


    // Before layout: grow the card to fit its list
    OrgChart.events.on('node-initialized', function (sender, args) {
        const node = args.node;

        if (node.templateName == 'additionalOwners') {
            const owners = (sender.get(node.id) || {}).owners || [];
            if (!owners.length) return;
            node.h = Math.max(SLIM.h, OWNER_LIST.top + getOwnerRows(owners, node.w).height + OWNER_LIST.bottom);
        }

        if (node.templateName == 'foreignRegistrations') {
            const items = (sender.get(node.id) || {}).registrations || [];
            if (!items.length) return;
            node.h = Math.max(SLIM.h, FOREIGN_REG_LIST.top + getRegistrationGrid(items, node.w).height + FOREIGN_REG_LIST.bottom);
        }

        if (node.templateName == 'entityCard' || node.templateName == 'externalEntityNode') {
            const name = (sender.get(node.id) || {}).Entity_Name;
            node.h = CARD.h + getEntityName(name).shift;
        }
    });



    // ==========================================================================
    // Full data + filter hook (used by the filters further down)
    //   ALL_NODES:    every node from the JSON, kept even when filtered out
    //   applyFilters: replaced by the real version inside the filters $(function)
    // ==========================================================================
    let ALL_NODES = [];

    let applyFilters = function () {
        chart.load(ALL_NODES);
    };



    let editForm = function () {
        this.nodeId = null;
    };

    editForm.prototype.init = function (obj) {

        let that = this;

        this.obj = obj;

        let orgchart = this.obj;

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

        const ENTITY_TYPE_TO_TAX_SHAPE = {
            'Trust': 'Trust',
            'Corporation': 'Corporation',
            'Non Profit': 'Corporation',
            'GP': 'Partnership',
            'LP': 'Partnership',
            'LLP': 'Partnership',
            'LLC': 'Others',
            'PLLC': 'Others'
        };

        this.saveButton.on("click", function () {

            let node = orgchart.get(that.nodeId);

            node.Entity_Name = that.entityName.val();
            node.Entity_Type = that.entityType.val();
            node.state = that.entityJurisdiction.val();
            node.taxShape = ENTITY_TYPE_TO_TAX_SHAPE[node.Entity_Type] || 'Others';

            orgchart.updateNode(node);

            // keep the full list in sync, so the edit survives the next filter change
            let index = ALL_NODES.findIndex(function (n) { return String(n.id) === String(node.id); });
            if (index > -1) {
                ALL_NODES[index] = Object.assign({}, ALL_NODES[index], {
                    Entity_Name: node.Entity_Name,
                    Entity_Type: node.Entity_Type,
                    state: node.state,
                    taxShape: node.taxShape
                });
            }

            that.hide();
        });
    };


    editForm.prototype.show = function (nodeId) {

        this.nodeId = nodeId;

        let node = this.obj.get(nodeId);

        this.entityName.val(node.Entity_Name || "");
        this.entityType.val(node.Entity_Type || "");
        this.entityJurisdiction.val(node.state || "");

        this.modal.show();
    };


    editForm.prototype.hide = function () {
        this.modal.hide();
    };


    OrgChart.scroll.smooth = 4;
    OrgChart.scroll.speed = 120;



    let chart = new OrgChart(document.getElementById("tree"), {
        template: 'entityCard',
        columns: 6,
        siblingSeparation: 70,
        levelSeparation: 70,
        // collapse: {               // turn on for big charts: fewer cards laid out and drawn on load
        //     level: 2,
        //     allChildren: true
        // },
        // showYScroll: OrgChart.scroll.visible,
        showXScroll: OrgChart.scroll.visible,
        mouseScrool: OrgChart.action.scroll,   // 9.1.61 spells the option "mouseScrool"
        mouseScroll: OrgChart.action.scroll,   // newer versions
        align: OrgChart.align.center,
        // movable: OrgChart.movable.node,     // was listed twice; the second line below is the one that applied
        movable: OrgChart.movable.tree,
        enableDragDrop: true,
        // highlightOnHover: "parents",        // not in 9.1.61 (ignored); turn back on after upgrading
        lazyLoading: true,
        layout: OrgChart.layout.normal,
        enableSearch: false,
        miniMap: true,
        controls: {
            zoom_out: { title: 'Zoom out', icon: zoomOutIcon },
            zoom_level: {
                title: 'Zoom level',
                onClick: function () { },   // clicking the input does nothing by itself
                icon: '<label class="orgchart-zoom__field">' +
                    '<input type="number" class="orgchart-zoom__input" min="10" max="500" step="10" aria-label="Zoom level">%' +
                    '</label>'
            },
            zoom_in: { title: 'Zoom in', icon: zoomInIcon },
            fit: { title: 'Fit', icon: fitIcon },
            expand_all: { title: 'Expand all', icon: expandAllIcon },
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
            "hidden": {
                template: "hidden"
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
            },
            // OLD FILTER (Balkan filter tag): filtered nodes are no longer loaded, so this isn't needed
            // filter: {
            //     template: 'dot'
            // }
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
            ownerList: "owners",
            registrationList: "registrations"
        },
        linkBinding: {
            link_field_0: "createdAt"
        },
        editUI: new editForm(),

        // OLD FILTER (Balkan filterBy): replaced by loading only the matching nodes (applyFilters)
        // filterBy: {
        //     "groupName": {},
        //     "Entity_Name": {},
        //     "Entity_Type": {},
        //     "state": {},
        //     "entityStatus": {}
        // }
    });


    // chart.onInit(args => {
    //     chart.config.anim.duration = 0;
    //     chart.fit(function () {
    //         chart.config.anim.duration = 0;
    //     });
    // });

    // Wait for the font (the canvas measures text with it) and the JSON together,
    // then load once with the current filter selection.
    // fetch('data-reboot-redesign_stress_test.json')
    Promise.all([
        document.fonts ? document.fonts.ready : Promise.resolve(),
        fetch('data-reboot-redesign.json')
            .then(response => {
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the JSON response
                return response.json();
            })
    ])
        .then(results => {
            ALL_NODES = results[1];   // keep the full list for the filters
            applyFilters();           // loads the chart with the current filter selection
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

    $(document).on('click', '[data-single] .orientation-btn', function () {
        let $btn = $(this);
        let $others = $btn.siblings('.orientation-btn');

        $btn.attr('aria-pressed', 'true').find('.icon').addClass('active_option');
        $others.attr('aria-pressed', 'false').find('.icon').removeClass('active_option');

        let orientation_value = $btn.data('orientation');
        let layout_value = $btn.data('layout');
        if (orientation_value >= 0) {
            chart.setOrientation(parseInt(orientation_value));
        }

        if (layout_value >= 0) {
            chart.setLayout(parseInt(layout_value));
        }
    });


    $(function () {

        $('.orgchart-view-select').each(function () {
            $(this).select2({
                placeholder: $(this).find('option[value=""]').first().text().trim(),
                width: '100%',
                dropdownParent: $(this).closest('.orgchart_dropdown')
            });
        }).on('select2:open', function () {
            $(this).closest('.orgchart_dropdown')
                .find('.select2-search__field')
                .attr('placeholder', 'Search...');
        });
    });


    $(function () {
        // multiselect filters logic

        let Utils = $.fn.select2.amd.require('select2/utils');
        let Dropdown = $.fn.select2.amd.require('select2/dropdown');
        let DropdownSearch = $.fn.select2.amd.require('select2/dropdown/search');
        let AttachBody = $.fn.select2.amd.require('select2/dropdown/attachBody');
        let MultipleSelection = $.fn.select2.amd.require('select2/selection/multiple');
        let EventRelay = $.fn.select2.amd.require('select2/selection/eventRelay');
        let MAX_CHIPS = 1;
        let MAX_CHARS = 7;

        function ChipSummarySelection() { }

        ChipSummarySelection.prototype.bind = function (decorated, container, $container) {
            decorated.call(this, container, $container);
            let $select = this.$element;

            this.$selection.on('mousedown click', '.orgchart-chip__remove', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                if (e.type !== 'click') return;

                let id = String($(this).closest('.orgchart-chip').data('id'));
                if (id === 'all_default') {
                    $select.find('option').prop('selected', false);
                } else {
                    $select.find('option').filter(function () { return this.value === id; }).prop('selected', false);
                    $select.find('option[value="all_default"]').prop('selected', false);
                }
                $select.trigger('change');
            });
        };

        ChipSummarySelection.prototype.update = function (decorated, data) {
            let $rendered = this.$selection.find('.select2-selection__rendered').empty();
            let isAll = data.some(function (d) { return d.id === 'all_default'; });
            let selected = data.filter(function (d) { return d.id && d.id !== 'all_default'; });

            if (!selected.length) {
                $rendered.append($('<span class="select2-selection__summary is-placeholder"></span>').text(this.options.get('placeholder')));
                return;
            }

            function chip(id, text) {
                let label = text.length > MAX_CHARS ? text.slice(0, MAX_CHARS) + '…' : text;
                return $('<span class="orgchart-chip"></span>').attr({ 'data-id': id, title: text })
                    .append($('<span class="orgchart-chip__text"></span>').text(label))
                    .append('<button type="button" class="orgchart-chip__remove" aria-label="Remove">&times;</button>');
            }

            if (isAll) {
                $rendered.append(chip('all_default', 'All'));
                return;
            }

            selected.slice(0, MAX_CHIPS).forEach(function (d) {
                $rendered.append(chip(d.id, d.text.trim()));
            });

            if (selected.length > MAX_CHIPS) {
                $rendered.append($('<span class="orgchart-chip orgchart-chip--more"></span>').text('+' + (selected.length - MAX_CHIPS)));
            }
        };


        function PlaceholderOnlySelection() { }

        PlaceholderOnlySelection.prototype.update = function (decorated, data) {
            this.$selection.find('.select2-selection__rendered').empty().append(
                $('<span class="select2-selection__summary is-placeholder"></span>')
                    .text(this.options.get('placeholder'))
            );
        };

        function TextSummarySelection() { }

        TextSummarySelection.prototype.update = function (decorated, data) {
            let placeholder = this.options.get('placeholder');
            let isAll = data.some(function (d) { return d.id === 'all_default'; });
            let selected = data.filter(function (d) { return d.id && d.id !== 'all_default'; });

            let text = isAll ? placeholder + ' (All)'
                : !selected.length ? placeholder
                    : selected.length === 1 ? selected[0].text.trim()
                        : placeholder + ' (' + selected.length + ')';

            this.$selection.find('.select2-selection__rendered').empty().append(
                $('<span class="select2-selection__summary"></span>')
                    .text(text)
                    .toggleClass('is-placeholder', !isAll && !selected.length)
            );
        };

        let selectionAdapter = Utils.Decorate(Utils.Decorate(MultipleSelection, TextSummarySelection), EventRelay);
        let dropdownAdapter = Utils.Decorate(Utils.Decorate(Dropdown, DropdownSearch), AttachBody);

        let $filters = $('.orgchart-filter-section .form-select');

        $filters.each(function () {
            let $select = $(this);

            $select.select2({
                placeholder: $select.data('placeholder'),
                width: '100%',
                closeOnSelect: false,
                selectionAdapter: selectionAdapter,
                dropdownAdapter: dropdownAdapter,
                dropdownParent: $select.closest('.orgchart_dropdown')
            });
            $select.data('select2').$dropdown.find('.select2-search__field').attr('placeholder', 'Search...');
        });

        // "All" ticks / unticks every option; unticking any option unticks "All"
        $filters.on('select2:select select2:unselect', function (e) {
            let $select = $(this);
            let isAll = e.params.data.id === 'all_default';
            let checked = e.type === 'select2:select';

            let $others = $select.find('option').not('[value="all_default"]');
            if (isAll) $others.prop('selected', checked);
            $select.find('option[value="all_default"]').prop('selected', $others.length === $others.filter(':selected').length);
            $select.trigger('change');

            let s2 = $select.data('select2');
            if (s2.isOpen()) s2.trigger('query', { term: s2.$dropdown.find('.select2-search__field').val() || '' });
        });


        // ======================================================================
        // OLD FILTER: Balkan filterBy + chart.draw()
        // Filtered nodes stayed in the layout (gap, link and child count stayed).
        // Replaced by the "hide filtered nodes" code below.
        // ======================================================================

        // // Make sure filterBy[field] has an entry for every value in the node data
        // function getFilterValues(field) {
        //     let ui = chart.filterUI;
        //     if (!ui.filterBy) ui.filterBy = {};
        //
        //     let values = ui.filterBy[field] || (ui.filterBy[field] = {});
        //     chart.config.nodes.forEach(function (node) {
        //         let v = node[field];
        //         if (v != null && v !== '' && !values[v]) {
        //             values[v] = { checked: true, text: v };
        //         }
        //     });
        //     return values;
        // }
        //
        // $filters.on('change', function () {
        //     let field = $(this).data('filter-item');
        //     let values = getFilterValues(field);
        //
        //     let selected = [].concat($(this).val() || [])
        //         .filter(function (v) { return v && v !== 'all_default'; });
        //
        //     for (let value in values) {
        //         values[value].checked = !selected.length || selected.includes(value);
        //     }
        //
        //     updateFilterCount();
        //
        //     chart.draw();
        // });


        // ======================================================================
        // NEW FILTER: load only the matching nodes
        //   - non-matching nodes are not loaded: no card, no link, no gap,
        //     and they don't count in any expand/collapse number
        //   - a matching node whose parent is filtered out moves up to its
        //     nearest visible ancestor (or becomes a top-level node)
        //   - Foreign Registrations / Additional Owners follow their entity
        // ======================================================================

        let SIDE_TAGS = ['partnerNode', 'additionalOwners'];   // shown only with their entity

        // Read the dropdowns: { groupName: ['AIC Holdings'], state: ['Delaware'] }
        function getActiveFilters() {
            let filters = {};

            $filters.each(function () {
                let values = [].concat($(this).val() || []);
                if (values.includes('all_default')) return;   // "All" = no filter for this field

                values = values.filter(function (v) { return v; });
                if (values.length) filters[$(this).data('filter-item')] = values;
            });

            return filters;
        }

        function isSideNode(node) {
            return (node.tags || []).some(function (tag) { return SIDE_TAGS.indexOf(tag) > -1; });
        }

        // Work out which nodes stay, and re-attach them to visible parents
        function buildVisibleNodes(filters) {
            let fields = Object.keys(filters);
            if (!fields.length) {
                return ALL_NODES.map(function (n) { return Object.assign({}, n); });
            }

            // Sets make each "is this value selected?" check instant, even with many options
            let filterSets = {};
            fields.forEach(function (field) { filterSets[field] = new Set(filters[field]); });

            let byId = {};
            ALL_NODES.forEach(function (n) { byId[String(n.id)] = n; });

            // main entities: every active dropdown must match (any ticked value inside one dropdown)
            let visible = {};
            ALL_NODES.forEach(function (n) {
                if (isSideNode(n)) return;
                let matches = fields.every(function (field) {
                    return filterSets[field].has(String(n[field]));
                });
                if (matches) visible[String(n.id)] = true;
            });

            // Foreign Registrations / Additional Owners: only with their entity
            ALL_NODES.forEach(function (n) {
                if (isSideNode(n) && n.pid != null && visible[String(n.pid)]) {
                    visible[String(n.id)] = true;
                }
            });

            function nearestVisibleAncestor(n) {
                let pid = n.pid;
                let seen = {};
                while (pid != null && byId[String(pid)] && !seen[pid]) {
                    seen[pid] = true;                      // guard against parent loops in bad data
                    if (visible[String(pid)]) return pid;
                    pid = byId[String(pid)].pid;
                }
                return null;
            }

            return ALL_NODES
                .filter(function (n) { return visible[String(n.id)]; })
                .map(function (n) {
                    let copy = Object.assign({}, n);
                    let pid = nearestVisibleAncestor(n);
                    if (pid == null) delete copy.pid;
                    else copy.pid = pid;
                    return copy;
                });
        }

        // One click fires "change" more than once (Select2 + the "All" toggle),
        // and page load fires it once per dropdown. Collect them into one reload.
        let filterTimer = null;

        // Replaces the placeholder applyFilters defined above the edit form
        applyFilters = function () {
            if (!ALL_NODES.length) return;   // data not loaded yet: the loader calls this again

            clearTimeout(filterTimer);
            filterTimer = setTimeout(function () {
                chart.load(buildVisibleNodes(getActiveFilters()), function () {
                    chart.fit();
                });
            }, 0);
        };

        $filters.on('change', function () {
            updateFilterCount();
            applyFilters();
        });



        // Filter count logic
        function updateFilterCount() {
            let active = $filters.filter(function () {
                let values = [].concat($(this).val() || []);

                // if (values.includes('all_default')) return false;      // "All" = no filter

                return values.some(function (v) { return v && v !== 'all_default'; });
            }).length;

            $('.filter-count')
                .text(active)
                .toggleClass('d-none', active === 0);
        }

        updateFilterCount();


        $('#clearOrgChartFilters').on('click', function () {
            $filters.val([]).trigger('change');
        });

        // "All" set as default selected
        $filters.each(function () {
            let $select = $(this);
            if ($select.find('option[value="all_default"]').is(':selected')) {
                $select.find('option').prop('selected', true);
                $select.trigger('change');
            }
        });
    })





    $(function () {
        let originalTemplates = {};
        Object.keys(chart.config.tags).forEach(function (tag) {
            originalTemplates[tag] = chart.config.tags[tag].template;
        });

        function applyHideTag(checkbox) {
            let tag = $(checkbox).data('hide-tag');
            if (!chart.config.tags[tag]) return;

            chart.config.tags[tag].template = checkbox.checked
                ? originalTemplates[tag]   // checked: show
                : 'hidden';        // unchecked: hide
        }

        $(document).on('change', '[data-hide-tag]', function () {
            applyHideTag(this);
            chart.draw()

        });

        $('[data-hide-tag]').trigger('change');



        // tax shape & entity status show/hide
        $(document).on('change', '[data-display]', function () {
            $('#tree').toggleClass('hide-' + $(this).data('display'), !this.checked);
        });

        // apply the starting state on page load
        $('[data-display]').trigger('change');

    })


    $(function () {

        function currentZoomPercent() {
            return Math.round(chart.getScale() * 100);
        }

        function setZoomPercent(percent) {
            let min = chart.config.scaleMin * 100;
            let max = chart.config.scaleMax * 100;
            percent = Math.min(max, Math.max(min, Number(percent) || 100));

            let factor = percent / (chart.getScale() * 100);
            if (Math.abs(factor - 1) > 0.001) {
                chart.zoom(factor, [50, 50], false);
            }
            $(chart.element).find('.orgchart-zoom__input').val(currentZoomPercent());
        }

        $(chart.element)
            .on('change', '.orgchart-zoom__input', function () {
                setZoomPercent(this.value);
            })
            .on('keydown', '.orgchart-zoom__input', function (e) {
                if (e.key === 'Enter') { setZoomPercent(this.value); this.blur(); }
            });

        // keep the % in sync after + / −, mouse wheel, fit, drag
        chart.on('redraw', function () {
            let input = chart.element.querySelector('.orgchart-zoom__input');
            if (input && document.activeElement !== input) {
                input.value = currentZoomPercent();
            }
        });
    })

})(jQuery, OrgChart)
