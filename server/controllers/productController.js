const Product = require('../models/product');

// Controller function to get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().limit(10);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
