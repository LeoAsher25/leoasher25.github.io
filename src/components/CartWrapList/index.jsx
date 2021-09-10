import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DELETE_PRODUCT,
} from "../../reducers/types";

import "./CartWrapList.scss";

const CartWrapList = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handlePlusClick = (product) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        product,
      },
    });
  };

  const handleSubtract = (product) => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: {
        product,
      },
    });
  };

  const formatPrice = (price) => {
    let priceStr = new Intl.NumberFormat("de-DE").format(price);
    return priceStr;
  };

  const handleRemoveProduct = (product) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: {
        id: product.id,
      },
    });
  };

  return (
    <ul className="cart-wrap__list">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <img src="./img/emptyCart.png" alt="" />
          <h3 className="empty-cart__title">Your cart is empty</h3>
        </div>
      ) : (
        <>
          {cart.map((product) => (
            <li className="cart-item" key={product.id}>
              <div className="cart-item__img">
                <img src={product.image} alt="" />
              </div>
              <div className="cart-item__content">
                <h3> {product.title} </h3>

                <div className="cart-item__desc">
                  <div className="cart-item__price">
                    {formatPrice(product.price)}đ
                  </div>

                  <div className="cart-item__quantity">
                    <button onClick={() => handleSubtract(product)}>
                      &ndash;
                    </button>
                    <span>{product.quantityInCart}</span>
                    <button onClick={() => handlePlusClick(product)}>+</button>
                  </div>

                  <div
                    className="cart-item-delete"
                    onClick={() => handleRemoveProduct(product)}
                  >
                    <i className="bi bi-trash"></i>
                  </div>
                </div>
                <div className="total-price-of-product">
                  <span className="title">Thành tiền: </span>
                  <span className="number">
                    {formatPrice(product.quantityInCart * product.price)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default CartWrapList;
