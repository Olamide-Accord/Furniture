import React from 'react';
import './all-products.css';
import { FaSearch, FaShoppingCart } from "react-icons/fa"

const AllProducts = () => {
  const [products, setProducts] = React.useState([])
  const fetchProducts = async() => {
    const response = await fetch('http://localhost:3000/collection');
    const data = await response.json();
    setProducts(data)
  }
  
  React.useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div className="all-products">
      <div className='row'>
        {
          products.map((item) => {
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