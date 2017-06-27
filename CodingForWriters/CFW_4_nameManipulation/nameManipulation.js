// Project that builds on Udemy Coding for Writers exercise on functions

// Manipulates the first name and last name that the user entered. 
// Displays name on webpage two ways: first name followed by last name and last name followed by first name. Calculates and displays the length of the full name (including space between names). Allows user to clear data from input fields and webpage.

// Concatenates the first name and last name that the user entered. Adds them to a webpage.
function showName() {
    getFullName.innerHTML = "Full name (first last): " + first.value + " " + last.value;
}

// Concatenates the last name and first name that the user entered. Adds them to a webpage.
function showLastNameFirst() {
    getLastNameFirst.innerHTML = "Full name (last first): " + last.value + " " + first.value;
}

// Returns the length of the full name. Includes the space between the first name and last name.
function fullNameLength(firstName, lastName) {
    var nameLength = firstName.length + lastName.length + 1;
    return nameLength;
}

// Adds the length of the full name returned from fullNameLength() function to a webpage.
function showLength() {
    showFullNameLength.innerHTML = "Length of full name: " + fullNameLength(first.value, last.value) + " characters";
}

// EXTRA. Clears information in the text boxes and removes information that was added to the webpage through showName(), showLastNameFirst(), showLength() functions.
function resetInfo() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("getFullName").innerHTML = "";
    document.getElementById("getLastNameFirst").innerHTML = "";
    document.getElementById("showFullNameLength").innerHTML = "";
}