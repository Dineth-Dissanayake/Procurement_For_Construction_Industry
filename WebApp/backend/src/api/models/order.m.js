import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  proName: {
    type: String,
    required: [true, "product name is required."],
  },
  proID: {
    type: String,
    required: [true, "product id is required."],
  },
  supName: {
    type: String,
    required: [true, "supplier name is required."],
  },
  qty: {
    type: Number,
    required: [true, "qty is required."],
  },
  price: {
    type: Number,
    required: [true, "price is required."],
  },
  total: {
    type: Number,
    required: [true, "total is required."],
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    required: [false, "required."],
  }
});


module.exports = mongoose.model("Order", OrderSchema);