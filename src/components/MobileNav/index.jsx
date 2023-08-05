import React from 'react'
import './mobileNav.css'
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const MobileNav = ({close}) => {
  return (
    <div className='mobile-nav'>
      <div className="mobile-header">
        <Link to='/'>
          <h4 className='logo'>Furniture</h4>
        </Link>

        <button onClick={close}>
          <FaTimes  />
        </button>
      </div>
      <div className="mobile-links">
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/shop'>shop</Link>
        <Link to='/blog'>blogs</Link>
        <Link to='/wishlist'>wishlist</Link>
      </div>
    </div>
  )
}

export default MobileNav