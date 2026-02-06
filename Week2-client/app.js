const apiUrl = 'http://localhost:3000/api/v1/articles';
// Function to fetch posts
async function fetchPosts() {
    console.log("Fetching posts...");
    const response = await fetch(apiUrl); // 1. Send the Request
    const posts = await response.json(); // 2. Read the JSON Body
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear "Loading..." text
    // 3. Loop through the data and build HTML
    // We only take the first 10 for simplicity
    posts.slice(0, 10).forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
<h2>${post.title}</h2>
<p>${post.body}</p>
`;
        postsContainer.appendChild(postElement);
    });
}
// Run immediately when page loads
fetchPosts();
async function submitPost() {
    const title = document.getElementById('post-title').value;
    const body = document.getElementById('post-body').value;
    // Send data to OUR server
    await fetch('http://localhost:3000/api/v1/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    // Refresh the list
    fetchPosts();
}
async function submitPost() {
    const title = document.getElementById('post-title').value;
    const body = document.getElementById('post-body').value;
    // Send data to OUR server
    await fetch('http://localhost:3000/api/v1/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, fullText: body }) // Note: Backend expects fullText, not body!
    });
    // Refresh the list
    fetchPosts();
}
