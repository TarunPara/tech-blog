// Function to handle the signup form submission
async function signupFormHandler(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the username, email, and password from the form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // Proceed only if all fields are provided
    if (username && email && password) {
        // Send a POST request to create a new user
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        // If the signup is successful, redirect to the dashboard, otherwise alert the error
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

// Attach the event listener to the signup form for handling submission
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
