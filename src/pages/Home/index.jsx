import React from 'react'
import Articles from './components/Articles'
import Brands from './components/Brands'
import Hero from './components/Hero'
import FeaturedCollection from './components/FeaturedCollection'
import Reviews from './components/Reviews'

const index = () => {
  return (
    <section>
      <Hero />
      <FeaturedCollection />
      <Brands />
      <Reviews />
      <Articles />
    </section>
  )
}

export default index