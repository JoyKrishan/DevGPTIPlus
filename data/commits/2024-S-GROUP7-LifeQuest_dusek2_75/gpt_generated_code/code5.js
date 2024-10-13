const express = require('express');
const connectDB = require('./database'); // Adjust the path as necessary
const User = require('./models/User'); // Adjust the path as necessary

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

connectDB(); // Connect to MongoDB

// Retrieve all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Save a new user
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a user
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));