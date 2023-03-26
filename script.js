function redirect() {
	let nameInput = document.getElementById("nameInput").value;
	if (nameInput == "xyz"|| nameInput == "Xyz") {
		window.location.href = "waseel.html";
	}

	if (nameInput == "noureen"|| nameInput == "Noureen") {
		window.location.href = "back.html";
	}

    
    
    else {
		document.getElementById("errorMessage").innerHTML = "Please enter correct name";
	}
}
