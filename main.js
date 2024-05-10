$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();

  $('.progress-bar').each(function() {
    var width = $(this).attr('aria-valuenow');
    $(this).width(width + '%');
  });

  $('.btn-outline-secondary').on('click', function() {
    $(this).toggleClass('active');
  });
});
