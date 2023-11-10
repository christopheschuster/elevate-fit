/*
   Filename: complexApp.js
   Description: A sophisticated and complex JavaScript application that manages a fictional e-commerce website.
   Author: [Your Name]
   Date: [Current Date]
   Version: 1.0
*/

// Import necessary modules and libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create an instance of the Express web server
const app = express();

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true });
const db = mongoose.connection;

// Define database schema
const productSchema = new mongoose.Schema({
   name: String,
   price: Number
});
const Product = mongoose.model('Product', productSchema);

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes

// Get all products
app.get('/api/products', (req, res) => {
   Product.find({}, (err, products) => {
      if (err) {
         res.status(500).send('An error occurred while fetching products.');
      } else {
         res.send(products);
      }
   });
});

// Create a new product
app.post('/api/products', (req, res) => {
   const product = new Product({
      name: req.body.name,
      price: req.body.price
   });
   product.save((err) => {
      if (err) {
         res.status(500).send('An error occurred while creating the product.');
      } else {
         res.send('Product created successfully.');
      }
   });
});

// Edit an existing product
app.put('/api/products/:id', (req, res) => {
   Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
      if (err) {
         res.status(500).send('An error occurred while updating the product.');
      } else {
         res.send('Product updated successfully.');
      }
   });
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
   Product.findByIdAndDelete(req.params.id, (err) => {
      if (err) {
         res.status(500).send('An error occurred while deleting the product.');
      } else {
         res.send('Product deleted successfully.');
      }
   });
});

// Start the server
app.listen(3000, () => {
   console.log('Server started on port 3000.');
});

// Handle database connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
   console.log('Connected to the MongoDB database.');
});