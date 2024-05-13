const path = require('path');

const shopController = require('../controllers/shop.js')

const express = require('express');
const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrder);

module.exports = router;