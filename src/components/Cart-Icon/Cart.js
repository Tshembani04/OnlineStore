//We are using an image and also using span to show amount as in count
import React, {useContext} from "react";
import { withRouter } from 'react-router-dom'
import Bag from "../../assets/shopping-bag.gif";
import {CartContext} from '../Context/cart-context';
import "./Cart-Icon.Styles.scss";
// check to see if an item is greater than zero (? if it is then return span
//otherwise return null aka nothing or undefined) 
const Cart= ({ history }) => {
  const {itemCount, cartItems} = useContext (CartContext);
  console.log('CartItems', cartItems);
  return (
    <div className='cart-container' onClick={() => history.push('/cart')}>
      <img src={Bag} alt="shopping-cart-icon" />
      {
        itemCount > 0 ? <span className="cart-count"> { itemCount } </span> : null
      }
    </div>
  );
}

export default withRouter(Cart);
 