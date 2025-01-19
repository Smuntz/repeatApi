// Import the required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to handle the string input
app.post('/stringReturn', (req, res) => {
    // Extract the string from the request body
    const { input } = req.body;

    // Check if the input is provided and is a string
    if (!Array.isArray(input)) {
        return res.status(400).json({ error: 'Invalid input. Please provide an array of strings.' });
    }

    try {
        // Iterate through the array to validate and parse each string
        const parsedItems = input.map((item) => {
            if (typeof item !== 'string') {
                throw new Error('Invalid array item: All items must be strings.');
            }
            // Try parsing the string as JSON
            return JSON.parse(item);
        });

        // Return the original input along with the parsed results
        res.json({
            returnString: input,
            parsed: parsedItems, // Optional: Include parsed data if needed
        });
    } catch (err) {
        // Handle JSON parsing errors
        return res.status(400).json({ error: 'One or more items in the input array are not valid JSON strings.' });
    }
});

// Start the server
const PORT = process.env.PORT || 10000; // Use the PORT provided by Render or default to 10000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
