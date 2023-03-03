/* 
    @author: Monidepa Ghosh
	@desc: js for index.html (admin site)
	@file path from root: Ex ./index.js/
*/

var nrifintech="NRI TRAVEL";
var booking = `My Bookings`; 
var logout="Logout";

// document.getElementById("nrifintech").innerHTML=nrifintech;
// document.getElementById("booking").innerHTML = booking; 
// document.getElementById("logout").innerHTML = logout;

document.querySelector(".nrifintech").innerHTML=nrifintech;
document.querySelector(".booking").innerHTML=booking;
document.querySelector(".logout").innerHTML=logout;

function openSidebar() {
	console.log("OPEN")
	document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeSidebar() {
	document.getElementById("mySidebar").style.display = "none";
  }





  function firstdiv(){
	document.getElementById("firstdiv").style.display = "block";
	document.getElementById("seconddiv").style.display = "none";
	document.getElementById("thirddiv").style.display = "none";
	document.getElementById("fourthdiv").style.display = "none";
	document.getElementById("fifthdiv").style.display = "none";
	document.getElementById("text1").style.color="red";
	document.getElementById("text2").style.color="black";
	document.getElementById("text3").style.color="black";
	document.getElementById("text4").style.color="black";
	document.getElementById("text5").style.color="black";
  }

  function seconddiv(){
	document.getElementById("firstdiv").style.display = "none";
	document.getElementById("seconddiv").style.display = "block";
	document.getElementById("thirddiv").style.display = "none";
	document.getElementById("fourthdiv").style.display = "none";
	document.getElementById("fifthdiv").style.display = "none";
	document.getElementById("text1").style.color="black";
	document.getElementById("text2").style.color="red";
	document.getElementById("text3").style.color="black";
	document.getElementById("text4").style.color="black";
	document.getElementById("text5").style.color="black";
  }

  function thirddiv(){
	document.getElementById("firstdiv").style.display = "none";
	document.getElementById("seconddiv").style.display = "none";
	document.getElementById("thirddiv").style.display = "block";
	document.getElementById("fourthdiv").style.display = "none";
	document.getElementById("fifthdiv").style.display = "none";
	document.getElementById("text1").style.color="black";
	document.getElementById("text2").style.color="black";
	document.getElementById("text3").style.color="red";
	document.getElementById("text4").style.color="black";
	document.getElementById("text5").style.color="black";
  }

  function fourthdiv(){
	document.getElementById("firstdiv").style.display = "none";
	document.getElementById("seconddiv").style.display = "none";
	document.getElementById("thirddiv").style.display = "none";
	document.getElementById("fourthdiv").style.display = "block";
	document.getElementById("fifthdiv").style.display = "none";
	document.getElementById("text1").style.color="black";
	document.getElementById("text2").style.color="black";
	document.getElementById("text3").style.color="black";
	document.getElementById("text4").style.color="red";
	document.getElementById("text5").style.color="black";
  }

  function fifthdiv(){
	document.getElementById("firstdiv").style.display = "none";
	document.getElementById("seconddiv").style.display = "none";
	document.getElementById("thirddiv").style.display = "none";
	document.getElementById("fourthdiv").style.display = "none";
	document.getElementById("fifthdiv").style.display = "block";
	document.getElementById("text1").style.color="black";
	document.getElementById("text2").style.color="black";
	document.getElementById("text3").style.color="black";
	document.getElementById("text4").style.color="black";
	document.getElementById("text5").style.color="red";
  }

//   $(document).ready(function() {
// 	var fieldIndex = 1;
// 	$("#add-field").on("click", function() {
// 	  var newField = $("<tr></tr>");
// 	  var newroute = $("<td></td>");
// 	  var newInput = $("<input>");
// 	  newField.append(newroute);
// 	  newField.append(newInput);
// 	  newInput.attr("type", "text").attr("id", "field-" + (fieldIndex + 1)).attr("name", "field-" + (fieldIndex + 1));
	  

// 	  var newtiming = $("<td></td>");
// 	  var newInput2 = $("<input>");
// 	  newField.append(newtiming);
// 	  newInput2.append(newInput2);
// 	  newInput.attr("type", "text").attr("id", "field-" + (fieldIndex + 1)).attr("name", "field-" + (fieldIndex + 1));





// 	  fieldIndex++;
// 	});
//   });


  $(document).ready(function() {
	var fieldIndex = 1;
	$(".add-field").on("click", function(event) {
		event.preventDefault();
	// Create a new row with two text fields
	var newRow = "<tr><td><input type='text' name='name'></td><td><input type='text' name='email'></td></tr>";
	
	// Append the new row to the table body
	$(".container").append(newRow);
	});
  });



  function on() {
	// document.getElementById("overlay").style.display = "block";
	document.querySelector(".search-overlay").style.display="block";
}

function off() {
	// document.getElementById("overlay").style.display = "none";
	document.querySelector(".search-overlay").style.display="none";
}

function on2() {
	// document.getElementById("overlay").style.display = "block";
	document.querySelector(".bus-overlay").style.display="block";
}

function off2() {
	// document.getElementById("overlay").style.display = "none";
	document.querySelector(".bus-overlay").style.display="none";
}

function on3() {
	// document.getElementById("overlay").style.display = "block";
	document.querySelector(".destination-overlay").style.display="block";
}

function off3() {
	// document.getElementById("overlay").style.display = "none";
	document.querySelector(".destination-overlay").style.display="none";
}

// $(document).ready(function() {
    
//     var wrapper = $(".container");
//     var add_button = $(".add-field");

    
//     $(add_button).click(function(e) {
//         e.preventDefault();
//         $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="delete">Delete</a></div>'); //add input box
//     });

//     $(wrapper).on("click", ".delete", function(e) {
//         e.preventDefault();
//         $(this).parent('div').remove();
//     })
// });

// function add_field() {
// 	const h = document.querySelector("container");
// 	let html = ""
// }


function add_field() {
	var table = document.querySelector(".container");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	var div1 = document.querySelector(".from");
	var newDiv1 = document.createElement("div");
	newDiv1.innerHTML = div1.innerHTML;
	cell1.appendChild(newDiv1);

	var div2 = document.querySelector(".to");
	var newDiv2 = document.createElement("div");
	newDiv2.innerHTML = div2.innerHTML;
	cell2.appendChild(newDiv2);

	// var originalCell1 = div1.parentNode;
	// originalCell1.appendChild(newDiv1.cloneNode(true));

	// var originalCell2 = div2.parentNode;
	// originalCell2.appendChild(newDiv2.cloneNode(true));
  }
  