import React from 'react'
import './hero.css'
import { FaRegHeart } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='wish-hero'>
      <div className="wish-content">
        <div className="wishlist-icon">
          <FaRegHeart />
        </div>
        <h4>Add to your WishList</h4>
      </div>
    </section>
  )
}

export default Hero