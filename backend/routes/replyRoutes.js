import express from "express";
import Reply from "../models/reply.js";

const router = express.Router();

// Add reply
router.post("/", async (req, res) => {
  try {
    const { postId, doctorId, content } = req.body;
    const reply = await Reply.create({ postId, doctorId, content });
    res.json(reply);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get replies by post
router.get("/:postId", async (req, res) => {
  try {
    const replies = await Reply.find({ postId: req.params.postId }).populate("doctorId", "name");
    res.json(replies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
