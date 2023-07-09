import React from 'react';
import './cart.css'
import { FaRegTrashAlt, FaTimes } from "react-icons/fa";

const index = ({ close, cart }) => {
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
          <h2>My Cart (0)</h2>
        </div>
      </div>
    </div>
  )
}

export default index