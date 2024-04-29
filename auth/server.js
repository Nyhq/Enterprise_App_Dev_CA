const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5050;
const authRoutes = require('./routes/authRoutes'); 

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get('/', (req, res) => {
  res.send('Authentication Microservice');
});

// Use route handlers
app.use('/auth', authRoutes);

// MongoDB Atlas connection string
const uri = "mongodb+srv://seanbreen98:6RyYFx5v95oBW1Js@eadca.xjzmsou.mongodb.net/?retryWrites=true&w=majority&appName=EADCA";

// Connect to MongoDB Atlas
mongoose.connect(uri, {
    dbName: 'test'
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
