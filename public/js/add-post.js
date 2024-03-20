// Function to handle new post form submission
async function newFormHandler(event) {
    event.preventDefault();  // Prevent default form submission behavior

    // Retrieve title and content from the form
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="content"]').value;

    // Send a POST request to create a new post
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' }
    });

    // Redirect to dashboard if successful, otherwise alert the error
    response.ok ? document.location.replace('/dashboard') : alert(response.statusText);
};

// Attach event listener to form submission
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
