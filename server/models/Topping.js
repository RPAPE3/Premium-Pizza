const mongoose = require('mongoose');

const { Schema } = mongoose;

const toppingsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: true
  // }
});

const Topping = mongoose.model('Topping', toppingsSchema);

module.exports = Topping;