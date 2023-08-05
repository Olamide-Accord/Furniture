import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './reducer/reducerSlice'

const store = configureStore({
  reducer: CartReducer
})

export default store;