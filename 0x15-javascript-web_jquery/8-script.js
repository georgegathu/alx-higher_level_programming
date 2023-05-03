$(function () {
  const movies = $('ul#list_movies');
  const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';

  $.ajax({
    url: url,
    dataType: 'json',
    success: function (data) {
      const results = data.results;

      $.each(results, function (index, movie) {
        movies.append(`<li>${movie.title}</li>`);
      });
    }
  });
});
