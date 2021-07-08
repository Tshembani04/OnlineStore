import React, { useContext } from "react";
import Layout from "../Shared/Layout";
import FeaturedProduct from "../Shared/FeaturedProduct";
import { ProductsContext } from "../Context/ProductContext";
import './Shop.Styles.scss'
//display alist of products that we have in the store and as well as the Featured products
function Shop() {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map((product) => (
    <FeaturedProduct {...product} key={product.id} />
  ));
  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{allProducts}</div>
      </div>
    </Layout>
  );
}
export default Shop;
