const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');

// create express app
const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://hariharan:hari231@nodecrash.kzfhh.mongodb.net/nodecrash?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result)=> app.listen(3000))
        .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');
 
// listen for requests
// app.listen(3000);

// to allow express to acess static files
app.use(express.static('public'));

// 3rd party middleware to log request details
// app.use(morgan('dev'));

// Middleware to parse data coming from UI
app.use(express.urlencoded({ extended: true }));

// Routing and sending html pages
app.get('/', (req,res) => {
    // res.send('<p>Hello! Home page</p>');
    // res.sendFile('./views-html/index.html', {root: __dirname});
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ];
    // res.render('index', { title: 'Home', blogs });
    res.redirect('/blogs');
});

app.get('/about', (req,res) => {
    // res.sendFile('./views-html/about.html', {root: __dirname});
    res.render('about', { title: 'About' });
});

// blog routes basic save,find,findById
// app.get('/add-blog', (req,res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'More about my new blog'
//     });
//     blog.save()
//         .then((result)=> {
//             res.send(result)
//         })
//         .catch((err)=> {
//             console.log(err)
//         });
// });

// app.get('/all-blogs', (req,res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req,res) => {
//     Blog.findById('62a784e80c1eed7ea12c296b')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// Blog Routes
app.use('/blogs', blogRoutes);

// Redirecting routes
// app.get('/about-us', (req,res) => {
//     res.redirect('/about');
// });

// 404 Error page. Note: it should always be the last method in the file
app.use((req,res) => {
    // res.status(404).sendFile('./views-html/404.html', {root: __dirname});
    res.render('404', { title: '404' });
});
