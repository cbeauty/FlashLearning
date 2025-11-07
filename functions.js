
function getRandomInt(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fadeOut(element, duration) {
 // const element = document.getElementById(elementId);
  if (!element) return;

  let opacity = 1;
  element.style.opacity = opacity;
  element.style.display = 'block'; // Ensure the element is visible before fading in

  const interval = 10; // Milliseconds between opacity increments
  const increment = interval / duration; // How much to increase opacity each interval

  const fadeEffect = setInterval(() => {
    if (opacity > 0) {
      opacity -= increment;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeEffect); // Stop the interval when fully faded in
    }
  }, interval);
}

 
function fadeIn(element, duration) {
 // const element = document.getElementById(elementId);
  if (!element) return;

  let opacity = 0;
  element.style.opacity = opacity;
  element.style.display = 'block'; // Ensure the element is visible before fading in

  const interval = 10; // Milliseconds between opacity increments
  const increment = interval / duration; // How much to increase opacity each interval

  const fadeEffect = setInterval(() => {
    if (opacity < 1) {
      opacity += increment;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeEffect); // Stop the interval when fully faded in
    }
  }, interval);
}

async function loadTextFile(fileURL) {
    try {
        const response = await fetch(fileURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const textString = await response.text();
        // Split the text into an array by newline characters
        const textArray = textString.trim().split(/\r?\n/);
        return textArray;
    } catch (error) {
        console.error("Error fetching the file:"+fileURL, error);
        return [];
    }
}

function customAlert(message) {
    const overlay = document.getElementById('customAlertOverlay');
    const body = document.getElementById('customAlertBody');

    // Set the message content
    body.innerHTML = message;

    // Display the alert
    overlay.style.display = 'flex'; // Use 'flex' to center the box easily
}

function closeCustomAlert() {
    const overlay = document.getElementById('customAlertOverlay');
    
    // Hide the alert
    overlay.style.display = 'none';
}
