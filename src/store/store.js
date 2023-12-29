import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './reducer/reducerSlice'

const store = configureStore({
  reducer: {
    cart: CartReducer
  }
})

export default store;