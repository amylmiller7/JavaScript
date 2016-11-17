// Gathers user input from checkboxes and text box. To practice array creation and manipulation.
// Creates array. Adds selected items and text input in text box to the array. Sorts items alphabetically before returning array as a list with a message to the user.

// Creates array name using user's first and last name.
function createArray() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var arrayName = firstName + lastName;
    console.log(arrayName);
}

// Adds items to the array that the user selected and/or input in text box.
function addItemsToArray() {
    // Items user selected
    var form = document.getElementById("foods");
    var inputs = form.getElementsByTagName("input");
    var i;
    arrayName = [];
    for (i = 0; i < inputs.length; i += 1) {
        if (inputs[i].type === "checkbox" && inputs[i].checked) {
            arrayName.push(inputs[i].value);
        }
    }
     
    // Adds item user input in text box.
    var other = document.getElementById("other");
    if (other.value !== "") {
        arrayName.push(other.value);
    }
}

// Loops over items added to array and prints out itmes in console log.
function arrayConsole() {
    var k; 
    for (k = 0; k < arrayName.length; k += 1)
        console.log(arrayName[k]);
}

// Alphabetizes the items in the array.
function sortArray() {
    var k;
    arrayName.sort();
    for (k = 0; k < arrayName.length; k += 1)
        console.log(arrayName[k]);
        return;
}

// Clears content on webpage, adds message, and lists the items in the array when the user clicks the Submit button.
function printMessage() {
    var firstName = document.getElementById("firstName").value;
    var j;
    document.body.innerHTML = "";
    document.body.innerHTML = firstName + ", thanks for agreeing to bring: <br>";
    for (j = 0; j < arrayName.length; j += 1)
        document.body.innerHTML += "<ul><li>" + arrayName[j] + "</ul>";
    if (j >= arrayName.length) {
        document.body.innerHTML += "See you at the party!";
    }
}

// Calls functions when user clicks Sumit button.
function result() {
    createArray();
    addItemsToArray();
    arrayConsole();
    sortArray();
    printMessage();
}
