// Project that builds on Udemy Coding for Writers exercise on libraries 

// Displays select Ongoing Education coursework in chart form. Uses a JavaScript library to display the chart. 

function drawChart() {
	// !! Shortcut to convert JS object to true if not null, false if null
	// Checks if canvas element is supported
	if (!!document.createElement('canvas').getContext) {
		var mychart = new AwesomeChart('canvas1');
		mychart.data = [4, 1, 4, 2, 5, 5, 1, 1, 10, 1, 2, 3];
		mychart.title = "Ongoing Education Coursework \u2014 Select Topics";
		mychart.labels = ["API", "Command Line", "CSS", "Git/GitHub", "HTML", "JavaScript", "RoboHelp", "Tech Editing", "Tech Writing", "Web Design", "Web Dev", "XML"];
		mychart.draw();
	}
}