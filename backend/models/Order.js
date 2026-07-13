import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  cake: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cake',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  size: String,
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
}, { _id: false });

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [orderItemSchema],
  subtotal: {
    type: Number,
    required: true,
  },
  delivery: {
    type: Number,
    required: true,
    default: 0,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
