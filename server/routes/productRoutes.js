const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        let sortBy = req.query.sortBy || 'name'; // Default sorting by name
        const search = req.query.search || ''; // Default empty search query

        const skip = (page - 1) * pageSize;

        const regex = new RegExp(search, 'i'); // Case-insensitive search

        const totalProducts = await Product.countDocuments({ name: regex });

        const totalPages = Math.ceil(totalProducts / pageSize);

        let sortDirection = 1; // Default sort direction (ascending)
        if (sortBy.endsWith('_desc')) {
            sortBy = sortBy.slice(0, -5); 
            sortDirection = -1; 
        }

        let sortOptions = {};
        if (sortBy === 'price' || sortBy === 'name') {
            sortOptions[sortBy] = sortDirection;
        }

        const products = await Product.find({ name: regex })
            .sort(sortOptions)
            .skip(skip)
            .limit(pageSize);

        res.json({ products, totalPages });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to get a product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to add a new product
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to update a product by ID
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
