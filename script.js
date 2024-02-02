console.log("hello world");

//function to save search terms to local stroage
function saveSearchToLocal(searchTerm) {
    //retrieve existing search history from local storage
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    //add new search term to the search history 
    searchHistory.push(searchTerm);
    console.log(searchTerm);
    //Save the updated search history
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory))
};



//function to display search history
function displaySearchHistory() {
    //retrieve search history
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
    
    //get the search historty div by id
    var searchHistoryDiv = $('searchHistory');
    
    //for loop for each search term to display(jquery)
    searchHistory.forEach(function(term) {
        //append a new div to the search history div
        searchHistoryDiv.append(
            `<div>${term}</div>`
        );
    });
    
};



//enable event handler ready for DOM
$(document).ready(function() {
    //show/hide search history button event handler
    $('#showHistoryBtn').on('click', function() {
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
    });

    //function to get movie details
    function getMoviedetails(movie) {
        var ombdApiKey = 
        var ombdApiUrl =
        $ajax({
            url:
            method: "GET"
            data: {
                apikey: ombdApiKey,
                t: movie
            }
            success: function(movieData) {}
        });
    };
    





});





//function to get movie details
function getMoviedetails(movie) {
    var 
    var
    $ajax({});
}

function getMealsuggestionsByGenre(genre) {
    var genreAssociationtable = {
        'Action': "Pizza",
        'Adventure': "Sandwich",
        'Animation': "Colorful",
        'Biography': "Hot Dog",
        'Comedy': "French fries",
        'Crime': "Scary",
        'Documentary': "Stew",
        'Drama': "Steak",
        'Family': "Kid Friendly",
        'Fantasy': "English",
        'Film-Nior': "Pot-Pie",
        'Game-Show': "Nachos",
        'History': "Meatloaf",
        'Horror': "Scary",
        'Music': "Wine",
        'Musical': "Wine",
        'Mystery': "Spam",
        'News': "Salmon",
        'Reality-TV': "Salad",
        'Romance': "Date Night",
        'Sci-Fi': "Sushi",
        'Sport': "Tailgate",
        'Talk-Show': "Frozen Dinner",
        'Thiller': "Italian",
        'War': "Fried Chicken",
        'Western': "Western",
    }
    //setting vaariable for cuisine
    var cuisine = genreAssociationtable[genre];

    if (cuisine) {
        var edamamApiKey = 
        var edamamApiUrl = 


        $ajax({
            url:
            
            
        })
        }
    }

}






function getMealsuggestionsByLOcation(location) {
    var
    var
    $ajax({});
}

function displayMealSuggestion(mealSuggestions) {
    var 

}