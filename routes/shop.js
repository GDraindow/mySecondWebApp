const path = require('path');

const productController = require('../controllers/product.js')

const express = require('express');
const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;