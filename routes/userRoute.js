const express = require('express');

const router = express.Router();
const User = require('../models/userModel');

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.exists({ email });
    if (userExists) {
      return res.status(400).json({
        message: 'User already exists with this email',
      });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    return res.send('User registratred successfully.');
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'User registration failed!', error });
  }
});

module.exports = router;
