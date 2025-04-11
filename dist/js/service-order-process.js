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

$(document).ready(function() {
  $('#addIndividual').on("change", function() {
      if (this.checked) {
          $('#addCompany').prop("checked", false); // Uncheck "Company"
      }
  });

  $('#addCompany').on("change", function() {
      if (this.checked) {
          $('#addIndividual').prop("checked", false); // Uncheck "Individual"
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
document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle the display of forms based on the selected radio button
    function toggleForms(event) {
      const targetFormId = event.target.getAttribute("data-target");
      const targetForm = document.getElementById(targetFormId);
  
      // Hide all forms within the same radio group
      const radioGroup = event.target.closest('.radio-group');
      const allForms = radioGroup.nextElementSibling.querySelectorAll('.toggle-form');
      allForms.forEach(form => {
        form.style.display = "none";
      });
  
      // Show the target form
      if (targetForm) {
        targetForm.style.display = "block";
      }
    }
  
    // Attach event listeners to all radio buttons with the class 'toggle-radio'
    const radioButtons = document.querySelectorAll(".toggle-radio");
    radioButtons.forEach(radio => {
      radio.addEventListener("change", toggleForms);
    });
  
    // Initialize the forms' display state
    radioButtons.forEach(radio => {
      if (radio.checked) {
        radio.dispatchEvent(new Event('change'));
      }
    });
  });
  




