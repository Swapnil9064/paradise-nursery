import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../features/cart/CartSlice';
import { products } from '../data/products';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <main className="page-shell catalogue-page">
      <section className="section-heading">
        <p className="eyebrow">THE GREEN COLLECTION</p>
        <h1>Find your new favourite plant</h1>
        <p>Beautiful plants, selected to make your space feel more alive.</p>
      </section>

      {categories.map((category) => (
        <section className="product-category" key={category}>
          <div className="category-heading">
            <h2>{category}</h2>
            <span>{products.filter((product) => product.category === category).length} plants</span>
          </div>
          <div className="product-grid">
            {products.filter((product) => product.category === category).map((product) => {
              const alreadyAdded = cartItems.some((item) => item.id === product.id);
              return (
                <article className="product-card" key={product.id}>
                  <div className="product-image-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85';
                      }}
                    />
                    <span className="plant-badge">Nursery pick</span>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="sunlight"><span aria-hidden="true">☀</span> {product.sunlight}</p>
                    <div className="product-card-footer">
                      <strong className="price">₹{product.price.toLocaleString('en-IN')}</strong>
                      <button
                        className={`button ${alreadyAdded ? 'button-added' : 'button-primary'}`}
                        type="button"
                        disabled={alreadyAdded}
                        onClick={() => dispatch(addToCart(product))}
                      >
                        {alreadyAdded ? 'Added ✓' : 'Add to cart'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}