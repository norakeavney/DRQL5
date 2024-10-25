// imports the Express library so we can use it.
const express = require('express'); 
// create an Express application called "app."
const app = express(); 
// We set a variable "port" to 3000, which is the port number where our server will listen.
const port = 3000; 

// This line sets up a route for the homepage ('/').
app.get('/hello/:name/:lname', (req, res) => {
    const name = req.params.name;
    const lname = req.params.lname;
    res.send(`Hello ${name} ${lname}`);
});

// This line makes the server start listening on the specified port.
app.listen(port, () => { 
    // It logs a message to the console to tell us the server is running.
    console.log(`Server is running on http://localhost:${port}`); 
});

//Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
