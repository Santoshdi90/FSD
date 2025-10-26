import express from "express";
import Post from "../models/post.js";

const router = express.Router();

// Create post
router.post("/", async (req, res) => {
  try {
    const { userId, content } = req.body;
    const post = await Post.create({ userId, content });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("userId", "name role");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
