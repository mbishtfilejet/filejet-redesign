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

  
});
