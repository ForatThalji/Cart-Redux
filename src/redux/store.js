// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import { loadCartState, saveCartState } from './localStorage';

// Load initial cart state from localStorage
const preloadedState = {
  cart: loadCartState() || { items: [] }, // Use localStorage data if available, otherwise use default
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

// Subscribe to store changes and save the updated cart state to localStorage
store.subscribe(() => {
  saveCartState(store.getState().cart);
});

export default store;
