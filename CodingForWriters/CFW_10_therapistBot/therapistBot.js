// Creates therapist bot that user can interact with.
// Changes therapist responses based on type of user input.

// Variable to hold the therapy session window
var therapySession;

// Array of responses by the therapist bot to exclamations
const EXCLAMATION_RESPONSES = [
    "You sound very passionate about that.",
    "You seem very excited.",
    "It sounds like you are agitated."];

// Array of generic responses by the therapist bot
const GENERIC_RESPONSES = [
    "How does that make you feel?",
    "Go on.",
    "Why do you say that?",
    "That's very interesting.",
    "Fascinating...",
    "Keep talking.",
    "I'm listening."];

// EXTRA. Constant used in function scroll and function scrollToBottom
const MESSAGES = document.getElementById("conversation");

// Object that maps first and second person phrases as key/value pairs
const POV_SWITCHES = {
    "I": "you",
    "i": "you",
    "me": "you",
    "myself": "yourself",
    "am": "are",
    "was": "were",
    "my": "your",
    "My": "your",
    "I'm": "you're",
    "I'd": "you'd",
    "I'll": "you'll",
    "i'm": "you're",
    "i'd": "you'd",
    "i'll": "you'll"
};

// Array of question responses by the therapist bot
const QUESTION_RESPONSES = [
    "Why do you ask that?",
    "What do <em>you</em> think?",
    "That's an interesting question.",
    "How long have you wanted to know that?",
    "That depends on who you ask."];

// Array of responses by the therapist bot to turn user statements into questions
const QUESTION_STARTS = [
    "Why do you say that",
    "Can you tell me more about how",
    "Can you elaborate on why",
    "Can you explain why you say that"];


// Called when web page loads. Creates first line of therapy session.
function initialize() {
    therapySession = "<p> I am Fra&uuml;lein Anna, the Therapist Bot. What is your problem?</p>";
    conversation.innerHTML = therapySession;
}

// EXTRA. Calls function submitLine() if user clicks Return rather than presses the Submit button.
document.getElementById("textbox").onkeydown = function(event) {
    if (event.keyCode == 13) {
        submitLine();
    }
};

// EXTRA. Clears user input in text box.
function clearTextbox(){
    document.getElementById("textbox").value="";
}

// Called when user clicks Submit button. Adds user input to therapySession variable.
function submitLine() {
    var patientLine = textbox.value;

    // EXTRA. Checks if user did not type any text in text box and outputs response.
    if (patientLine == ""){
        therapySession += "<p> <em>Please say again. I didn't catch what you said.</em></p>";
        conversation.innerHTML = therapySession;
        return;
    }

    therapySession += "<p> <em>" + patientLine + "</em></p>";

    // EXTRA. Calls function clearTextbox.
    clearTextbox();

    // EXTRA. Calls function lowercaseFirstLetter, which changes first letter in user input to lower case.
    lowercaseFirstLetter(patientLine);

    // Variable to hold therapist bot responses
    var therapistLine;

    // Checks user input for question mark, exclamation point, or all caps and passes appropriate array into function randomElement. If none of these applies to user input, then calls function createQuestion, which checks for modified text.
    if (lastChar(patientLine) == "?") {
        therapistLine = randomElement(QUESTION_RESPONSES);
    } else if (lastChar(patientLine) == "!") {
        therapistLine = randomElement(EXCLAMATION_RESPONSES);
    } else if (patientLine == patientLine.toUpperCase()) {
        therapistLine = randomElement(EXCLAMATION_RESPONSES);
    } else {
        therapistLine = createQuestion(patientLine);
    }

    // If no question mark, exclamation point, all caps, or modified text, then randomly selects an index in the GENERIC_RESPONSES array.
    if (therapistLine == null) {
        therapistLine = randomElement(GENERIC_RESPONSES);
    }

    // Updates therapySession variable with therapistLine.
    therapySession += "<p>" + therapistLine + "</p>";

    // Adds therapySession variable to web page.
    conversation.innerHTML = therapySession;

    // EXTRA. Calls function scrollToBottom.
    scrollToBottom();
}

// Randomly selects item from any array. Returns element from index position in array that corresponds to randomly generated number.
function randomElement(myArray) {
    // Math.random returns a random number between 0 (inclusive) and 1 (exclusive).
    // Math.floor strips off decimal points and turns random number into integer.
    var index = Math.floor(Math.random() * myArray.length);
    return myArray[index];
}

// Returns the last character of a string.
function lastChar(myString) {
    return myString.substring(myString.length - 1);
}

// EXTRA. Changes first letter in sentence to lower case. slice() extracts part of string (start, end). Note: Only works on first sentence of user input.
function lowercaseFirstLetter(string){
    return string[0].toLowerCase() + string.slice(1);
}

// Converts statement by user into question response from therapist bot.
function createQuestion(patientLine){
    // EXTRA. Assigns value returned from function lowercaseFirstLetter to user input.
    patientLine = lowercaseFirstLetter(patientLine);

    // Checks for specific string within a string. indexOf returns index of the first occurrence of specified value, e.g., if "you" or variants found/not not found (!= -1) in user input, then returns no value.
    if (patientLine.toLowerCase().indexOf("you") != -1) {
        return null;
    }

    // Checks if user input ends in period. If so, returns user input minus the period, e.g., patientLine "I am so angry." => "I am so angry".
    if (lastChar(patientLine) == ".") {
        // substring (indexStart, indexEnd)
        patientLine = patientLine.substring(0, patientLine.length - 1);
    }

    // Adds space on either side of user input after period removed, e.g., " I am so angry "
    var modifiedLine = " " + patientLine + " ";

    // Variable keeps track if any changes made.
    var found = false;

    // Loops through properties in POV_SWITCHES object.
    for (var property in POV_SWITCHES) {
        // hasOwnProperty returns Boolean, which indicates if POV_SWITCHES object contains a property, e.g., "I".
        if (POV_SWITCHES.hasOwnProperty(property)) {
            // Adds space on either side of value in POV_SWITCHES object, e.g., " I ".
            var modifiedProperty = " " + property + " ";
            // Regular expression object creates new object that replaces property in every occurrence.
            var propRegEx = new RegExp(modifiedProperty,"g");
            // Checks if modifiedProperty (" I ") exists in modifiedLine (" I am so angry "). If found/not not found (!= -1), returns the first occurrence of the specified value, e.g., if " I " found in modifiedLine, then replaces property in modifiedLine with property in POV_SWITCHES object (" You ").
            if (modifiedLine.indexOf(modifiedProperty) != -1) {
                // Replaces key with key's value, e.g., changes modifiedLine from " I am so angry " to " you are so angry ".
                modifiedLine = modifiedLine.replace(propRegEx, " " + POV_SWITCHES[property] + " ");
                // Variable that keeps track if changes made is set to true.
                found = true;
            }
        }
    }

    // If found is true/replacement made, then returns a question.
    if (found) {
        // substring(indexStart, indexEnd) removes trailing space.
        modifiedLine = modifiedLine.substring(0, modifiedLine.length - 1);
        // Stops execution and returns questions with the patient input.
        return randomElement(QUESTION_STARTS) + " " + modifiedLine + "?";
    }
    // Returns no value when no replacement made.
    return null;
}

// EXTRA. Checks the length of the therapy session window and calls function scrollToBottom if needed.
function scroll() {
    shouldScroll = MESSAGES.scrollTop + MESSAGES.clientHeight === MESSSAGES.scrollHeight;
    if (!shouldScroll) {
        scrollToBottom();
    }
}

// EXTRA. Auto scrolls to end of therapy session window.
function scrollToBottom() {
    MESSAGES.scrollTop = MESSAGES.scrollHeight;
}