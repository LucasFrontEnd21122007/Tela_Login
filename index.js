function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simples validação de login (para fins ilustrativos)
    if (username === "user" && password === "pass") {
        errorMessage.textContent = "Login successful!";
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
}