$(function () {
  const url = 'https://www.fourtonfish.com/hellosalut';

  $('#btn_translate').on('click', () => {
    const value = $('#language_code').val();

    $.ajax({
      method: 'GET',
      url: url,
      dataType: 'json',
      data: {
        lang: value
      },
      success: (data) => {
        $('div#hello').text(data.hello);
      }
    });
  });
});
