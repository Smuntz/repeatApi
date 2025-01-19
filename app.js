// Import the required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to echo the string
app.post('/stringReturn', (req, res) => {
    // Extract the string from the request body
    const { input } = req.body;

    // Check if the input is provided
    if (typeof input !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Please provide a string.' });
    }

    // Send back the same string as the response
    res.json({ echoed: input });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
