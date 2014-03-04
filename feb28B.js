/**
 * @author Prem Khanal
 */

/*
 * Important Prpject Stpes that need to be crarefully followed
 1. Setup dociment ready
 2. Load the google charting package
 3. Load data
 4. Construct the chart

 */

	console.log("My Fresh Data");
	
	/* This the function to define the newData
	 * 
	 */
	
	function newData(unemployment) {
		

	console.log(unemployment);
	
	var myDataBank = [];
	
	/* This is my container
	 * 
	 */
	var headerArray =["Date", "Value"];
	myDataBank.push(headerArray);
	
	/* Here I am telling my computer to look into just the observation section of the the json file 
	 * 
	 */
	
	var myDataStore = unemployment.observations;
	
	/*Here comes an important task of coverting my json data to an array of arrays because the structure that I have in the 
		 * json need to in the format that is accpetable to the google visulaization format. For that I will be using a fir 
		 * loop
		 * 
		 */
		
		
	for (var i = 350; i < myDataStore.length; i++) {
		
		var newData = myDataStore[i];
		/* I am telling the computer that of the many variables that I have in my json, I only need date and value and that 
		 * should appear in the order the date should come in the X-axis and value should come in the Y-axis.
		 * 
		 */
		var newArray = [newData.date, Number(newData.value)];
		
		/* This is the command to put my Data Array into my data list 
		 * 
		 */
		
		myDataBank.push(newArray);
		
		console.log("myDataBank");
		
		
		/*This is google array to data table by putting the name of the function and data list
		 * 
		 */
		var myDataTable = google.visualization.arrayToDataTable(myDataBank);
		
		/* This title that I put in the js file is not apprearing but the one that I put in the html file under h1 ND h2 is appearing 
		 * with the chart.... I don't know why
		 * 
		 */
		
		var options = {title: 'Umemployment worse in 20 years'};
		
	};

	/* this is the google visualization line chart command 
	 * 
	 */
	var myNewChart = new google.visualization.LineChart(document.getElementById("dataBankDiv"));
	myNewChart.draw(myDataTable);
	
	
	console.log("Load the page");
	
}


/** Here is the command to define the new callback fountion named "chartData" and the console.log function will chekc whether it 
 * is workng properly. To CHeck, we have to go to the html page opened with Firefox and see in the console where I should be 
 * able to see the "show my databak" */

function chartData() {
	console.log("show my databank");
	
	/* Now I am loading the get function, a function that will take the data that we load in the json file. I am also introducting 
	 * a new callback called newData and "json" is my another parameter
	 */

	$.get("unemployment.json", newData, "json");


}


function dataSource() {
	console.log("Here is my page");

	/* Now I am going to work on gooogle chart loading function.
	 * and in addition to the property it has I am gioing to add a new property called callback and chartData is going to be 
	 * the name of callback funtion. */

	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "chartData"
	});

}

/* Docment ready function and dataSource is the name of my callback. */
$(document).ready(dataSource);

