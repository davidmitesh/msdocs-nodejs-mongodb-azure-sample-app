const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    trim: true,
  },
  productType:{
    type: String,
    trim :true,
  },
  orderDate: Date,
  deliveredDate: Date,
  completed: Boolean
});

module.exports = mongoose.model('Product', productSchema);