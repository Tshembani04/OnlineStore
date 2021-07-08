import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductContext";
import FeaturedProduct from "../Shared/FeaturedProduct";

function FeaturedCollection() {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((product, i) => i < 4)
    .map((product) => <FeaturedProduct {...product} key={product.id} />);
  return (
    <div className="featured-collection container">
      <h2 className="featured-section-title">   Featured Collection  </h2>{" "}
      <div className="products"> {productItems} </div>{" "}
    </div>
  );
}

export default FeaturedCollection;
