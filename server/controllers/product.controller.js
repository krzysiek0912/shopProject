const Product = require('../models/product.model');

// get all posts
exports.getProducts = async (req, res) => {
  try {
    res.status(200).json(await Product.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

// get post
exports.getProduct = async (req, res) => {
  try {
    const singleProduct = await Product.findOne({ _id: req.params.id });
    res.status(200).json(singleProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};
