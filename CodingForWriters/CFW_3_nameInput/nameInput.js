// Project that builds on Udemy Coding for Writers exercise on HTML and JS

// Manipulates the first name and last name that the user entered. 
// Displays name on webpage two ways: first name followed by last name and last name followed by first name. 

// Concatenates the first name and last name that the user entered. Adds them to a webpage.  
function getName() {
    fullName.innerHTML = first.value + " " + last.value;
}

// Concatenates the last name and first name that the user entered. Adds them to a webpage. 
function getNameReverse() {
    lastNameFirst.innerHTML = last.value + " " + first.value;
}