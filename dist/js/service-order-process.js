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
document.getElementById("addBtn").addEventListener("click", function () {
    let name = document.getElementById("groupName").value.trim();
    let email = document.getElementById("groupEmail").value.trim();
    

    if (name === "" || email === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Hide the input form and show the filled state
    document.querySelector(".fillingstate").style.display = "none";
    document.querySelector(".filledstate").style.display = "flex";

    // Fill in the user details
    document.querySelector(".filledstate .groupName").textContent = name;
    document.querySelector(".filledstate .groupEmail").textContent = email;
});
// Attach event listeners for edit and delete dynamically after the DOM loads
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".editUser").addEventListener("click", function () {
        // Show input fields again and hide filled state
        document.querySelector(".fillingstate").style.display = "block";
        document.querySelector(".filledstate").style.display = "none";

        // Populate input fields with existing values for editing
        document.getElementById("groupName").value = document.querySelector(".filledstate .groupName").textContent;
        document.getElementById("groupEmail").value = document.querySelector(".filledstate .groupEmail").textContent;
    });

    document.querySelector(".deleteUser").addEventListener("click", function () {
        // Show input fields and clear them
        document.querySelector(".fillingstate").style.display = "block";
        document.querySelector(".filledstate").style.display = "none";
        document.getElementById("groupName").value = "";
        document.getElementById("groupEmail").value = "";
    });
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



  

// add more button form
  $(document).ready(function() {
    // When the "Add" button is clicked
    $('#addButton').click(function() {
        // Toggle the visibility of the form
        $('#formContainer').toggle(); // Show or hide the form
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


// manager form individual 
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("individualaddBtn");
  const individualForm = document.getElementById("individualForm");
  const individualForm3 = document.getElementById("individualForm3");

  addButton.addEventListener("click", function () {
    // Hide individualForm
    individualForm.style.display = "none";

    // Show individualForm3
    individualForm3.style.display = "block";
  });
});


// Entity type professional corporatio
document.addEventListener('DOMContentLoaded', function () {
  // Select all elements with the class 'entityType-model'
  const entityTypeSelects = document.querySelectorAll('.entityType-model');

  entityTypeSelects.forEach(function (selectElement) {
    selectElement.addEventListener('change', function () {
      const selectedOptionText = selectElement.options[selectElement.selectedIndex].text;

      // Find the closest parent container (e.g., a form or fieldset)
      const parentContainer = selectElement.closest('.form-group') || document;

      // Select all elements with the class 'professional-specialty' within the parent container
      const specialtyFieldsets = parentContainer.querySelectorAll('.professional-specialty');

      specialtyFieldsets.forEach(function (fieldset) {
        if (selectedOptionText === 'Professional Corporation') {
          fieldset.style.display = 'block';
        } else {
          fieldset.style.display = 'none';
        }
      });
    });
  });
});

