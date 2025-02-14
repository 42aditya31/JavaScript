// Select the HTML element using its ID
const heading = document.getElementById('heading');
const button = document.getElementById('changeButton');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Change the text content of the heading
    heading.textContent = 'Welcome to the DOM!';
});
