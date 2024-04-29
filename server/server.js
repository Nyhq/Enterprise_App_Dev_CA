const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); // Import product routes

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Atlas connection string
const uri = "mongodb+srv://seanbreen98:6RyYFx5v95oBW1Js@eadca.xjzmsou.mongodb.net/?retryWrites=true&w=majority&appName=EADCA";

// Connect to MongoDB Atlas
mongoose.connect(uri, {
    dbName: 'test'
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/products', productRoutes); // Use product routes

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
