const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.send("User registratred successfully.");
  } catch (error) {
    res
      .status(400)
      .json({ message: "User registration failed!", error: error });
  }
});

module.exports = router;
