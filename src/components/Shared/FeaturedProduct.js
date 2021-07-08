import React, { useContext } from "react";
import { isInCart } from "../../Helpers";
import { CartContext } from "../Context/cart-context";
import { withRouter } from "react-router-dom";
import "./FeaturedProduct.Styles.scss";

function FeaturedProduct(props) {
  const { title, imageUrl, price, history, id, description } = props;
  const product = { title, imageUrl, price, id, description };
  const { addProduct, cartItems } = useContext(CartContext);
  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => history.push(`/product/${id}`)}
      >
        <img src={imageUrl} alt="product" />
      </div>{" "}
      <div className="name-price">
        <h3> {title} </h3>
        <p> R {price} </p>
        {
          !isInCart(product, cartItems) && 
          <button 
          className="button is-black nomad-btn"
          onClick={() => addProduct(product)}>
            ADD TO CART
          </button>
          }
           {
          isInCart(product, cartItems) && 
          <button 
          className="button is-white nomad-btn"
          id='btn-white-outline'
          onClick={() => {}}>
            ADD MORE
          </button>
          }
      </div>
    </div>
  );
}

export default withRouter(FeaturedProduct);
