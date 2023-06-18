import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon, FaRegHeart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header>
      <nav className=''>
        <div className='system-nav'>
          <FaSun />
        </div>
        <div className='nav-links'>
          <Link to='/shop'>shop</Link>
          <Link to='/'>blogs</Link>
          <Link to='/'>about</Link>
        </div>
      </nav>
    
      <Link to='/'>
        <h3>Furniture</h3>
      </Link>
      
      <div className='nav-cart'>
        <span className='icon-like'>
          <FaRegHeart />
        </span>
        <div className='cart-icon'>
          <span>Cart</span>
          <span className="amount">0</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar