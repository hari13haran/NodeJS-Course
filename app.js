const express = require('express');

// create express app
const app = express();

// listen for requests
app.listen(3000);

// Routing and sending html pages
app.get('/', (req,res) => {
    // res.send('<p>Hello! Home page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req,res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});

// Redirecting routes
app.get('/about-us', (req,res) => {
    res.redirect('/about');
});

// 404 Error page. Note: it should always be the last method in the file
app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});
