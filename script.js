function redirect() {
    let nameInput = document.getElementById("nameInput").value;
    
    if (nameInput.toLowerCase() === "sara") {
        window.location.href = "sara.html";
    } else if (nameInput.toLowerCase() === "saraa") {
        window.location.href = "sara.html";
    } else {
        document.getElementById("errorMessage").innerHTML = "Please enter a correct name";
    }
}
