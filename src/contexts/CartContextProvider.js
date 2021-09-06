import React, { useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";
import { GET_CART, SAVE_CART } from "../reducers/types";
import { _cart } from "./_data";

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, _cart);
  
  useEffect(() => {
    dispatch({
      type: GET_CART,
      payload: null,
    });
  }, []);
  
  useEffect(() => {
    dispatch({
      type: SAVE_CART,
      payload: { cart },
    });
  }, [cart]);


  const cartDatas = {
    cart,
    dispatch,
  };

  return (
    <CartContext.Provider value={cartDatas}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
