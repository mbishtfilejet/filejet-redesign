
const typeBasedOnField = {
    "entity_name": "text",
    "entity_type": "dropdown",
    "home_state": "dropdown",
    "state": "dropdown",
    "formation_date": "date",
    "formation_type": "dropdown",
    "physical_address": "address",
    "mailing_address": "address",
    "store_number": "text",
    "status": "dropdown",
    "ein": "text",
    "description": "longtext",
    "authorized_signer": "text",
    "par_value": "text",
    "group": "dropdown",
    "business_licenses": "complex",
    "dba": "complex",
    "director": "complex",
    "ownership": "complex",
    "registrations": "complex",
    "order_number": "text",
    "order_date": "date",
    "services": "dropdown",
    "payment_status": "dropdown",
    "payment_date": "date",
    "order_status": "dropdown",
    "external_ref_number": "text",
    "entity_dba": "text",
    "file_number": "text",
    "par_value": "number",
    "group_id": "text",
    "tags": "dropdown"
}

const operatorsBasedOnType = {
    "text": ["equals", "starts_with"],
    "dropdown": ["one_of"],
    "number": ["equals", "less_than", "greater_than"],
    "date": ["between"],
    "address": ["equals"],
    "longtext": ['contains'],
    "complex": ["includes"]
}


const optionsByField = {
    "status": ['In Good Standing', "Not Good Standing", "Inactive", "Unknown", "In Process", "Draft", "Overdue"],
    "director": ['CEO', "President", 'CTO', 'VC', 'Others'],
    "registrations": ['In Good Standing', "Not Good Standing", "Inactive", "Unknown"],
    "tags": ["Amendments", "Business License", "Merger", "25102f", "Certificate of Cancellation", "Beneficial Ownership Information Report", "Annual Report", "Restate", "EIN", "Certificate of Correction", "Formations", "DBA: Doing Business As"],
    "entity_type": [
        "LLC",
        "Profit Corporation - General",
        "Profit Corporation - Professional",
        "Profit Corporation - Close",
        "Non-Profit - Religious",
        "Non-Profit - Mutual Benefit",
        "Non-Profit - Public Benefit",
        "Non-Profit - Common Interest Development",
        "Non-Profit - Exempt",
        "LLP",
        "LP",
        "GP",
        "Professional Limited Liability Company",
        "Trust"
    ],
    "state": [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ],
    "group": ["Technology Partners", "Commercial Services"],
    "order_status": ["In Process", "Sent to State", "Recently Completed"],
    "services": ["Annual Report", "CTA BOI", "SOP"],
    "payment_status": ["In Progress", "Paid"]
}

function initializeFilterDatePicker(selector) {
    $(selector).datepicker()
}

function getDynamicValueField(selectedCased, uniqueId, multSelectList = [], value = null) {

    let isSearchDisabled = multSelectList.length <= 5;

    switch (selectedCased) {
        case "address":
            return `<div class="address-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2 h-100">
                        <textarea id="address-value-${uniqueId}" name="" class="border-0 p-0 w-100" placeholder="Address" id=""></textarea>
                    </div>`;
        case "single-date":
            return `<div class="single-date calendar-wrapper d-flex align-items-center flex-grow-1 border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                        <input id="single-date-${uniqueId}" type="text" class="form-control w-100 border-0 p-0 datepicker h-100"
                             placeholder="Date" value="${value || ""}">
                    </div>`;
        case "date-range":
            return `<div class="d-flex align-items-center date-range">
                            <div class="calendar-wrapper d-flex flex-grow-1 align-items-center border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                                <input id="date-range-${uniqueId}F" type="text" class="from-date form-control w-100 border-0 p-0 datepicker h-100"
                                    placeholder="Date" value="${value?.from || ""}">
                            </div>
                            <span class="mx-2">to</span>
                            <div class="calendar-wrapper d-flex flex-grow-1 align-items-center border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                                <input id="date-range-${uniqueId}T" type="text" class="to-date form-control w-100 border-0 p-0 datepicker h-100"
                                    placeholder="Date" value="${value?.to || ""}">
                            </div>
                        </div>`;
        case "value-range":
            return `<div class="d-flex align-items-center value-range">
                            <div class="d-flex align-items-center flex-grow-1 border border-1 rounded shadow-sm  m-0 white-bg px-3 py-2 h-100">
                                <input id="value-range-${uniqueId}F" type="text" class="from-value border-0 p-0 w-100"
                                    placeholder="Value" value="${value?.from || ""}">
                            </div>
                            <span class="mx-2">to</span>
                            <div class="d-flex align-items-center flex-grow-1 border border-1 rounded shadow-sm  m-0 white-bg px-3 py-2 h-100">
                                <input id="value-range-${uniqueId}T" type="text" class="to-value border-0 p-0 w-100"
                                   placeholder="Value" value="${value?.to || ""}">
                            </div>
                    </div>`;
        case "mutli-select":
            return `
            <div class="filter2-dropdown w-100 h-100 dropdown filter-option">
                <div class="multi-select-container d-flex align-items-center border border-1 rounded-2 m-0 white-bg h-100"
                    id="mutli-selectContainer-${uniqueId}" data-label="Value" data-bs-toggle="dropdown"
                    aria-expanded="false" tabindex="0">
                        <input type="text" class="search-input" id="mutli-selectSearch-${uniqueId}" placeholder="Value"
                        autocomplete="off">
                </div>
                <ul class="dropdown-menu ${isSearchDisabled ? "search-disabled" : ''}" id="mutli-selectDropdown-${uniqueId}">
                ${multSelectList.map(val => `<li>
                        <label class="dropdown-item">
                            <input type="checkbox" class="form-check-input mutli-select-checkbox-${uniqueId} me-2"
                                data-value="${val}">${val}
                        </label>
                    </li>` ).join('')}
                </ul>
            </div>`;
        case "complex-ownership":
            return `
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                    placeholder="Owner Name" value="${value?.name || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-value-${uniqueId}1" type="text" class="border-0 p-0 w-100"
                    placeholder="Percentage" value="${value?.percentage || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value calendar-wrapper d-flex align-items-center border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                                <input id="date-range-${uniqueId}F" type="text" class="from-date form-control w-100 border-0 p-0 datepicker h-100"
                                     placeholder="Start Date" value="${value?.start || ""}">
                                </div>
            <div class="col-5 flex-grow-1 complex-value calendar-wrapper d-flex align-items-center border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                                <input id="date-range-${uniqueId}T" type="text" class="to-date form-control w-100 border-0 p-0 datepicker h-100"
                                     placeholder="End Date" value="${value?.end || ""}">
                                </div>
            `;
        case "complex-registrations":
            return `
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-name-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                    placeholder="Name" value="${value?.name || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value">
                <select id=complex-entityType-${uniqueId}" class="form-select custom-form-select" name="">
                    <option value="" disabled="" ${!value ? "selected" : ""}  hidden="" data-full-text="Select Entity Type">Entity Type</option>
                    <option value="1" ${value?.entity_type === "LLC" ? "selected" : ""} data-full-text="LLC">LLC</option>
                    <option value="2" ${value?.entity_type === "Profit Corporation - General" ? "selected" : ""} data-full-text="Profit Corporation - General">Profit Corporation - General </option>
                    <option value="3" ${value?.entity_type === "Profit Corporation - Professional" ? "selected" : ""} data-full-text="Profit Corporation - Professional">Profit Corporation - Professional </option>
                    <option value="4" ${value?.entity_type === "Profit Corporation - Close" ? "selected" : ""} data-full-text="Profit Corporation - Close">Profit Corporation - Close </option>
                    <option value="5" ${value?.entity_type === "Non-Profit - Religious" ? "selected" : ""} data-full-text="Non-Profit - Religious">Non-Profit - Religious</option>
                    <option value="6" ${value?.entity_type === "Non-Profit - Mutual Benefit" ? "selected" : ""} data-full-text="Non-Profit - Mutual Benefit">Non-Profit - Mutual Benefit</option>
                    <option value="7" ${value?.entity_type === "Non-Profit - Public Benefit" ? "selected" : ""} data-full-text="Non-Profit - Public Benefit">Non-Profit - Public Benefit</option>
                    <option value="8" ${value?.entity_type === "Non-Profit - Common Interest Development" ? "selected" : ""} data-full-text="Non-Profit - Common Interest Development">Non-Profit - Common Interest Development</option>
                    <option value="9" ${value?.entity_type === "Non-Profit - Exempt" ? "selected" : ""} data-full-text="Non-Profit - Exempt">Non-Profit - Exempt</option>
                    <option value="10" ${value?.entity_type === "LLP" ? "selected" : ""} data-full-text="LLP">LLP</option>
                    <option value="11" ${value?.entity_type === "LP" ? "selected" : ""} data-full-text="LP">LP</option>
                    <option value="12" ${value?.entity_type === "GP" ? "selected" : ""} data-full-text="GP">GP</option>
                    <option value="13" ${value?.entity_type === "Professional Limited Liability Company" ? "selected" : ""} data-full-text="Professional Limited Liability Company">Professional Limited Liability Company</option>
                    <option value="14" ${value?.entity_type === "Trust" ? "selected" : ""} data-full-text="Trust">Trust</option>
                </select>
            </div>
            <div class="col-5 flex-grow-1 complex-value">
                <select id="complex-state-${uniqueId}" class="form-select custom-form-select" name="">
                    <option value="" disabled="" ${!value ? "selected" : ""} hidden="" data-full-text="State">State</option>
                    <option value="1" ${value?.state === "Alabama" ? "selected" : ""} data-full-text="Alabama">Alabama</option>
                    <option value="2" ${value?.state === "Alaska" ? "selected" : ""} data-full-text="Alaska">Alaska</option>
                    <option value="3" ${value?.state === "Arizona" ? "selected" : ""} data-full-text="Arizona">Arizona</option>
                    <option value="4" ${value?.state === "Arkansas" ? "selected" : ""} data-full-text="Arkansas">Arkansas</option>
                    <option value="5" ${value?.state === "California" ? "selected" : ""} data-full-text="California">California</option>
                    <option value="6" ${value?.state === "Colorado" ? "selected" : ""} data-full-text="Colorado">Colorado</option>
                    <option value="7" ${value?.state === "Connecticut" ? "selected" : ""} data-full-text="Connecticut">Connecticut</option>
                    <option value="8" ${value?.state === "Delaware" ? "selected" : ""} data-full-text="Delaware">Delaware</option>
                    <option value="9" ${value?.state === "District of Columbia" ? "selected" : ""} data-full-text="District of Columbia">District of Columbia</option>
                    <option value="10" ${value?.state === "Florida" ? "selected" : ""} data-full-text="Florida">Florida</option>
                    <option value="11" ${value?.state === "Georgia" ? "selected" : ""} data-full-text="Georgia">Georgia</option>
                    <option value="12" ${value?.state === "Hawaii" ? "selected" : ""} data-full-text="Hawaii">Hawaii</option>
                    <option value="13" ${value?.state === "Idaho" ? "selected" : ""} data-full-text="Idaho">Idaho</option>
                    <option value="14" ${value?.state === "Illinois" ? "selected" : ""} data-full-text="Illinois">Illinois</option>
                    <option value="15" ${value?.state === "Indiana" ? "selected" : ""} data-full-text="Indiana">Indiana</option>
                    <option value="16" ${value?.state === "Iowa" ? "selected" : ""} data-full-text="Iowa">Iowa</option>
                    <option value="17" ${value?.state === "Kansas" ? "selected" : ""} data-full-text="Kansas">Kansas</option>
                    <option value="18" ${value?.state === "Kentucky" ? "selected" : ""} data-full-text="Kentucky">Kentucky</option>
                    <option value="19" ${value?.state === "Louisiana" ? "selected" : ""} data-full-text="Louisiana">Louisiana</option>
                    <option value="20" ${value?.state === "Maine" ? "selected" : ""} data-full-text="Maine">Maine</option>
                    <option value="21" ${value?.state === "Maryland" ? "selected" : ""} data-full-text="Maryland">Maryland</option>
                    <option value="22" ${value?.state === "Massachusetts" ? "selected" : ""} data-full-text="Massachusetts">Massachusetts</option>
                    <option value="23" ${value?.state === "Michigan" ? "selected" : ""} data-full-text="Michigan">Michigan</option>
                    <option value="24" ${value?.state === "Minnesota" ? "selected" : ""} data-full-text="Minnesota">Minnesota</option>
                    <option value="25" ${value?.state === "Mississippi" ? "selected" : ""} data-full-text="Mississippi">Mississippi</option>
                    <option value="26" ${value?.state === "Missouri" ? "selected" : ""} data-full-text="Missouri">Missouri</option>
                    <option value="27" ${value?.state === "Montana" ? "selected" : ""} data-full-text="Montana">Montana</option>
                    <option value="28" ${value?.state === "Nebraska" ? "selected" : ""} data-full-text="Nebraska">Nebraska</option>
                    <option value="29" ${value?.state === "Nevada" ? "selected" : ""} data-full-text="Nevada">Nevada</option>
                    <option value="30" ${value?.state === "New Hampshire" ? "selected" : ""} data-full-text="New Hampshire">New Hampshire</option>
                    <option value="31" ${value?.state === "New Jersey" ? "selected" : ""} data-full-text="New Jersey">New Jersey</option>
                    <option value="32" ${value?.state === "New Mexico" ? "selected" : ""} data-full-text="New Mexico">New Mexico</option>
                    <option value="33" ${value?.state === "New York" ? "selected" : ""} data-full-text="New York">New York</option>
                    <option value="34" ${value?.state === "North Carolina" ? "selected" : ""} data-full-text="North Carolina">North Carolina</option>
                    <option value="35" ${value?.state === "North Dakota" ? "selected" : ""} data-full-text="North Dakota">North Dakota</option>
                    <option value="36" ${value?.state === "Ohio" ? "selected" : ""} data-full-text="Ohio">Ohio</option>
                    <option value="37" ${value?.state === "Oklahoma" ? "selected" : ""} data-full-text="Oklahoma">Oklahoma</option>
                    <option value="38" ${value?.state === "Oregon" ? "selected" : ""} data-full-text="Oregon">Oregon</option>
                    <option value="39" ${value?.state === "Pennsylvania" ? "selected" : ""} data-full-text="Pennsylvania">Pennsylvania</option>
                    <option value="40" ${value?.state === "Rhode Island" ? "selected" : ""} data-full-text="Rhode Island">Rhode Island</option>
                    <option value="41" ${value?.state === "South Carolina" ? "selected" : ""} data-full-text="South Carolina">South Carolina</option>
                    <option value="42" ${value?.state === "South Dakota" ? "selected" : ""} data-full-text="South Dakota">South Dakota</option>
                    <option value="43" ${value?.state === "Tennessee" ? "selected" : ""} data-full-text="Tennessee">Tennessee</option>
                    <option value="44" ${value?.state === "Texas" ? "selected" : ""} data-full-text="Texas">Texas</option>
                    <option value="45" ${value?.state === "Utah" ? "selected" : ""} data-full-text="Utah">Utah</option>
                    <option value="46" ${value?.state === "Vermont" ? "selected" : ""} data-full-text="Vermont">Vermont</option>
                    <option value="47" ${value?.state === "Virginia" ? "selected" : ""} data-full-text="Virginia">Virginia</option>
                    <option value="48" ${value?.state === "Washington" ? "selected" : ""} data-full-text="Washington">Washington</option>
                    <option value="49" ${value?.state === "West Virginia" ? "selected" : ""} data-full-text="West Virginia">West Virginia</option>
                    <option value="50" ${value?.state === "Wisconsin" ? "selected" : ""} data-full-text="Wisconsin">Wisconsin</option>
                    <option value="51" ${value?.state === "Wyoming" ? "selected" : ""} data-full-text="Wyoming">Wyoming</option>
                </select>
            </div>
            <div class="col-5 flex-grow-1 complex-value">
                <select id="formation-type-${uniqueId}" class="form-select custom-form-select" name="">
                    <option value="" disabled="" ${!value ? "selected" : ""} hidden="" data-full-text="Formation Type">Formation Type</option>
                    <option value="1" ${value?.formation_type === "Home" ? 'selected' : ''} data-full-text="Home">Home</option>
                    <option value="2" ${value?.formation_type === 'Foreign' ? 'selected' : ''} data-full-text="Foreign">Foreign</option>
                </select>
            </div>
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-fileNum-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                    placeholder="File Number" value="${value?.file_number || ""}">
            </div>
            <div class="filter2-dropdown col-5 flex-grow-1 complex-value dropdown filter-option">
                <div class="multi-select-container d-flex align-items-center border border-1 rounded-2 m-0 white-bg h-100"
                    id="mutli-selectContainer-${uniqueId}" data-label="Status" data-bs-toggle="dropdown"
                    aria-expanded="false" tabindex="0">
                        <input type="text" class="search-input" id="mutli-selectSearch-${uniqueId}" placeholder="Status"
                        autocomplete="off">
                </div>
                <ul class="dropdown-menu ${isSearchDisabled ? "search-disabled" : ''}" id="mutli-selectDropdown-${uniqueId}">
                ${multSelectList.map(val => `<li>
                        <label class="dropdown-item">
                            <input type="checkbox" class="form-check-input mutli-select-checkbox-${uniqueId} me-2"
                                data-value="${val}">${val}
                        </label>
                    </li>` ).join('')}
                </ul>
            </div>
            <div class="col-5 flex-grow-1 complex-value calendar-wrapper d-flex align-items-center border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                <input id="single-range-${uniqueId}T" type="text" class="to-date form-control w-100 border-0 p-0 datepicker h-100"
                    placeholder="Next Report Date" value="${value?.next_report_date || ""}">
            </div>
            `;
        case "complex-director":
            return `
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                        <input id="complex-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                            placeholder="Name" value="${value?.name || ""}">
                    </div>
            <div class="filter2-dropdown col-5 flex-grow-1 complex-value dropdown filter-option">
                <div class="multi-select-container d-flex align-items-center border border-1 rounded-2 m-0 white-bg h-100"
                    id="mutli-selectContainer-${uniqueId}" data-label="Role" data-bs-toggle="dropdown"
                    aria-expanded="false" tabindex="0">
                        <input type="text" class="search-input" id="mutli-selectSearch-${uniqueId}" placeholder="Role"
                        autocomplete="off">
                </div>
                <ul class="dropdown-menu ${isSearchDisabled ? "search-disabled" : ''}" id="mutli-selectDropdown-${uniqueId}">
                ${multSelectList.map(val => `<li>
                        <label class="dropdown-item">
                            <input type="checkbox" class="form-check-input mutli-select-checkbox-${uniqueId} me-2"
                                data-value="${val}">${val}
                        </label>
                    </li>` ).join('')}
                </ul>
            </div>
            <div class="col-12 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                        <input id="complex-email-${uniqueId}" type="text" class="border-0 p-0 w-100"
                            placeholder="Email" value="${value?.email || ""}">
                    </div>
            <div class="col-5 flex-grow-1 complex-value calendar-wrapper d-flex align-items-center border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                                <input id="date-range-${uniqueId}F" type="text" class="from-date form-control w-100 border-0 p-0 datepicker h-100"
                                     placeholder="Start Date" value="${value?.start || ""}">
                                </div>
            <div class="col-5 flex-grow-1 complex-value calendar-wrapper d-flex align-items-center border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                                <input id="date-range-${uniqueId}T" type="text" class="to-date form-control w-100 border-0 p-0 datepicker h-100"
                                     placeholder="End Date" value="${value?.end || ""}">
                                </div>
            `;
        case "complex-dba":
            return `
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-tradename-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                    placeholder="Trade Name" value="${value?.trade_name || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value calendar-wrapper d-flex align-items-center border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                <input id="reg_date-${uniqueId}T" type="text" class="to-date form-control w-100 border-0 p-0 datepicker h-100"
                    placeholder="Registration Date" value="${value?.registration_date || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-reg_num-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                    placeholder="Registration Number" value="${value?.registration_number || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-entityName-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                    placeholder="Entity Name" value="${value?.entity_name || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-county-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                    placeholder="County" value="${value?.county || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value">
                <select id="complex-state-${uniqueId}" class="form-select custom-form-select" name="">
                    <option value="" disabled="" ${!value ? "selected" : ""} hidden="" data-full-text="State">State</option>
                    <option value="1" ${value?.state === "Alabama" ? "selected" : ""} data-full-text="Alabama">Alabama</option>
                    <option value="2" ${value?.state === "Alaska" ? "selected" : ""} data-full-text="Alaska">Alaska</option>
                    <option value="3" ${value?.state === "Arizona" ? "selected" : ""} data-full-text="Arizona">Arizona</option>
                    <option value="4" ${value?.state === "Arkansas" ? "selected" : ""} data-full-text="Arkansas">Arkansas</option>
                    <option value="5" ${value?.state === "California" ? "selected" : ""} data-full-text="California">California</option>
                    <option value="6" ${value?.state === "Colorado" ? "selected" : ""} data-full-text="Colorado">Colorado</option>
                    <option value="7" ${value?.state === "Connecticut" ? "selected" : ""} data-full-text="Connecticut">Connecticut</option>
                    <option value="8" ${value?.state === "Delaware" ? "selected" : ""} data-full-text="Delaware">Delaware</option>
                    <option value="9" ${value?.state === "District of Columbia" ? "selected" : ""} data-full-text="District of Columbia">District of Columbia</option>
                    <option value="10" ${value?.state === "Florida" ? "selected" : ""} data-full-text="Florida">Florida</option>
                    <option value="11" ${value?.state === "Georgia" ? "selected" : ""} data-full-text="Georgia">Georgia</option>
                    <option value="12" ${value?.state === "Hawaii" ? "selected" : ""} data-full-text="Hawaii">Hawaii</option>
                    <option value="13" ${value?.state === "Idaho" ? "selected" : ""} data-full-text="Idaho">Idaho</option>
                    <option value="14" ${value?.state === "Illinois" ? "selected" : ""} data-full-text="Illinois">Illinois</option>
                    <option value="15" ${value?.state === "Indiana" ? "selected" : ""} data-full-text="Indiana">Indiana</option>
                    <option value="16" ${value?.state === "Iowa" ? "selected" : ""} data-full-text="Iowa">Iowa</option>
                    <option value="17" ${value?.state === "Kansas" ? "selected" : ""} data-full-text="Kansas">Kansas</option>
                    <option value="18" ${value?.state === "Kentucky" ? "selected" : ""} data-full-text="Kentucky">Kentucky</option>
                    <option value="19" ${value?.state === "Louisiana" ? "selected" : ""} data-full-text="Louisiana">Louisiana</option>
                    <option value="20" ${value?.state === "Maine" ? "selected" : ""} data-full-text="Maine">Maine</option>
                    <option value="21" ${value?.state === "Maryland" ? "selected" : ""} data-full-text="Maryland">Maryland</option>
                    <option value="22" ${value?.state === "Massachusetts" ? "selected" : ""} data-full-text="Massachusetts">Massachusetts</option>
                    <option value="23" ${value?.state === "Michigan" ? "selected" : ""} data-full-text="Michigan">Michigan</option>
                    <option value="24" ${value?.state === "Minnesota" ? "selected" : ""} data-full-text="Minnesota">Minnesota</option>
                    <option value="25" ${value?.state === "Mississippi" ? "selected" : ""} data-full-text="Mississippi">Mississippi</option>
                    <option value="26" ${value?.state === "Missouri" ? "selected" : ""} data-full-text="Missouri">Missouri</option>
                    <option value="27" ${value?.state === "Montana" ? "selected" : ""} data-full-text="Montana">Montana</option>
                    <option value="28" ${value?.state === "Nebraska" ? "selected" : ""} data-full-text="Nebraska">Nebraska</option>
                    <option value="29" ${value?.state === "Nevada" ? "selected" : ""} data-full-text="Nevada">Nevada</option>
                    <option value="30" ${value?.state === "New Hampshire" ? "selected" : ""} data-full-text="New Hampshire">New Hampshire</option>
                    <option value="31" ${value?.state === "New Jersey" ? "selected" : ""} data-full-text="New Jersey">New Jersey</option>
                    <option value="32" ${value?.state === "New Mexico" ? "selected" : ""} data-full-text="New Mexico">New Mexico</option>
                    <option value="33" ${value?.state === "New York" ? "selected" : ""} data-full-text="New York">New York</option>
                    <option value="34" ${value?.state === "North Carolina" ? "selected" : ""} data-full-text="North Carolina">North Carolina</option>
                    <option value="35" ${value?.state === "North Dakota" ? "selected" : ""} data-full-text="North Dakota">North Dakota</option>
                    <option value="36" ${value?.state === "Ohio" ? "selected" : ""} data-full-text="Ohio">Ohio</option>
                    <option value="37" ${value?.state === "Oklahoma" ? "selected" : ""} data-full-text="Oklahoma">Oklahoma</option>
                    <option value="38" ${value?.state === "Oregon" ? "selected" : ""} data-full-text="Oregon">Oregon</option>
                    <option value="39" ${value?.state === "Pennsylvania" ? "selected" : ""} data-full-text="Pennsylvania">Pennsylvania</option>
                    <option value="40" ${value?.state === "Rhode Island" ? "selected" : ""} data-full-text="Rhode Island">Rhode Island</option>
                    <option value="41" ${value?.state === "South Carolina" ? "selected" : ""} data-full-text="South Carolina">South Carolina</option>
                    <option value="42" ${value?.state === "South Dakota" ? "selected" : ""} data-full-text="South Dakota">South Dakota</option>
                    <option value="43" ${value?.state === "Tennessee" ? "selected" : ""} data-full-text="Tennessee">Tennessee</option>
                    <option value="44" ${value?.state === "Texas" ? "selected" : ""} data-full-text="Texas">Texas</option>
                    <option value="45" ${value?.state === "Utah" ? "selected" : ""} data-full-text="Utah">Utah</option>
                    <option value="46" ${value?.state === "Vermont" ? "selected" : ""} data-full-text="Vermont">Vermont</option>
                    <option value="47" ${value?.state === "Virginia" ? "selected" : ""} data-full-text="Virginia">Virginia</option>
                    <option value="48" ${value?.state === "Washington" ? "selected" : ""} data-full-text="Washington">Washington</option>
                    <option value="49" ${value?.state === "West Virginia" ? "selected" : ""} data-full-text="West Virginia">West Virginia</option>
                    <option value="50" ${value?.state === "Wisconsin" ? "selected" : ""} data-full-text="Wisconsin">Wisconsin</option>
                    <option value="51" ${value?.state === "Wyoming" ? "selected" : ""} data-full-text="Wyoming">Wyoming</option>
                </select>
            </div>
            <div class="col-5 flex-grow-1 complex-value calendar-wrapper d-flex align-items-center border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                <input id="renewal_date-${uniqueId}T" type="text" class="to-date form-control w-100 border-0 p-0 datepicker h-100"
                    placeholder="Renewal Date" value="${value?.renewal_date || ""}">
            </div>
            <div class="filter2-dropdown col-5 flex-grow-1 complex-value dropdown filter-option">
                <div class="multi-select-container d-flex align-items-center border border-1 rounded-2 m-0 white-bg h-100"
                    id="mutli-selectContainer-${uniqueId}" data-label="Status" data-bs-toggle="dropdown"
                    aria-expanded="false" tabindex="0">
                        <input type="text" class="search-input" id="mutli-selectSearch-${uniqueId}" placeholder="Status"
                        autocomplete="off">
                </div>
                <ul class="dropdown-menu ${isSearchDisabled ? "search-disabled" : ''}" id="mutli-selectDropdown-${uniqueId}">
                ${multSelectList.map(val => `<li>
                        <label class="dropdown-item">
                            <input type="checkbox" class="form-check-input mutli-select-checkbox-${uniqueId} me-2"
                                data-value="${val}">${val}
                        </label>
                    </li>` ).join('')}
                </ul>
            </div>
            `;
        case "complex-business_licenses":
            return `
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-licenseName-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                    placeholder="License Name" value="${value?.license_name || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-city_or_county-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                    placeholder="City/County" value="${value?.city_or_county || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value calendar-wrapper d-flex align-items-center border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                <input id="reg_date-${uniqueId}T" type="text" class="to-date form-control w-100 border-0 p-0 datepicker h-100"
                    placeholder="Registration Date" value="${value?.registration_date || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-license_num-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                    placeholder="License Number" value="${value?.License_number || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value d-flex align-items-center border border-1 rounded shadow-sm m-0 white-bg px-3 py-2">
                <input id="complex-entityName-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                    placeholder="Entity Name" value="${value?.entity_name || ""}">
            </div>
            <div class="col-5 flex-grow-1 complex-value">
                <select id="complex-state-${uniqueId}" class="form-select custom-form-select" name="">
                    <option value="" disabled="" ${!value ? "selected" : ""} hidden="" data-full-text="State">State</option>
                    <option value="1" ${value?.state === "Alabama" ? "selected" : ""} data-full-text="Alabama">Alabama</option>
                    <option value="2" ${value?.state === "Alaska" ? "selected" : ""} data-full-text="Alaska">Alaska</option>
                    <option value="3" ${value?.state === "Arizona" ? "selected" : ""} data-full-text="Arizona">Arizona</option>
                    <option value="4" ${value?.state === "Arkansas" ? "selected" : ""} data-full-text="Arkansas">Arkansas</option>
                    <option value="5" ${value?.state === "California" ? "selected" : ""} data-full-text="California">California</option>
                    <option value="6" ${value?.state === "Colorado" ? "selected" : ""} data-full-text="Colorado">Colorado</option>
                    <option value="7" ${value?.state === "Connecticut" ? "selected" : ""} data-full-text="Connecticut">Connecticut</option>
                    <option value="8" ${value?.state === "Delaware" ? "selected" : ""} data-full-text="Delaware">Delaware</option>
                    <option value="9" ${value?.state === "District of Columbia" ? "selected" : ""} data-full-text="District of Columbia">District of Columbia</option>
                    <option value="10" ${value?.state === "Florida" ? "selected" : ""} data-full-text="Florida">Florida</option>
                    <option value="11" ${value?.state === "Georgia" ? "selected" : ""} data-full-text="Georgia">Georgia</option>
                    <option value="12" ${value?.state === "Hawaii" ? "selected" : ""} data-full-text="Hawaii">Hawaii</option>
                    <option value="13" ${value?.state === "Idaho" ? "selected" : ""} data-full-text="Idaho">Idaho</option>
                    <option value="14" ${value?.state === "Illinois" ? "selected" : ""} data-full-text="Illinois">Illinois</option>
                    <option value="15" ${value?.state === "Indiana" ? "selected" : ""} data-full-text="Indiana">Indiana</option>
                    <option value="16" ${value?.state === "Iowa" ? "selected" : ""} data-full-text="Iowa">Iowa</option>
                    <option value="17" ${value?.state === "Kansas" ? "selected" : ""} data-full-text="Kansas">Kansas</option>
                    <option value="18" ${value?.state === "Kentucky" ? "selected" : ""} data-full-text="Kentucky">Kentucky</option>
                    <option value="19" ${value?.state === "Louisiana" ? "selected" : ""} data-full-text="Louisiana">Louisiana</option>
                    <option value="20" ${value?.state === "Maine" ? "selected" : ""} data-full-text="Maine">Maine</option>
                    <option value="21" ${value?.state === "Maryland" ? "selected" : ""} data-full-text="Maryland">Maryland</option>
                    <option value="22" ${value?.state === "Massachusetts" ? "selected" : ""} data-full-text="Massachusetts">Massachusetts</option>
                    <option value="23" ${value?.state === "Michigan" ? "selected" : ""} data-full-text="Michigan">Michigan</option>
                    <option value="24" ${value?.state === "Minnesota" ? "selected" : ""} data-full-text="Minnesota">Minnesota</option>
                    <option value="25" ${value?.state === "Mississippi" ? "selected" : ""} data-full-text="Mississippi">Mississippi</option>
                    <option value="26" ${value?.state === "Missouri" ? "selected" : ""} data-full-text="Missouri">Missouri</option>
                    <option value="27" ${value?.state === "Montana" ? "selected" : ""} data-full-text="Montana">Montana</option>
                    <option value="28" ${value?.state === "Nebraska" ? "selected" : ""} data-full-text="Nebraska">Nebraska</option>
                    <option value="29" ${value?.state === "Nevada" ? "selected" : ""} data-full-text="Nevada">Nevada</option>
                    <option value="30" ${value?.state === "New Hampshire" ? "selected" : ""} data-full-text="New Hampshire">New Hampshire</option>
                    <option value="31" ${value?.state === "New Jersey" ? "selected" : ""} data-full-text="New Jersey">New Jersey</option>
                    <option value="32" ${value?.state === "New Mexico" ? "selected" : ""} data-full-text="New Mexico">New Mexico</option>
                    <option value="33" ${value?.state === "New York" ? "selected" : ""} data-full-text="New York">New York</option>
                    <option value="34" ${value?.state === "North Carolina" ? "selected" : ""} data-full-text="North Carolina">North Carolina</option>
                    <option value="35" ${value?.state === "North Dakota" ? "selected" : ""} data-full-text="North Dakota">North Dakota</option>
                    <option value="36" ${value?.state === "Ohio" ? "selected" : ""} data-full-text="Ohio">Ohio</option>
                    <option value="37" ${value?.state === "Oklahoma" ? "selected" : ""} data-full-text="Oklahoma">Oklahoma</option>
                    <option value="38" ${value?.state === "Oregon" ? "selected" : ""} data-full-text="Oregon">Oregon</option>
                    <option value="39" ${value?.state === "Pennsylvania" ? "selected" : ""} data-full-text="Pennsylvania">Pennsylvania</option>
                    <option value="40" ${value?.state === "Rhode Island" ? "selected" : ""} data-full-text="Rhode Island">Rhode Island</option>
                    <option value="41" ${value?.state === "South Carolina" ? "selected" : ""} data-full-text="South Carolina">South Carolina</option>
                    <option value="42" ${value?.state === "South Dakota" ? "selected" : ""} data-full-text="South Dakota">South Dakota</option>
                    <option value="43" ${value?.state === "Tennessee" ? "selected" : ""} data-full-text="Tennessee">Tennessee</option>
                    <option value="44" ${value?.state === "Texas" ? "selected" : ""} data-full-text="Texas">Texas</option>
                    <option value="45" ${value?.state === "Utah" ? "selected" : ""} data-full-text="Utah">Utah</option>
                    <option value="46" ${value?.state === "Vermont" ? "selected" : ""} data-full-text="Vermont">Vermont</option>
                    <option value="47" ${value?.state === "Virginia" ? "selected" : ""} data-full-text="Virginia">Virginia</option>
                    <option value="48" ${value?.state === "Washington" ? "selected" : ""} data-full-text="Washington">Washington</option>
                    <option value="49" ${value?.state === "West Virginia" ? "selected" : ""} data-full-text="West Virginia">West Virginia</option>
                    <option value="50" ${value?.state === "Wisconsin" ? "selected" : ""} data-full-text="Wisconsin">Wisconsin</option>
                    <option value="51" ${value?.state === "Wyoming" ? "selected" : ""} data-full-text="Wyoming">Wyoming</option>
                </select>
            </div>
            <div class="col-5 flex-grow-1 complex-value calendar-wrapper d-flex align-items-center border rounded-2 shadow-sm m-0 white-bg px-3 py-2">
                <input id="renewal_date-${uniqueId}T" type="text" class="to-date form-control w-100 border-0 p-0 datepicker h-100"
                    placeholder="Renewal Date" value="${value?.renewal_date || ""}">
            </div>
            <div class="filter2-dropdown col-5 flex-grow-1 complex-value dropdown filter-option">
                <div class="multi-select-container d-flex align-items-center border border-1 rounded-2 m-0 white-bg h-100"
                    id="mutli-selectContainer-${uniqueId}" data-label="Status" data-bs-toggle="dropdown"
                    aria-expanded="false" tabindex="0">
                        <input type="text" class="search-input" id="mutli-selectSearch-${uniqueId}" placeholder="Status"
                        autocomplete="off">
                </div>
                <ul class="dropdown-menu ${isSearchDisabled ? "search-disabled" : ''}" id="mutli-selectDropdown-${uniqueId}">
                ${multSelectList.map(val => `<li>
                        <label class="dropdown-item">
                            <input type="checkbox" class="form-check-input mutli-select-checkbox-${uniqueId} me-2"
                                data-value="${val}">${val}
                        </label>
                    </li>` ).join('')}
                </ul>
            </div>
            `;
        default:
            return `<div class="single-value d-flex align-items-center 
                        border border-1 rounded shadow-sm m-0 white-bg px-3 py-2 h-100">
                        <input id="single-value-${uniqueId}" type="text" class="border-0 p-0 w-100"
                            placeholder="Value" value="${value || ""}">
                    </div>`;
    }
}

$(function () {

    setupMultiSelect("viewContainer", "viewDropdown", "viewSearch", "view-checkbox");
    setupMultiSelect("viewContainer-entity", "viewDropdown-entity", "viewSearch-entity", "view-checkbox-entity");
    setupMultiSelect("viewContainer-order", "viewDropdown-order", "viewSearch-order", "view-checkbox-order");


    $(document).on('click', '.dropdown-item', function (e) {

        const item = $(this);
        const selectedText = item.find('.item-name').text().trim();
        const selectedkey = item.data("key");

        const dropdown = item.closest('.dropdown.report-filter');
        const parent = dropdown.closest(".filter-grid");

        selectDropdownItem(dropdown, selectedkey)

        // Property Dropdown Selected

        if (dropdown.hasClass('property-filter')) {

            configureOperators(parent, selectedkey, typeBasedOnField, operatorsBasedOnType, optionsByField)
        }

        // Operator DropDown Selected

        if (dropdown.hasClass('operator-filter')) {
            const propertyKey = parent
                .find(
                    '.property-filter [data-bs-toggle="dropdown"]'
                )
                .attr('data-selected');

            if (!propertyKey) {
                return;
            }

            renderFilterValueUI(parent, selectedkey, propertyKey, typeBasedOnField, operatorsBasedOnType, optionsByField)
        }
    });

    $(document)
        .on('shown.bs.dropdown', '.dropdown.report-filter', function () {
            const dropdown = $(this);
            const search = dropdown.find('.dropdown-search-input');

            if (!search.length) return;
            const items = dropdown.find('.dropdown-item');

            search
                .val('')
                .on('input.dropdownSearch', function () {
                    const term = $(this).val().trim().toLowerCase();

                    items.each(function () {
                        const text = $(this).find('.item-name').text().trim().toLowerCase();

                        $(this).toggle(text.includes(term));
                    });
                });
        })
        .on('hidden.bs.dropdown', '.dropdown.report-filter', function () {
            const dropdown = $(this);
            const search = dropdown.find('.dropdown-search-input');

            if (!search.length) return;

            // Reset search
            search
                .off('.dropdownSearch')
                .val('');

            // Show all items again
            dropdown.find('.dropdown-item').show();
        });


    $('.add-filter').on('click', function () {

        const parent = $(this).parent();
        const filterSection = parent.find('.filterSection');
        const filterTemplate = parent.find('.filter-template')
            .clone()
            .removeClass('d-none filter-template').hide();

        filterSection.append(filterTemplate);

        filterTemplate.fadeIn(200);
    });

    $(document).on('click', '.remove-filter', function () {
        const filter = $(this).closest('.filter-grid');
        const filters = $(this).closest('.filterSection').find('.filter-grid');

        // Keeping at least one filter
        if (filters.length > 1) {
            filter.fadeOut(200, function () {
                $(this).remove();
            });
        }
    });
})

function selectDropdownItem(dropdown, key) {
    const item = dropdown.find(
        `.dropdown-item[data-key="${key}"]`
    );

    if (!item.length) {
        return null;
    }

    const selectedText = item
        .find('.item-name')
        .text()
        .trim();

    dropdown
        .find('.dropdown-item')
        .removeClass('selected');

    item.addClass('selected');

    dropdown
        .find('[data-bs-toggle="dropdown"]')
        .text(selectedText)
        .attr('data-selected', key);

    return item;
}


function configureOperators(parent, propertyKey, typeBasedOnField, operatorsBasedOnType, optionsByField = null, selectedOperatorKey = null, value = null) {
    const fieldType = typeBasedOnField[propertyKey]
    const config = operatorsBasedOnType[fieldType];
    console.log(config, fieldType)
    if (!config) return;

    const operatorDropdown = parent.find('.operator-filter');
    // default select operator dropdown
    const operatorDropDownItem = operatorDropdown.find('.dropdown-item');

    let defaultOperatorKey = selectedOperatorKey;

    operatorDropDownItem
        .removeClass('selected')
        .each(function (idx) {
            const operatorKey = $(this).data('key');
            const isMatch = config.includes(operatorKey)

            $(this)
                .toggle(isMatch);
        });

    if (
        !defaultOperatorKey ||
        !config.includes(defaultOperatorKey)
    ) {
        defaultOperatorKey = config[0];
    }

    if (!defaultOperatorKey) {
        return null;
    }

    const selectedItem = selectDropdownItem(
        operatorDropdown,
        defaultOperatorKey
    );

    console.log(selectedItem, defaultOperatorKey)
    if (!selectedItem) {
        return;
    }

    // IMPORTANT:
    // This replaces the old .trigger('click')
    renderFilterValueUI(
        parent,
        defaultOperatorKey,
        propertyKey,
        typeBasedOnField,
        operatorsBasedOnType,
        optionsByField,
        value
    );
}

function renderFilterValueUI(parent, operatorKey, propertyKey, typeBasedOnField, operatorsBasedOnType, optionsByField, value = null) {

    const uniqueId = generateId();
    const valueSection = parent.find('.report-filter-value');

    valueSection
        .removeClass('row g-0 gap-2')
        .empty();

    let propertyType = typeBasedOnField[propertyKey];
    console.log(propertyType, propertyKey)

    if (!propertyType) {
        return;
    }

    if (propertyType === "address") {
        valueSection.html(getDynamicValueField("address", uniqueId, [], value));
    }
    else if (propertyType === "date") {
        valueSection.html(getDynamicValueField(operatorKey === 'between' ? 'date-range' : 'single-date', uniqueId, [], value));
        initializeFilterDatePicker(valueSection.find('.datepicker'));
    }
    else if (propertyType === 'dropdown') {
        let field = propertyKey.toLowerCase().includes("state") ? "state" : propertyKey;
        const multiSelectList = optionsByField[propertyKey] || [];
        valueSection.html(getDynamicValueField('mutli-select', uniqueId, multiSelectList, value));
        setupMultiSelect(`mutli-selectContainer-${uniqueId}`, `mutli-selectDropdown-${uniqueId}`, `mutli-selectSearch-${uniqueId}`, `mutli-select-checkbox-${uniqueId}`, "", value || multiSelectList.slice(0, 3));
    }
    else if (propertyType === 'complex') {
        valueSection.addClass('row g-0 gap-2');
        const multiSelectList = optionsByField[propertyKey] || [];
        valueSection.html(getDynamicValueField(`complex-${propertyKey}`, uniqueId, multiSelectList, value));
        initializeFilterDatePicker(valueSection.find('.datepicker'));
        setupMultiSelect(`mutli-selectContainer-${uniqueId}`, `mutli-selectDropdown-${uniqueId}`, `mutli-selectSearch-${uniqueId}`, `mutli-select-checkbox-${uniqueId}`, "", value?.data || []);
    } else {
        valueSection.html(getDynamicValueField(operatorKey === 'between' ? 'value-range' : 'single-value', uniqueId, [], value));
    }
}

function applyPreSelectFilter(parent, propertyKey, operatorKey, value = null, typeBasedOnField = [], operatorsBasedOnType = [], optionsByField = []) {

    selectDropdownItem(
        parent.find('.property-filter'),
        propertyKey
    );

    // Configure operator + render value
    configureOperators(parent, propertyKey, typeBasedOnField, operatorsBasedOnType, optionsByField, operatorKey, value)
}

//drag drop
$(function () {
    let draggedItem = null;

    $(document).on('dragstart', '.drag_container .drag-item', function (ev) {
        draggedItem = this;
        $(this).addClass("dragging")
    })

    $(document).on('dragend', '.drag_container .drag-item', function (ev) {
        $(this)
            .removeClass("dragging dragplaceholder")
            .css({
                transition: '',
                transform: ''
            });
        draggedItem = null;
    })


    //Reorder
    $(document).on('dragover', '.drag_container .drag-item', function (ev) {
        ev.preventDefault();

        if (!draggedItem || draggedItem === this) return;

        const targetItem = this;
        const targetEl = $(targetItem);

        let rect = targetItem.getBoundingClientRect();
        let midX = rect.left + rect.width / 2;
        let before = ev.originalEvent.clientX < midX;


        if (before && draggedItem.nextElementSibling === targetItem) return;
        if (!before && draggedItem.previousElementSibling === targetItem) return;

        $(draggedItem).removeClass('dragging').addClass('dragplaceholder');

        animateMove($(draggedItem), targetEl, before);
    });


    $(document).on('dragover drop', '.drag_container', function (ev) {
        ev.preventDefault();
    });

    // $(document).on('focusin', '.drag_container .drag-item', function () {
    //     $(this).addClass('dragging');
    // });

    // $(document).on('focusout', '.drag_container .drag-item', function () {
    //     $(this)
    //         .removeClass('dragging')
    //         .css({
    //             transition: '',
    //             transform: ''
    //         });
    // });
    // $(document).on('keydown', '.drag_container .drag-item', function (ev) {

    //     let current = $(this);

    //     if (ev.key === "ArrowLeft") {

    //         ev.preventDefault();

    //         let prev = current.prev(".drag-item");

    //         if (!prev.length) return;

    //         animateMove(current, prev, true);

    //         current.focus();
    //     }

    //     if (ev.key === "ArrowRight") {

    //         ev.preventDefault();

    //         let next = current.next(".drag-item");

    //         if (!next.length) return;

    //         animateMove(current, next, false);

    //         current.focus();
    //     }

    // });

    function animateMove($dragged, $target, before) {

        const items = $dragged.parent().find(".drag-item");

        const oldPos = [];

        items.each(function () {
            oldPos.push(this.getBoundingClientRect().left);
        });

        if (before) {
            $target.before($dragged);
        } else {
            $target.after($dragged);
        }

        items.each(function (i) {

            const dx = oldPos[i] - this.getBoundingClientRect().left;

            if (!dx) return;

            this.style.transition = "none";
            this.style.transform = `translateX(${dx}px)`;
        });

        requestAnimationFrame(() => {

            items.each(function () {

                this.style.transition = "transform .2s ease";
                this.style.transform = "";

                this.addEventListener("transitionend", function handler() {
                    this.style.transition = "";
                    this.style.transform = "";
                    this.removeEventListener("transitionend", handler);
                });

            });

        });

    }
})


$(function () {
    $(document).on('click keydown', '.remove-column', function (ev) {

        if (ev.type === "keydown" && ev.key !== " " && ev.key !== "Enter") {
            return;
        }

        ev.preventDefault();

        let dragItem = $(this).closest('.drag-item');
        let drag_container = $(this).closest('.column_section').find('.drag_container');

        dragItem.prop('draggable', false);

        drag_container.after(dragItem)

    })

    $(document).on('click keydown', '.add-column', function (ev) {

        if (ev.type === "keydown" && ev.key !== " " && ev.key !== "Enter") {
            return;
        }
        ev.preventDefault();

        let dragItem = $(this).closest('.drag-item');
        let dragContainer = $(this).closest('.column_section').find('.drag_container');

        dragItem.prop('draggable', true);

        dragContainer.append(dragItem)

    })
})


$(function () {

    //function to render tags
    function renderTagsOnRow(tagdata, maxTag = 4) {
        const tagWrapper = document.createElement("div");
        tagWrapper.className = "d-flex gap-1 align-items-center d-tag-wrapper";
        tagWrapper.style.whiteSpace = "nowrap";
        tagWrapper.style.overflow = "hidden";

        tagdata.forEach((value, index) => {
            const span = document.createElement("span");
            span.className = "badge d-tag";
            span.style.backgroundColor = value.tagColor;
            span.style.color = value.textColor;
            span.innerText = value.tagName;
            tagWrapper.appendChild(span);
        })

        // +N placeholder (keeping empty for now will alter while table draws)

        const span = document.createElement("span");
        span.innerHTML = `
        <span class="badge text-black d-tag-more d-none" style="background-color:#E6E8EC;"></span>
      `;
        tagWrapper.appendChild(span);

        return tagWrapper.outerHTML;
    }

    function applyTagOverflow(isTableScrollable = false, row = '') {

        const tagWrappers = row ? $(row).find('td .d-tag-wrapper') : $('.d-tag-wrapper')

        tagWrappers.each(function () {
            const wrapper = $(this);
            const td = wrapper.closest('td');

            const tags = wrapper.find('.d-tag');
            const moreBadge = wrapper.find('.d-tag-more');

            const colIndex = td[0].cellIndex;

            const parent = isTableScrollable ? td.closest('.dataTables_scroll') : td.closest('.dataTable');

            const th = isTableScrollable ? parent.find('.dataTables_scrollHeadInner table thead th').eq(colIndex) : parent.find('thead th').eq(colIndex);

            let usedWidth = 0;
            let hiddenCount = 0;

            tags.css('display', 'inline-block');
            moreBadge.addClass('d-none').text("");

            const colWidth = th.width() - 50;

            tags.each(function () {
                let tag = $(this);

                let tagWidth = tag.outerWidth(true);

                if (usedWidth + tagWidth > colWidth) {
                    tag.css('display', 'none');
                    hiddenCount++;
                } else {
                    usedWidth += tagWidth;
                }
            });

            if (hiddenCount > 0) {
                moreBadge.text('+' + hiddenCount).removeClass('d-none')
            }
        })
    }

    function createDynamicTable(targetElement, tableclass, parentEl, selector) {
        var columns = [];

        const dragContainer = $(parentEl).find('.drag_container');

        dragContainer.find(selector).each(function () {
            columns.push({
                title: $(this).text().replace(/\s+/g, ' ').trim(),
                data: $(this).data("key"),
                ...($(this).data("width") && { width: $(this).data("width") }),
                ...($(this).data("key") === "status" && {
                    render: function (data, type, row) {
                        return `<span class="badge badge-${row.status.class}">${row.status.label}</span>`
                    },
                }),
                ...($(this).data('key') === "tags" && {
                    render: function (data, type, row) {
                        return renderTagsOnRow(data)
                    }
                }),
                ...($(this).data("key") === "director" && {
                    render: function (data, type, row) {
                        return data.length < 5 ?
                            `<div class="d-flex flex-column">
                                ${data.map(item => `<span>${item}</span>`).join("")}
                            </div>`
                            :
                            `<div class="access-wrapper w-100">
                                <div class="d-flex flex-column access-truncate">
                                    ${data.slice(0, 5).map(item => `<span>${item}</span>`).join("")}
                                </div>
                                <div class="access-tooltip d-flex flex-column">
                                    ${data.map(item => `<span>${item}</span>`).join("")}
                                </div>
                            </div>`;
                    },
                })
            });
        });

        const tableOptions = {
            ajax: {
                url: "data5.json",
                dataSrc: 'reporting_raw_data',
            },
            language: {
                processing: '<div  role="status"> </div>',
                emptyTable: '<p class="emptytabledata">No Records Available</p>'
            },
            scrollX: true,
            scrollY: false,
            columns: columns,
            order: [],
            autoWidth: false,
            lengthChange: false,  // Removed pagination
            paging: false,  // Disable pagination
            info: false,
        }

        const table = $(targetElement).find(tableclass);

        if ($.fn.DataTable.isDataTable(table)) {
            table.DataTable().destroy();
            table.empty();
        }

        return table.DataTable(tableOptions);
    }

    const savedFilters = {

        "registration": [
            {
                "property": "entity_name",
                "type": "text",
                "operator": "equals",
                "value": "AIC Capital VV Manager, Corp."
            },
            {
                "property": "state",
                "type": "dropdown",
                "operator": "one_of",
                "value": ["Massachusetts", "Arizona", "Alabama"]
            }
        ],
        "entity": [
            {
                "property": "registrations",
                "operator": "includes",
                "type": "complex",
                "value": {
                    "state": "Arizona",
                    "formation_type": "Foreign",
                    "data": ["In Good Standing"]
                }
            },
            {
                "property": "director",
                "operator": "includes",
                "type": "complex",
                "value": {
                    "name": "Chrish Seib",
                    "email": "chris@xyz.com",
                    "start": "07/01/2024",
                    "end": "",
                    "data": ["CTO"]
                }
            }
        ],
        "order": [
            {
                "property": "entity_name",
                "operator": "equals",
                "type": "text",
                "value": "AIC Capital VV Manager, Corp."
            },
            {
                "property": "group",
                "operator": "one_of",
                "type": "dropdown",
                "value": ["Technology Partners"]
            }
        ],
    }



    $('.toggleSection').css('display', 'none');

    $(document).on("click", ".new-report, .view-report, .edit-report, .copy-report, .generate-report", function () {
        const element = $(this);

        const reportNav = element.closest(".reportCreationNav");

        const targetElement = element.data('target');

        const target = $(targetElement);

        reportNav.fadeOut(50)


        const tooltip = bootstrap.Tooltip.getInstance(element);
        if (tooltip) {
            tooltip.dispose();
        }
        target.fadeIn()

        if (element.hasClass('new-report')) return;

        const charts_wrapper = target.find('.charts_wrapper:visible');

        if (charts_wrapper.length) {
            renderCharts(charts_wrapper);
        }

        let filterKey = target.data('filter');


        let table = '';


        if (element.hasClass('generate-report')) {
            table = createDynamicTable(targetElement, '.reports_table', element.closest('.reportCreateSection'), '.columns_text');

            $('html, body').animate({ scrollTop: $(targetElement).offset().top }, 500);
        } else {

            savedFilters[filterKey].forEach((filter, index) => {
                let parent = $(targetElement).find('.filter-grid').not('.filter-template').eq(index);
                applyPreSelectFilter(parent, filter.property, filter.operator, filter.value, typeBasedOnField, operatorsBasedOnType, optionsByField);
            });

            if (element.hasClass('view-report')) {

                target.find('.accordion-collapse').each(function () {
                    if ($(this).find('.charts_wrapper').length === 0) {
                        $(this).collapse('hide');
                    }
                });
            } else {

                target.find('.accordion-collapse').collapse('show');
            }

            $('html, body').animate({ scrollTop: 0 }, 300);
            table = createDynamicTable(targetElement, '.reports_table', targetElement, '.columns_text');
        }

        table.off('draw.dt.tagOverflow').on('draw.dt.tagOverflow', function () {
            applyTagOverflow(true);
        });

        $(window)
            .off('resize.dataTableAdjust')
            .on('resize.dataTableAdjust', function () {
                table.columns.adjust().draw();
            });

    });

    const chartDatas = {
        entity_type: [
            ['Entity Type', 'Count', { role: 'style' }],
            ["LLC", 5, "#D85A30"],
            ["LLP", 10, "#E47755"],
            ["INC", 5, "#EE9478"],
            ["CORP", 1, "#F5B29D"],
            ["PLC", 4, "#FBD7CB"]
        ],

        state: [
            ['State', 'Percentage', { role: 'style' }],
            ['CA', 32, '#E73B18'],
            ['TX', 24, '#FFB60C'],
            ['NY', 18, '#00B2EB'],
            ['FL', 12, '#00BA70'],
            ['IL', 8, '#F9C6B8']
        ],
        status: [
            ["Status", "Count", { role: 'style' }],
            ["In Good Standing", 15, '#00BA70'],
            ["Not Good Standing", 8, '#E73B18'],
            ["Inactive", 3, '#8690A0'],
            ["Unknown", 5, '#1a4d9e'],
        ],
        "order_status": [
            ["Status", "Count", { role: 'style' }],
            ["In Process", 5, '#4744D1'],
            ["Sent To State", 4, '#00B2EB'],
            ["Recently Completed", 5, "#00BA70"],
        ],
        "payment_status": [
            ["Status", "Count", { role: 'style' }],
            ["In Process", 5, '#ff7a47'],
            ["Paid", 4, '#ffa600'],
        ],
        "group": [
            ["Group", "Count", { role: 'style' }, { role: 'tooltip' }],
            ["Adept HR", 1, '#FF1744', "Adept HR"],
            ["Burkhalter Kessler Clement & George LLP", 1, '#00E676', "Burkhalter Kessler Clement & George LLP"],
            ["Christopher Law Group, Inc.", 1, '#FFD600', "Christopher Law Group, Inc."],
            ["SAN JOAQUIN ACCOUNTING", 1, '#651FFF', "SAN JOAQUIN ACCOUNTING"],
            ["Convey Health Solutions", 1, '#00B8D4', "Convey Health Solutions"],
        ],

    };


    google.charts.load("current", {
        packages: ["corechart"]
    });

    let isChartsReady = false;

    google.charts.setOnLoadCallback(() => {
        initChartBoxes();
        isChartsReady = true;
    });


    function initChartBoxes() {
        $(".chart-box").each(function () {
            const box = $(this);
            const activeBtn = box.find(".chart-btn.active");

            box.data(
                "chartType",
                activeBtn.data("type") || "bar"
            );
        });
    }


    function getBaseOptions(data) {
        return {
            backgroundColor: "transparent",
            tooltip: {
                trigger: "none"
            },
            height: Math.max(200, data.getNumberOfRows() * 50),
            animation: {
                startup: true,
                duration: 1000,
                easing: 'out'
            },
            fontName: "Sora",
            fontSize: "11",
            legend: "none"
        };
    }


    function drawChart(box, chartDatas) {

        const type = box.data("chartType");
        const selectedValue = box.find(".field-select").val() || "entity_type";

        const chartData = chartDatas[selectedValue];

        if (!chartData) return;


        const data = google.visualization.arrayToDataTable(chartData);

        const container = box.find(".chart-container .chart")[0];
        const pieLegendBox = box.find(".pie-legend");

        if (pieLegendBox.length) {
            pieLegendBox.remove()
        }

        let options = getBaseOptions(data);
        let chart;

        let hasTooltip = Array.from(
            { length: data.getNumberOfColumns() },
            (_, index) => data.getColumnRole(index)
        ).includes('tooltip');


        switch (type) {

            case "pie":

                options = {
                    ...options,
                    colors: chartData.slice(1).map(row => row[2]),
                    pieHole: 0.55,
                    pieSliceText: "none",
                    pieSliceBorderColor: "#fff",
                    chartArea: {
                        width: '80%',
                        height: '80%'
                    }
                };

                const pieLegendBox = $('<div class="pie-legend"></div>');

                chartData.slice(1).forEach((item, index) => {

                    const total = chartData
                        .slice(1)
                        .reduce((sum, row) => sum + row[1], 0);


                    const percentage = Math.round((item[1] / total) * 100);

                    pieLegendBox.append(`
                        <div class="legend-item" data-index="${index}">
                            <span 
                                class="legend-color"
                                style="background:${item[2]}"
                            ></span>

                            <span class="legend-label">
                                ${item[0]}-${percentage}%
                            </span>
                        </div>
                    `);

                });

                $(container).after(pieLegendBox);

                chart = new google.visualization.PieChart(container);

                google.visualization.events.removeAllListeners(chart);
                break;


            case "line":
                options = {
                    ...options,
                    ...(hasTooltip && {
                        tooltip: {
                            trigger: 'focus'
                        }
                    })
                };
                chart = new google.visualization.LineChart(container);
                break;


            default:

                options = {
                    ...options,
                    chartArea: {
                        left: 100
                    },
                    ...(hasTooltip && {
                        tooltip: {
                            trigger: 'focus'
                        }
                    })
                };

                chart = new google.visualization.BarChart(container);
        }


        chart.draw(data, options);

        google.visualization.events.addListener(chart, "select", function () {

            let pieLegendBox = box.find('.pie-legend');

            if (!pieLegendBox.length) return;

            pieLegendBox.find(".legend-item").removeClass("active");

            const selection = chart.getSelection();

            if (selection.length) {
                pieLegendBox
                    .find(`.legend-item[data-index="${selection[0].row}"]`)
                    .addClass("active");
            }

        });
    }


    function renderCharts(section) {
        if (!isChartsReady) return;

        section.find(".chart-box").each(function () {
            drawChart($(this), chartDatas);
        });
    }

    // $(document).on('shown.bs.collapse', '.accordion-collapse', function () {
    //     const wrapper = $(this).find('.charts_wrapper');

    //     // This accordion doesn't contain charts
    //     if (!wrapper.length) {
    //         return;
    //     }

    //     if (wrapper.data('rendered')) {
    //         return;
    //     }

    //     renderCharts(wrapper);
    //     wrapper.data('rendered', true);
    // });


    $(".chart-btn").on("click", function () {

        const btn = $(this);
        const box = btn.closest(".chart-box");

        box.find(".chart-btn").removeClass("active");
        btn.addClass("active");

        box.data(
            "chartType",
            btn.data("type")
        );

        drawChart(box, chartDatas);
    });


    $(".field-select").on("change", function () {

        drawChart(
            $(this).closest(".chart-box"), chartDatas
        );

    });


    $(window).on("resize", function () {
        const charts_wrapper = $(".charts_wrapper:visible");

        if (!charts_wrapper.length) return;
        renderCharts(charts_wrapper);
    });

    $(document).on("click", '.save-report-btn, .report-back-btn', function () {

        let reportSection = $('.reportSection:visible');

        if ($(this).hasClass('report-back-btn')) {
            reportSection = $(this).closest('.reportSection');
        }

        reportSection.find('.toggleSection').fadeOut();

        reportSection.find('.reportCreationNav').fadeIn();

        $('html, body').animate({ scrollTop: 0 }, 300);

    });
});
