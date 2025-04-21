function signUp() {
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (username === "" || email === "" || password === "") {
        alert("Please enter a username, an email and password.");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Sign-up successful! Please login.");
    toggleForms();
}

function logIn() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    let storedUsername = localStorage.getItem("username");

    if (email === storedEmail && password === storedPassword) {
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");

        // Set username in dashboard
        document.getElementById("display-username").innerText = storedUsername;
    } else {
        alert("Invalid username or password.");
    }
}

function toggleForms() {
    document.getElementById("signup-container").classList.toggle("hidden");
    document.getElementById("login-container").classList.toggle("hidden");
}
