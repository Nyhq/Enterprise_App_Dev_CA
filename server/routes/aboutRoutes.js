const express = require('express');
const router = express.Router();
const About = require('../models/about');

// Route to get the About page content
router.get('/', async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (error) {
    console.error('Error fetching about content:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; // Ensure that the router object is correctly exported
