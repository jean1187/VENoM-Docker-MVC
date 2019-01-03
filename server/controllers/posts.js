
var Post = require("../models/posts");

// SERVER Setup 
exports.get_posts = function (req, res) {
	  Post.find({}, 'title description', function (error, posts) {
	    if (error) { console.error(error); }
	    res.send({
	      posts: posts
	    })
	  }).sort({_id:-1})
};

// Post Endpoints
exports.create_post = function (req, res) {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Post({
    title: title,
    description: description
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
};

exports.get_single_post = function (req, res) {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
};

exports.update = function (req, res) {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) { console.error(error); }

    post.title = req.body.title
    post.description = req.body.description
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
};

exports.delete = function (req, res) {
  var db = req.db;
  Post.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
};

/*
exports.create_post = function (req, res) {
};
*/