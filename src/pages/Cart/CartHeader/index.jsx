import React from 'react'
import { useSelector } from 'react-redux';
import './cart-header.css'

const CartHeader = () => {
  const { cart } = useSelector(state => state.cart);
  return (
    <div className="cart-items">
      {
        cart.length === 0 ? <h3>Your Cart is Empty</h3> : <h3>Shopping Cart</h3>
      }
      
    </div>
  )
}

export default CartHeader