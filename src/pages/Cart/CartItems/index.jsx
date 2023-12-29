import React from 'react'
import { Link } from 'react-router-dom'
import { removeFromCart } from '@store/reducer/reducerSlice'
import './cart-items.css'
import { useDispatch } from 'react-redux'


const CartItems = ({cart}) => {
  const dispatch = useDispatch();
  const shipping = 5.00;
  const calcTotal = () => {
    return cart.reduce((total, item) => {
      const newAmount = item.fields.price * item.quantity;
      const newTotal = total + newAmount;
      return newTotal;
    }, 0);
  }
  const subTotal = calcTotal();
  const tax = 0.05 * subTotal;
  const cartTotal = shipping + subTotal + tax;
  
  return (
    <div className='cart'>
      <div className='cart-content'>
        {
          cart?.map((item, index) => {
            const { id, fields: {company, colors, price, name, image}}= item;
            return (
              <div className='items' key={index}>
                {
                  image.map((img) => {
                    const {id, thumbnails: {small: {url}}} = img;
                    return (
                      <img src={url} key={id} className='item-image' />
                    )
                  })
                }
                <div className="items-desc">
                  <div className='items-info'>
                    <h5>{name}</h5>
                    <h6>{company}</h6>
                    <div className='color-desc'>
                      <h6>Colors:</h6>
                      <div className='color-div'>
                        {
                          colors.map((item, index) => <span className='color-span' key={index} style={{backgroundColor: `${item}`}}></span>)
                        }
                      </div>
                    </div>
                  </div>
                  <div className='qty'>
                    <h6>Quantity</h6>
                    <select name="amount" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                    <p className='remove' onClick={() => dispatch(removeFromCart(id))}>
                      Remove
                    </p>
                  </div>
                  <h6 className="price">${price}</h6>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="checkout-container">
        <div className="checkout">
          <div className="checkout-items">
            <p>Subtotal</p>
            <h6>${subTotal.toFixed(2)}</h6>
          </div>
          <div className="checkout-items">
            <p>Shipping</p>
            <h6>${shipping.toFixed(2)}</h6>
          </div>
          <div className="checkout-items">
            <p>Tax</p>
            <h6>${tax.toFixed(2)}</h6>
          </div>
          <div className="order-total">
            <h5>Order Total</h5>
            <h5>${cartTotal}</h5>
          </div>
        </div>

        <div className="login-div">
          <Link to='/login'>Login to checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default CartItems