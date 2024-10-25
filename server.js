// imports the Express library so we can use it.
const express = require('express'); 
// create an Express application called "app."
const app = express(); 
// We set a variable "port" to 3000, which is the port number where our server will listen.
const port = 3000; 

app.use(express.static('public')); //Serve all static files 

// This line sets up a route for the homepage ('/').
app.get('/hello/:name/:lname', (req, res) => {
    const name = req.params.name;
    const lname = req.params.lname;
    res.send(`Hello ${name} ${lname}`);
});

//Sets up route for movies page
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(201).json({ myMovies: movies });


});

const path = require('path');

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
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
