import { productList } from "./_data";

import React, { useEffect, useState } from "react";

export const ProductContext = React.createContext({});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productList);
  const [processedProducts, setProcessedProduct] = useState(products);

  const addProduct = (product) => {
    setProducts(...products, product);
  };

  const handleSearch = (searchTerm) => {
    let tmpProducts = [];
    tmpProducts = productList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(processedProducts);
    setProcessedProduct(tmpProducts);
  };

  const [productDatas, setProductDatas] = useState({
    products,
    processedProducts,
    setProducts,
    addProduct,
    handleSearch,
  });

  // const productDatas = {

  // };

  useEffect(() => {
    setProductDatas({ ...productDatas, processedProducts });
    console.log("ahihi", processedProducts);
  }, [processedProducts]);

  return (
    <ProductContext.Provider value={productDatas}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
