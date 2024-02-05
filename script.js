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

//  ombd fetch
 var ombdApiKey = "a32eb036";
 var movieTitle = ("");
 async function logMovie() {
   const response = await fetch(
     `http://www.omdbapi.com/?i=tt3896198&apikey=${ombdApiKey}`
   );
   console.log(response);
   const responseJSON = await response.json();
   var movieGenre = responseJSON.Genre;
   console.log(movieGenre);
 }
 logMovie();

//  get genre of movie

//  convert movieGenre to foodType with associaion table

    //edmam fetch
    var apiKey = "6f74afba579fd22cb4c993e9febf8338";
    var apiId = "a9029ae2";
    var foodType = (genreAssociationtable);
    async function logRecipe() {
      const response = await fetch(
        `https://api.edamam.com/search?q=${foodType}app_id=${apiId}&app_key=${apiKey}`
      );
      console.log(response);
      const responseJSON = await response.json();
      console.log(responseJSON)
    }
    logRecipe();
    
    function to get movie details
    function getMoviedetails(movie) {
        var ombdApiKey = "a32eb036"
        var ombdApiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=${ombdApiKey}"
        $ajax({
            method: "GET"
            data: {
                apikey: ombdApiKey,
                t: movie
            }
            success: function(movieData) {
                // var movieLocation = movieData.Country;
                var movieGenre = movieData.Genre;

                if (movieLocation && movieLocation.trim() !== '') {
                    getMealsuggestionsByLOcation(movieLocation);
                } else {
                    getMealsuggestionsByGenre(movieGenre);
                }
            },
            error: function(error) {
                console.error("Error fetching movie details: ", error);
            }
        });
    }
    
    function getMealsuggestionsByLOcation(location) {
        var edamamApiKey = ("6f74afba579fd22cb4c993e9febf8338");
        var edamamApiUrl = "https://api.edamam.com/search?q=${foodType}app_id=${apiId}&app_key=${apiKey}"
        $ajax({
            url:
            method:
            data:
            success: function(mealData) {
                var mealSuggestions = mealData.hits;
                displayMealSuggestion(mealSuggestions);
            },
            error: function(error) {
                console.error('Error fetching Meal suggestions:', error);
            }
        });
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
        };
        var cuisine = genreAssociationtable[genre];

        if (cuisine) {
            var edamamApiKey = 
            var edamamApiUrl = 
    
    
            $ajax({
                url:
                method:
                data: {}
                success: function(mealData) {
                    var mealSuggestions = mealData.hits;

                    displayMealSuggestion(mealSuggestions);
                },
                error: function(error) {
                    console.error("Error fetching meal suggestions:", error);
                }
                
                
            });
            
        }else {
            console.error("No corresponding cuisine found for the movie genre.");
        }

    }


});




function displayMealSuggestion(mealSuggestions) {
    var 

}