import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon, FaRegHeart } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io';
import Cart from "@components/Cart"

const Navbar = () => {
  const [cart, setCart] = useState(false);
  const openCart = () => setCart(true);
  const closeCart = () => setCart(false);
  return (
    <header>
      <nav>
        <div className="navigation">
          <div className='system-nav'>
            <FaSun />
            <IoIosArrowForward />
          </div>
          <div className='nav-links'>
            <Link to='/shop'>shop</Link>
            <Link to='/blog'>blogs</Link>
            <Link to='/about'>about</Link>
          </div>
        </div>
      
        <Link to='/'>
          <h4>Furniture</h4>
        </Link>
        
        <div className='nav-cart'>
          <Link to='/wishlist'>
            <span className='icon-like'>
              <FaRegHeart />
            </span>
          </Link>
          <div className='cart-icon' onClick={openCart}>
            <span>Cart</span>
            <span className="amount">0</span>
          </div>
          {
            cart && <Cart cart={cart} close={closeCart} />
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar