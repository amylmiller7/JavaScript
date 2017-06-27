# Coding for Writers projects

These projects include the following: 
* Course exercises
* Projects that build on course exercises
* My own projects that might use a few items learned in the course but mainly deviate far from the course lessons

| Project | Source description |
| ------------- |-------------|
| CFW_1 | Udemy Coding for Writers exercise on operators | 
| CFW_2 | Own project developed from items learned in Udemy Coding for Writers course  |
| CFW_3 | Project that builds on Udemy Coding for Writers exercise on HTML and JS. Consolidated functions about manipulating user input. |
| CFW_4 | Project that builds on Udemy Coding for Writers exercise on functions. Created function to output the returned values from other functions to web page. |
| CFW_5 | Own project to create and validate credentials when setting up account. Inspired by simple login function used in Udemy Coding for Writers exercise that matched credentials to hardcoded values. |
| CFW_6 | Udemy Coding for Writers exercise on loops |
| CFW_7 | Own project that creates arrays to store user input, manipulates input, and outputs manipulated input to web page.  |
| CFW_8 | Own project that uses objects, manipulates user input, allows user to sort data, and changes the contents of the web page. |
| CFW_9 | Project that builds on Udemy Coding for Writers exercise on libraries. Uses my own data. |
| CFW_10 | Project that builds Udemy Coding for Writers final project. Extended functionality beyond items learned in course or required for final project, e.g., calls submit() function when use clicks Return, checks if no user input in textbox, clears user input from textbox after content added to web page, converts user input to lower case, scrolls to bottom of web page when new content added. |


## 1_addNumbers 
**Summary:** Adds numbers that the user entered. Converts text that the user entered from string to number. Displays result on webpage.  

**JS:** Creates function. Uses built-in function Number to convert text from string to number. Uses innerHTML to add results to webpage.

## 2_addAverageNumbers 
**Summary:** Adds and averages numbers that the user entered. Converts text that the user entered from string to number. Changes width of text boxes to the number of characters that the user entered. Displays results on webpage.  

**JS:**  Creates functions. Calls functions within other functions. Uses built-in function Number to convert text from string to number. Uses size property to set width of text box. Uses innerHTML to add results to webpage.

## 3_nameInput 
**Summary:** Manipulates the first name and last name that the user entered. Displays name on webpage two ways: first name followed by last name and last name followed by first name.   

**JS:** Creates functions. Uses value property to retrieve values. Uses innerHTML to add results to webpage. 

## 4_nameManipulation
**Summary:** Manipulates the first name and last name that the user entered. Displays name on webpage two ways: first name followed by last name and last name followed by first name. Calculates and displays the length of the full name (including space between names). Allows user to clear data from input fields and webpage. 

**JS:** Creates functions. Uses value property to retrieve values. Uses length property. Uses innerHTML to add results to webpage. Uses value and innerHTML properties with document.getElementById(“x”) to clear text boxes and webpage.

## 5_createAccount 
**Summary:** Creates a username and password for an account. Confirms that user entered text in text boxes. Compares the number of characters in the password and password confirmation text boxes. Checks that the text input in the password and password confirmation text boxes match. Adds messages in alerts and webpage. Clears text in text boxes.  

**JS:** Creates functions. Uses value property with document.getElementById(“x”) to retrieve values from text boxes and style property to change format. Uses innerHTML to add text to and remove text from webpage. Uses length property to confirm that password is valid length. Uses if/elseif/else statements. Uses alerts.

## 6_loops 
**Summary:** Iterates over loops. Adds 1 number, adds 2 numbers, subtracts 1 number, subtracts 3 numbers, and multiplies by 2. Displays results on webpage.  
**JS:** Creates functions. Uses for loops. Uses innerHTML to add results to webpage.

## 7_arraysFood
**Summary:** Gathers user input from checkboxes and text box. To practice array creation and manipulation. Creates array. Adds selected items and text input in text box to the array. Sorts items alphabetically before returning array as a list with a message to the user.  

**JS:** Creates functions. Creates array. Uses document.getElementById(“x”) and document.getElementByTagName(“x”) to retrieve values from form and check items in form. Uses push() method to add user input to array. Uses sort() method to alphabetize items in array. Uses for loops and if statements. Uses innerHTML to add results to webpage.

## 8_objectsMovies
**Summary:** Displays list of movie and modifies based on user input. Allows user to sort movies in the list based on title, year, and category. Allows user to add movies to the list and sort them based on title, year, and category.

**JS:** Creates object type with object constructor function. Creates new movie object using that constructor. Creates array and adds movie objects to array. Uses sort method on array. Loops through array to add movie object properties or movie object properties sorted by a particular property to webpage. Creates functions, uses if statements, uses for loops. Hides/unhides parts of webpage (movie list, movie form, buttons) based on classes. Retrieves info from user input in form. Creates new movie object from user input in form, adds to array, displays on webpage, and sorts based on button clicked. 

## 9_libraryOngoingEducation
**Summary:** Displays select Ongoing Education coursework in chart form. Uses a JavaScript library to display the chart. Data gathered from list of recent coursework in XML repo, project *Ongoing Education*.

## 10_therapistBot
**Summary:** Creates a therapist bot that user interacts with by typing comments into text box. Therapist bot responds to user's input.
 
**JS:** Uses constant arrays to house therapist responses. Outputs user input and random therapist responses to web page. User input processed upon clicking Submit button or hitting Return. Clears text box after user input has been output to web page.

Checks user input for the following: no input, ends in question mark or exclamation point, in all upper case letters, or contains first person words. Responds to user input based on what is found. Replaces user input that contains first person words with second person words, changes first word to lower case, and adds this modified user input to a random therapist question.

As user and therapist conversation fills a set window size, automatically scrolls to the bottom of the therapy session window so user can view latest messages. 


## Project folders contain:  
* HTML file
* CSS file, if used
* JavaScript file(s)
* README documentation
* Technical documentation
* CHANGELOG documentation