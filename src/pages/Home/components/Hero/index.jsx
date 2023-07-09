import React from 'react'
import image from '@assets/image1.jpg'
import './hero.css'

const Hero = () => {
  return (
    <article className='hero-article'>
      <div className="header">
        <h2>Stylish Furniture</h2>
        <button>wood</button>
      </div>
      <div className="hero-image">
        <img src={image} alt="Hero Image" />
      </div>
    </article>
  )
}

export default Hero