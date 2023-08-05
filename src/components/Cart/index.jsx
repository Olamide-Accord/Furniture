import React, { useState } from 'react';
import './cart.css'
import { FaRegTrashAlt, FaTimes } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const index = ({ close, cartOpen }) => {

  const {cart, total } = useSelector(state => state)
  return (
    <div className={`${cart ? 'open-cart cart-modal' : 'cart-modal'}`}>
      <div className="cart-container">
        <div className="cart-header">
          <button onClick={close}>
            <FaTimes  />
            <span className='close' >
              close
            </span>
          </button>
          <button>
            <FaRegTrashAlt />
            <span className="delete">
              clear cart
            </span>
          </button>
        </div>

        <div className="cart-items">
          <h2>My Cart ({total})</h2>
        </div>

        {
          cart.length === 0 ? <EmptyCart /> : <CartItems />
        }
      </div>
    </div>
  )
}

export default index

const EmptyCart = () => {
  return (
    <div className='empty-cart'>
      <div className="empty-cart-content">
        <div className="empty-bag">
          <LuShoppingBag />
        </div>
        <h3>Your Cart is empty</h3>
        <Link to='/shop'>Shop Now</Link>
      </div>
    </div>
  )
}

const CartItems = () => {
  return (
    <div>
      Cart Items
    </div>
  )
}