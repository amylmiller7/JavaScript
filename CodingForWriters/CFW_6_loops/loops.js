// Udemy Coding for Writers exercise on loops
// Iterates over loops. 
// Adds 1 number, adds 2 numbers, subtracts 1 number, subtracts 3 numbers, and multiplies by 2. Displays results on webpage.

// Iterates over loop, which adds 1 to the variable. Adds list of modified variable to resultPar1 paragraph. 
function addLoop() {
  var result = "";
    for (var i = 0; i < 10; i++) {
        result += "<p>" + i + "</p>";
    }
    resultPar1.innerHTML = result + "<br>";
}

// Iterates over loop, which adds 2 to the variable. Adds list of modified variable to resultPar2 paragraph. 
function addTwoLoop() {
    var result = "";
    for (var i = 0; i < 10; i += 2) {
        result += "<p>" + i + "</p>";
    }
    resultPar2.innerHTML = result + "<br>";
}

// Iterates over loop, which subtracts 1 from the variable. Adds list of modified variable to resultPar3 paragraph.
function countDownLoop() {
    var result = "";
    for (var i = 8; i > 0; i--) {
        result += "<p>" + i + "</p>";
    }
    resultPar3.innerHTML = result + "<br>";
}

// Iterates over loop, which subtracts 3 from the variable. Adds list of modified variable to resultPar4 paragraph.
function countDownByThreeLoop() {
    var result = "";
    for (var i = 9; i >= 0; i -= 3) {
        result += "<p>" + i + "</p>";
    }
    resultPar4.innerHTML = result + "<br>";
}

// Iterates over loop, which multiples the variable by 2. Adds list of modified variable to resultPar5 paragraph.
function countPowerOfTwosLoop() {
    var result = "";
    for (var i = 1; i < 100; i *= 2) {
        result += "<p>" + i + "</p>";
    }
    resultPar5.innerHTML = result;
}