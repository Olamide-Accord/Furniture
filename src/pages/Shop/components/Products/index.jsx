import React from 'react'
import './products.css'
import AllProducts from '../AllProducts'

const Products = () => {
  return (
    <article className='products'>
      <h3 className="title">
        all products
      </h3>
      <div className='row'>
        <Categories />
        <AllProducts />
        <Relevance />
      </div>
    </article>
  )
}

export default Products

const Categories = () => {
  return (
    <div className="categories">
      <h6>Categories</h6>
      <ul>
        {
          categoriesData.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

const Relevance = () => {
  return (
    <div className="relevance">
      <h6>Relevance</h6>
      <ul>
        <li>Trending</li>
        <li>Price:: Low to High</li>
        <li>Price:: High to Low</li>
      </ul>
    </div>
  )
}

const categoriesData = [
  "all categories",
  "sofa",
  "lights",
  "others",
  "table",
  "chairs",
  "doors",
  "blinds",
  "frames"
]