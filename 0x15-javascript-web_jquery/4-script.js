$(function () {
  $('div#toggle_header').on('click', function () {
    const header = $('header');
    const green = header.hasClass('green');
    const red = header.hasClass('red');

    if (green) {
      header.removeClass('green');
      header.addClass('red');
    } else if (red) {
      header.removeClass('red');
      header.addClass('green');
    }
  });
});
