// Utility functions for the website

// Get the current date and time
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

// Get the current year
function getCurrentYear() {
  return new Date().getFullYear();
}

// Get the user's screen size
function getScreenSize() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  return { width: windowWidth, height: windowHeight };
}

// Export the utility functions
export { getCurrentTime, getCurrentYear, getScreenSize };