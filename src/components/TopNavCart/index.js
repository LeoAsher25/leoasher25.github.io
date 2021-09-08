import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../contexts/ThemeContext";
import { CartContext } from "../../contexts/CartContextProvider";

import CartWrapList from "../CartWrapList/index";

import "./TopNavCart.scss";

const TopNavCart = () => {
  //cart context
  const { cart, dispatch } = useContext(CartContext);

  // theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  // handle adding animmation(background-color) when hover button of product-item
  useEffect(() => {
    const buttonWrapList = Array.from(
      document.querySelectorAll(".button-wrap")
    );

    buttonWrapList.forEach((buttonWrap) => {
      let buttonHover = buttonWrap.querySelector(".button-hover");
      buttonWrap.onmouseenter = () => {
        buttonHover.style.animation = "buttonOnHover .5s forwards";
      };

      buttonWrap.onmouseleave = () => {
        buttonHover.style.animation = "buttonOnBlur .5s forwards";
      };
    });
  }, []);

  const formatPrice = (price) => {
    let priceStr = new Intl.NumberFormat("de-DE").format(price);
    return priceStr;
  };

  const totalInCart = () => {
    let totalProduct = 0,
      totalPrice = 0;

    cart.forEach((product) => {
      totalProduct += product.quantityInCart;
      totalPrice += product.quantityInCart * product.price;
    });

    return { totalProduct, totalPrice };
  };

  return (
    <div
      className="top-nav-cart-wrap"
      style={{ boxShadow: `5px 5px 15px ${style.boxShadowColor1}` }}
    >
      <div className="cart-wrap__header">
        <div className="in-cart cart-wrap__header-item">
          <span>In Cart: </span>
          <span>{totalInCart().totalProduct}</span>
          <span> products</span>
        </div>

        <div className="total-price cart-wrap__header-item">
          <span>Total Price: </span>
          <span>{formatPrice(totalInCart().totalPrice)}đ</span>
        </div>
      </div>

      <CartWrapList />

      <div className="top-nav-cart-btn-wrap">
        <Link to="/check-out" className="buy button-wrap">
          <div className="button-hover"></div>
          <span>Check out</span>
        </Link>

        <Link to="/cart" className="cart button-wrap">
          <div className="button-hover"></div>
          <span>Go to Cart</span>
        </Link>
      </div>
    </div>
  );
};

TopNavCart.propTypes = {
  product: PropTypes.object,
};

TopNavCart.defaultProps = {
  product: {},
};

export default TopNavCart;
