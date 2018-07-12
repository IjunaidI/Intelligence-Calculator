let intMeters = ["Dumb as a Chicken","Imbecile","a Idiot","Below Average","Average","Above Average","Intelligent","Genius","God Gifted","Einstein or something?"]
		
function calculate() {
	if (document.querySelector('input').value === "") {
	alert("Enter your Name");
}else{
	intMeter = intMeters[Math.floor(Math.random()*intMeters.length)];
	document.getElementById("para").innerHTML = "Your are " + intMeter;
	}
}
