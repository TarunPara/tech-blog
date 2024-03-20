// Function to handle the login form submission
async function loginFormHandler(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the username and password from the form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // Proceed only if username and password are provided
    if (username && password) {
        // Send a POST request to the login endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        // Redirect to the dashboard if login is successful, otherwise alert the error
        response.ok ? document.location.replace('/dashboard') : alert(response.statusText);
    }
}

// Attach the event listener to the login form for handling submission
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
