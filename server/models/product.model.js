const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: 'String', required: true },
  img: { type: 'String', required: true },
  stock: { type: 'Number', required: true },
  category: { type: 'String', required: true },
  label: { type: 'String', required: false },
  content: { type: 'String', required: true },
  price: { type: 'Number', required: true },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
