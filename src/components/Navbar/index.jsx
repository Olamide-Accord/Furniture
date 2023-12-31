import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { CgMenuRightAlt } from 'react-icons/cg'
import { FaSun, FaMoon, FaRegHeart } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io';
import MobileNav from '../MobileNav';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotalQty } from '../../store/reducer/reducerSlice';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const openMobileNav = () => setMobileNav(true);
  const closeMobileNav = () => setMobileNav(false);
  const dispatch = useDispatch()

  const { total } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotalQty())
  }, [total])
  
  return (
    <header>
      <nav>
        <div className="navigation">
          <div className="menu-bar" onClick={openMobileNav}>
            <CgMenuRightAlt />
          </div>
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
          <h4 className='logo'>Furniture</h4>
        </Link>
        
        <div className='nav-cart'>
          <Link to='/wishlist'>
            <span className='icon-like'>
              <FaRegHeart />
            </span>
          </Link>
          <Link className='cart-icon' to='/cart'>
            <span>Cart</span>
            <span className="amount">{total}</span>
          </Link>
        </div>
      </nav>
      {mobileNav && <MobileNav close={closeMobileNav} />}
    </header>
  )
}

export default Navbar