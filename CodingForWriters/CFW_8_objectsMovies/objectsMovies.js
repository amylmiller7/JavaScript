// Own project that uses objects, manipulates user input, allows user to sort data, and changes the contents of the web page. Not an exercise for Udemy Coding for Writers course.

// Displays list of movie and modifies based on user input.
// Allows user to sort movies in the list based on title, year, and category. Allows user to add movies to the list and sort them based on title, year, and category.

// Creates object type with an object constructor function. Use to instantiate new movie objects.
function Movie(title, year, category, synopsis) {
    this.title = title;
    this.year = year;
    this.category = category;
    this.synopsis = synopsis;
}

// Instantiates new movie objects.
var movie1 = new Movie("Facing Darkness", "2016", "Documentary", "Dr. Kent Brantley battles Ebola.");
var movie2 = new Movie("Dr. Jekyll and Mr. Hyde", "1920", "Silent film", "Dr. Jekyll struggles with man's baser nature.");
var movie3 = new Movie("Whiplash", "2014", "Drama", "Andrew fights against an abusive music professor.");

// Creates array for movie objects.
var movieArray = [];

// Populates movieArray with movie objects.
movieArray.push(movie1);
movieArray.push(movie2);
movieArray.push(movie3);

// Sorts objects in array by title and then executes displaySortedMovies() function.
function sortByTitle() {
    movieArray.sort(function (a, b) {
        var titleA = a.title.toUpperCase(), titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
    displaySortedMovies();
}

// Sorts objects in array by year and then executes displaySortedMovies() function.
function sortByYear() {
    movieArray.sort(function (a, b) {
        var yearA = a.year.toUpperCase(), yearB = b.year.toUpperCase();
        if (yearA < yearB) {
            return -1;
        }
        if (yearA > yearB) {
            return 1;
        }
        return 0;
    });
    displaySortedMovies();
}

// Sorts objects in array by category and then executes displaySortedMovies() function.
function sortByCategory() {
    movieArray.sort(function (a, b) {
        var categoryA = a.category.toUpperCase(), categoryB = b.category.toUpperCase();
        if (categoryA < categoryB) {
            return -1;
        }
        if (categoryA > categoryB) {
            return 1;
        }
        return 0;
    });
    displaySortedMovies();
}

// Displays all properties in movie objects. Executed on page load and when user clicks Submit button.
function displayMovies() {
    var i;
    results.innerHTML = "";
    for (i = 0; i < movieArray.length; i++) {
        results.innerHTML += "Title: " + movieArray[i].title + "<br>" + "Year: " + movieArray[i].year + "<br>" + "Category: " + movieArray[i].category + "<br>" + movieArray[i].synopsis + "<p>";
    }
}

// Replaces current movie content on webpage with movie objects sorted with sortByTitle(), sortByYear(), and sortByCategory() functions. Executed when user clicks sort buttons.
function displaySortedMovies() {
    var i;
    results.innerHTML = "";
    for (i = 0; i < movieArray.length; i++) {
        results.innerHTML += "Title: " + movieArray[i].title + "<br>" + "Year: " + movieArray[i].year + "<br>" + "Category: " + movieArray[i].category + "<br>" + movieArray[i].synopsis + "<p>";
    }
}

// Removes list of movies from the webpage. Calls hideButtons () function, which hides all buttons on the webpage. Calls unhideMovieForm() function which makes the movie form visible.
function addMovie() {
    results.innerHTML = "";
    hideButtons(this, "buttons");
    unhideMovieForm(this, "addMovieForm");
}

// Unhides movie form for user input.
function unhideMovieForm(clickedButton, addMovieForm) {
    var item = document.getElementById(addMovieForm);
    if (item) {
        if (item.className === "hidden") {
            item.className = "unhidden";
            clickedButton.value = "hide";
        } else {
            item.className = "hidden";
            clickedButton.value = "unhide";
        }
    }
}

// Hides movie form for user input.
function hideMovieForm(clickedButton, addMovieForm) {
    var item = document.getElementById(addMovieForm);
    if (item) {
        if (item.className === "unhidden") {
            item.className = "hidden";
            clickedButton.value = "unhide";
        } else {
            item.className = "unhidden";
            clickedButton.value = "hide";
        }
    }
}

// Hides buttons on webpage.
function hideButtons(clickedButton, buttons) {
    var item = document.getElementById(buttons);
    if (item) {
        if (item.className === "unhidden") {
            item.className = "hidden";
            clickedButton.value = "unhide";
        } else {
            item.className = "unhidden";
            clickedButton.value = "hide";
        }
    }
}

// Unhides buttons on webpage.
function unhideButtons(clickedButton, buttons) {
    var item = document.getElementById(buttons);
    if (item) {
        if (item.className === "hidden") {
            item.className = "unhidden";
            clickedButton.value = "hide";
        } else {
            item.className = "hidden";
            clickedButton.value = "unhide";
        }
    }
}

// Retrieves user input in movie form. Determines next number to use for the name of the new movie object. Creates new variable name for new movie object created from user input. Creates new movie object with information from user input. Adds new movie object to movieArray. Calls hideMovieForm(), displayMovies(), and unhideButtons() functions.
function submitNewMovie() {
    // Retrieves user input in movie form.
    var addedMovieTitle = document.getElementById("movieTitle").value,
        addedMovieYear = document.getElementById("movieYear").value,
        addedMovieCategory = document.getElementById("movieCategory").value,
        addedMovieSynopsis = document.getElementById("movieSynopsis").value,

    // Determines next number to use for the name of the new movie object, e.g, movie4.
        movieArrayLength = movieArray.length,
        newMovieNumber = movieArrayLength + 1,
    
    // Creates new variable name for new movie object created from user input.
        newMovie = "movie" + newMovieNumber;
    
    // Creates new movie object with info from user input.
    newMovie = new Movie(addedMovieTitle, addedMovieYear, addedMovieCategory, addedMovieSynopsis);
    
    // Adds new movie object created from user input to movieArray.
    movieArray.push(newMovie);
    
    // Hides movie form.
    hideMovieForm(this, "addMovieForm");
    
    // Displays list of movie objects.
    displayMovies();
    
    // Adds buttons to webpage that lists movie objects.
    unhideButtons(this, "buttons");
}