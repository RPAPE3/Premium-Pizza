const mongoose = require('mongoose');

const { Schema } = mongoose;

const toppingsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: String,
  },
  
  categoryName: {
    type: String, 
  }
});

const Topping = mongoose.model('Topping', toppingsSchema);

module.exports = Topping;