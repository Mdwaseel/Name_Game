function redirect() {
	let nameInput = document.getElementById("nameInput").value;
	if (nameInput == "xyz"|| nameInput == "Xyz") {
		window.location.href = "waseel.html";
	}
	if (nameInput == "sara"|| nameInput == "Sara") {
		window.location.href = "sara.html";
	}



	

    
    
    else {
		document.getElementById("errorMessage").innerHTML = "Please enter correct name";
	}
}
