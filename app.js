const express = require('express');

// create express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
 
// listen for requests
app.listen(3000);

// Routing and sending html pages
app.get('/', (req,res) => {
    // res.send('<p>Hello! Home page</p>');
    // res.sendFile('./views-html/index.html', {root: __dirname});
    res.render('index');
});

app.get('/about', (req,res) => {
    // res.sendFile('./views-html/about.html', {root: __dirname});
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

// Redirecting routes
// app.get('/about-us', (req,res) => {
//     res.redirect('/about');
// });

// 404 Error page. Note: it should always be the last method in the file
app.use((req,res) => {
    // res.status(404).sendFile('./views-html/404.html', {root: __dirname});
    res.render('404');
});
