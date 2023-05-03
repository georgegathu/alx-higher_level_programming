$(function () {
  const url = 'https://fourtonfish.com/hellosalut/?lang=fr';
  const hello = $('div#hello');

  $.ajax({
    url: url,
    dataType: 'json',
    success: function (data) {
      hello.text(data.hello);
    }
  });
});
