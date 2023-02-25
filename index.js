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
	document.getElementById("text1").style.color="red";
	document.getElementById("text2").style.color="black";
	document.getElementById("text3").style.color="black";
	document.getElementById("text4").style.color="black";
  }

  function seconddiv(){
	document.getElementById("firstdiv").style.display = "none";
	document.getElementById("seconddiv").style.display = "block";
	document.getElementById("thirddiv").style.display = "none";
	document.getElementById("fourthdiv").style.display = "none";
	document.getElementById("text1").style.color="black";
	document.getElementById("text2").style.color="red";
	document.getElementById("text3").style.color="black";
	document.getElementById("text4").style.color="black";
  }

  function thirddiv(){
	document.getElementById("firstdiv").style.display = "none";
	document.getElementById("seconddiv").style.display = "none";
	document.getElementById("thirddiv").style.display = "block";
	document.getElementById("fourthdiv").style.display = "none";
	document.getElementById("text1").style.color="black";
	document.getElementById("text2").style.color="black";
	document.getElementById("text3").style.color="red";
	document.getElementById("text4").style.color="black";
  }

  function fourthdiv(){
	document.getElementById("firstdiv").style.display = "none";
	document.getElementById("seconddiv").style.display = "none";
	document.getElementById("thirddiv").style.display = "none";
	document.getElementById("fourthdiv").style.display = "block";
	document.getElementById("text1").style.color="black";
	document.getElementById("text2").style.color="black";
	document.getElementById("text3").style.color="black";
	document.getElementById("text4").style.color="red";
  }