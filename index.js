
/* 

    @author: Arijit Saha
	@desc: js for index.html (Header & Footer Template)
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
