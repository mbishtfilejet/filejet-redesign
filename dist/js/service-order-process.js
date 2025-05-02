// Select payment method start
$(document).ready(function() {
  // Hide all sections except "Account Default" on page load
  $('#account-default-content').show();
  $('#on-file-content, #add-new-content').hide();
  $('#ach-form, #credit-card-form').hide(); // Hide ACH & Credit Card forms initially

  $('#pricing-method').change(function() {
      var selectedValue = $(this).val();

      // Hide all content sections
      $('#account-default-content, #on-file-content, #add-new-content').hide();
      $('#ach-form, #credit-card-form').hide(); // Ensure ACH & Credit Card sections are also hidden

      // Show the selected section
      if (selectedValue === "account-default") {
          $('#account-default-content').show();
      } else if (selectedValue === "on-file") {
          $('#on-file-content').show();
      } else if (selectedValue === "add-new") {
          $('#add-new-content').show();

          // Reset checkboxes and show ACH form by default
          $('#ach').prop("checked", true);
          $('#credit-card').prop("checked", false);
          $('#ach-form').show();
          $('#credit-card-form').hide(); // Ensure Credit Card form is hidden by default
      }
  });

  // Toggle between ACH & Credit Card forms when "Add New" is selected
  $('#ach').on("change", function() {
      if (this.checked) {
          $('#credit-card').prop("checked", false); // Uncheck the other checkbox
          $('#ach-form').show();
          $('#credit-card-form').hide();
      }
  });

  $('#credit-card').on("change", function() {
      if (this.checked) {
          $('#ach').prop("checked", false); // Uncheck the other checkbox
          $('#ach-form').hide();
          $('#credit-card-form').show();
      }
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


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.datepicker').forEach(function (input) {
    input.addEventListener('click', function () {
      this.showPicker?.(); // Safely call if supported
    });
  });
});



  


