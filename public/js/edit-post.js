// Function to handle post edit form submission
async function editFormHandler(event) {
    event.preventDefault();

    // Retrieve the updated title and content from the form
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value.trim();

    // Get the post ID from the URL
    const id = window.location.toString().split('/').pop();

    // Send a PUT request to update the post
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
    });

    // Redirect to dashboard if successful, otherwise show an error
    response.ok ? document.location.replace('/dashboard/') : alert(response.statusText);
}

// Attach event listener to the edit post form submission
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
