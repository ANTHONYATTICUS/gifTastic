

$('#submit').on('click', function () {
    var userSearch = $("#search").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=dc6zaTOxFJmzC&limit=10";

    axios.get(queryURL)
        .done(function (response) {
            console.log(response)

        });
// function buildQueryURL() {
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
// var queryParams = { "api-key": "YbuzTix0sgdfhSVMrwro0fTcSyj2xqdJ" };

// // Grab text the user typed into the search input, add to the queryParams object
// queryParams.q = $("#search-term")
//     .val()
//     .trim();

// $("#submit").on("click", function () {
//     var input = $("#search").val();
//     var gifURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=YbuzTix0sgdfhSVMrwro0fTcSyj2xqdJ";
//     // AJAX GET REQUEST
//     $.ajax({
//         url: gifURL,
//         method: "GET"
//     })
//         .then(function (response) {

//             // Saving the image_original_url property
//             var imageUrl = response.data.image_original_url;

//             // Creating and storing an image tag
//             var giphyImg = $("<img>");

//             // Setting the catImage src attribute to imageUrl
//             giphyImg.attr("src", imageUrl);
//             giphyImg.attr("alt", "giphy");

//             // Prepending the Image to div
//             $("#gifImages").prepend(giphyImg);
//         });
// });
