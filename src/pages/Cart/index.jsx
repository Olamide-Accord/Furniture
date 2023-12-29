import React from 'react';
import CartHeader from './CartHeader';
import CartItems from './CartItems';
import { useSelector } from 'react-redux';

const index = () => {
  const { cart } = useSelector(state => state.cart);
  return (
      <article style={{margin: '4.5rem 0'}}>
        <CartHeader />
        {
          cart && <CartItems cart={cart} />
        }
      </article>
  )
}

export default index
