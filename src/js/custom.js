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

  $('#group-listing').DataTable({
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
        $('.nav-items').css({
          'opacity': '0',
          'visibility': 'hidden'
        });
      } else {
        $('.nav-items').css({
          'opacity': '1',
          'visibility': 'visible'
        });
      }
    }
  });
});