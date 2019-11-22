const Product = require('../models/product.model');

// get all products
exports.getProducts = async (req, res) => {
  try {
    res.status(200).json(await Product.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

// get products by range
exports.getProductsByRange = async (req, res) => {
  try {
    let { startAt, limit } = req.params;
    const { order, orderby } = req.params;
    const direction = order === 'asc' ? 1 : -1;
    let sortingOption = {};
    if (orderby) {
      sortingOption = {
        [orderby]: direction,
      };
    }

    startAt = parseInt(startAt, 10);
    limit = parseInt(limit, 10);
    const amount = await Product.countDocuments();
    const products = await Product.find()
      .sort(sortingOption)
      .skip(startAt)
      .limit(limit);
    res.status(200).json({
      products,
      amount,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// get product
exports.getProduct = async (req, res) => {
  try {
    const singleProduct = await Product.findOne({ _id: req.params.id });
    res.status(200).json(singleProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};
