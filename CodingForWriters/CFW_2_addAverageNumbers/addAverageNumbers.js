// Own project developed from items learned in Udemy Coding for Writers course. Not an exercise for Udemy Coding for Writers course.

// Adds and averages numbers that the user entered. 
// Converts the text that the user entered from string to number. Changes width of text boxes to the number of characters that the user entered. Displays results on webpage.

// Displays results of adding and averaging numbers that the user entered. Calls setWidth(), add(), and average(). Calls built-in function Number to convert text that user entered from string to number. 
function displayResults() {
    // Calls setWidth() function to set width of text boxes.
    setWidth(num1, Number(num1.value));
    setWidth(num2, Number(num2.value));
    
    // Calls add() function.
    var addResult = add(Number(num1.value), Number(num2.value)),
        // Calls average() function.
        averageResult = average(Number(num1.value), Number(num2.value)); 
            
    // Adds addResult and averageResult to webpage.
    resultAdd.innerHTML = "Total: " + addResult;
    resultAverage.innerHTML = "Average: " + averageResult;
}

// Sets the width of a text box to the number of characters that equals the number entered in the text box.
function setWidth(textBox, numChar) {
    textBox.size = numChar;
}

// Returns the total of two numbers that the user entered.
function add(x, y) {
    return (x + y);
} 

// Returns the average of two numbers that the user entered. 
function average(x, y) {
    return (x + y) / 2;   
}