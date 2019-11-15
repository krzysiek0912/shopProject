const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/product.controller');

// get all products
router.route('/products').get(ProductController.getProducts);

// get products by range
// router.route('/products/range/:startAt/:limit').get(ProductController.getProductsByRange);

// get one products
router.route('/products/:id').get(ProductController.getProduct);

module.exports = router;
