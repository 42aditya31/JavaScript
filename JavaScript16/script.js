// Function to fetch a joke from an API using Async/Await
async function fetchJoke() {
  try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke'); // Fetch joke from API
      const data = await response.json(); // Convert response to JSON
      document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`; // Display joke
  } catch (error) {
      console.error("Error fetching joke:", error);
      document.getElementById('joke').innerText = "Failed to load joke. Try again!";
  }
}

// Add event listener to button
document.getElementById('getJoke').addEventListener('click', fetchJoke);



// https://github.com/microsoft/vscode/issues/240064