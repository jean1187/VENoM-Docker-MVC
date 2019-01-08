var express = require('express');
var router = express.Router();

//posts
router.use('/posts', require('../modules/posts/routes/posts'));

module.exports = router;