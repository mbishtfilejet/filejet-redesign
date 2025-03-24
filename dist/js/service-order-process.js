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


// select payment method end



