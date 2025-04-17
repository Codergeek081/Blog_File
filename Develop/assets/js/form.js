// Select the form element
let formElement = document.querySelector("#form");

// Handle form submission
function handleFormSubmission(event) {
  event.preventDefault();
  let username = document.querySelector("#username").value.trim();
  let title = document.querySelector("#title").value.trim();
  let content = document.querySelector("#content").value.trim();
  let errorElement = document.querySelector("#error");

  if (!username || !title || !content) {
    errorElement.textContent = "Please complete the form.";
  } else {
    const blogPost = { username, title, content };
    storeLocalStorage(blogPost); // Use the helper from logic.js
    redirectPage("blog.html");
  }
}

// Add event listener to form
formElement.addEventListener("submit", handleFormSubmission);
