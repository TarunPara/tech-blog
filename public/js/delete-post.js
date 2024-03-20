// Function to handle post deletion
async function deleteFormHandler(event) {
    event.preventDefault(); // Prevent default behavior

    // Get the post ID from the URL
    const id = window.location.toString().split('/').pop();
      
    // Send a DELETE request to the server
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
      
    // Redirect to dashboard if successful, otherwise show an error
    response.ok ? document.location.replace('/dashboard/') : alert(response.statusText);
}

// Add click event listener to the delete button
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
