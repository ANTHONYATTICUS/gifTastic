

$('#submit').on('click', function () {
    var userSearch = $("#search").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response) {

        // Saving the image_original_url property
          var imageUrl = response.data.image_original_url;

          // Creating and storing an image tag
          var newGiphy = $("<img>");

          newGiphy.attr("src", imageUrl);
          newGiphy.attr("alt", "hmmm");
          $("#gif-row").prepend(newGiphy);
        });
    });