// Function to handle user logout
async function logout() {
    // Send a POST request to the logout endpoint
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    // Redirect to the homepage if logout is successful, otherwise alert the error
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

// Attach the event listener to the logout button for handling click events
document.querySelector('#logout').addEventListener('click', logout);
