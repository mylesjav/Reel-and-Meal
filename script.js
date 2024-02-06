//function to save search terms to local stroage
function saveSearchToLocal(searchTerm) {
    //retrieve existing search history from local storage
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    //add new search term to the search history 
    searchHistory.push(searchTerm);
    console.log(searchTerm);
    //Save the updated search history
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
};



//function to display search history
function displaySearchHistory(targetDivId) {
    //retrieve search history
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory'));


    //get the search historty div by id
    var searchHistoryDiv = $('#' + targetDivId);

    //clear the exisitng content
    searchHistoryDiv.empty();

    //for loop for each search term to display(jquery)
    searchHistory.forEach(function (term) {
        //append a new div to the search history div
        searchHistoryDiv.append(`<div>${term}</div>`);
    });

};



//enable event handler ready for DOM
$(document).ready(function () {

    if (!localStorage.getItem('searchHistory')) {
        localStorage.setItem('searchHistory', JSON.stringify([]));
    }

    //show/hide search history button event handler
    $('#showHistoryBtn').on('click', function () {
        //toggle the button for search history
        $("#searchHistory").toggle();
    });

    displaySearchHistory();

    //event handler for submit button
    $('.submitBtn').on('click', function (event) {
        event.preventDefault();
        console.log('submit button clicked');
        //setting a variable and setting value for enteredMovie
        var enteredMovie = $('#icon_prefix').val().trim();
        //call the function to get movie details
        
        if (enteredMovie) {
            logMovie(enteredMovie)
                .then(function (movieGenre) {
                    if (movieGenre && movieGenre.trim() !== "") {
                        return getMealsuggestionsByGenre(movieGenre);
                    } else {
                        console.error("Genre not found.");
                    }
                })
                .catch(function (error) {
                    console.error("Error getting movie:", error);
                });
        } else {
            console.error("Please enter a movie.");
        }
    });

    //ombd fetch


    function logMovie(enteredMovie) {

        var omdbApiKey = "a32eb036";
        var encodedMovie = encodeURIComponent(enteredMovie);

        return fetch(`https://www.omdbapi.com/?t=${encodedMovie}&apikey=${omdbApiKey}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (responseJSON) {
                console.log("Omdb api response:", responseJSON);
                var movieGenre = responseJSON.Genre;
                saveSearchToLocal(enteredMovie);
                return movieGenre;
            })
            .catch(function (error) {
                console.error("Error in Omdb API request:", error);
                throw error;
            });

   
    };

    var genreAssociationtable = {
        action: "Pizza",
        adventure: "Sandwich",
        animation: "Colorful",
        biography: "Hot Dog",
        comedy: "French fries",
        crime: "Scary",
        documentary: "Stew",
        drama: "Steak",
        family: "Kid Friendly",
        fantasy: "English",
        filmNior: "PotPie",
        gameShow: "Nachos",
        history: "Meatloaf",
        horror: "Scary",
        music: "Wine",
        musical: "Wine",
        mystery: "Spam",
        news: "Salmon",
        realityTV: "Salad",
        romance: "Date Night",
        sciFi: "Sushi",
        sport: "Tailgate",
        talkShow: "Frozen Dinner",
        thiller: "Italian",
        war: "Fried Chicken",
        western: "Western",
    };


    function getMealsuggestionsByGenre(genre) {

        var firstGenre = genre.toLowerCase().split(',').map(g => g.trim())[0];

        
        var cuisine = genreAssociationtable[firstGenre];

        if (cuisine) {
            console.log("selceted cuisine:", cuisine);
            logRecipe(cuisine);
        } else {
            console.error("No corresponding cuisine found for the movie genre.");
        }

    }

    function logRecipe(cuisine) {
        var edamamApiKey = "6f74afba579fd22cb4c993e9febf8338";
        var edamamApiId = "a9029ae2";

        fetch(`https://api.edamam.com/search?q=${cuisine}&app_id=${edamamApiId}&app_key=${edamamApiKey}&to=5`)
            .then(function (response) {
                return response.json();
    
            })
            .then(function (responseJSON) {
                console.log("Edamam Api response:", responseJSON);

                var mealSuggestions = responseJSON.hits.map(hit => {
                    return {
                        recipe: {
                            label: hit.recipe.label,
                            image: hit.recipe.image,
                            source: hit.recipe.source,
                            url: hit.recipe.url
                        }
                    }
                });
                displayMealSuggestion(mealSuggestions);
            })
            .catch(function (error) {
                console.error("Error in Edamam api request:", error);
                throw error;
            })
                    
    }


    function displayMealSuggestion(mealSuggestions) {

        var mealSuggestionsContainer = $(".search-results .recipes");

        mealSuggestionsContainer.empty();

        mealSuggestions.forEach(function (meal) {

            mealSuggestionsContainer.append(`
                <div class="recipe col s12 m3">
                    <div class="card">
                        <div class="card-image">
                            <img class="recipe-image" src="${meal.recipe.image}" />
                        </div>
                        <div class="card-content">
                            <p class="card-title">${meal.recipe.label}</p>
                            <p class="recipe-description">${meal.recipe.source}</p>
                        </div>
                        <div class="card-action">
                            <a class="recipe-link" href="${meal.recipe.url}" target="_blank">See Recipe</a>
                        </div>
                    </div>
                </div>
            `);
        });

    };


});



