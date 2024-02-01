console.log("hello world");

//function to save search terms to local stroage
function () {
    //retrieve existing search history from local storage
    var searchHistory =
    //add new search term to the search history 
    searchHistory.push(searchTerm);
    //Save the updated search history

};



//function to display search history
function idsplaySearchHistory() {
    //retrieve search history
    
    //get the search historty div by id
    
    //for loop for each search term to display(jquery)
    
    //append a new div to the search history div
    
};



//enable event handler ready for DOM
$(document).ready(function() {
    //show/hide search history button event handler

    //toggle the button for search history
    $("#searchHistory").toggle();
});

displaySearchHistory();



//event handler for submit button
$('#submitBtn').on('click', function() {
    //setting a variable and setting value for eneteredMovie
    var enteredMovie = $('movieInput').val();
    //call the function to get movie details
    getMoviedetails();
})


//function to get movie details
function getMoviedetails(movie) {
    var 
    var
    $ajax({});
}


function getMealsuggestionsByLOcation(location) {
    var
    var
    $ajax({});
}

function displayMealSuggestion(mealSuggestions) {
    var 
}