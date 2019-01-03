var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var post_controller = require('../controllers/posts');


// a simple test url to check that all of our files are communicating correctly.
router.get('/posts', post_controller.get_posts);
// Post Endpoints
router.post('/posts', post_controller.create_post);
// Fetch single post
router.get('/post/:id', post_controller.get_single_post);
// Update a post
router.put('/posts/:id', post_controller.update);
// Delete a post
router.delete('/posts/:id', post_controller.delete);

module.exports = router;