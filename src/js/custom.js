$(function () {
  $('#compliance a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('#entity-listing, #stake-all-listing, #active-table, #inactive-table, #find-a-user, #jurisdiction-list-table, #custom-list-table, #arizona-list-table').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('#overdue-table').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('#upcoming-table').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('#sumbitted-table').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('#setToState-table').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('#upToDate-table').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('#jurisdictions-listing').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('#partners-listing').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('#group-listing').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('#partners-name-listing').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('#group-entity-listing').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('#group-partner').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $('.data-table-listing').DataTable({
    "searching": false,
    "lengthChange": false,
    "pagingType": "simple"
  });

  $(document).on('click', '.view-change > a', function () {
    $('.view-change > a').removeClass('active');
    $(this).addClass('active');
    let dataId = $(this).attr('data-id');
    $(this).parents('.entity-card-content').find('.tab-content-wrapper').css('display', 'none');
    $('#'+ dataId).css('display', 'block');   
    $(this).parents('.entity-card-content').find('.tab-listing').removeClass('active');
    $('.'+ dataId).addClass('active');
  });

  $(document).on('click', '.view-change-entry > a', function () {
    $('.view-change-entry > a').removeClass('active');
    $(this).addClass('active');
    let dataId = $(this).attr('data-id');
    $('.tab-content-wrapper').css('display', 'none');
    $('#'+ dataId).css('display', 'block');
  });

  $(document).on('click', '.showAccordian', function(){
    $(this).parents('.form-check').next('.accordion').toggleClass('hide');
  });

  $("#datepicker").datepicker({
    dateFormat: "mm-dd-yy"
  });

  $("body").tooltip({ selector: '[data-toggle=tooltip]' });

  $('.btn-tab button').on('click', function(){
    $('.btn-tab button').removeClass('active');
    $(this).addClass('active');
    let dataID = $(this).attr('data-id');
    $('.btn-tab-content').css('display', 'none');
    $('#'+ dataID).css('display', 'block');
  });

  $('.entity-card').on('click', function(){
    $('.entity-card').removeClass('active');
    $(this).addClass('active');
    let dataId = $(this).attr('data-id');
    $('.entity-card-content').removeClass('active');
    $('#'+ dataId).addClass('active');
  });

  $(document).on('click', '.toggleSection', function(){
    $(this).parents('.step-section').addClass('collapse');
    $(this).parents('.step-section').next('.step-section').removeClass('collapse');
  });

  $('.open-folder').on('click', function(){
    let dataId = $(this).attr('data-id');
    $('.folder-level').css('display', 'none');
    $('#'+dataId).css('display', 'block');
  });
});

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}

