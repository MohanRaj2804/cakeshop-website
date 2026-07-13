import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
import api from '../../services/api';
import { useAuth } from '../../context/useAuth';
import { getCart, removeCartItem, clearCart, type CartItem } from '../../services/cart';

function Cart() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const delivery = 80;

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + delivery;

  const handleRemove = (id: string) => {
    setCartItems(removeCartItem(id));
    setMessage('Item removed from cart');
  };

  const handleCheckout = async () => {
    if (!user) {
      navigate('/signin');
      return;
    }

    if (cartItems.length === 0) {
      setError('Your cart is empty. Add items before checkout.');
      return;
    }

    setCheckoutLoading(true);
    setError('');
    try {
      await api.createOrder({ items: cartItems, delivery });
      clearCart();
      setCartItems([]);
      setMessage('Order placed successfully!');
    } catch (err) {
      console.error('Checkout failed', err);
      setError('Checkout failed. Please try again.');
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <section className="cart-page py-5 py-lg-6">
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-badge">Your Cart</span>
          <h2 className="display-5 fw-bold premium-title">Your sweet selection is ready</h2>
          <p className="text-muted mb-0 cart-intro">
            Curated for your celebration, wrapped in elegance, and prepared with premium care.
          </p>
          {message && <p className="text-success mt-3">{message}</p>}
          {error && <p className="text-danger mt-3">{error}</p>}
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="cart-card">
              <div className="cart-card-header d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="mb-1">Cart Items</h3>
                  <p className="mb-0 text-muted">{cartItems.length} delicious items selected</p>
                </div>
                <Link to="/cake" className="btn premium-btn premium-btn--ghost">
                  Continue Shopping
                </Link>
              </div>

              <div className="cart-list">
                {cartItems.length === 0 ? (
                  <div className="cart-empty text-center py-5">
                    <p className="mb-3">Your cart is empty.</p>
                    <Link to="/cake" className="btn premium-btn">
                      Browse Cakes
                    </Link>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-item-icon">🍰</div>
                      <div className="cart-item-content">
                        <div className="d-flex flex-wrap justify-content-between align-items-start gap-3">
                          <div>
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <h4 className="mb-0">{item.title}</h4>
                              <span className="pill">{item.badge || 'Premium'}</span>
                            </div>
                            <p className="text-muted mb-2">{item.note}</p>
                            <p className="fw-semibold mb-0">Size: {item.size}</p>
                          </div>
                          <div className="text-end">
                            <p className="price mb-2">₹{item.price * item.quantity}</p>
                            <button
                              className="text-btn"
                              type="button"
                              onClick={() => handleRemove(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cart-item-footer">
                          <span className="qty-pill">Qty {item.quantity}</span>
                          <span className="mini-note">Prepared fresh for your order</span>
                        </div>
                        <div className="cart-item-actions mt-3">
                          <button
                            className="btn premium-btn premium-btn--ghost w-100"
                            type="button"
                            onClick={() => navigate('/cake')}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="summary-card">
              <h3 className="mb-4">Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>₹{subtotal}</strong>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <strong>₹{delivery}</strong>
              </div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

              <button
                className="btn premium-btn w-100 mt-3"
                type="button"
                onClick={handleCheckout}
                disabled={checkoutLoading || cartItems.length === 0}
              >
                {checkoutLoading ? 'Processing...' : 'Proceed to Checkout'}
              </button>
              <p className="small text-muted mt-3 mb-0">
                Fast delivery, custom cake notes, and premium packaging included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
