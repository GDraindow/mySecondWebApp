const path = require('path')
const express = require('express');
const router = express.Router();
const productController = require('../controllers/admin')

// GET request
router.get('/add-product', productController.getAddProduct);

// Post request
router.post('/add-product', productController.postProduct);

// 권한있는 product page 호출
router.get('/products', productController.getProducts);

module.exports = router;