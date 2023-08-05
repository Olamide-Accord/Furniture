import React, { useEffect, useState } from 'react'
import './collection.css'
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'

const index = () => {
  const [featured, setFeatured] = useState([]);

  const fetchFeaturedCollection = async() => {
    const response = await fetch('http://localhost:3000/collection');
    const data = await response.json();
    setFeatured(data)
  }
  
  useEffect(() => {
    fetchFeaturedCollection()
  }, [])

  return (
    <section className='featured-article'>
      <h3 className="title">
        Featured Collections
      </h3>
      <div className="container">
        <div className="row">
          {
            featured.slice(5, 9).map((item) => {
              const { id, fields: {company, colors, featured, price, name, image}} = item;
              return (
                <div className="card" key={id}>
                  <div className='card-image'>
                    {
                      image.map((img) => {
                        const {id, width, height, url} = img;
                        return (
                          <img src={url} key={id} width={width} height={height}  />
                        )
                      })
                    }
                    <div className="image-icons">
                      <span>
                        <FaSearch />
                      </span>
                      <span>
                        <FaShoppingCart />
                      </span>
                    </div>
                  </div>
                  <div className="collections-desc">
                    {
                      name && <h5>{name}</h5>
                    }
                    <h6>${price}</h6>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='btn-container'>
        <Link to='/shop' className='btn'>
          Shop All
        </Link>
      </div>
    </section>
  )
}

export default index