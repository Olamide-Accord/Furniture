import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  shop: [],
  total: 0,
  amount: 0,
  quantity: 0,
  loading: false
}

export const fetchShop = createAsyncThunk('cart/fetchShop', async() => {
  const response = await axios.get('http://localhost:3000/collection');
  return response.data;
}
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      const newItem = payload;
      const existingItem = state.cart.find(item => item.id === newItem.id);
      if(existingItem){
        existingItem.quantity += 1;
      } else {
        state.cart.push({...newItem, quantity: 1})
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, {payload}) => {
      const itemId = payload;
      state.cart = state.cart.filter(item => item.id !== itemId);
      localStorage.removeItem('cart')
    },
    clearCart: (state) => {
      localStorage.removeItem('cart');
      state.cart = [];
      state.total = state.cart.length;
    },
    calculateTotalQty: (state) => {
      const totalQty = state.cart.reduce((total, item) => total + item.quantity, 0);
      console.log(totalQty);
      state.total = totalQty;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShop.pending, (state) =>{
      state.loading = true;
    })
    builder.addCase(fetchShop.fulfilled, (state, {payload}) =>{
      state.loading = false;
      state.shop = payload;
    })
    builder.addCase(fetchShop.rejected, (state) =>{
      state.loading = false;
    })
  }
});

export const { addToCart, removeFromCart, clearCart, calculateTotalQty } = cartSlice.actions;

export default cartSlice.reducer;