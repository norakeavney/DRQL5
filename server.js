// imports the Express library so we can use it.
const express = require('express'); 
// create an Express application called "app."
const app = express(); 
// We set a variable "port" to 3000, which is the port number where our server will listen.
const port = 3000; 

// This line sets up a route for the homepage ('/').
app.get('/', (req, res) => { 
    // When someone visits the homepage, the server responds with "Hello World."
    res.send('Hello World'); 
});

// This line makes the server start listening on the specified port.
app.listen(port, () => { 
    // It logs a message to the console to tell us the server is running.
    console.log(`Server is running on http://localhost:${port}`); 
});
