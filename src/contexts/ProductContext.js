import { productList } from "./_data";

import React, { useState } from "react";

export const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productList);

  const addProduct = (product) => {
    setProducts(...products, product);
  };


  const productDatas = {
    products,
    setProducts,
    addProduct,
  };

  return (
    <ProductContext.Provider value={productDatas}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
