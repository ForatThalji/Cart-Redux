// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
