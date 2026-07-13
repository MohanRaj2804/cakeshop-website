import './Cart.css';
import { Link } from 'react-router-dom';

const cartItems = [
  {
    id: 1,
    name: 'Chocolate Fudge Cake',
    size: '1kg',
    price: 850,
    note: 'Layered with velvety ganache and fresh cream',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Strawberry Cream Cake',
    size: '500g',
    price: 500,
    note: 'Soft vanilla sponge with handpicked strawberries',
    badge: 'Fresh Pick',
  },
];

function Cart() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const delivery = 80;
  const total = subtotal + delivery;

  return (
    <section className="cart-page py-5 py-lg-6">
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-badge">Your Cart</span>
          <h2 className="display-5 fw-bold premium-title">Your sweet selection is ready</h2>
          <p className="text-muted mb-0 cart-intro">
            Curated for your celebration, wrapped in elegance, and prepared with premium care.
          </p>
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
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-icon">🍰</div>
                    <div className="cart-item-content">
                      <div className="d-flex flex-wrap justify-content-between align-items-start gap-3">
                        <div>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <h4 className="mb-0">{item.name}</h4>
                            <span className="pill">{item.badge}</span>
                          </div>
                          <p className="text-muted mb-2">{item.note}</p>
                          <p className="fw-semibold mb-0">Size: {item.size}</p>
                        </div>
                        <div className="text-end">
                          <p className="price mb-2">₹{item.price}</p>
                          <button className="text-btn" type="button">
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-footer">
                        <span className="qty-pill">Qty 1</span>
                        <span className="mini-note">Prepared fresh for your order</span>
                      </div>
                    </div>
                  </div>
                ))}
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

              <Link to="/contact" className="btn premium-btn w-100 mt-3">
                Proceed to Checkout
              </Link>
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
