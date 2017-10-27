var tvShow = "https://api.themoviedb.org/3/search/tv?api_key=43e0d3b323afff75bed93507a243605d&language=en-US&page=1&"
var imgLocation = "https://image.tmdb.org/t/p/w90_and_h134_bestv2"
var imgPoster = "https://image.tmdb.org/t/p/w150_and_h225_bestv2"
var backdropLocation = "https://image.tmdb.org/t/p/w1400_and_h450_bestv2"
var $showList;
var allShows = [];

$(document).ready(function () {
  console.log("JS is working")

    // Notice how you use the same #shoeCheck 3 times in this file and it's the same
    // for each use. You only need 1 for all requests.
    // For example, you could have given the form a class named showCheck
    // and then created 1 event for form submission.
    // See HTML file for matching changes.

  $('.showCheck').on('submit', function (e) {
    e.preventDefault();
    showData = $(this).serialize();
    search = (tvShow + showData);
    $.ajax({
      method: "GET",
      // I think you intended to use the search variable here
      url: tvShow + showData,
      success: onSuccess,
      error: onError
    });
  });

  $('#enterUser').on('click', function (e) {
    e.preventDefault();
    var uData = $('#userName').val()
    $('#Users').val(uData);
    $('#1Users').val(uData);
    $('#2Users').val(uData);
    $('#check').attr('hidden', false);
    $('#1check').attr('hidden', false);
    $('#2check').attr('hidden', false);
    $('#input').attr('hidden', false);
    $('#1input').attr('hidden', false);
    $('#2input').attr('hidden', false);
  });

  $showList = $('#resultsTarget');
  $.ajax({
    method: 'GET',
    url: '/api/shows',
    success: handleSuccess,
    error: appendError
  });
});


function onSuccess(json) {
  console.log("SUCCESS: ", json.results[0]);
  $("#showTarget").empty();
  $("#showTarget").append('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $("#showTarget").append('</br>')
  $("#showTarget").append(json.results[0].name);
  $("#Show").empty();
  $("#Date").empty();
  $('#Img').empty();
  $('#Poster').empty();
  $("#Overview").empty();
  $('#Backdrop').empty();
  $("#Show").val(json.results[0].name);
  $("#Date").val(json.results[0].first_air_date);
  $('#Img').val('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $('#Poster').val('<img class="resize" src="' + imgPoster + json.results[0].poster_path + '">');
  $("#Overview").val(json.results[0].overview + ' ^');
  $('#Backdrop').val('<img src="' + backdropLocation + json.results[0].backdrop_path + '">');
  $("#vote").attr('hidden', false);
};

function onError(a, b, c) {
  console.log(b);
  console.log(c);
}

function handleSuccess(json) {
  allShows = json;
  console.log(allShows);
  allShows.forEach(function (tv) {
    $('#resultsTarget').append(
      `
    <div class="row">
      <div class="col-sm-2">
        ${tv.poster.split(",")[0]}
      </div>
      <div class="col-sm-6">
        <h1> ${tv.show.split(",")[0]}</h1>
        ${tv.overview.split("^,")[0]}
      </div>
      <div class="col-sm-4">
         <h4> --- Voted by ${tv.users}</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-2">
        ${tv.poster.split(",")[1]}
      </div>
      <div class="col-sm-10">
        <h1> ${tv.show.split(",")[1]}</h1>
        ${tv.overview.split("^,")[1]}
      </div>
    </div>

    <div class="row">
    <div class="col-sm-2">
    ${tv.poster.split(",")[2]}
    </div>
    <div class="col-sm-10">
    <h1> ${tv.show.split(",")[2]}</h1>
      ${tv.overview.split("^,")[2]}
      </div>
    </div>
    <div class="spacer">
    </div>
    `
    );
  });
}


function appendError(a, b, c) {
  console.log(b, c);
  $('#resultsTarget').text('Failed to load the shows')
}
