// 7. Advanced Error Handling & Debugging
// Custom Error Handling
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message); // Call the parent constructor (Error)
        this.name = "CustomError"; // Set custom error name
        this.statusCode = statusCode; // Additional property
    }
}

try {
    throw new CustomError("Something went wrong!", 400);
} catch (error) {
    console.error(`Error: ${error.message}, Status Code: ${error.statusCode}`);
}

// Using try-catch in Async Code
async function fetchData() {
    try {
        let response = await fetch("https://invalid-url.com"); // Invalid URL
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

fetchData();

// Debugging with Chrome DevTools
