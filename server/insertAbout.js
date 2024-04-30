const mongoose = require('mongoose');
const About = require('./models/about'); // Import the About model
const aboutData = require('./aboutData'); // Import the About page data object

// MongoDB Atlas connection string
const uri = "mongodb+srv://seanbreen98:6RyYFx5v95oBW1Js@eadca.xjzmsou.mongodb.net/?retryWrites=true&w=majority&appName=EADCA";

// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');

    // Create a new About document using the About page data object
    const newAbout = new About(aboutData);

    // Save the new About document to the database
    newAbout.save()
      .then((result) => {
        console.log('About data inserted successfully:', result);
      })
      .catch((error) => {
        console.error('Error inserting About data:', error);
      })
      .finally(() => {
        // Close the MongoDB connection
        mongoose.connection.close();
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
