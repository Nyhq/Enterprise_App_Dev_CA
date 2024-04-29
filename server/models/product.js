// product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
}, { collection: 'Products' }); // Specify collection name as 'Products'

module.exports = mongoose.model('Product', productSchema);
