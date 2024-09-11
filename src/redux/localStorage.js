// src/redux/localStorage.js

// Load the cart state from localStorage
export const loadCartState = () => {
    try {
      const serializedState = localStorage.getItem('cart');
      if (serializedState === null) {
        return undefined; // If there's no saved state, return undefined
      }
      return JSON.parse(serializedState); // Parse and return the state from localStorage
    } catch (error) {
      console.error('Could not load state from localStorage', error);
      return undefined;
    }
  };
  
  // Save the cart state to localStorage
  export const saveCartState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch (error) {
      console.error('Could not save state to localStorage', error);
    }
  };
  