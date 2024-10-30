// script.js

// Get the buttons, panels, and ellipses
const android1Button = document.getElementById('android1-button');
const desktop3Button = document.getElementById('desktop3-button');
const android2Panel = document.getElementById('android2-panel');
const desktop2Panel = document.getElementById('desktop2-panel');
const ellipse1 = document.getElementById('ellipse1');
const ellipse2 = document.getElementById('ellipse2');
const ellipse6 = document.getElementById('ellipse6');

// Store original positions
const originalPositionEllipse1 = 'translateY(0)'; // Original position for Ellipse 21
const originalPositionEllipse6 = 'translateY(0)'; // Original position for Ellipse 6

// Function to show panel with transition
function showPanel(panel) {
    panel.classList.add('active'); // Add active class to show the panel
    panel.style.display = 'block'; // Make sure it is block to allow opacity transition
    setTimeout(() => {
        panel.style.opacity = '1'; // Change opacity to 1 after display block
    }, 10); // Slight delay for transition to work
}

// Function to hide panel with transition
function hidePanel(panel) {
    panel.style.opacity = '0'; // Start fading out
    setTimeout(() => {
        panel.classList.remove('active'); // Remove active class after fading
        panel.style.display = 'none'; // Set display to none to hide
    }, 500); // Match this duration with the CSS transition duration
}

// Add event listener for Android Large 1 button
android1Button.addEventListener('click', function() {
    hidePanel(desktop2Panel); // Hide Desktop 2 panel if open
    showPanel(android2Panel); // Show Android Large 2 panel

    // Slide down animation for Ellipse 21
    ellipse1.style.transform = 'translateY(150px)'; // Adjust value to slide down to Ellipse 21 position in Android Large 2
});

// Add event listener for Desktop 3 button
desktop3Button.addEventListener('click', function() {
    hidePanel(android2Panel); // Hide Android Large 2 panel if open
    showPanel(desktop2Panel); // Show Desktop 2 panel

    // Slide animation for Ellipse 6 to position of Ellipse 12
    ellipse6.style.transform = 'translateY(100px)'; // Adjust value to match position of Ellipse 12
});

// Function to reset ellipse positions
function resetEllipsePositions() {
    // Reverse animation for Ellipse 21
    ellipse1.style.transition = 'transform 0.5s ease'; // Set transition for smooth movement
    ellipse1.style.transform = originalPositionEllipse1; // Reset position to original

    // Reverse animation for Ellipse 6
    ellipse6.style.transition = 'transform 0.5s ease'; // Set transition for smooth movement
    ellipse6.style.transform = originalPositionEllipse6; // Reset position to original
}

// Optional: To close the panels, add a click event outside the content to hide them
[android2Panel, desktop2Panel].forEach(panel => {
    panel.addEventListener('click', function(event) {
        if (event.target === panel) {
            resetEllipsePositions(); // Reset positions before hiding the panel
            hidePanel(panel); // Hide the panel when clicking outside content
        }
    });
});
