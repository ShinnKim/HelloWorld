function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Set the correct username and password
    const correctUsername = "fatty";
    const correctPassword = "pass123";

    // Check if the username and password match the correct values
    if (username === correctUsername && password === correctPassword) {
        // If correct, redirect to the next page (e.g., dashboard.html)
        window.location.href = "home.html";  // Change this to your desired page
    } else {
        // If incorrect, show an error message
        document.getElementById("error-message").textContent = "Invalid username or password!";
    }
}
