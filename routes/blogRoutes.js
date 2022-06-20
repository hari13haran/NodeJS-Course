const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// GET request to fetch all blogs from DB & display on index page
router.get('/', blogController.blog_index);

// POST request to save blogs in DB
router.post('/', blogController.blog_create_post);

// GET request to redirect to the create blog view
router.get('/create', blogController.blog_create);

// GET request to fetch single blog with _id
router.get('/:id', blogController.blog_details);

// DELETE request to delete a single blog with _id
router.delete('/:id', blogController.blog_delete);

module.exports = router;