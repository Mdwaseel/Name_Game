function redirect() {
	let nameInput = document.getElementById("nameInput").value;
	if (nameInput == "xyz"|| nameInput == "Xyz") {
		window.location.href = "waseel.html";
	}

    
    
    else {
		document.getElementById("errorMessage").innerHTML = "Please enter correct name";
	}
}
