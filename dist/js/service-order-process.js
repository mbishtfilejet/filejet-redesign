// Select payment method start
$(document).ready(function() {
  $('#pricing-method').change(function() {
      var selectedValue = $(this).val();

      // Hide all sections
      $('#account-default-content, #on-file-content, #add-new-content').hide();

      // Show the selected content
      if (selectedValue === "account-default") {
          $('#account-default-content').show();
      } else if (selectedValue === "on-file") {
          $('#on-file-content').show();
      } else if (selectedValue === "add-new") {
          $('#add-new-content').show();
      }
  });
});

// select payment method end