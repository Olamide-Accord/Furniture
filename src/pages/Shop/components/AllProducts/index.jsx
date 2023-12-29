import React from 'react';
import './all-products.css';
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { fetchShop } from '@store/reducer/reducerSlice';

const AllProducts = () => {
  const { shop } = useSelector(state => state.cart);
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(fetchShop())
  }, [dispatch])
  return (
    <div className="all-products">
      <div className='row'>
        {
          shop.map((item) => {
            const { id, fields: { price, name, image}} = item;
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
  )
}

export default AllProducts