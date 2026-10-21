import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '../features/cart/CartSlice';
import { Link } from 'react-router-dom';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <main className="page-shell cart-page">
        <section className="empty-cart">
          <div className="empty-cart-icon" aria-hidden="true">🪴</div>
          <p className="eyebrow">YOUR BASKET</p>
          <h1>Your cart is waiting to grow</h1>
          <p>There are no plants in your cart yet. Find a leafy friend for your home.</p>
          <Link className="button button-primary" to="/plants">Explore plants</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell cart-page">
      <section className="section-heading cart-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping cart</h1>
        <p>{items.reduce((sum, item) => sum + item.quantity, 0)} plant(s) ready for a new home.</p>
      </section>
      <div className="cart-layout">
        <section className="cart-list" aria-label="Cart items">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-thumb" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <strong>₹{item.price.toLocaleString('en-IN')} each</strong>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button type="button" aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
              </div>
              <div className="cart-row-end">
                <strong className="line-total">₹{(item.price * item.quantity).toLocaleString('en-IN')}</strong>
                <button className="remove-button" type="button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </article>
          ))}
          <Link to="/plants" className="continue-link">← Continue shopping</Link>
        </section>
        <aside className="order-summary">
          <h2>Order summary</h2>
          <div className="summary-line"><span>Subtotal</span><strong>₹{total.toLocaleString('en-IN')}</strong></div>
          <div className="summary-line"><span>Delivery</span><strong className="free-label">FREE</strong></div>
          <div className="summary-line total-line"><span>Total</span><strong>₹{total.toLocaleString('en-IN')}</strong></div>
          <p className="summary-note">Taxes and delivery details will be confirmed at checkout.</p>
          <button className="button button-primary checkout-button" type="button" onClick={() => window.alert('Coming Soon! Checkout will be available soon.')}>Checkout · Coming Soon</button>
        </aside>
      </div>
    </main>
  );
}