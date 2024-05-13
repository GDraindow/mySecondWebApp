const path = require('path')
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product')

// GET request
router.get('/add-product', productController.getAddProduct);

// Post request
router.post('/add-product', productController.postProduct);

module.exports = router;