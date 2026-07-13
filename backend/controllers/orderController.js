import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const { items, delivery = 80 } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const subtotal = items.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const qty = Number(item.quantity) || 1;
      return sum + price * qty;
    }, 0);

    const total = subtotal + Number(delivery || 0);

    const order = new Order({
      user: req.user.id,
      items: items.map((item) => ({
        cake: item.cakeId,
        title: item.title,
        size: item.size,
        price: item.price,
        quantity: item.quantity,
      })),
      subtotal,
      delivery: Number(delivery),
      total,
    });

    await order.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
