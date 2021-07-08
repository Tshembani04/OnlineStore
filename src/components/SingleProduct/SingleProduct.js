import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../components/Context/ProductContext.jsx";
import { withRouter } from "react-router-dom";
import Layout from "../Shared/Layout";
import "./SingleProduct.Styles.scss";

//We are pulling out the products from react and get the id from the root prime
function SingleProduct ({ match, history: { push } }) {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);
  //when the component loadS on mounting we use useEffect
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));
    //if the product doesnt exist we then redirect to shop page

    if (!product) {
      return push("/shop");
    }

    setProduct(product);
  }, [id, product, push, products]);

  //Loading componet eg spinner, while we check for a product

  if (!product) {
    return null;
  }

  const { imageUrl, title, price, description } = product;
  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imageUrl} alt="product" />
        </div>
        {/* Containing Div */}
        <div className="product-details">
          <div className="name-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="add-to-cart-btns">
            <button
              className="button is-white nomad-btn"
              id="btn-white-outline"
            >
              ADD TO CART
            </button>
            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="product-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(SingleProduct);

