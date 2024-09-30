const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password }); // In practice, make sure to hash the password!
    await newUser.save();
    res.json({ message: 'User created successfully' });
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password }); // Make sure to check the hashed password
    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;