import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  shop: [],
  total: 0,
  amount: 0,
  loading: false
}

const FetchShop = createAsyncThunk('cart/fetchShop', )

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = action.payload;
      state.cart.push(cartItem);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter(item => item.id !== itemId);
    },
    clearCart: (state) => {
      state.cart = []
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;