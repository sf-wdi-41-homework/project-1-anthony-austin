console.log("Sanity Check: JS is working!")

var $showList;
var allShows = [];

$(document).ready(function(){


// This is the link for The Movie Database API
var movie = "https://api.themoviedb.org/3/movie/550?api_key=43e0d3b323afff75bed93507a243605d"
  var $resultsDiv = $('div#results');




	$showList = $('#showTarget');
	  $.ajax({
	    method: 'GET',
	    url: '/api/shows',
	    success: handleSuccess,
	    error: handleError
	  });

	  $('#newShowForm').on('submit', function (e) {
	    e.preventDefault();
	    $.ajax({
	      method: 'POST',
	      url: '/api/shows',
	      data: $(this).serialize(),
	      success: newShowSuccess,
	      error: newShowError
	    });
	  });

	  $showList.on('click', '.deleteBtn', function () {
	    var endpoint = 'api/shows/' + $(this).attr('data-id');
	    $.ajax({
	      method: 'DELETE',
	      url: endpoint,
	      success: deleteShowSuccess,
	      error: deleteShowError
	    });
	  });
	});

	function handleSuccess(json) {
  allShows = json;
  console.log(allShows);
  allShows.forEach(function (show) {
    $('#showTarget').append(`
      <div id="shows-template" type="text/x-handlebars-template">
          <hr>
          <p>
            <b>${show.title}</b>
            <br>
            <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id="${show._id}">Delete</button>
          </p>
        </div>
      `);
  });
}

function handleError(a, b, c) {
  console.log(b, c);
  $('#showTarget').text('Failed to load all show.');
}

function handleError(a, b, c) {
  console.log(b, c);
  $('#showTarget').text('Failed to load all show.');
}

function newShowSuccess(json) {
  $('#newShowForm input').val('');
  allShows.push(json);
    location.reload();
}

function newShowError() {
  console.log('New Show Failed.');
}

function deleteShowSuccess(json) {
  var show = json;
  console.log(json);
  var showId = show._id;
  console.log('show deleted', showId);
  for (var index = 0; index < allShows.length; index++) {
    if (allShows[index]._id === showId) {
      allShows.splice(index, 1);
      break;
    }
  }
  location.reload();
}

function deleteShowError(a, b, c) {
  console.log(b ,c);
  console.log('Delete show error.');
};




$('button').click(function(){
	$(this).css("background-color", "light grey");
}, function(){
	$(this).css("background-color", "grey");
});
