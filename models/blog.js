const mongoose = require('mongoose');
Schema = mongoose.Schema;

// Schema defines the structure of the document
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// set the model
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
