import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "../scss/TopNavCart.scss";
import { ThemeContext } from "../contexts/ThemeContext";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../reducers/types";
import { CartContext } from "../contexts/CartContextProvider";

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
                      <button onClick={() => handlePlusClick(product)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </>
        )}
      </ul>

      <div className="top-nav-cart-btn-wrap">
        <div className="buy button-wrap">
          <div className="button-hover"></div>
          {/* <i className="bi bi-bag  d-none d-md-block"></i>
          <span>Buy now</span> */}
          <span>Check out</span>
        </div>

        <div className="cart button-wrap">
          <div className="button-hover"></div>
          {/* <i className="bi bi-cart3"></i>
          <span className=" d-none d-xl-block">Add to Cart</span> */}
          <span>Go to Cart</span>
        </div>
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
