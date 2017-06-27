// Own project to create and validate credentials when setting up account. Not an exercise for Udemy Coding for Writers course.

// Creates a username and password for an account. 
// Confirms that user entered text in text boxes. Compares the number of characters in the password and password confirmation text boxes. Checks that the text input in the password and password confirmation text boxes match. Adds messages in alerts and webpage. Clears text in text boxes. 

// Checks if text boxes are empty when user clicks the Submit button. 
function checkEmptyInput() {
    if (document.getElementById("username").value == "") {
        // Pops alert requesting input.
        alert("Please input a username.");
        // Clears input in textboxes for password and password confirmation.
        document.getElementById("password").value = "";
        document.getElementById("confirm_password").value = "";
        return false; // Stops submission until textbox is not empty.
    }
    if (document.getElementById("password").value == "") {
        alert("Please input a password.");
        return false;
    }
    if (document.getElementById("confirm_password").value == "") {
        alert("Please confirm your password.");
        return false;
    }
}

// Checks that the text input in the password (textbox2) and password confirmation (textbox3) text boxes match when user clicks Submit button.
function checkPasswordMatch() {
    var textbox2 = document.getElementById("password").value;
    var textbox3 = document.getElementById("confirm_password").value;
    if (textbox2 != textbox3) {
        // Adds message in the result paragraph.
        result.innerHTML = "Hey, your passwords do not match! Try again.";
        // Clears input in textboxes.
        document.getElementById("password").value = "";
        document.getElementById("confirm_password").value = "";
        return false; // Stops execution of code.
    } else {
        // Removes any text set in the result paragraph.
        result.innerHTML = "";
    }
}

// Compares the number of characters in the password (textbox2) and password confirmation (textbox3) textboxes. 
function checkPasswordLength() {
    var value1 = document.getElementById("password").value;
    var value2 = document.getElementById("confirm_password").value;
    // Checks if values in text boxes are between six and ten characters in length.
    if (value1.length < 6 || value1.length > 10 || value2.length < 6 || value2.length > 10) {
        // Adds message to the result paragraph.
        result.innerHTML = "Passwords must be between 6 and 10 characters in length. <br>";
        // Clears input in text boxes.
        document.getElementById("password").value = "";
        document.getElementById("confirm_password").value = "";
        // Adds bold font weight to text next to textbox2.
        document.getElementById("warning").style.fontWeight = "bold";
        return false; // Stops execution of code.
    } else {
        // Removes bold font weight from text next to textbox2.
        document.getElementById("warning").style.fontWeight = "normal";
    } 
}

// Executes checkEmptyInput(), checkPasswordLength(), and checkPasswordMatch() functions when the user clicks the Submit button.
function createAccount() {
    // Checks if checkEmptyInput() function does not return false. If no text boxes are empty, executes the checkPasswordLength() function.
    if (checkEmptyInput() !== false) {
        // Checks if checkPasswordLength() function does not return false. If the length of the values input for password and password confirmation text boxes are valid, executes the checkPasswordMatch() function.
        if (checkPasswordLength() !== false) {
            // Checks if checkPasswordMatch() function does not return false. If the values input for password and password confirmation text boxes match, clears the values input in the text boxes and adds message to the result paragraph.
            if (checkPasswordMatch() !== false) {
                document.getElementById("username").value = "";
                document.getElementById("password").value = "";
                document.getElementById("confirm_password").value = "";
                result.innerHTML = "You successfully created an account!";
            }
        }
    }
}