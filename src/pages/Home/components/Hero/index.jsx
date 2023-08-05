import React from 'react'
import hero from '@assets/hero.jpg'
import './hero.css'

const Hero = () => {
  return (
    <article className='hero-article'>
      <div className="header">
        <h2>Stylish Furniture</h2>
        <button>wood</button>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Hero Image" />
      </div>
    </article>
  )
}

export default Hero