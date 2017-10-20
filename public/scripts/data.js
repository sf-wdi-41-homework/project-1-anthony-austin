var tvShow = "https://api.themoviedb.org/3/search/tv?api_key=43e0d3b323afff75bed93507a243605d&language=en-US&page=1&"
var imgLocation = "https://image.tmdb.org/t/p/w90_and_h134_bestv2"
$(document).ready(function () {
  console.log("Sanity Check: JS is working!")



  $('#showCheck').on('submit', function (e) {
    e.preventDefault();
    showData = $(this).serialize();
    console.log(showData);
    search = (tvShow + showData);
    console.log(search);
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
    console.log(showData);
    search = (tvShow + showData);
    console.log(search);
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
    console.log(showData);
    search = (tvShow + showData);
    console.log(search);
    $.ajax({
      method: "GET",
      url: tvShow + showData,
      success: onSuccess2,
      error: onError2
    });
  });
});

function onSuccess(json) {
  console.log("SUCCESS: ", json.results[0].name);
  $("#showTarget").empty();
  $("#showTarget").append('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $("#showTarget").append('</br>')
  $("#showTarget").append(json.results[0].name);
  console.log('<img>' + imgLocation + json.results[0].poster_path + '</img');
};

function onError(a, b, c) {
  console.log(b);
  console.log(c);
}


function onSuccess1(json) {
  console.log("SUCCESS: ", json.results[0].name);
  $("#showTarget1").empty();
  $("#showTarget1").append('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $("#showTarget1").append('</br>')
  $("#showTarget1").append(json.results[0].name);
  console.log('<img>' + imgLocation + json.results[0].poster_path + '</img');
};

function onError1(a, b, c) {
  console.log(b);
  console.log(c);
}

function onSuccess2(json) {
  console.log("SUCCESS: ", json.results[0].name);
  $("#showTarget2").empty();
  $("#showTarget2").append('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $("#showTarget2").append('</br>')
  $("#showTarget2").append(json.results[0].name);
  console.log('<img>' + imgLocation + json.results[0].poster_path + '</img');
};

function onError2(a, b, c) {
  console.log(b);
  console.log(c);
}
