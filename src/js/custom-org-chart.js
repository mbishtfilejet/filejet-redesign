//JavaScript

var expandAllIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M5.11249 9.9486C5.37284 9.68825 5.79495 9.68825 6.05529 9.9486C6.31564 10.2089 6.31564 10.6311 6.05529 10.8914L4.27667 12.6695H5.33333C5.67522 12.6695 5.957 12.9268 5.99551 13.2584L6 13.3361C6 13.7043 5.70152 14.0028 5.33333 14.0028H2.66667C2.29848 14.0028 2 13.7043 2 13.3361V10.6695C2 10.3013 2.29848 10.0028 2.66667 10.0028C3.03486 10.0028 3.33333 10.3013 3.33333 10.6695V11.7275L5.11249 9.9486ZM10.67 14.0028C10.3018 14.0028 10.0033 13.7043 10.0033 13.3361C10.0033 12.968 10.3018 12.6695 10.67 12.6695H11.7253L9.94841 10.8912C9.70818 10.6508 9.68984 10.2726 9.8933 10.0112L9.94878 9.94841C10.2092 9.68816 10.6313 9.68833 10.8916 9.94878L12.67 11.7288V10.6695C12.67 10.3276 12.9274 10.0458 13.2589 10.0073L13.3367 10.0028C13.7049 10.0028 14.0033 10.3013 14.0033 10.6695V13.3361C14.0033 13.7043 13.7049 14.0028 13.3367 14.0028H10.67ZM5.33333 2C5.70152 2 6 2.29848 6 2.66667C6 3.03486 5.70152 3.33333 5.33333 3.33333H4.278L6.05492 5.11211C6.29515 5.35253 6.31349 5.73069 6.11004 5.99214L6.05455 6.05492C5.7941 6.31517 5.37199 6.315 5.11174 6.05455L3.33333 4.27467V5.33333C3.33333 5.67522 3.07597 5.957 2.74441 5.99551L2.66667 6C2.29848 6 2 5.70152 2 5.33333V2.66667C2 2.29848 2.29848 2 2.66667 2H5.33333ZM13.3367 2C13.7049 2 14.0033 2.29848 14.0033 2.66667V5.33333C14.0033 5.70152 13.7049 6 13.3367 6C12.9685 6 12.67 5.70152 12.67 5.33333V4.27467L10.8915 6.05464C10.6512 6.29501 10.2731 6.31358 10.0115 6.11028L9.94869 6.05483C9.68829 5.79454 9.6882 5.37243 9.9485 5.11202L11.726 3.33333H10.67C10.3281 3.33333 10.0463 3.07597 10.0078 2.74441L10.0033 2.66667C10.0033 2.29848 10.3018 2 10.67 2H13.3367Z" fill="#212121"/>' +
    '</svg>';

var fitIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M4.5 3C3.67157 3 3 3.67157 3 4.5V5.5C3 5.77614 2.77614 6 2.5 6C2.22386 6 2 5.77614 2 5.5V4.5C2 3.11929 3.11929 2 4.5 2H5.5C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H4.5ZM5.5 4C4.67157 4 4 4.67157 4 5.5V10.5C4 11.3284 4.67157 12 5.5 12H10.5C11.3284 12 12 11.3284 12 10.5V5.5C12 4.67157 11.3284 4 10.5 4H5.5ZM11.5 3C12.3284 3 13 3.67157 13 4.5V5.5C13 5.77614 13.2239 6 13.5 6C13.7761 6 14 5.77614 14 5.5V4.5C14 3.11929 12.8807 2 11.5 2H10.5C10.2239 2 10 2.22386 10 2.5C10 2.77614 10.2239 3 10.5 3L11.5 3ZM11.5 13C12.3284 13 13 12.3284 13 11.5V10.5C13 10.2239 13.2239 10 13.5 10C13.7761 10 14 10.2239 14 10.5V11.5C14 12.8807 12.8807 14 11.5 14H10.5C10.2239 14 10 13.7761 10 13.5C10 13.2239 10.2239 13 10.5 13H11.5ZM4.5 13C3.67157 13 3 12.3284 3 11.5L3 10.25C3 9.97386 2.77614 9.75 2.5 9.75C2.22386 9.75 2 9.97386 2 10.25V11.5C2 12.8807 3.11929 14 4.5 14H5.75C6.02614 14 6.25 13.7761 6.25 13.5C6.25 13.2239 6.02614 13 5.75 13H4.5Z" fill="#212121"/>' +
    '</svg>';

var zoomInIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M7.25 14.25C7.25 14.6642 7.58579 15 8 15C8.41421 15 8.75 14.6642 8.75 14.25V8.75H14.25C14.6642 8.75 15 8.41421 15 8C15 7.58579 14.6642 7.25 14.25 7.25H8.75V1.75C8.75 1.33579 8.41421 1 8 1C7.58579 1 7.25 1.33579 7.25 1.75V7.25H1.75C1.33579 7.25 1 7.58579 1 8C1 8.41421 1.33579 8.75 1.75 8.75H7.25V14.25Z" fill="#212121"/>' +
    '</svg>';

var zoomOutIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="1" y="7.25" width="14" height="1.5" rx="0.75" fill="#212121"/>' +
    '</svg>';

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
var downloadTempMenu = '<span class="icon me-0 icon-md icon-download-template-menu"></span>';
var exportCSV = '<span class="icon icon-md me-0 icon-export-csv"></span>';
var exportJPG = '<span class="icon icon-md me-0 icon-export-jpg"></span>';
OrgChart.templates.olivia.Compliance = '<svg width="24" height="24" x="280" y="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M10.9085 2.78216C11.9483 2.20625 13.2463 2.54089 13.8841 3.5224L13.9669 3.66023L21.7259 17.6685C21.9107 18.0021 22.0076 18.3773 22.0076 18.7587C22.0076 19.9495 21.0825 20.9243 19.9117 21.0035L19.7576 21.0087H4.24187C3.86056 21.0087 3.4855 20.9118 3.15192 20.7271C2.11208 20.1513 1.70704 18.8734 2.20059 17.812L2.27349 17.6687L10.0303 3.66046C10.2348 3.2911 10.5391 2.98674 10.9085 2.78216ZM12.0004 16.0018C11.4489 16.0018 11.0018 16.4489 11.0018 17.0004C11.0018 17.552 11.4489 17.9991 12.0004 17.9991C12.552 17.9991 12.9991 17.552 12.9991 17.0004C12.9991 16.4489 12.552 16.0018 12.0004 16.0018ZM11.9983 7.99806C11.4854 7.99825 11.0629 8.38444 11.0053 8.8818L10.9986 8.99842L11.0004 13.9993L11.0072 14.1159C11.0652 14.6132 11.488 14.9991 12.0008 14.9989C12.5136 14.9988 12.9362 14.6126 12.9938 14.1152L13.0004 13.9986L12.9986 8.9977L12.9919 8.88108C12.9339 8.38376 12.5111 7.99788 11.9983 7.99806Z" fill="#E73B18"/>' +
    '</svg>';
OrgChart.templates.olivia.company = '<text data-width="240" class="fs-5 font-weight-500" data-text-overflow="ellipsis" fill="#000000" x="15" y="30">{val}</text>';
OrgChart.templates.olivia.name = '<text style="font-size:13px";fill="#000000" x="15" y="52">{val}</text>';
OrgChart.templates.olivia.title = '<text style="font-size:13px";fill="#000000" f x="15" y="70">{val}</text>';
OrgChart.templates.olivia.img_0 =
    '<clipPath id="ulaImg">'
    + '<circle cx="46" cy="46" r="30"></circle>'
    + '</clipPath>'
    + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="14" y="15" width="65" height="65">'
    + '</image>';

OrgChart.templates.olivia.plus = '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
    + '<text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{collapsed-children-count}</text>';
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
OrgChart.templates.olivia.size = [320, 92];
OrgChart.templates.olivia.nodeMenuButton = '<g transform="matrix(1,0,0,1,285,47)" data-ctrl-n-menu-id="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#000"></circle><circle cx="7" cy="0" r="2" fill="#000"></circle><circle cx="14" cy="0" r="2" fill="#000"></circle></g>';

OrgChart.templates.olivia.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{rounded}" />';

OrgChart.elements.headingText = function () {
    return {
        html: `<h5 class="fs-5 ms-2 opacity-50 fw-bold boc-form-field mb-4">Entity summary</h5>`,
    };

};
OrgChart.elements.accordionButton = function () {
    return {
        html: ` <div class="accordion w-100 mt-5" id="accordionPanelsStayOpenExample">
        <div class="accordion-item shadow-none">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button text-uppercase black-primary fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style="text-transform:uppercase !important;">
                Compliance Status
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse border-0 show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body pt-0">
                <div>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex  align-items-center gap-2 py-1">
                            <h5 class="mb-0 font-weight-500 fs-5 text-black-primary">Name</h5>
                            <p class="mb-0 font-weight-500 opacity-50 text-black-primary fs-6">12/25/2022</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center gap-2 py-1">
                            <h5 class="mb-0 font-weight-500 fs-5 text-black-primary">Business Licence</h5>
                            <p class="mb-0 font-weight-500 opacity-50 text-black-primary fs-6">10/05/2022</p>
                        </div>
                        <div>
                            <button class="btn btn-primary py-1 px-2 text-white fw-medium" data-bs-toggle="modal" data-bs-target="#actionModal"><span class="icon icon-Compliance-white me-1"></span>Take action</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-4">
                        <div>
                            <h5 class="text-uppercase fs-6">Registered Agent <span class="icon icon-info-black"></span></h5>
                            <div class="d-flex align-items-center gap-2">
                                <h5 class="mb-0 font-weight-500 fs-5 text-black-primary">Name</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="accordion-item shadow-none">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style="text-transform:uppercase !important;">
                Stakeholders 
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show border-0" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body pt-0">
                <div>
                    <div class="">
                        <div class="d-flex  align-items-center gap-2 py-1">
                            <h5 class="mb-0 font-weight-500 fs-5 text-black-primary">Sally James,</h5>
                            <p class="mb-0 font-weight-500 text-black-primary fs-6">President</p>
                        </div>
                        <div class="d-flex  align-items-center gap-2 py-1">
                            <h5 class="mb-0 font-weight-500 fs-5 text-black-primary">John Smith,</h5>
                            <p class="mb-0 font-weight-500 text-black-primary fs-6">Manager</p>
                        </div>
                        <div class="d-flex  align-items-center gap-2 py-1">
                            <h5 class="mb-0 font-weight-500 fs-5 text-black-primary">Patch Adams,</h5>
                            <p class="mb-0 font-weight-500 text-black-primary fs-6">Product Manager</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="accordion-item shadow-none">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button collapsed text-uppercase text-black-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style="text-transform:uppercase !important;">
                Shares 1000
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show border-0" aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body pt-0">
                <div class="gap-3">
                    <div class="d-flex  align-items-center gap-2 py-1">
                        <h5 class="mb-0 font-weight-500 fs-5 text-black-primary">Stuart 230</h5>
                    </div>
                    <div class="d-flex  align-items-center gap-2 py-1">
                        <h5 class="mb-0 font-weight-500 fs-5 text-black-primary">Sally 125</h5>   
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>`
    }
}

/* Edit Form */

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
// closed
OrgChart.SEARCH_PLACEHOLDER = "Search";
OrgChart.RES.IT_IS_LONELY_HERE_LINK = "No Record Found";
var chart = new OrgChart(document.getElementById("tree"), {
    template: 'olivia',
    showYScroll: OrgChart.scroll.visible,
    showXScroll: OrgChart.scroll.visible,
    mouseScrool: OrgChart.action.ctrlZoom,
    align: OrgChart.align.orientation,
    // scaleInitial: OrgChart.match.width,
    enableSearch: true,
    miniMap: true,
    layout: OrgChart.mixed,
    toolbar: {
        layout: false,
        zoom: true,
        fit: true,
        expandAll: true
    },
    menu: {
        pdf: { text: "Download Templates", icon: downloadTempMenu, onClick: pdf },
        csv: { text: "Export CSV", icon: exportCSV },
        png: { text: "Export JPG", icon: exportJPG },

    },
    // collapse: {
    //     level: 1,
    //     allChildren: true
    // },
    filterBy: ['DBA', 'Business_License', 'Select_Entity', 'Entity_Type', 'Group_Name', 'Compliance', 'Jurisdiction', 'Status'],

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
        // add: {
        //     text: "Add Entity",
        //     icon: addEntity
        // }
    },

    nodeBinding: {
        img_0: "img",
        name: "Name",
        title: "Jurisdiction",
        company: "Select_Entity",
        Compliance: "Compliance",
        // Statu:"Status",
    },
    editUI: new editForm(),
    // edit form
    tags: {
        filter: {
            template: 'dot'
        }
    },
});

function pdf(nodeId) {
    OrgChart.pdfPrevUI.show(chart, {
        format: "A4",
        header: 'My Header',
        footer: 'My Footer. Page {current-page} of {total-pages}'
    });
}
chart.on('init', function (sender) {
    document.getElementById("loadPlaceholder").style.display = "none";
});

setTimeout(function () {
    chart.load(
        
        [
            {
                "id": 550,
                "pid": 0,
                "entityName": "LTD Test LP",
                "Entity_Type": "LP",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "LTD Test LP",
                "editLink": "\/qa\/entity-profile\/550?edit=550",
                "openLink": "\/qa\/entity-profile\/550",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "LTD Test LP"
            },
            {
                "id": 597,
                "pid": 0,
                "entityName": "Compare Figma LLC",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Compare Figma LLC",
                "editLink": "\/qa\/entity-profile\/597?edit=597",
                "openLink": "\/qa\/entity-profile\/597",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Compare Figma LLC"
            },
            {
                "id": 644,
                "pid": 624,
                "entityName": "Test Other Payment 012523 LLC",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Test Other Payment 012523 LLC",
                "editLink": "\/qa\/entity-profile\/624?edit=644",
                "openLink": "\/qa\/entity-profile\/644",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 645,
                "pid": 0,
                "entityName": "Other test 012523 dom LLC",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "06\/29\/2023",
                "company": "Other test 012523 dom LLC",
                "editLink": "\/qa\/entity-profile\/645?edit=645",
                "openLink": "\/qa\/entity-profile\/645",
                "DBA": "Does not have DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Other test 012523 dom LLC"
            },
            {
                "id": 646,
                "pid": 0,
                "entityName": "Other test2 012523 LLC",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Other test2 012523 LLC",
                "editLink": "\/qa\/entity-profile\/646?edit=646",
                "openLink": "\/qa\/entity-profile\/646",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Other test2 012523 LLC"
            },
            {
                "id": 652,
                "pid": 0,
                "entityName": "COIN SWITCH",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "08\/02\/2023",
                "company": "COIN SWITCH",
                "editLink": "\/qa\/entity-profile\/652?edit=652",
                "openLink": "\/qa\/entity-profile\/652",
                "DBA": "Does not have DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "California",
                "Group_Name": " Donald Duck",
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "COIN SWITCH"
            },
            {
                "id": 881,
                "pid": 0,
                "entityName": "Other Card Case 1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Other Card Case 1",
                "editLink": "\/qa\/entity-profile\/881?edit=881",
                "openLink": "\/qa\/entity-profile\/881",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": " Donald Duck",
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Other Card Case 1"
            },
            {
                "id": 891,
                "pid": 0,
                "entityName": "Trigger Plat & AR Test 1 LLC",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Trigger Plat & AR Test 1 LLC",
                "editLink": "\/qa\/entity-profile\/891?edit=891",
                "openLink": "\/qa\/entity-profile\/891",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Trigger Plat & AR Test 1 LLC"
            },
            {
                "id": 892,
                "pid": 0,
                "entityName": "Trigger Plat & Serv 2",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Trigger Plat & Serv 2",
                "editLink": "\/qa\/entity-profile\/892?edit=892",
                "openLink": "\/qa\/entity-profile\/892",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": " Donald Duck",
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Trigger Plat & Serv 2"
            },
            {
                "id": 1034,
                "pid": 1033,
                "entityName": "bug test entity 2",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "bug test entity 2",
                "editLink": "\/qa\/entity-profile\/1033?edit=1034",
                "openLink": "\/qa\/entity-profile\/1034",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 1035,
                "pid": 0,
                "entityName": "test case of en 101",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "test case of en 101",
                "editLink": "\/qa\/entity-profile\/1035?edit=1035",
                "openLink": "\/qa\/entity-profile\/1035",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "test case of en 101"
            },
            {
                "id": 1036,
                "pid": 0,
                "entityName": "test case of en 102",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "test case of en 102",
                "editLink": "\/qa\/entity-profile\/1036?edit=1036",
                "openLink": "\/qa\/entity-profile\/1036",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "test case of en 102"
            },
            {
                "id": 1037,
                "pid": 0,
                "entityName": "OK",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "OK",
                "editLink": "\/qa\/entity-profile\/1037?edit=1037",
                "openLink": "\/qa\/entity-profile\/1037",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Oklahoma",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "OK"
            },
            {
                "id": 1038,
                "pid": 0,
                "entityName": "OK",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "OK",
                "editLink": "\/qa\/entity-profile\/1038?edit=1038",
                "openLink": "\/qa\/entity-profile\/1038",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Oklahoma",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "OK"
            },
            {
                "id": 1166,
                "pid": 1164,
                "entityName": "en-entity 9\/3",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "en-entity 9\/3",
                "editLink": "\/qa\/entity-profile\/1164?edit=1166",
                "openLink": "\/qa\/entity-profile\/1166",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Alabama",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1180,
                "pid": 1175,
                "entityName": "N-ENTITY 19\/19.5",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "N-ENTITY 19\/19.5",
                "editLink": "\/qa\/entity-profile\/1175?edit=1180",
                "openLink": "\/qa\/entity-profile\/1180",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1185,
                "pid": 1182,
                "entityName": "EN-ENTITY 20\/20.3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "EN-ENTITY 20\/20.3",
                "editLink": "\/qa\/entity-profile\/1182?edit=1185",
                "openLink": "\/qa\/entity-profile\/1185",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Texas",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1187,
                "pid": 0,
                "entityName": "En-Entity 25\/25.0",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "01\/30\/2023",
                "company": "En-Entity 25\/25.0",
                "editLink": "\/qa\/entity-profile\/1187?edit=1187",
                "openLink": "\/qa\/entity-profile\/1187",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "En-Entity 25\/25.0"
            },
            {
                "id": 1197,
                "pid": 1194,
                "entityName": "EN-ENTITY 21\/21.3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "EN-ENTITY 21\/21.3",
                "editLink": "\/qa\/entity-profile\/1194?edit=1197",
                "openLink": "\/qa\/entity-profile\/1197",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Texas",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1199,
                "pid": 1194,
                "entityName": "EN-ENTITY 21\/21.5",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "EN-ENTITY 21\/21.5",
                "editLink": "\/qa\/entity-profile\/1194?edit=1199",
                "openLink": "\/qa\/entity-profile\/1199",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Wyoming",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1203,
                "pid": 1200,
                "entityName": "EN-ENTITY 22\/22.3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "EN-ENTITY 22\/22.3",
                "editLink": "\/qa\/entity-profile\/1200?edit=1203",
                "openLink": "\/qa\/entity-profile\/1203",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Wyoming",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1207,
                "pid": 0,
                "entityName": "EN-ENTITY 23\/23.1",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "EN-ENTITY 23\/23.1",
                "editLink": "\/qa\/entity-profile\/1207?edit=1207",
                "openLink": "\/qa\/entity-profile\/1207",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1221,
                "pid": 0,
                "entityName": "Rounding Issue",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Rounding Issue",
                "editLink": "\/qa\/entity-profile\/1221?edit=1221",
                "openLink": "\/qa\/entity-profile\/1221",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Alabama",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Rounding Issue"
            },
            {
                "id": 1228,
                "pid": 1216,
                "entityName": "Jur 1.2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Jur 1.2",
                "editLink": "\/qa\/entity-profile\/1216?edit=1228",
                "openLink": "\/qa\/entity-profile\/1228",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1229,
                "pid": 1216,
                "entityName": "Jur 1.3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Jur 1.3",
                "editLink": "\/qa\/entity-profile\/1216?edit=1229",
                "openLink": "\/qa\/entity-profile\/1229",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1230,
                "pid": 1216,
                "entityName": "Jur 1.4",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Jur 1.4",
                "editLink": "\/qa\/entity-profile\/1216?edit=1230",
                "openLink": "\/qa\/entity-profile\/1230",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1235,
                "pid": 0,
                "entityName": "CA A1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "CA A1",
                "editLink": "\/qa\/entity-profile\/1235?edit=1235",
                "openLink": "\/qa\/entity-profile\/1235",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "CA A1"
            },
            {
                "id": 1239,
                "pid": 0,
                "entityName": "CA 2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "CA 2",
                "editLink": "\/qa\/entity-profile\/1239?edit=1239",
                "openLink": "\/qa\/entity-profile\/1239",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "CA 2"
            },
            {
                "id": 1240,
                "pid": 0,
                "entityName": "JUR 3.1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "JUR 3.1",
                "editLink": "\/qa\/entity-profile\/1240?edit=1240",
                "openLink": "\/qa\/entity-profile\/1240",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1242,
                "pid": 1099,
                "entityName": "JUR 5.0",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "JUR 5.0",
                "editLink": "\/qa\/entity-profile\/1099?edit=1242",
                "openLink": "\/qa\/entity-profile\/1242",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 1243,
                "pid": 1099,
                "entityName": "JUR 5.1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "JUR 5.1",
                "editLink": "\/qa\/entity-profile\/1099?edit=1243",
                "openLink": "\/qa\/entity-profile\/1243",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1342,
                "pid": 0,
                "entityName": "CA - Home",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "CA - Home",
                "editLink": "\/qa\/entity-profile\/1342?edit=1342",
                "openLink": "\/qa\/entity-profile\/1342",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Dissolved",
                "Compliance": "Overdue",
                "Select_Entity": "CA - Home"
            },
            {
                "id": 1343,
                "pid": 1342,
                "entityName": "CA Home DE",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "CA Home DE",
                "editLink": "\/qa\/entity-profile\/1342?edit=1343",
                "openLink": "\/qa\/entity-profile\/1343",
                "DBA": "Does not have DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 1344,
                "pid": 1342,
                "entityName": "CA Home FL",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "CA Home FL",
                "editLink": "\/qa\/entity-profile\/1342?edit=1344",
                "openLink": "\/qa\/entity-profile\/1344",
                "DBA": "Does not have DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Florida",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 1345,
                "pid": 1342,
                "entityName": "CA Home WY",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "CA Home WY",
                "editLink": "\/qa\/entity-profile\/1342?edit=1345",
                "openLink": "\/qa\/entity-profile\/1345",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Wyoming",
                "Group_Name": null,
                "Status": "Dissolved"
            },
            {
                "id": 1380,
                "pid": 0,
                "entityName": "WY Home ",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "WY Home ",
                "editLink": "\/qa\/entity-profile\/1380?edit=1380",
                "openLink": "\/qa\/entity-profile\/1380",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Wyoming",
                "Group_Name": null,
                "Status": "Inactive",
                "Compliance": "Overdue",
                "Select_Entity": "WY Home "
            },
            {
                "id": 1381,
                "pid": 1380,
                "entityName": "WY Home AZ",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "WY Home AZ",
                "editLink": "\/qa\/entity-profile\/1380?edit=1381",
                "openLink": "\/qa\/entity-profile\/1381",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 1382,
                "pid": 1380,
                "entityName": "WY Home CA",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "WY Home CA",
                "editLink": "\/qa\/entity-profile\/1380?edit=1382",
                "openLink": "\/qa\/entity-profile\/1382",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1383,
                "pid": 1380,
                "entityName": "WY Home FL",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "WY Home FL",
                "editLink": "\/qa\/entity-profile\/1380?edit=1383",
                "openLink": "\/qa\/entity-profile\/1383",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Florida",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 1384,
                "pid": 0,
                "entityName": "NV Home",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "NV Home",
                "editLink": "\/qa\/entity-profile\/1384?edit=1384",
                "openLink": "\/qa\/entity-profile\/1384",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Nevada",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "NV Home"
            },
            {
                "id": 1385,
                "pid": 1342,
                "entityName": "CA Home AZ",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "CA Home AZ",
                "editLink": "\/qa\/entity-profile\/1342?edit=1385",
                "openLink": "\/qa\/entity-profile\/1385",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1386,
                "pid": 1384,
                "entityName": "NV Home AZ ",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "NV Home AZ ",
                "editLink": "\/qa\/entity-profile\/1384?edit=1386",
                "openLink": "\/qa\/entity-profile\/1386",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1387,
                "pid": 1384,
                "entityName": "NV Home DE",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "NV Home DE",
                "editLink": "\/qa\/entity-profile\/1384?edit=1387",
                "openLink": "\/qa\/entity-profile\/1387",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": " Donald Duck",
                "Status": "Active"
            },
            {
                "id": 1400,
                "pid": 1380,
                "entityName": "WY Home PI",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "WY Home PI",
                "editLink": "\/qa\/entity-profile\/1380?edit=1400",
                "openLink": "\/qa\/entity-profile\/1400",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Rhode Island",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1404,
                "pid": 0,
                "entityName": "DE HOME",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "DE HOME",
                "editLink": "\/qa\/entity-profile\/1404?edit=1404",
                "openLink": "\/qa\/entity-profile\/1404",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": " Donald Duck",
                "Status": "Active",
                "Select_Entity": "DE HOME"
            },
            {
                "id": 1405,
                "pid": 1404,
                "entityName": "DE HOME CA",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "DE HOME CA",
                "editLink": "\/qa\/entity-profile\/1404?edit=1405",
                "openLink": "\/qa\/entity-profile\/1405",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1446,
                "pid": 0,
                "entityName": "Entity 1 Domestic LLC",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "Entity 1 Domestic LLC",
                "editLink": "\/qa\/entity-profile\/1446?edit=1446",
                "openLink": "\/qa\/entity-profile\/1446",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Entity 1 Domestic LLC"
            },
            {
                "id": 1447,
                "pid": 0,
                "entityName": "ENTITY 3 INT",
                "Entity_Type": "CORPORATION",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "ENTITY 3 INT",
                "editLink": "\/qa\/entity-profile\/1447?edit=1447",
                "openLink": "\/qa\/entity-profile\/1447",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "India",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 1448,
                "pid": 0,
                "entityName": "ENTITY 2 ADDITIONAL INC.",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2023",
                "company": "ENTITY 2 ADDITIONAL INC.",
                "editLink": "\/qa\/entity-profile\/1448?edit=1448",
                "openLink": "\/qa\/entity-profile\/1448",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": " Donald Duck",
                "Status": "Active",
                "Select_Entity": "ENTITY 2 ADDITIONAL INC."
            },
            {
                "id": 1817,
                "pid": 0,
                "entityName": "ENTITY 1\/1.1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ENTITY 1\/1.1",
                "editLink": "\/qa\/entity-profile\/1817?edit=1817",
                "openLink": "\/qa\/entity-profile\/1817",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "ENTITY 1\/1.1"
            },
            {
                "id": 1846,
                "pid": 0,
                "entityName": "ENTITY 3\\3.1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ENTITY 3\\3.1",
                "editLink": "\/qa\/entity-profile\/1846?edit=1846",
                "openLink": "\/qa\/entity-profile\/1846",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "ENTITY 3\\3.1"
            },
            {
                "id": 1848,
                "pid": 0,
                "entityName": "ENTITY 9",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ENTITY 9",
                "editLink": "\/qa\/entity-profile\/1848?edit=1848",
                "openLink": "\/qa\/entity-profile\/1848",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "ENTITY 9"
            },
            {
                "id": 1849,
                "pid": 0,
                "entityName": "ENTITY 21",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ENTITY 21",
                "editLink": "\/qa\/entity-profile\/1849?edit=1849",
                "openLink": "\/qa\/entity-profile\/1849",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "ENTITY 21"
            },
            {
                "id": 1850,
                "pid": 0,
                "entityName": "Entity 31",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "Entity 31",
                "editLink": "\/qa\/entity-profile\/1850?edit=1850",
                "openLink": "\/qa\/entity-profile\/1850",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Inactive",
                "Select_Entity": "Entity 31"
            },
            {
                "id": 1851,
                "pid": 0,
                "entityName": "Entity 32",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/08\/2023",
                "company": "Entity 32",
                "editLink": "\/qa\/entity-profile\/1851?edit=1851",
                "openLink": "\/qa\/entity-profile\/1851",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Entity 32"
            },
            {
                "id": 1852,
                "pid": 0,
                "entityName": "DE 2.3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "DE 2.3",
                "editLink": "\/qa\/entity-profile\/1852?edit=1852",
                "openLink": "\/qa\/entity-profile\/1852",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "DE 2.3"
            },
            {
                "id": 1853,
                "pid": 0,
                "entityName": "Entity - 1 March - RA and soi",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "Entity - 1 March - RA and soi",
                "editLink": "\/qa\/entity-profile\/1853?edit=1853",
                "openLink": "\/qa\/entity-profile\/1853",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Entity - 1 March - RA and soi"
            },
            {
                "id": 1854,
                "pid": 0,
                "entityName": "Entity - 1 March - Without RA and Annual",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/07\/2023",
                "company": "Entity - 1 March - Without RA and Annual",
                "editLink": "\/qa\/entity-profile\/1854?edit=1854",
                "openLink": "\/qa\/entity-profile\/1854",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": " Donald Duck",
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Entity - 1 March - Without RA and Annual"
            },
            {
                "id": 1855,
                "pid": 0,
                "entityName": "Entity - 1 March - RA and Annual (Order Submitted)",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "Entity - 1 March - RA and Annual (Order Submitted)",
                "editLink": "\/qa\/entity-profile\/1855?edit=1855",
                "openLink": "\/qa\/entity-profile\/1855",
                "DBA": "Does not have DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Wyoming",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Entity - 1 March - RA and Annual (Order Submitted)"
            },
            {
                "id": 2108,
                "pid": 0,
                "entityName": "ENTITY 6.1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ENTITY 6.1",
                "editLink": "\/qa\/entity-profile\/2108?edit=2108",
                "openLink": "\/qa\/entity-profile\/2108",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "ENTITY 6.1"
            },
            {
                "id": 2109,
                "pid": 0,
                "entityName": "ENTITY 6.2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "ENTITY 6.2",
                "editLink": "\/qa\/entity-profile\/2109?edit=2109",
                "openLink": "\/qa\/entity-profile\/2109",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "ENTITY 6.2"
            },
            {
                "id": 2162,
                "pid": 0,
                "entityName": "TEst",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "TEst",
                "editLink": "\/qa\/entity-profile\/2162?edit=2162",
                "openLink": "\/qa\/entity-profile\/2162",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "TEst"
            },
            {
                "id": 2168,
                "pid": 0,
                "entityName": "DE",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "DE",
                "editLink": "\/qa\/entity-profile\/2168?edit=2168",
                "openLink": "\/qa\/entity-profile\/2168",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "DE"
            },
            {
                "id": 2214,
                "pid": 0,
                "entityName": "RA doc test case 1",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/08\/2023",
                "company": "RA doc test case 1",
                "editLink": "\/qa\/entity-profile\/2214?edit=2214",
                "openLink": "\/qa\/entity-profile\/2214",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "RA doc test case 1"
            },
            {
                "id": 2425,
                "pid": 0,
                "entityName": "TEST 1.1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "TEST 1.1",
                "editLink": "\/qa\/entity-profile\/2425?edit=2425",
                "openLink": "\/qa\/entity-profile\/2425",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "TEST 1.1"
            },
            {
                "id": 2426,
                "pid": 0,
                "entityName": "Test 1.2",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "Test 1.2",
                "editLink": "\/qa\/entity-profile\/2426?edit=2426",
                "openLink": "\/qa\/entity-profile\/2426",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Test 1.2"
            },
            {
                "id": 2454,
                "pid": 0,
                "entityName": "ACH",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ACH",
                "editLink": "\/qa\/entity-profile\/2454?edit=2454",
                "openLink": "\/qa\/entity-profile\/2454",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Dissolved",
                "Select_Entity": "ACH"
            },
            {
                "id": 2457,
                "pid": 0,
                "entityName": "New",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "New",
                "editLink": "\/qa\/entity-profile\/2457?edit=2457",
                "openLink": "\/qa\/entity-profile\/2457",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "New"
            },
            {
                "id": 2507,
                "pid": 0,
                "entityName": "ENTITY 91.1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2022",
                "company": "ENTITY 91.1",
                "editLink": "\/qa\/entity-profile\/2507?edit=2507",
                "openLink": "\/qa\/entity-profile\/2507",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "ENTITY 91.1"
            },
            {
                "id": 2514,
                "pid": 0,
                "entityName": "ENTITY 91.2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ENTITY 91.2",
                "editLink": "\/qa\/entity-profile\/2514?edit=2514",
                "openLink": "\/qa\/entity-profile\/2514",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "ENTITY 91.2"
            },
            {
                "id": 2587,
                "pid": 0,
                "entityName": "RA",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "RA",
                "editLink": "\/qa\/entity-profile\/2587?edit=2587",
                "openLink": "\/qa\/entity-profile\/2587",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "RA"
            },
            {
                "id": 2592,
                "pid": 0,
                "entityName": "A1",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/08\/2023",
                "company": "A1",
                "editLink": "\/qa\/entity-profile\/2592?edit=2592",
                "openLink": "\/qa\/entity-profile\/2592",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arkansas",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "A1"
            },
            {
                "id": 2593,
                "pid": 0,
                "entityName": "DR&",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "DR&",
                "editLink": "\/qa\/entity-profile\/2593?edit=2593",
                "openLink": "\/qa\/entity-profile\/2593",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": " Donald Duck",
                "Status": "Active",
                "Select_Entity": "DR&"
            },
            {
                "id": 2594,
                "pid": 0,
                "entityName": "Entity - 5 March - RA and Annual (Order Submitted)",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/02\/2021",
                "company": "Entity - 5 March - RA and Annual (Order Submitted)",
                "editLink": "\/qa\/entity-profile\/2594?edit=2594",
                "openLink": "\/qa\/entity-profile\/2594",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Entity - 5 March - RA and Annual (Order Submitted)"
            },
            {
                "id": 2595,
                "pid": 2594,
                "entityName": "Entity - 5 March - Without RA and Annual",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "06\/01\/2021",
                "company": "Entity - 5 March - Without RA and Annual",
                "editLink": "\/qa\/entity-profile\/2594?edit=2595",
                "openLink": "\/qa\/entity-profile\/2595",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 2596,
                "pid": 0,
                "entityName": "Entity - 5 March - RA and soi",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "05\/31\/2022",
                "company": "Entity - 5 March - RA and soi",
                "editLink": "\/qa\/entity-profile\/2596?edit=2596",
                "openLink": "\/qa\/entity-profile\/2596",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Texas",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 2598,
                "pid": 0,
                "entityName": "A1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "A1",
                "editLink": "\/qa\/entity-profile\/2598?edit=2598",
                "openLink": "\/qa\/entity-profile\/2598",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "A1"
            },
            {
                "id": 2599,
                "pid": 0,
                "entityName": "A2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "A2",
                "editLink": "\/qa\/entity-profile\/2599?edit=2599",
                "openLink": "\/qa\/entity-profile\/2599",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "A2"
            },
            {
                "id": 2600,
                "pid": 0,
                "entityName": "A3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "A3",
                "editLink": "\/qa\/entity-profile\/2600?edit=2600",
                "openLink": "\/qa\/entity-profile\/2600",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 2601,
                "pid": 0,
                "entityName": "A4",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "A4",
                "editLink": "\/qa\/entity-profile\/2601?edit=2601",
                "openLink": "\/qa\/entity-profile\/2601",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Texas",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "A4"
            },
            {
                "id": 2606,
                "pid": 0,
                "entityName": "A5",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "A5",
                "editLink": "\/qa\/entity-profile\/2606?edit=2606",
                "openLink": "\/qa\/entity-profile\/2606",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "A5"
            },
            {
                "id": 2607,
                "pid": 0,
                "entityName": "A6",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/09\/2022",
                "company": "A6",
                "editLink": "\/qa\/entity-profile\/2607?edit=2607",
                "openLink": "\/qa\/entity-profile\/2607",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Dissolved",
                "Compliance": "Overdue",
                "Select_Entity": "A6"
            },
            {
                "id": 2608,
                "pid": 0,
                "entityName": "A7",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/07\/2023",
                "company": "A7",
                "editLink": "\/qa\/entity-profile\/2608?edit=2608",
                "openLink": "\/qa\/entity-profile\/2608",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "A7"
            },
            {
                "id": 2620,
                "pid": 2607,
                "entityName": "A6.1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "A6.1",
                "editLink": "\/qa\/entity-profile\/2607?edit=2620",
                "openLink": "\/qa\/entity-profile\/2620",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 2622,
                "pid": 0,
                "entityName": "B1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "B1",
                "editLink": "\/qa\/entity-profile\/2622?edit=2622",
                "openLink": "\/qa\/entity-profile\/2622",
                "DBA": "Does not have DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "B1"
            },
            {
                "id": 2623,
                "pid": 0,
                "entityName": "B2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "B2",
                "editLink": "\/qa\/entity-profile\/2623?edit=2623",
                "openLink": "\/qa\/entity-profile\/2623",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Dissolved",
                "Select_Entity": "B2"
            },
            {
                "id": 2624,
                "pid": 0,
                "entityName": "C1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "C1",
                "editLink": "\/qa\/entity-profile\/2624?edit=2624",
                "openLink": "\/qa\/entity-profile\/2624",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Inactive",
                "Compliance": "Overdue",
                "Select_Entity": "C1"
            },
            {
                "id": 2625,
                "pid": 0,
                "entityName": "ENTITY 91",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2022",
                "company": "ENTITY 91",
                "editLink": "\/qa\/entity-profile\/2625?edit=2625",
                "openLink": "\/qa\/entity-profile\/2625",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Texas",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "ENTITY 91"
            },
            {
                "id": 2626,
                "pid": 0,
                "entityName": "hhhhhhff",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "hhhhhhff",
                "editLink": "\/qa\/entity-profile\/2626?edit=2626",
                "openLink": "\/qa\/entity-profile\/2626",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "hhhhhhff"
            },
            {
                "id": 2627,
                "pid": 0,
                "entityName": "ENTITY 63.1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ENTITY 63.1",
                "editLink": "\/qa\/entity-profile\/2627?edit=2627",
                "openLink": "\/qa\/entity-profile\/2627",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Florida",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "ENTITY 63.1"
            },
            {
                "id": 2686,
                "pid": 0,
                "entityName": "TEST 23.0",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "TEST 23.0",
                "editLink": "\/qa\/entity-profile\/2686?edit=2686",
                "openLink": "\/qa\/entity-profile\/2686",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "TEST 23.0"
            },
            {
                "id": 2687,
                "pid": 0,
                "entityName": "ENTITY 56.1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ENTITY 56.1",
                "editLink": "\/qa\/entity-profile\/2687?edit=2687",
                "openLink": "\/qa\/entity-profile\/2687",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "ENTITY 56.1"
            },
            {
                "id": 2688,
                "pid": 0,
                "entityName": "EN-Entity ",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-Entity ",
                "editLink": "\/qa\/entity-profile\/2688?edit=2688",
                "openLink": "\/qa\/entity-profile\/2688",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "EN-Entity "
            },
            {
                "id": 2689,
                "pid": 0,
                "entityName": "En-Entity - 96",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "En-Entity - 96",
                "editLink": "\/qa\/entity-profile\/2689?edit=2689",
                "openLink": "\/qa\/entity-profile\/2689",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "En-Entity - 96"
            },
            {
                "id": 2690,
                "pid": 0,
                "entityName": "EN",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN",
                "editLink": "\/qa\/entity-profile\/2690?edit=2690",
                "openLink": "\/qa\/entity-profile\/2690",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "EN"
            },
            {
                "id": 2693,
                "pid": 0,
                "entityName": "ER90890",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ER90890",
                "editLink": "\/qa\/entity-profile\/2693?edit=2693",
                "openLink": "\/qa\/entity-profile\/2693",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "ER90890"
            },
            {
                "id": 2694,
                "pid": 0,
                "entityName": "ENTITY 9.6",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ENTITY 9.6",
                "editLink": "\/qa\/entity-profile\/2694?edit=2694",
                "openLink": "\/qa\/entity-profile\/2694",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "ENTITY 9.6"
            },
            {
                "id": 2695,
                "pid": 0,
                "entityName": "ENTITY 9.50.5",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ENTITY 9.50.5",
                "editLink": "\/qa\/entity-profile\/2695?edit=2695",
                "openLink": "\/qa\/entity-profile\/2695",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "ENTITY 9.50.5"
            },
            {
                "id": 2702,
                "pid": 0,
                "entityName": "RT",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/03\/2023",
                "company": "RT",
                "editLink": "\/qa\/entity-profile\/2702?edit=2702",
                "openLink": "\/qa\/entity-profile\/2702",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "RT"
            },
            {
                "id": 2704,
                "pid": 0,
                "entityName": "SD12",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "SD12",
                "editLink": "\/qa\/entity-profile\/2704?edit=2704",
                "openLink": "\/qa\/entity-profile\/2704",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "SD12"
            },
            {
                "id": 2711,
                "pid": 0,
                "entityName": "Entity 2 LLC",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/09\/2023",
                "company": "Entity 2 LLC",
                "editLink": "\/qa\/entity-profile\/2711?edit=2711",
                "openLink": "\/qa\/entity-profile\/2711",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Entity 2 LLC"
            },
            {
                "id": 2712,
                "pid": 0,
                "entityName": "Entity 3 LLC",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/08\/2023",
                "company": "Entity 3 LLC",
                "editLink": "\/qa\/entity-profile\/2712?edit=2712",
                "openLink": "\/qa\/entity-profile\/2712",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Entity 3 LLC"
            },
            {
                "id": 2713,
                "pid": 0,
                "entityName": "Entity 4 LLC",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/14\/2023",
                "company": "Entity 4 LLC",
                "editLink": "\/qa\/entity-profile\/2713?edit=2713",
                "openLink": "\/qa\/entity-profile\/2713",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Wyoming",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Entity 4 LLC"
            },
            {
                "id": 2714,
                "pid": 0,
                "entityName": "Entity 5 LLC",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/15\/2023",
                "company": "Entity 5 LLC",
                "editLink": "\/qa\/entity-profile\/2714?edit=2714",
                "openLink": "\/qa\/entity-profile\/2714",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Texas",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Entity 5 LLC"
            },
            {
                "id": 2734,
                "pid": 0,
                "entityName": "TEST DB",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "TEST DB",
                "editLink": "\/qa\/entity-profile\/2734?edit=2734",
                "openLink": "\/qa\/entity-profile\/2734",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "TEST DB"
            },
            {
                "id": 2735,
                "pid": 0,
                "entityName": "EN-2.3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-2.3",
                "editLink": "\/qa\/entity-profile\/2735?edit=2735",
                "openLink": "\/qa\/entity-profile\/2735",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "EN-2.3"
            },
            {
                "id": 2736,
                "pid": 0,
                "entityName": "RA TEST",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "RA TEST",
                "editLink": "\/qa\/entity-profile\/2736?edit=2736",
                "openLink": "\/qa\/entity-profile\/2736",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "RA TEST"
            },
            {
                "id": 2737,
                "pid": 0,
                "entityName": "International Entity",
                "Entity_Type": "Entity-Type",
                "stateFileNumber": null,
                "registerDate": "02\/27\/2023",
                "company": "International Entity",
                "editLink": "\/qa\/entity-profile\/2737?edit=2737",
                "openLink": "\/qa\/entity-profile\/2737",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Camen Islands",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 2738,
                "pid": 0,
                "entityName": "Report 1\/1.1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "Report 1\/1.1",
                "editLink": "\/qa\/entity-profile\/2738?edit=2738",
                "openLink": "\/qa\/entity-profile\/2738",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Report 1\/1.1"
            },
            {
                "id": 2739,
                "pid": 0,
                "entityName": "Report 1.2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "06\/01\/2022",
                "company": "Report 1.2",
                "editLink": "\/qa\/entity-profile\/2739?edit=2739",
                "openLink": "\/qa\/entity-profile\/2739",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Texas",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Report 1.2"
            },
            {
                "id": 2741,
                "pid": 0,
                "entityName": "En-Report 1.3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/28\/2023",
                "company": "En-Report 1.3",
                "editLink": "\/qa\/entity-profile\/2741?edit=2741",
                "openLink": "\/qa\/entity-profile\/2741",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "En-Report 1.3"
            },
            {
                "id": 2751,
                "pid": 0,
                "entityName": "Report 11\/11.3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "Report 11\/11.3",
                "editLink": "\/qa\/entity-profile\/2751?edit=2751",
                "openLink": "\/qa\/entity-profile\/2751",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Texas",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Report 11\/11.3"
            },
            {
                "id": 2752,
                "pid": 0,
                "entityName": "Report 11\/11.4",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "Report 11\/11.4",
                "editLink": "\/qa\/entity-profile\/2752?edit=2752",
                "openLink": "\/qa\/entity-profile\/2752",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Florida",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Report 11\/11.4"
            },
            {
                "id": 2753,
                "pid": 0,
                "entityName": "RA Report Demo",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "RA Report Demo",
                "editLink": "\/qa\/entity-profile\/2753?edit=2753",
                "openLink": "\/qa\/entity-profile\/2753",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "RA Report Demo"
            },
            {
                "id": 2767,
                "pid": 0,
                "entityName": "sd",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "sd",
                "editLink": "\/qa\/entity-profile\/2767?edit=2767",
                "openLink": "\/qa\/entity-profile\/2767",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "sd"
            },
            {
                "id": 2771,
                "pid": 0,
                "entityName": "dfsfdas",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/14\/2023",
                "company": "dfsfdas",
                "editLink": "\/qa\/entity-profile\/2771?edit=2771",
                "openLink": "\/qa\/entity-profile\/2771",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "dfsfdas"
            },
            {
                "id": 2776,
                "pid": 0,
                "entityName": "EN-ENTITY 3.2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-ENTITY 3.2",
                "editLink": "\/qa\/entity-profile\/2776?edit=2776",
                "openLink": "\/qa\/entity-profile\/2776",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "EN-ENTITY 3.2"
            },
            {
                "id": 2777,
                "pid": 0,
                "entityName": "EN-ENTITY 3.02",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-ENTITY 3.02",
                "editLink": "\/qa\/entity-profile\/2777?edit=2777",
                "openLink": "\/qa\/entity-profile\/2777",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "EN-ENTITY 3.02"
            },
            {
                "id": 2791,
                "pid": 0,
                "entityName": "test 1231",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "test 1231",
                "editLink": "\/qa\/entity-profile\/2791?edit=2791",
                "openLink": "\/qa\/entity-profile\/2791",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "test 1231"
            },
            {
                "id": 2792,
                "pid": 0,
                "entityName": "EA INC",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/08\/2023",
                "company": "EA INC",
                "editLink": "\/qa\/entity-profile\/2792?edit=2792",
                "openLink": "\/qa\/entity-profile\/2792",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EA INC"
            },
            {
                "id": 2795,
                "pid": 0,
                "entityName": "TYUI",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2022",
                "company": "TYUI",
                "editLink": "\/qa\/entity-profile\/2795?edit=2795",
                "openLink": "\/qa\/entity-profile\/2795",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "TYUI"
            },
            {
                "id": 2796,
                "pid": 0,
                "entityName": "DBA AND BLR",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/08\/2023",
                "company": "DBA AND BLR",
                "editLink": "\/qa\/entity-profile\/2796?edit=2796",
                "openLink": "\/qa\/entity-profile\/2796",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "DBA AND BLR"
            },
            {
                "id": 2797,
                "pid": 0,
                "entityName": "DFG",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "DFG",
                "editLink": "\/qa\/entity-profile\/2797?edit=2797",
                "openLink": "\/qa\/entity-profile\/2797",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "DFG"
            },
            {
                "id": 2798,
                "pid": 0,
                "entityName": "ER-Issue",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "ER-Issue",
                "editLink": "\/qa\/entity-profile\/2798?edit=2798",
                "openLink": "\/qa\/entity-profile\/2798",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "ER-Issue"
            },
            {
                "id": 2824,
                "pid": 0,
                "entityName": "AZ - TEST",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "AZ - TEST",
                "editLink": "\/qa\/entity-profile\/2824?edit=2824",
                "openLink": "\/qa\/entity-profile\/2824",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "AZ - TEST"
            },
            {
                "id": 2825,
                "pid": 0,
                "entityName": "DBA and BLR 2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/08\/2023",
                "company": "DBA and BLR 2",
                "editLink": "\/qa\/entity-profile\/2825?edit=2825",
                "openLink": "\/qa\/entity-profile\/2825",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "DBA and BLR 2"
            },
            {
                "id": 2830,
                "pid": 0,
                "entityName": "RA Order 1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "RA Order 1",
                "editLink": "\/qa\/entity-profile\/2830?edit=2830",
                "openLink": "\/qa\/entity-profile\/2830",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "RA Order 1"
            },
            {
                "id": 2832,
                "pid": 0,
                "entityName": "RA Order 2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "RA Order 2",
                "editLink": "\/qa\/entity-profile\/2832?edit=2832",
                "openLink": "\/qa\/entity-profile\/2832",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "RA Order 2"
            },
            {
                "id": 3091,
                "pid": 0,
                "entityName": "RA Order",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "RA Order",
                "editLink": "\/qa\/entity-profile\/3091?edit=3091",
                "openLink": "\/qa\/entity-profile\/3091",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "RA Order"
            },
            {
                "id": 3095,
                "pid": 0,
                "entityName": "DBA Invoice",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "DBA Invoice",
                "editLink": "\/qa\/entity-profile\/3095?edit=3095",
                "openLink": "\/qa\/entity-profile\/3095",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "DBA Invoice"
            },
            {
                "id": 3098,
                "pid": 0,
                "entityName": "EN-DBA-1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-DBA-1",
                "editLink": "\/qa\/entity-profile\/3098?edit=3098",
                "openLink": "\/qa\/entity-profile\/3098",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-DBA-1"
            },
            {
                "id": 3099,
                "pid": 0,
                "entityName": "EN-DBA-2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "06\/08\/2021",
                "company": "EN-DBA-2",
                "editLink": "\/qa\/entity-profile\/3099?edit=3099",
                "openLink": "\/qa\/entity-profile\/3099",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-DBA-2"
            },
            {
                "id": 3100,
                "pid": 0,
                "entityName": "EN-DBA-3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-DBA-3",
                "editLink": "\/qa\/entity-profile\/3100?edit=3100",
                "openLink": "\/qa\/entity-profile\/3100",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-DBA-3"
            },
            {
                "id": 3101,
                "pid": 0,
                "entityName": "EN-DBA-4",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-DBA-4",
                "editLink": "\/qa\/entity-profile\/3101?edit=3101",
                "openLink": "\/qa\/entity-profile\/3101",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Florida",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-DBA-4"
            },
            {
                "id": 3102,
                "pid": 0,
                "entityName": "EN-DBA-6",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-DBA-6",
                "editLink": "\/qa\/entity-profile\/3102?edit=3102",
                "openLink": "\/qa\/entity-profile\/3102",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-DBA-6"
            },
            {
                "id": 3110,
                "pid": 0,
                "entityName": "EN-DBA-7",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-DBA-7",
                "editLink": "\/qa\/entity-profile\/3110?edit=3110",
                "openLink": "\/qa\/entity-profile\/3110",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "EN-DBA-7"
            },
            {
                "id": 3119,
                "pid": 1446,
                "entityName": "EN-DBA-8",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/01\/2022",
                "company": "EN-DBA-8",
                "editLink": "\/qa\/entity-profile\/1446?edit=3119",
                "openLink": "\/qa\/entity-profile\/3119",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 3120,
                "pid": 0,
                "entityName": "EN-DBA-9",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-DBA-9",
                "editLink": "\/qa\/entity-profile\/3120?edit=3120",
                "openLink": "\/qa\/entity-profile\/3120",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-DBA-9"
            },
            {
                "id": 3123,
                "pid": 0,
                "entityName": "EN-DBA\/BLR-1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-DBA\/BLR-1",
                "editLink": "\/qa\/entity-profile\/3123?edit=3123",
                "openLink": "\/qa\/entity-profile\/3123",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-DBA\/BLR-1"
            },
            {
                "id": 3124,
                "pid": 0,
                "entityName": "EN-DEMO-1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "06\/09\/2020",
                "company": "EN-DEMO-1",
                "editLink": "\/qa\/entity-profile\/3124?edit=3124",
                "openLink": "\/qa\/entity-profile\/3124",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-DEMO-1"
            },
            {
                "id": 3125,
                "pid": 0,
                "entityName": "EN-DBA\/BLR-2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-DBA\/BLR-2",
                "editLink": "\/qa\/entity-profile\/3125?edit=3125",
                "openLink": "\/qa\/entity-profile\/3125",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-DBA\/BLR-2"
            },
            {
                "id": 3126,
                "pid": 0,
                "entityName": "EN-DBA\/BLR-3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-DBA\/BLR-3",
                "editLink": "\/qa\/entity-profile\/3126?edit=3126",
                "openLink": "\/qa\/entity-profile\/3126",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Texas",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-DBA\/BLR-3"
            },
            {
                "id": 3127,
                "pid": 0,
                "entityName": "DBA",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "DBA",
                "editLink": "\/qa\/entity-profile\/3127?edit=3127",
                "openLink": "\/qa\/entity-profile\/3127",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "DBA"
            },
            {
                "id": 3131,
                "pid": 0,
                "entityName": "EN-DEMO-2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/02\/2023",
                "company": "EN-DEMO-2",
                "editLink": "\/qa\/entity-profile\/3131?edit=3131",
                "openLink": "\/qa\/entity-profile\/3131",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-DEMO-2"
            },
            {
                "id": 3141,
                "pid": 0,
                "entityName": "DBA issue 5",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "DBA issue 5",
                "editLink": "\/qa\/entity-profile\/3141?edit=3141",
                "openLink": "\/qa\/entity-profile\/3141",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "DBA issue 5"
            },
            {
                "id": 3142,
                "pid": 0,
                "entityName": "DBA issue 6",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/02\/2023",
                "company": "DBA issue 6",
                "editLink": "\/qa\/entity-profile\/3142?edit=3142",
                "openLink": "\/qa\/entity-profile\/3142",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": " Donald Duck",
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "DBA issue 6"
            },
            {
                "id": 3143,
                "pid": 0,
                "entityName": "EN-FYI-9",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "EN-FYI-9",
                "editLink": "\/qa\/entity-profile\/3143?edit=3143",
                "openLink": "\/qa\/entity-profile\/3143",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-FYI-9"
            },
            {
                "id": 3145,
                "pid": 0,
                "entityName": "25th MAR ",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "25th MAR ",
                "editLink": "\/qa\/entity-profile\/3145?edit=3145",
                "openLink": "\/qa\/entity-profile\/3145",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Inactive",
                "Compliance": "Overdue",
                "Select_Entity": "25th MAR "
            },
            {
                "id": 3146,
                "pid": 0,
                "entityName": "RTY-9",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/15\/2023",
                "company": "RTY-9",
                "editLink": "\/qa\/entity-profile\/3146?edit=3146",
                "openLink": "\/qa\/entity-profile\/3146",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "RTY-9"
            },
            {
                "id": 3152,
                "pid": 0,
                "entityName": "DBA",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "DBA",
                "editLink": "\/qa\/entity-profile\/3152?edit=3152",
                "openLink": "\/qa\/entity-profile\/3152",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Florida",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "DBA"
            },
            {
                "id": 3153,
                "pid": 0,
                "entityName": "DBA 4.5",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "DBA 4.5",
                "editLink": "\/qa\/entity-profile\/3153?edit=3153",
                "openLink": "\/qa\/entity-profile\/3153",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "DBA 4.5"
            },
            {
                "id": 3154,
                "pid": 0,
                "entityName": "RTYI 23.3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/23\/2021",
                "company": "RTYI 23.3",
                "editLink": "\/qa\/entity-profile\/3154?edit=3154",
                "openLink": "\/qa\/entity-profile\/3154",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": "Client 99",
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "RTYI 23.3"
            },
            {
                "id": 3155,
                "pid": 0,
                "entityName": "FGH 0.3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "FGH 0.3",
                "editLink": "\/qa\/entity-profile\/3155?edit=3155",
                "openLink": "\/qa\/entity-profile\/3155",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Florida",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "FGH 0.3"
            },
            {
                "id": 3166,
                "pid": 0,
                "entityName": "Inactive 5.0",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "Inactive 5.0",
                "editLink": "\/qa\/entity-profile\/3166?edit=3166",
                "openLink": "\/qa\/entity-profile\/3166",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "Inactive 5.0"
            },
            {
                "id": 3167,
                "pid": 3166,
                "entityName": "Inactive 5.1",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/07\/2023",
                "company": "Inactive 5.1",
                "editLink": "\/qa\/entity-profile\/3166?edit=3167",
                "openLink": "\/qa\/entity-profile\/3167",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arizona",
                "Group_Name": null,
                "Status": "Dissolved"
            },
            {
                "id": 3168,
                "pid": 3166,
                "entityName": "Inactive 5.2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "Inactive 5.2",
                "editLink": "\/qa\/entity-profile\/3166?edit=3168",
                "openLink": "\/qa\/entity-profile\/3168",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Nevada",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 3169,
                "pid": 3166,
                "entityName": "Inactive 5.2",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "Inactive 5.2",
                "editLink": "\/qa\/entity-profile\/3166?edit=3169",
                "openLink": "\/qa\/entity-profile\/3169",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Florida",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 3170,
                "pid": 3166,
                "entityName": "Inactive 5.5",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "Inactive 5.5",
                "editLink": "\/qa\/entity-profile\/3166?edit=3170",
                "openLink": "\/qa\/entity-profile\/3170",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Wyoming",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 3171,
                "pid": 3166,
                "entityName": "inactive 5.7",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "inactive 5.7",
                "editLink": "\/qa\/entity-profile\/3166?edit=3171",
                "openLink": "\/qa\/entity-profile\/3171",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "District of Columbia",
                "Group_Name": null,
                "Status": "Dissolved"
            },
            {
                "id": 3172,
                "pid": 3166,
                "entityName": "inactive 5.9",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/01\/2023",
                "company": "inactive 5.9",
                "editLink": "\/qa\/entity-profile\/3166?edit=3172",
                "openLink": "\/qa\/entity-profile\/3172",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 3174,
                "pid": 0,
                "entityName": "bgcbgc",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "bgcbgc",
                "editLink": "\/qa\/entity-profile\/3174?edit=3174",
                "openLink": "\/qa\/entity-profile\/3174",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "bgcbgc"
            },
            {
                "id": 3175,
                "pid": 0,
                "entityName": "Rush",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Rush",
                "editLink": "\/qa\/entity-profile\/3175?edit=3175",
                "openLink": "\/qa\/entity-profile\/3175",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Rush"
            },
            {
                "id": 3176,
                "pid": 0,
                "entityName": "RUSH",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "RUSH",
                "editLink": "\/qa\/entity-profile\/3176?edit=3176",
                "openLink": "\/qa\/entity-profile\/3176",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "RUSH"
            },
            {
                "id": 3177,
                "pid": 0,
                "entityName": "DD",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "DD",
                "editLink": "\/qa\/entity-profile\/3177?edit=3177",
                "openLink": "\/qa\/entity-profile\/3177",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "DD"
            },
            {
                "id": 3178,
                "pid": 0,
                "entityName": "RUSH",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "RUSH",
                "editLink": "\/qa\/entity-profile\/3178?edit=3178",
                "openLink": "\/qa\/entity-profile\/3178",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "RUSH"
            },
            {
                "id": 3179,
                "pid": 0,
                "entityName": "RUSH",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "RUSH",
                "editLink": "\/qa\/entity-profile\/3179?edit=3179",
                "openLink": "\/qa\/entity-profile\/3179",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "RUSH"
            },
            {
                "id": 23608,
                "pid": 0,
                "entityName": "Existing",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "03\/30\/2023",
                "company": "Existing",
                "editLink": "\/qa\/entity-profile\/23608?edit=23608",
                "openLink": "\/qa\/entity-profile\/23608",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Arkansas",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Existing"
            },
            {
                "id": 23609,
                "pid": 23608,
                "entityName": "A7",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/29\/2023",
                "company": "A7",
                "editLink": "\/qa\/entity-profile\/23608?edit=23609",
                "openLink": "\/qa\/entity-profile\/23609",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Florida",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 23610,
                "pid": 0,
                "entityName": "NEW ENTITY",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "NEW ENTITY",
                "editLink": "\/qa\/entity-profile\/23610?edit=23610",
                "openLink": "\/qa\/entity-profile\/23610",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "NEW ENTITY"
            },
            {
                "id": 23619,
                "pid": 3145,
                "entityName": "CA 123456987",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "04\/05\/2023",
                "company": "CA 123456987",
                "editLink": "\/qa\/entity-profile\/3145?edit=23619",
                "openLink": "\/qa\/entity-profile\/23619",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 23841,
                "pid": 0,
                "entityName": "Invoice - ID",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "04\/01\/2023",
                "company": "Invoice - ID",
                "editLink": "\/qa\/entity-profile\/23841?edit=23841",
                "openLink": "\/qa\/entity-profile\/23841",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Invoice - ID"
            },
            {
                "id": 23842,
                "pid": 23841,
                "entityName": "EN-JUR",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "03\/29\/2023",
                "company": "EN-JUR",
                "editLink": "\/qa\/entity-profile\/23841?edit=23842",
                "openLink": "\/qa\/entity-profile\/23842",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 23843,
                "pid": 23841,
                "entityName": "123",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "04\/12\/2023",
                "company": "123",
                "editLink": "\/qa\/entity-profile\/23841?edit=23843",
                "openLink": "\/qa\/entity-profile\/23843",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Connecticut",
                "Group_Name": null,
                "Status": "Inactive"
            },
            {
                "id": 23844,
                "pid": 2606,
                "entityName": "fdgfdg",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "04\/30\/2023",
                "company": "fdgfdg",
                "editLink": "\/qa\/entity-profile\/2606?edit=23844",
                "openLink": "\/qa\/entity-profile\/23844",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 23847,
                "pid": 3145,
                "entityName": "Entity 3.66",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "05\/02\/2023",
                "company": "Entity 3.66",
                "editLink": "\/qa\/entity-profile\/3145?edit=23847",
                "openLink": "\/qa\/entity-profile\/23847",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Texas",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 23848,
                "pid": 0,
                "entityName": "A9.0",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "02\/23\/2022",
                "company": "A9.0",
                "editLink": "\/qa\/entity-profile\/23848?edit=23848",
                "openLink": "\/qa\/entity-profile\/23848",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "A9.0"
            },
            {
                "id": 23849,
                "pid": 0,
                "entityName": "B9.90",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "B9.90",
                "editLink": "\/qa\/entity-profile\/23849?edit=23849",
                "openLink": "\/qa\/entity-profile\/23849",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "B9.90"
            },
            {
                "id": 23850,
                "pid": 3124,
                "entityName": "A23",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "05\/02\/2023",
                "company": "A23",
                "editLink": "\/qa\/entity-profile\/3124?edit=23850",
                "openLink": "\/qa\/entity-profile\/23850",
                "DBA": "Has DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 23851,
                "pid": 0,
                "entityName": "New Entity",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "New Entity",
                "editLink": "\/qa\/entity-profile\/23851?edit=23851",
                "openLink": "\/qa\/entity-profile\/23851",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "New Entity"
            },
            {
                "id": 23852,
                "pid": 23851,
                "entityName": "New Entity 1",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "05\/02\/2023",
                "company": "New Entity 1",
                "editLink": "\/qa\/entity-profile\/23851?edit=23852",
                "openLink": "\/qa\/entity-profile\/23852",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "District of Columbia",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 23853,
                "pid": 0,
                "entityName": "New Entity 2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "05\/02\/2023",
                "company": "New Entity 2",
                "editLink": "\/qa\/entity-profile\/23853?edit=23853",
                "openLink": "\/qa\/entity-profile\/23853",
                "DBA": "Has DBA",
                "Business_License": "Has Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue"
            },
            {
                "id": 23854,
                "pid": 0,
                "entityName": "New Entity 3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "05\/01\/2023",
                "company": "New Entity 3",
                "editLink": "\/qa\/entity-profile\/23854?edit=23854",
                "openLink": "\/qa\/entity-profile\/23854",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "New Entity 3"
            },
            {
                "id": 23855,
                "pid": 0,
                "entityName": "New Entity 4",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "New Entity 4",
                "editLink": "\/qa\/entity-profile\/23855?edit=23855",
                "openLink": "\/qa\/entity-profile\/23855",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "New Entity 4"
            },
            {
                "id": 23856,
                "pid": 0,
                "entityName": "New Entity 5",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "New Entity 5",
                "editLink": "\/qa\/entity-profile\/23856?edit=23856",
                "openLink": "\/qa\/entity-profile\/23856",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "New Entity 5"
            },
            {
                "id": 23857,
                "pid": 0,
                "entityName": "Client 99",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "05\/01\/2023",
                "company": "Client 99",
                "editLink": "\/qa\/entity-profile\/23857?edit=23857",
                "openLink": "\/qa\/entity-profile\/23857",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": "Client 99",
                "Status": "Active",
                "Select_Entity": "Client 99"
            },
            {
                "id": 23858,
                "pid": 0,
                "entityName": "Invoice Update",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "05\/03\/2023",
                "company": "Invoice Update",
                "editLink": "\/qa\/entity-profile\/23858?edit=23858",
                "openLink": "\/qa\/entity-profile\/23858",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Invoice Update"
            },
            {
                "id": 23860,
                "pid": 0,
                "entityName": "EN-ENTITY 2",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "EN-ENTITY 2",
                "editLink": "\/qa\/entity-profile\/23860?edit=23860",
                "openLink": "\/qa\/entity-profile\/23860",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "EN-ENTITY 2"
            },
            {
                "id": 23888,
                "pid": 1384,
                "entityName": "ENtity 123.2",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "05\/17\/2023",
                "company": "ENtity 123.2",
                "editLink": "\/qa\/entity-profile\/1384?edit=23888",
                "openLink": "\/qa\/entity-profile\/23888",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 23889,
                "pid": 0,
                "entityName": "A1",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "A1",
                "editLink": "\/qa\/entity-profile\/23889?edit=23889",
                "openLink": "\/qa\/entity-profile\/23889",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "A1"
            },
            {
                "id": 23890,
                "pid": 0,
                "entityName": "Test ",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Test ",
                "editLink": "\/qa\/entity-profile\/23890?edit=23890",
                "openLink": "\/qa\/entity-profile\/23890",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Test "
            },
            {
                "id": 23891,
                "pid": 0,
                "entityName": "EN-RA Case",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "05\/01\/2023",
                "company": "EN-RA Case",
                "editLink": "\/qa\/entity-profile\/23891?edit=23891",
                "openLink": "\/qa\/entity-profile\/23891",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Compliance": "Overdue",
                "Select_Entity": "EN-RA Case"
            },
            {
                "id": 23892,
                "pid": 0,
                "entityName": "Admin - ENTITY - 2.3",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "05\/07\/2022",
                "company": "Admin - ENTITY - 2.3",
                "editLink": "\/qa\/entity-profile\/23892?edit=23892",
                "openLink": "\/qa\/entity-profile\/23892",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active"
            },
            {
                "id": 23893,
                "pid": 0,
                "entityName": "Test 25",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Test 25",
                "editLink": "\/qa\/entity-profile\/23893?edit=23893",
                "openLink": "\/qa\/entity-profile\/23893",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Test 25"
            },
            {
                "id": 23894,
                "pid": 0,
                "entityName": "Test 26",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "Test 26",
                "editLink": "\/qa\/entity-profile\/23894?edit=23894",
                "openLink": "\/qa\/entity-profile\/23894",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "Test 26"
            },
            {
                "id": 23896,
                "pid": 0,
                "entityName": "DE",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "DE",
                "editLink": "\/qa\/entity-profile\/23896?edit=23896",
                "openLink": "\/qa\/entity-profile\/23896",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "DE"
            },
            {
                "id": 23897,
                "pid": 0,
                "entityName": "DE",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "DE",
                "editLink": "\/qa\/entity-profile\/23897?edit=23897",
                "openLink": "\/qa\/entity-profile\/23897",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "DE"
            },
            {
                "id": 23898,
                "pid": 0,
                "entityName": "CA",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "CA",
                "editLink": "\/qa\/entity-profile\/23898?edit=23898",
                "openLink": "\/qa\/entity-profile\/23898",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "CA"
            },
            {
                "id": 23899,
                "pid": 0,
                "entityName": "EN-TYUIU",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "05\/01\/2023",
                "company": "EN-TYUIU",
                "editLink": "\/qa\/entity-profile\/23899?edit=23899",
                "openLink": "\/qa\/entity-profile\/23899",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "EN-TYUIU"
            },
            {
                "id": 23900,
                "pid": 0,
                "entityName": "CDR",
                "Entity_Type": "LLC",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "CDR",
                "editLink": "\/qa\/entity-profile\/23900?edit=23900",
                "openLink": "\/qa\/entity-profile\/23900",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "California",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "CDR"
            },
            {
                "id": 23903,
                "pid": 0,
                "entityName": "DE",
                "Entity_Type": "Profit Corporation",
                "stateFileNumber": null,
                "registerDate": "N\/A",
                "company": "DE",
                "editLink": "\/qa\/entity-profile\/23903?edit=23903",
                "openLink": "\/qa\/entity-profile\/23903",
                "DBA": "Does not have DBA",
                "Business_License": "Does not have Business License",
                "Jurisdiction": "Delaware",
                "Group_Name": null,
                "Status": "Active",
                "Select_Entity": "DE"
            }
        ]
    
    );
}, 100)

// end filtered chart js

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

// 
// 
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
        this.classList.toggle("active");
        filterIcon.classList.toggle("icon-org-filter-white");
        bocFilter.classList.toggle("d-block");
        bocTree.classList.toggle("pt-10");

        // remove_Underscore from filter end
        const elementsToProcess = document.querySelectorAll('[data-filter-field]');
        const listMenu = document.querySelectorAll('.boc-filter-menu');

        elementsToProcess.forEach(element => { 
            removeUnderscores(element);
            element.addEventListener('click', function(){
                const menuId = element.getAttribute('data-filter-field');
                const menu = document.querySelector(`[data-filter-menu="${menuId}"]`);
                
                if (menu) {
                    listMenu.forEach(ele2 =>{
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















