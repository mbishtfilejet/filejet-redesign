console.log(OrgChart);


const CARD = { w: 260, h: 124, strip: 48 };
const SLIM = { w: 260, h: 76 };



OrgChart.templates.entityCard = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.entityCard.size = [CARD.w, CARD.h];

OrgChart.templates.entityCard.node = function (node, data, template, config) {
    return `<rect x="0" y="0" height="${node.h}" width="${node.w}" fill="#ffffff" stroke-width="1" stroke="#C9CDD2" rx="6" ry="6">
    </rect>`;
};
