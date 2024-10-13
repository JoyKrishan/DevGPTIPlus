const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Endpoint to register a new user
router.post('/register', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;