//We are using an image and also using span to show amount as in count
import React, {useContext} from "react";
import Bag from "../../assets/shopping-bag.gif";
import {CartContext} from '../Context/cart-context';
import "./Cart-Icon.Styles.scss";

const Cart= ()=> {
  const {itemCount} = useContext (CartContext);
  return (
    <div className="cart-container">
      <img src={Bag} alt="shopping-cart-icon" />
      {
        itemCount > 0 ? <span className="cart-count"> { itemCount } </span> : null
      }
    </div>
  );
}

export default Cart;
