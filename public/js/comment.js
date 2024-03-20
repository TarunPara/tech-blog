// Function to handle comment form submission
async function commentFormHandler(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve comment text and post ID
    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/').pop();

    // Only proceed if there is comment text
    if (comment_text) {
        // Send a POST request to create a new comment
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ post_id, comment_text }),
            headers: { 'Content-Type': 'application/json' }
        });

        // Reload the page if successful, otherwise show an error
        response.ok ? document.location.reload() : alert(response.statusText);
    }
}

// Attach event listener to the comment form submission
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
