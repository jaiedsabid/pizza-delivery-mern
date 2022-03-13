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

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: 'User does not exist',
      });
    }

    const isPasswordValid = user.password === password;
    if (!isPasswordValid) {
      return res.status(400).json({
        message: 'Password is incorrect',
      });
    }

    return res.send('User logged in successfully.');
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'User login failed!' });
  }
});

module.exports = router;
