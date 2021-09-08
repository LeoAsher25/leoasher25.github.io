import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import FilterWrap from "../../components/FilterWrap";
import ProductList from "../../components/ProductList";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ProductPage.scss";

const ProductPage = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  return (
    <div
      className="product-page"
      style={{ backgroundColor: style.backgroundColor, color: style.color }}
    >
      <Container>
        <h3 className="page-title home-section__title">Tất cả sản phẩm</h3>
        <FilterWrap />
        <ProductList />
      </Container>
      {/* <div className="product-banner">
        <img src="./img/banner/bannerProduct.png" alt="" />
      </div> */}
    </div>
  );
};

export default ProductPage;
