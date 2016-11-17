// Udemy Coding for Writers exercise on operators
// Adds numbers that the user entered.
// Converts the text that the user entered from string to number. Displays results on webpage.

// Displays results of adding numbers that the user entered. Calls built-in function Number to convert the text that the user entered from string to number.  
function displayResult() {
    var result = Number(num1.value) + Number(num2.value);
    resultPar.innerHTML = "Result: " + result;
}