const path = require('path')
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path')

// GET request
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

// Post request
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
})

module.exports = router;