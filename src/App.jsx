import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function App() {
  const [page, setPage] = useState('home');

  const handleGetStarted = () => {
    setPage('plants');
  };

  const handleContinueShopping = () => {
    setPage('plants');
  };

  return (
    <div>
      {page === 'home' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Welcome to Paradise Nursery</p>
            <p>Find beautiful plants for your home and office.</p>

            <button onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      )}

      {page === 'plants' && (
        <ProductList
          onHome={() => setPage('home')}
          onPlants={() => setPage('plants')}
          onCart={() => setPage('cart')}
        />
      )}

      {page === 'cart' && (
        <CartItem
          onContinueShopping={handleContinueShopping}
          onHome={() => setPage('home')}
          onPlants={() => setPage('plants')}
          onCart={() => setPage('cart')}
        />
      )}

      {page === 'about' && (
        <AboutUs />
      )}
    </div>
  );
}

export default App;