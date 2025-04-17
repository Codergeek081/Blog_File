// Select main and back button
const main = document.querySelector('main');
const backButton = document.getElementById('back');

// Helper to create and return an element
function buildElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}

// Show message if no posts exist
function noPosts() {
  const noPostsMessage = buildElement('h2', 'no-posts', 'No Blog posts yet...');
  main.appendChild(noPostsMessage);
}

// Render blog posts from storage
function renderBlogList(posts) {
  if (posts.length === 0) {
    noPosts();
  } else {
    posts.forEach(post => {
      const container = document.createElement('div');
      container.className = 'post';

      const title = buildElement('h3', 'post-title', post.title);
      const content = buildElement('p', 'post-content', post.content);
      const author = buildElement('p', 'post-author', `Posted by: ${post.username}`);

      container.appendChild(title);
      container.appendChild(content);
      container.appendChild(author);

      main.appendChild(container);
    });
  }
}

// Fetch posts and render
const blogPosts = readLocalStorage();
renderBlogList(blogPosts);

// Back button click
backButton.addEventListener('click', () => {
  redirectPage('index.html');
});
