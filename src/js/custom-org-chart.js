//JavaScript

var expandAllIcon ='<span class="icon me-0 icon-expand-all"></span>';

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
var downloadTempMenu = '<span class="icon me-0 icon-md icon-download-template-menu"></span>';
var exportCSV = '<span class="icon icon-md me-0 icon-export-csv"></span>';
var exportJPG = '<span class="icon icon-md me-0 icon-export-jpg"></span>';
OrgChart.templates.olivia.Compliance = '<svg width="24" height="24" x="280" y="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M10.9085 2.78216C11.9483 2.20625 13.2463 2.54089 13.8841 3.5224L13.9669 3.66023L21.7259 17.6685C21.9107 18.0021 22.0076 18.3773 22.0076 18.7587C22.0076 19.9495 21.0825 20.9243 19.9117 21.0035L19.7576 21.0087H4.24187C3.86056 21.0087 3.4855 20.9118 3.15192 20.7271C2.11208 20.1513 1.70704 18.8734 2.20059 17.812L2.27349 17.6687L10.0303 3.66046C10.2348 3.2911 10.5391 2.98674 10.9085 2.78216ZM12.0004 16.0018C11.4489 16.0018 11.0018 16.4489 11.0018 17.0004C11.0018 17.552 11.4489 17.9991 12.0004 17.9991C12.552 17.9991 12.9991 17.552 12.9991 17.0004C12.9991 16.4489 12.552 16.0018 12.0004 16.0018ZM11.9983 7.99806C11.4854 7.99825 11.0629 8.38444 11.0053 8.8818L10.9986 8.99842L11.0004 13.9993L11.0072 14.1159C11.0652 14.6132 11.488 14.9991 12.0008 14.9989C12.5136 14.9988 12.9362 14.6126 12.9938 14.1152L13.0004 13.9986L12.9986 8.9977L12.9919 8.88108C12.9339 8.38376 12.5111 7.99788 11.9983 7.99806Z" fill="#E73B18"/>' +
    '</svg>';
OrgChart.templates.olivia.company = '<text data-width="240" class="fs-5 font-weight-500" data-text-overflow="ellipsis" fill="#000000" x="15" y="30">{val}</text>';
OrgChart.templates.olivia.name = '<text data-width="240" class="fs-6" fill="#000000" x="15" y="52">{val}</text>';
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
OrgChart.RES.IT_IS_LONELY_HERE_LINK = "Loading...";
var chart = new OrgChart(document.getElementById("tree"), {
    template: 'olivia',
    columns: 6,
    showYScroll: OrgChart.scroll.visible,
    showXScroll: OrgChart.scroll.visible,
    mouseScrool: OrgChart.action.scroll,
    align: OrgChart.align.orientation,
    lazyLoading: true,
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
        csv: { text: "Export Node Fields CSV", icon: exportCSV },
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

// setTimeout(function () {
//     chart.load(response.json);
// }, 100);

// Assuming `chart` is your chart object

// Make a fetch request to the JSON file
fetch('data.json')
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
    }, 1000);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });


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

            // org-chart filter menu's dropdown open/close script
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















