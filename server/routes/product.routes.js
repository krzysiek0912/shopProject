const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/product.controller');

// get all products
router.route('/products').get(ProductController.getProducts);

// get products by range
router
  .route('/products/range/:startAt/:limit/:orderby?/:order?')
  .get(ProductController.getProductsByRange);

// get one products
router.route('/product/:id').get(ProductController.getProduct);

// get cart
router.route('/cart').get(ProductController.getCartByIds);

module.exports = router;
