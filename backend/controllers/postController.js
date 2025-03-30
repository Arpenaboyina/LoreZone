const Post = require("../models/postModel");

exports.getHighestLikedPost = async (req, res) => {
  try {
    const filters = req.query;
    const topPost = await Post.getTopLikedPost(filters);

    if (!topPost) {
      return res.status(404).json({ message: "No matching outfit found." });
    }

    res.json(topPost);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
