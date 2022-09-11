const mongoose = require('mongoose');

const { Schema } = mongoose;

const pizzaSchema = new Schema({
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

  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: true
  // }
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;