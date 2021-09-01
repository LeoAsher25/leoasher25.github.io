import React, { useState } from "react";
import { _newestProducts } from "./_data";

export const NewestProductContext = React.createContext();

const NewestProductContextProvider = ({ children }) => {
  const [newestProducts, setNewestProducts] = useState(_newestProducts);

  const newestProductData = {
    newestProducts,
    setNewestProducts,
  };

  return (
    <NewestProductContext.Provider value={newestProductData}>
      {children}
    </NewestProductContext.Provider>
  );
};

export default NewestProductContextProvider;
