const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  toppings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Topping'
    }
  ],
  pizzas: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pizza'
    }
  ]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;