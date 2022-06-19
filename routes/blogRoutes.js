const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// GET request to fetch all blogs from DB & display on index page
router.get('/', (req,res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err);
        })
});

// POST request to save blogs in DB
router.post('/', (req,res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
});

// GET request to redirect to the create blog view
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

// GET request to fetch single blog with _id
router.get('/:id', (req,res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { title:'Blog Details', blog: result});
        })
        .catch((err) => {
            console.log(err);
        })
});

// DELETE request to delete a single blog with _id
router.delete('/:id', (req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            // the redirect needs to be handled in browser since its an AJAX request
            res.json({ redirect: '/blogs' });
        })
        .catch((err) => {
            console.log(err);
        })
});

module.exports = router;