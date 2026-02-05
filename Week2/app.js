const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
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