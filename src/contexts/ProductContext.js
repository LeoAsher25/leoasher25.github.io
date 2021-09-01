import { productList } from "./_data";

import React, { useState } from "react";

export const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productList);

  const addProduct = (product) => {
    setProducts(...products, product);
  };

  console.log("products:1 ", products);

  const productDatas = {
    products,
    addProduct,
  };

  return (
    <ProductContext.Provider value={productDatas}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
