import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {
    },
    clearCart: (state) => {
        state.items = [];    // Clear all items from cart
        state.total = 0
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = CartSlice.actions;
export const calculateTotalAmount = (cartItems) => {
};
export default CartSlice.reducer;
