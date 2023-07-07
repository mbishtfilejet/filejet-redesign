//JavaScript
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

OrgChart.templates.olivia.warning = '<svg width="24" height="24" x="280" y="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M10.9085 2.78216C11.9483 2.20625 13.2463 2.54089 13.8841 3.5224L13.9669 3.66023L21.7259 17.6685C21.9107 18.0021 22.0076 18.3773 22.0076 18.7587C22.0076 19.9495 21.0825 20.9243 19.9117 21.0035L19.7576 21.0087H4.24187C3.86056 21.0087 3.4855 20.9118 3.15192 20.7271C2.11208 20.1513 1.70704 18.8734 2.20059 17.812L2.27349 17.6687L10.0303 3.66046C10.2348 3.2911 10.5391 2.98674 10.9085 2.78216ZM12.0004 16.0018C11.4489 16.0018 11.0018 16.4489 11.0018 17.0004C11.0018 17.552 11.4489 17.9991 12.0004 17.9991C12.552 17.9991 12.9991 17.552 12.9991 17.0004C12.9991 16.4489 12.552 16.0018 12.0004 16.0018ZM11.9983 7.99806C11.4854 7.99825 11.0629 8.38444 11.0053 8.8818L10.9986 8.99842L11.0004 13.9993L11.0072 14.1159C11.0652 14.6132 11.488 14.9991 12.0008 14.9989C12.5136 14.9988 12.9362 14.6126 12.9938 14.1152L13.0004 13.9986L12.9986 8.9977L12.9919 8.88108C12.9339 8.38376 12.5111 7.99788 11.9983 7.99806Z" fill="#E73B18"/>' +
    '</svg>';
OrgChart.templates.olivia.company = '<text style="font-size:18px;font-weight:500"; fill="#000000" x="90" y="30">{val}</text>';
OrgChart.templates.olivia.name = '<text style="font-size:13px";fill="#000000" x="90" y="52">{val}</text>';
OrgChart.templates.olivia.title = '<text style="font-size:13px";fill="#000000" f x="90" y="70">{val}</text>';
OrgChart.templates.olivia.img_0 =
    '<clipPath id="ulaImg">'
    + '<circle cx="46" cy="46" r="30"></circle>'
    + '</clipPath>'
    + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="14" y="15" width="65" height="65">'
    + '</image>';
OrgChart.templates.olivia.size = [320, 92];
OrgChart.templates.olivia.nodeMenuButton = '<g style="cursor:pointer;background-color:blue;" transform="matrix(1,0,0,1,285,47)" data-ctrl-n-menu-id="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>';
OrgChart.templates.olivia.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{rounded}" />';
var chart = new OrgChart(document.getElementById("tree"), {
    template: 'olivia',
    showYScroll: OrgChart.scroll.visible,
    showXScroll: OrgChart.scroll.visible,
    mouseScrool: OrgChart.action.ctrlZoom,
    layout: OrgChart.mixed,
    enableSearch: false,
    nodeMenu: {
        action: {
            text: "Take Action",
            icon: actionIcon
        },
        details: {
            text: "Open Entity",
            icon: openEntity,
        },
        edit: {
            text: "Update Entity",
            icon: updateEntity,
        },

        entity_summary: {
            text: "Entity Summary",
            icon: summaryEntity,
        },
        add: {
            text: "Add Entity",
            icon: addEntity
        }
    },
    nodeBinding: {
        img_0: "img",
        name: "name",
        title: "title",
        company: "company",
        warning: "warning"
    }
});

chart.load([
    { id: "1", pid: "0", company: "Hunt Groups", name: "Jack Hill", title: "Chairman and CEO", title2: "Google", email: "amber@domain.com", img: "dist/images/icons/hunt-groups.svg", warning: "#", },
    { id: "2", pid: "1", company: "Hunt LLC", name: "Lexie Cole", title: "QA Lead", email: "ava@domain.com", img: "dist/images/icons/hunt-groups.svg", warning: "#", },
    { id: "3", pid: "1", company: "NBC Networks", name: "Janae Barrett", title: "Technical Director", img: "dist/images/icons/nbc-network.svg" },
    { id: "4", pid: "1", company: "Dropbox", name: "Aaliyah Webb", title: "Manager", email: "jay@domain.com", img: "dist/images/icons/dropbox.svg" },
    { id: "5", pid: "2", company: "Google", name: "Elliot Ross", title: "QA", img: "dist/images/icons/hunt-groups.svg" },
    { id: "6", pid: "2", company: "Google", name: "Anahi Gordon", title: "QA", img: "dist/images/icons/hunt-groups.svg" },
    { id: "7", pid: "2", company: "Target", name: "Knox Macias", title: "QA", img: "dist/images/icons/target.svg" },
    { id: "8", pid: "3", company: "Apple", name: "Nash Ingram", title: ".NET Team Lead", email: "kohen@domain.com", img: "dist/images/icons/apple.svg" },
    { id: "9", pid: "3", company: "Google", name: "Sage Barnett", title: "JS Team Lead", img: "dist/images/icons/hunt-groups.svg" },
    { id: "10", pid: "8", company: "Tesla", name: "Alice Gray", title: "Programmer", img: "dist/images/icons/tesla.svg" },
    { id: "11", pid: "8", company: "Nike", name: "Anne Ewing", title: "Programmer", img: "dist/images/icons/nike.svg" },
    { id: "12", pid: "9", company: "Google", name: "Reuben Mcleod", title: "Programmer", img: "dist/images/icons/hunt-groups.svg" },
    { id: "13", pid: "9", company: "Google", name: "Ariel Wiley", title: "Programmer", img: "dist/images/icons/google.svg" },
    { id: "14", pid: "4", company: "Google", name: "Lucas West", title: "Marketer", img: "dist/images/icons/hunt-groups.svg" },
    { id: "15", pid: "4", company: "Starbucks", name: "Adan Travis", title: "Designer", img: "dist/images/icons/starbuks.svg" },
    { id: "16", pid: "4", company: "Microsoft", name: "Alex Snider", title: "Sales Manager", img: "dist/images/icons/microsoft.svg" }
]);

document.getElementById("selectTemplate").addEventListener("change", function () {
    chart.config.template = this.value;
    chart.draw();
});