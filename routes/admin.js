const path = require('path')
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')

// GET request
router.get('/add-product', adminController.getAddProduct);

// 권한있는 product page 호출
router.get('/products', adminController.getProducts);

// Post request
router.post('/add-product', adminController.postAddProduct);

//edit page route
router.get('/edit-product/:productId', adminController.getEditProduct);

//post edit request 
router.post('/edit-product', adminController.postEditProduct);

//delete request
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;