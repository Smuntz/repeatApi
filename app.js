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
    if (typeof input !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Please provide a string.' });
    }

    try {
        // Try to parse the input string to ensure it's valid JSON
        const parsed = JSON.parse(input);
        console.log('Parsed JSON:', parsed); // Optional: For debugging purposes

        // Return the same string as the response
        res.json({ returnString: input });
    } catch (err) {
        // Handle JSON parsing errors
        return res.status(400).json({ error: 'Input string is not valid JSON.' });
    }
});

// Start the server
const PORT = process.env.PORT || 10000; // Use the PORT provided by Render or default to 10000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
