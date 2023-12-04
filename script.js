// URL to fetch cat facts from
const url = 'https://catfact.ninja/fact';

// Function to fetch a cat fact from the provided URL asynchronously
async function fetchCatFact() {
    try {
        // Fetches data from the URL
        const response = await fetch(url);
        
        // Checks if the response is okay (status code in the range 200-299)
        if (response.ok) {
            // Parses the response body as JSON
            const data = await response.json();
            
            // Calls the displayFact function to display the fetched fact on the webpage
            displayFact(data.fact);
        } else {
            // Throws an error if the response is not okay
            throw new Error('Request failed.');
        }
    } catch (error) {
        // Catches any errors that might occur during the fetching process and logs them to the console
        console.error('Error fetching data:', error);
    }
}

// Function to display a cat fact on the webpage
function displayFact(fact) {
    // Creates a new paragraph element
    const newP = document.createElement('p');
    
    // Sets the text content of the paragraph to the fetched cat fact
    newP.textContent = fact;
    
    // Adds a CSS class to the paragraph element
    newP.classList.add('cat-fact');
    
    // Appends the paragraph to the body of the HTML document
    document.body.append(newP);
}

// Event listener that triggers the fetchCatFact function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchCatFact);

// Event listener for a button with the ID "reload" that fetches a new cat fact when clicked
const reloadButton = document.getElementById('reload');
reloadButton.addEventListener('click', function(event) {
    // Prevents the default behavior of the button (prevents page reload)
    event.preventDefault();
    
    // Calls the fetchCatFact function to fetch and display a new cat fact
    fetchCatFact();
});
