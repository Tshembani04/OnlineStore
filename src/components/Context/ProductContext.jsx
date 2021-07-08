// //Loads the shop data and attach the data as value to the value prop in the context . We gonna need createdContext function from react and state to pull the data

import React, { createContext, useState } from "react";
import SHOP_DATA from "../Shopfolder";
// //This will call the creates the ProductContext for us

// //component and take a single prop called children
// // Inside we will initialize () the products using useState
// //Then we need  to import the ProductContext that we just created straight into index.js

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
