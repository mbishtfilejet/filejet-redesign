$(function () {
  $('#compliance a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('#entity-listing').DataTable({
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

  $('.nav-item a').on('click', function () {
    let dataId = $(this).attr('data-id');
    if (dataId === 'grid-view' || dataId === 'list-view') {
      $('.tab-content-wrapper').css('display', 'none');
      $('#' + dataId).css('display', 'block');
      if (dataId === 'grid-view') {
        $('.tab-listing-grid').addClass('active');
        $('.tab-listing-list').removeClass('active');
      } else {
        $('.tab-listing-grid').removeClass('active');
        $('.tab-listing-list').addClass('active');
      }
    }
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
});