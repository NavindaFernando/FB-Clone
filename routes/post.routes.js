const express = require("express");
const app = express();
const router = express.Router();

const Post = require("../models/post.model");

app.use(express.json());

// get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.send("Err: " + err);
  }
});

// add new post
router.post("/", async (req, res) => {
  const post = new Post({
    user_id: req.body.user_id,
    date: req.body.date,
    time: req.body.time,
    title: req.body.title,
    image_body: req.body.image_body,
  });
  try {
    const response = await post.save();
    res.json(response);
  } catch (err) {
    res.send("Err :" + err);
  }
});

// get post by id
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.json(post);
    } catch (err) {
      res.send("Err: " + err);
    }
  });

// delete post
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const response = await post.remove();
      res.json(response);
    } catch (err) {
      res.send("Err: " + err);
    }
  });

// delete post
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const response = await post.remove();
      res.json(response);
    } catch (err) {
      res.send("Err: " + err);
    }
  });

// update post
router.put("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      post.user_id = req.body.user_id;
      post.date = req.body.date;
      post.time = req.body.time;
      post.title = req.body.title;
      post.image_body = req.body.image_body;
  
      const response = await post.save();
      res.json(response);
    } catch (err) {
      res.send("err: " + err);
    }
  });

module.exports = router;
