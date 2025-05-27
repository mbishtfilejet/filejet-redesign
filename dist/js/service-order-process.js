// Select payment method start
$(document).ready(function () {
  $('.payment-section').each(function () {
    const section = $(this);

    // Initial setup
    section.find('.on-file-content, .add-new-content, .ach-form, .credit-card-form').hide();

    section.find('.pricing-method').on('change', function () {
      const selected = $(this).val();
      section.find('.on-file-content, .add-new-content, .ach-form, .credit-card-form').hide();

      if (selected === 'account-default') {
        // No additional section shown
      } else if (selected === 'on-file') {
        section.find('.on-file-content').show();
      } else if (selected === 'add-new') {
        section.find('.add-new-content').show();
        section.find('.ach-option').prop('checked', true);
        section.find('.credit-option').prop('checked', false);
        section.find('.ach-form').show();
      }
    });

    section.find('.ach-option').on('change', function () {
      if ($(this).is(':checked')) {
        section.find('.credit-option').prop('checked', false);
        section.find('.ach-form').show();
        section.find('.credit-card-form').hide();
      }
    });

    section.find('.credit-option').on('change', function () {
      if ($(this).is(':checked')) {
        section.find('.ach-option').prop('checked', false);
        section.find('.credit-card-form').show();
        section.find('.ach-form').hide();
      }
    });
  });
});



// edit form start
document.addEventListener("DOMContentLoaded", () => {
  const fillingState = document.querySelector(".fillingstate");
  const filledState = document.querySelector(".filledstate");
  const newInviteFillingState = document.querySelector(".newinvitefillingstate");
  const addBtn = document.getElementById("inviteaddBtn");
  const updateBtn = document.getElementById("invitaeupdateBtn");
  const newInviteAddBtn = document.getElementById("newinviteaddBtn");

  // Helper function to create filled entry
  const createFilledEntry = (name, email) => {
    const container = document.createElement("div");
    container.className = "filled-user-entry";
    container.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <p class="groupName m-0">${name}</p>
          <p class="groupEmail m-0 mb-1 fw-normal">${email}</p>
          <p class="groupEmail m-0 fw-normal">Auto-added Address</p>
        </div>
        <div class="d-flex align-items-center">
          <span class="icon icon-new-edit me-3 editUser" style="cursor:pointer;"></span>
          <span class="icon icon-new-delete m-0 deleteUser" data-bs-toggle="modal" data-bs-target="#userDelete" data-toggle="tooltip" aria-label="DELETE" title="DELETE"  style="cursor:pointer;"></span>
        </div>
      </div>
      <hr class="entry-divider">
    `;
    return container;
  };

  // Update dividers after adding/removing entries
  const updateDividers = () => {
    const dividers = filledState.querySelectorAll(".entry-divider");
    dividers.forEach((hr, i) => hr.style.display = i === dividers.length - 1 ? "none" : "block");
  };

  // Add new entry (from filling state)
  const addEntry = (nameInput, emailInput, stateContainer) => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    if (!name || !email) return alert("Please fill in both fields.");
    
    filledState.querySelector(".inputsfilled").appendChild(createFilledEntry(name, email));
    nameInput.value = emailInput.value = "";
    stateContainer.style.display = "none";
    filledState.style.display = "flex";
    updateDividers();
  };

  addBtn.addEventListener("click", () => addEntry(document.getElementById("groupName"), document.getElementById("groupEmail"), fillingState));
  newInviteAddBtn.addEventListener("click", () => addEntry(document.getElementById("groupName2"), document.getElementById("groupEmail2"), newInviteFillingState));

  // Edit and delete users
  filledState.addEventListener("click", (e) => {
    const entry = e.target.closest(".filled-user-entry");
    if (e.target.classList.contains("editUser")) {
      document.getElementById("groupName").value = entry.querySelector(".groupName").textContent;
      document.getElementById("groupEmail").value = entry.querySelector(".groupEmail").textContent;
      fillingState.style.display = "block";
      filledState.style.display = "none";
      addBtn.classList.add("d-none");
      updateBtn.classList.remove("d-none");
      updateBtn.onclick = () => {
        entry.querySelector(".groupName").textContent = document.getElementById("groupName").value;
        entry.querySelector(".groupEmail").textContent = document.getElementById("groupEmail").value;
        fillingState.style.display = "none";
        filledState.style.display = "flex";
        addBtn.classList.remove("d-none");
        updateBtn.classList.add("d-none");
        document.getElementById("groupName").value = document.getElementById("groupEmail").value = "";
      };
    } else if (e.target.classList.contains("deleteUser")) {
      entry.remove();
      updateDividers();
    }
  });

  document.querySelector(".moreaddinvite").addEventListener("click", () => newInviteFillingState.style.display = "block");
});



// alert function start
document.addEventListener("DOMContentLoaded", function () {
    const entityInput = document.querySelector("#entityInput"); // Add an ID to your input field
    const alertBox = document.querySelector(".alert-warning");

    // Hide alert initially
    alertBox.style.display = "none";

    // Show alert when typing
    entityInput.addEventListener("input", function () {
        alertBox.style.display = "flex"; // Show alert
    });
});


// manager individual and corporate function function start
$(document).ready(function () {
  // Initially hide all forms
  $('.toggle-form').css('display', 'none');

  // Show the form that matches the checked radio
  $('.toggle-radio:checked').each(function() {
    var target = $(this).data('target');
    $('#' + target).css('display', 'block');
  });

  // On radio button change
  $('.toggle-radio').on('change', function () {
    var target = $(this).data('target');

    // First, hide all forms related to the same group
    var groupName = $(this).attr('name'); // Get radio group name
    $('input[name="' + groupName + '"]').each(function () {
      var relatedTarget = $(this).data('target');
      $('#' + relatedTarget).css('display', 'none');
    });

    // Then show the selected form
    $('#' + target).css('display', 'block');
  });
});



// enable disable form
function setupToggleForms(radioGroupNames) {
  radioGroupNames.forEach(name => {
    document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
      radio.addEventListener('change', function () {
        let groupSuffix = '';

        // Match the appropriate group suffix based on radio group name
        if (name.includes('registeredAgentStatus')) {
          groupSuffix = 'RegisteredAgent';
        } else if (name.includes('annualReport')) {
          groupSuffix = 'AnnualReport';
        }

        const enabledFormId = name.startsWith('add') ? `addenabledForm${groupSuffix}` : `enabledForm${groupSuffix}`;
        const disabledFormId = name.startsWith('add') ? `adddisabledForm${groupSuffix}` : `disabledForm${groupSuffix}`;
        const isEnabled = this.value === 'enabled';

        document.getElementById(enabledFormId).style.display = isEnabled ? 'block' : 'none';
        document.getElementById(disabledFormId).style.display = isEnabled ? 'none' : 'block';
      });
    });
  });
}

// Initialize the toggle functionality for all groups
setupToggleForms(['registeredAgentStatus', 'annualReport', 'addregisteredAgentStatus', 'addannualReport']);



// toggle between all checkbox start
 document.querySelectorAll('.single-check').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        document.querySelectorAll('.single-check').forEach(cb => {
          if (cb !== this) cb.checked = false;
        });
      }
    });
  });

 

// upload document start
  document.querySelectorAll('.upload-group').forEach(group => {
    const yes = group.querySelector('.yes-checkbox');
    const no = group.querySelector('.no-checkbox');
    const btn = group.closest('.mb-4').querySelector('.upload-btn');

    const toggle = () => {
      btn.style.display = yes.checked ? 'block' : 'none';
      if (yes.checked) no.checked = false;
    };

    yes.addEventListener('change', toggle);
    no.addEventListener('change', () => {
      if (no.checked) {
        yes.checked = false;
        btn.style.display = 'none';
      }
    });

    toggle(); // Run on load
  });


// table pagination remove
$(document).ready(function () {
  $('.usertable').each(function () {
    const $table = $(this);

    // Avoid reinitializing
    if (!$.fn.DataTable.isDataTable(this)) {
      $table.DataTable({
        paging: false,           // ✅ No pagination
        info: false,             // ✅ Hide info text
        searching: false,        // ✅ No search box
        ordering: true,          // ✅ Sorting enabled
        columnDefs: [
          { orderable: false, targets: 0 }  // ❌ First column not sortable
        ]
      });
    }
  });
});

  
  
//  radio active and iactive 
$(document).ready(function () {
  function updateAllRadioLabels() {
    $('input[type="radio"]').each(function () {
      var label = $('label[for="' + this.id + '"]');
      if ($(this).is(':checked')) {
        label.removeClass('inactive');
      } else {
        label.addClass('inactive');
      }
    });
  }

  // Call once on page load
  updateAllRadioLabels();

  // Update whenever any radio button changes
  $('input[type="radio"]').on('change', function () {
    updateAllRadioLabels();
  });
});

// datepicker start
function initializeDatePicker(selector) {
  $(selector).daterangepicker({
    singleDatePicker: true,
    autoUpdateInput: false,
    autoApply: true,
    parentEl: $('.calender-input'),
    applyButtonClasses: 'btn-info',
    drops: 'auto',
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'), 10)
  });

  $(selector).on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('MM/DD/YYYY'));
  });
}

$(function () {
  initializeDatePicker('.modaldatepicker');
});


// Entity type professional corporatio
document.addEventListener('DOMContentLoaded', function () {
  const containers = document.querySelectorAll('.entity-container');

  containers.forEach(function (container) {
    const entityTypeSelect = container.querySelector('.entityType-model');
    const specialtyFieldset = container.querySelector('.professional-specialty');

    entityTypeSelect.addEventListener('change', function () {
      const selectedOptionText = entityTypeSelect.options[entityTypeSelect.selectedIndex].text;
      if (selectedOptionText === 'Profit Corporation - Professional') {
        specialtyFieldset.style.display = 'block';
      } else {
        specialtyFieldset.style.display = 'none';
      }
    });
  });
});


// on file payment methos edit and delete
document.addEventListener("DOMContentLoaded", function () {
  // Handle Edit Click
  document.querySelectorAll(".icon-new-edit").forEach(function (editIcon) {
    editIcon.addEventListener("click", function () {
      const methodDiv = editIcon.closest(".payment-card").querySelector(".methodiv");
      if (methodDiv) {
        methodDiv.setAttribute("contenteditable", "true");
        methodDiv.focus();

        // Optional: Add a class to show it's being edited
        methodDiv.classList.add("editable");
      }
    });
  });

  // Handle Delete Click
  document.querySelectorAll(".icon-new-delete").forEach(function (deleteIcon) {
    deleteIcon.addEventListener("click", function () {
      const card = deleteIcon.closest(".payment-card");
      if (card && confirm("Are you sure you want to delete this payment method?")) {
        card.remove();
      }
    });
  });
});




// verfify account div
document.addEventListener('DOMContentLoaded', function () {
  const verifyButtons = document.querySelectorAll('.verifybtn');

  verifyButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const container = btn.closest('.container');
      const verifyDiv = container.querySelector('.verifyaccountDiv');
      if (verifyDiv) {
        verifyDiv.style.display = verifyDiv.style.display === 'none' ? 'block' : 'none'; // toggle
      }
    });
  });
});



// officer form start
document.addEventListener("DOMContentLoaded", function () {
  // Handle add officer button
  document.querySelectorAll(".officeraddBtn").forEach(button => {
    button.addEventListener("click", function () {
      const container = button.closest(".officeform");
      const fillingForm = container.querySelector(".innerofficerForm");
      const filledForm = container.querySelector(".officerForm3");

      if (fillingForm && filledForm) {
        fillingForm.style.display = "none";
        filledForm.style.display = "block";
      }

      const addBtn = container.querySelector(".officeraddBtn");
      const updateBtn = container.querySelector(".officerupdateBtn");
      if (addBtn && updateBtn) {
        addBtn.classList.remove("d-none");
        updateBtn.classList.add("d-none");
      }
    });
  });

  // Handle edit officer button
  document.querySelectorAll(".editUser").forEach(editBtn => {
    editBtn.addEventListener("click", function () {
      const container = editBtn.closest(".officeform");
      const fillingForm = container.querySelector(".innerofficerForm");
      const filledForm = container.querySelector(".officerForm3");

      if (fillingForm && filledForm) {
        fillingForm.style.display = "block";
        filledForm.style.display = "none";
      }

      const addBtn = container.querySelector(".officeraddBtn");
      const updateBtn = container.querySelector(".officerupdateBtn");
      if (addBtn && updateBtn) {
        addBtn.classList.add("d-none");
        updateBtn.classList.remove("d-none");
      }

      fillingForm.scrollIntoView({ behavior: "smooth" });
    });
  });




  // Handle "More Add" officer button
  document.querySelectorAll(".moreadd").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const container = button.closest(".officeform");
      const newForm = container.querySelector(".newfillingstate");

      if (newForm) {
        newForm.classList.remove("d-none");
        newForm.style.display = "block";
        newForm.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});



// manager form start
document.addEventListener("DOMContentLoaded", function () {
  // Generic handler setup
  function setupFormHandlers({
    addBtnClass,
    updateBtnClass,
    formClass,
    filledFormClass,
    fillingStateClass,
    newFillingStateClass,
    moreAddBtnClass
  }) {
    // Handle Add Button
    document.querySelectorAll(`.${addBtnClass}`).forEach(button => {
      button.addEventListener("click", function () {
        const form = button.closest(`.${formClass}`);
        const fillingForm = form.querySelector(`.${fillingStateClass}`);
        const filledForm = form.nextElementSibling;

        if (fillingForm && filledForm && filledForm.classList.contains(filledFormClass)) {
          fillingForm.style.display = "none";
          filledForm.style.display = "block";
        }

        const updateBtn = form.querySelector(`.${updateBtnClass}`);
        if (button && updateBtn) {
          button.classList.remove("d-none");
          updateBtn.classList.add("d-none");
        }

        // ✅ Hide managercheckbox-div
        document.querySelectorAll(".managercheckbox-div").forEach(div => {
      div.style.display = "none";
       });
      });
    });

    // Handle Edit Button
    document.querySelectorAll(".editUser").forEach(editBtn => {
      editBtn.addEventListener("click", function () {
        const filledForm = editBtn.closest(`.${filledFormClass}`);
        const fillingForm = filledForm?.previousElementSibling;

        if (fillingForm && fillingForm.classList.contains(formClass)) {
          const fillingState = fillingForm.querySelector(`.${fillingStateClass}`);
          if (fillingState) fillingState.style.display = "block";
          filledForm.style.display = "none";

          const addBtn = fillingForm.querySelector(`.${addBtnClass}`);
          const updateBtn = fillingForm.querySelector(`.${updateBtnClass}`);
          if (addBtn && updateBtn) {
            addBtn.classList.add("d-none");
            updateBtn.classList.remove("d-none");
          }

          fillingForm.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Handle "More Add" Button
    document.querySelectorAll(`.${moreAddBtnClass}`).forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const filledForm = button.closest(`.${filledFormClass}`);
        const newForm = filledForm.querySelector(`.${newFillingStateClass}`);
        if (newForm) {
          newForm.classList.remove("d-none");
          newForm.style.display = "block";
          newForm.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Set up individual and corporate forms
  setupFormHandlers({
    addBtnClass: "individualaddBtn",
    updateBtnClass: "individualupdateBtn",
    formClass: "individualForm",
    filledFormClass: "individualForm3",
    fillingStateClass: "individualfillingstate",
    newFillingStateClass: "newindividualfillingstate",
    moreAddBtnClass: "moreaddindividual"
  });

  setupFormHandlers({
    addBtnClass: "corporateaddBtn",
    updateBtnClass: "corporateupdateBtn",
    formClass: "corporateForm",
    filledFormClass: "corporateForm3",
    fillingStateClass: "corporatefillingstate",
    newFillingStateClass: "newcorporatefillingstate",
    moreAddBtnClass: "moreaddcorporate"
  });
});




// foreign and home check
document.addEventListener('DOMContentLoaded', function () {
  const foreignCheck = document.getElementById('foreignCheck');
  const additionalEntity = document.querySelector('.additionalentity');
  const foreignHomeEntity = document.querySelector('.foreignhomeEntity');

  function toggleEntities() {
    if (foreignCheck.checked) {
      additionalEntity.style.display = 'none';
      foreignHomeEntity.style.display = 'block';
    } else {
      additionalEntity.style.display = 'block';
      foreignHomeEntity.style.display = 'none';
    }
  }

  foreignCheck.addEventListener('change', toggleEntities);

  // Initialize visibility on load
  toggleEntities();
});



 const fullNames = [
    "James Smith", "Mary Johnson", "John Williams", "Patricia Brown", "Robert Jones",
    "Jennifer Garcia", "Michael Miller", "Linda Davis", "William Rodriguez", "Elizabeth Martinez",
    "David Hernandez", "Barbara Lopez", "Richard Gonzalez", "Susan Wilson", "Joseph Anderson",
    "Jessica Thomas", "Thomas Taylor", "Sarah Moore", "Charles Jackson", "Karen Martin"
  ];

  document.querySelectorAll('.autocomplete-input').forEach(input => {
    const suggestions = input.nextElementSibling;

    input.addEventListener('input', () => {
      const val = input.value.toLowerCase().trim();
      if (!val) {
        suggestions.style.display = 'none';
        suggestions.innerHTML = '';
        return;
      }
      const filtered = fullNames.filter(name => name.toLowerCase().startsWith(val));
      if (filtered.length === 0) {
        suggestions.innerHTML = '<div class="no-result">No results found</div>';
      } else {
        suggestions.innerHTML = filtered.map(name => `<div class="item">${name}</div>`).join('');
      }
      suggestions.style.display = 'block';
    });

    suggestions.addEventListener('click', e => {
      if (e.target.classList.contains('item')) {
        input.value = e.target.textContent;
        suggestions.style.display = 'none';
      }
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('.autocomplete-wrapper')) {
        suggestions.style.display = 'none';
      }
    });
  });