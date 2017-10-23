var tvShow = "https://api.themoviedb.org/3/search/tv?api_key=43e0d3b323afff75bed93507a243605d&language=en-US&page=1&"
var imgLocation = "https://image.tmdb.org/t/p/w90_and_h134_bestv2"
var imgPoster = "https://image.tmdb.org/t/p/w150_and_h225_bestv2"
var backdropLocation = "https://image.tmdb.org/t/p/w1400_and_h450_bestv2"
var $showList;
var allShows = [];

$(document).ready(function () {
  console.log("JS is working")



  $('#showCheck').on('submit', function (e) {
    e.preventDefault();
    showData = $(this).serialize();
    search = (tvShow + showData);
    $.ajax({
      method: "GET",
      url: tvShow + showData,
      success: onSuccess,
      error: onError
    });
  });

  $('#showCheck1').on('submit', function (e) {
    e.preventDefault();
    showData = $(this).serialize();
    search = (tvShow + showData);
    $.ajax({
      method: "GET",
      url: tvShow + showData,
      success: onSuccess1,
      error: onError1
    });
  });

  $('#showCheck2').on('submit', function (e) {
    e.preventDefault();
    showData = $(this).serialize();
    search = (tvShow + showData);
    $.ajax({
      method: "GET",
      url: tvShow + showData,
      success: onSuccess2,
      error: onError2
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


function onSuccess1(json) {
  console.log("SUCCESS: ", json.results[0]);
  $("#showTarget1").empty();
  $("#showTarget1").append('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $("#showTarget1").append('</br>')
  $("#showTarget1").append(json.results[0].name);
  $("#1Show").empty();
  $("#1Date").empty();
  $('#1Img').empty();
  $("#1Overview").empty();
  $('#1Backdrop').empty();
  $("#1Show").val(json.results[0].name);
  $("#1Date").val(json.results[0].first_air_date);
  $('#1Img').val('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $('#1Poster').val('<img class="resize" src="' + imgPoster + json.results[0].poster_path + '">');
  $("#1Overview").val(json.results[0].overview + ' ^');
  $('#1Backdrop').val('<img src="' + backdropLocation + json.results[0].backdrop_path + '">');
  $('#1vote').attr('hidden', false);
};

function onError1(a, b, c) {
  console.log(b);
  console.log(c);
}

function onSuccess2(json) {
  console.log("SUCCESS: ", json.results[0]);
  $("#showTarget2").empty();
  $("#showTarget2").append('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $("#showTarget2").append('</br>')
  $("#showTarget2").append(json.results[0].name);
  $("#2Show").empty();
  $("#2Date").empty();
  $('#2Img').empty();
  $("#2Overview").empty();
  $('#2Backdrop').empty();
  $("#2Show").val(json.results[0].name);
  $("#2Date").val(json.results[0].first_air_date);
  $('#2Img').val('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $('#2Poster').val('<img class="resize" src="' + imgPoster + json.results[0].poster_path + '">');
  $("#2Overview").val(json.results[0].overview);
  $('#2Backdrop').val('<img src="' + backdropLocation + json.results[0].backdrop_path + '">');
  $('#2vote').attr('hidden', false);
};

function onError2(a, b, c) {
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
