// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import LoginForm from './components/LoginForm';
import Product from './components/Product';
import Contact from './components/Contact';
import MyAccount from './components/MyAccount';

import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
