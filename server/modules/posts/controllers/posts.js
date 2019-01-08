
var Post = require("../models/posts");

// SERVER Setup 
exports.get_posts = async (req, res) => {
  const posts = await Post.find({}).sort({_id:-1});
  res.send({
    posts: posts
  });
}

// Post Endpoints
exports.create_post = async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.send({
    success: true,
    message: 'Post saved successfully!'
  })
}

exports.get_single_post = async (req, res) => {
  const post = await Post.findById(req.params.id,'title description');
  res.json(post);
}

exports.update = async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, req.body);
  res.send({
    success: true
  })
}
exports.delete = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.send({
    success: true
  })
}


/*
exports.create_post = function (req, res) {
};
*/