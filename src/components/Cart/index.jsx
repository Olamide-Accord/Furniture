import React, { useState } from 'react';
import './cart.css'
import { FaRegTrashAlt, FaTimes } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '@store/reducer/reducerSlice';


const index = ({ close }) => {
  const {cart, total } = useSelector(state => state.cart);
  const dispatch = useDispatch()
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
          <button onClick={() => dispatch(clearCart())}>
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
          cart.length === 0 ? <EmptyCart /> : <CartItems cart={cart} />
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

const CartItems = ({cart}) => {
  console.log(cart)
  return (
    <div style={{margin: '1rem 0'}}>
      <div className='cart-content'>
        {
          cart?.map((item, index) => {
            const { fields: {company, colors, featured, price, name, image}}= item;
            return (
              <div className='items' key={index}>
                {
                  image.map((img) => {
                    const {id, thumbnails: {small: {url}}} = img;
                    return (
                      <img src={url} key={id} className='item-image' />
                    )
                  })
                }
                <div className="items-desc">

                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}