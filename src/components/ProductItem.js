import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import "../scss/ProductItem.scss";

const ProductItem = (props) => {
  const { product } = props;
  const productUrlImg = `url('${product.image}')`;

  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  useEffect(() => {
    const productItemEleList = Array.from(
      document.querySelectorAll(".product-item")
    );
    productItemEleList.forEach((productItemEle) => {
      productItemEle.onmouseenter = () => {
        productItemEle.style.boxShadow = `3px 3px 10px ${style.boxShadowColor1}`;
      };

      productItemEle.onmouseleave = () => {
        productItemEle.style.boxShadow = `1px 1px 10px ${style.boxShadowColor}`;
      };
    });
  });

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

  return (
    <div
      className="product-item  mt-3 "
      style={{ boxShadow: `1px 1px 10px ${style.boxShadowColor}` }}
    >
      <div
        className="ava"
        style={{
          paddingTop: "100%",
          backgroundImage: productUrlImg,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="content p-3 p-lg-4">
        <div className="desc">
          <div className="title">{product.title}</div>
          <div className="price">{product.price}</div>
        </div>
        <div className="buy-cart-wrap">
          <div className="buy button-wrap">
            <div className="button-hover"></div>
            <i className="bi bi-bag  d-none d-md-block"></i>
            <span>Buy now</span>
          </div>

          <div className="cart button-wrap">
            <div className="button-hover"></div>
            <i className="bi bi-cart3"></i>
            <span className=" d-none d-xl-block">Add to Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
