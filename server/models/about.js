const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  generalDescription: String,
  technologies: String,
  weaknesses: String,
  alternatives: String,
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;
