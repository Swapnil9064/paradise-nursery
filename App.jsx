import React from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from './features/cart/CartSlice';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './pages/AboutUs';

function Header() {
  const cartCount = useSelector(selectCartCount);
  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Paradise Nursery home">
        <span className="brand-mark" aria-hidden="true">✿</span>
        <span className="brand-copy"><strong>Paradise Nursery</strong><small>BRING NATURE HOME</small></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/cart" className="cart-nav">
          <span aria-hidden="true">🛍</span> Cart <span className="cart-count">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <main className="landing">
      <div className="landing-overlay" />
      <section className="landing-content">
        <span className="landing-kicker"><span /> A LITTLE MORE GREEN, A LOT MORE JOY</span>
        <h1>Make room for<br /><em>something natural.</em></h1>
        <p>Thoughtfully chosen houseplants to bring calm, character, and a breath of fresh air into your everyday spaces.</p>
        <div className="landing-actions">
          <Link to="/plants" className="button button-light">Get Started <span aria-hidden="true">→</span></Link>
          <Link to="/about" className="landing-text-link">Our story <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="landing-trust"><span>✦</span> Plants for beginners and seasoned plant lovers</div>
      </section>
      <div className="landing-bottom">
        <span>GROW AT YOUR OWN PACE</span>
        <span>01 / NATURE COLLECTION</span>
      </div>
    </main>
  );
}

function ScrollToTop() {
  const location = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<main className="page-shell not-found"><h1>Page not found</h1><Link to="/">Return home</Link></main>} />
      </Routes>
      <footer className="site-footer">
        <Link to="/" className="footer-brand">Paradise Nursery</Link>
        <span>Grow a little happiness every day.</span>
        <span>© {new Date().getFullYear()} Paradise Nursery</span>
      </footer>
    </>
  );
}