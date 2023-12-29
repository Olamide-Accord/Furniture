import React, { useEffect, useState } from 'react'
import './collection.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@store/reducer/reducerSlice';
import { fetchShop } from '@store/reducer/reducerSlice';

const index = () => {
  const { shop } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchShop())
  }, [dispatch])

  return (
    <section className='featured-article'>
      <h3 className="title">
        Featured Collections
      </h3>
      <div className="container">
        <div className="row">
          {
            shop.slice(7, 10).map((item) => {
              const { id, fields: { price, name, image}} = item;
              return (
                <Link to={`/product/${name}`} className="box" key={id}>
                  <div className='box-image'>
                    {
                      image.map((img) => {
                        const {id, url, thumbnails: {large: width, height}} = img;
                        return (
                          <img src={url} key={id} alt={name} width={width} height={height} />
                        )
                      })
                    }
                  </div>
                  <div className="collections-desc">
                    {
                      name && <h5>{name}</h5>
                    }
                    <h6>${price}</h6>
                  </div>
                </Link>
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