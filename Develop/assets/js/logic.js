let mode = localStorage.getItem("mode") || 'light';
const body = document.querySelector("body");
const circle = document.querySelector(".circle");

// Read from localStorage
function readLocalStorage() {
  let data = localStorage.getItem("blogData");
  return data ? JSON.parse(data) : [];
}

// Store to localStorage
function storeLocalStorage(data) {
  let blogData = readLocalStorage();
  blogData.push(data);
  localStorage.setItem("blogData", JSON.stringify(blogData));
}

// Redirect helper
let redirectURL = '';
const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// Apply light or dark mode
function applyMode() {
  if (mode === 'dark') {
    body.classList.add('dark');
    if (circle) circle.style.setProperty('--circle-color', 'black');
  } else {
    body.classList.remove('dark');
    if (circle) circle.style.setProperty('--circle-color', 'yellow');
  }
}

// Toggle button logic
const toggleButton = document.getElementById('toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    mode = (mode === 'light') ? 'dark' : 'light';
    localStorage.setItem('mode', mode);
    applyMode();
  });
}

// Set mode on page load
applyMode();
