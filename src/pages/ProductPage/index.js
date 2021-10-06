import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import FilterWrap from "../../components/FilterWrap";
import ProductList from "../../components/ProductList";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ProductPage.scss";

const ProductPage = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  // handle filter price
  const [filterPrice, setFilterPrice] = useState([
    {
      title: "Tất cả",
      value: "0-x",
      checked: true,
    },
    {
      title: "Dưới 100.000đ",
      value: "0-100000",
      checked: false,
    },
    {
      title: "Từ 100.000đ - 300.000đ",
      value: "100000-300000",
      checked: false,
    },
    {
      title: "Từ 300.000đ - 500.000đ",
      value: "300000-500000",
      checked: false,
    },
    {
      title: "Từ 500.000đ - 1.000.000đ",
      value: "500000-1000000",
      checked: false,
    },
    {
      title: "Trên 1.000.000đ",
      value: "1000000-x",
      checked: false,
    },
  ]);

  /// handle filter sort
  const [filterSort, setFilterSort] = useState([
    {
      title: "Giá: Tăng dần",
      value: "ascending price",
      checked: false,
    },
    {
      title: "Giá: Giảm dần",
      value: "descending price",
      checked: false,
    },
    {
      title: "Tên: A-Z",
      value: "alphabet a-z",
      checked: false,
    },
    {
      title: "Tên: Z-A",
      value: "alphabet z-a",
      checked: false,
    },
    // {
    //   title: "Cũ nhất",
    //   value: "oldest",
    //   checked: false,
    // },
    // {
    //   title: "Mới nhất",
    //   value: "newest",
    //   checked: false,
    // },
    // {
    //   title: "Bán chạy nhất",
    //   value: "best-seller",
    //   checked: false,
    // },
  ]);

  return (
    <div
      className="product-page"
      style={{ backgroundColor: style.backgroundColor, color: style.color }}
    >
      <Container>
        <h3 className="page-title home-section__title">Tất cả sản phẩm</h3>

        <FilterWrap
          filterPrice={filterPrice}
          setFilterPrice={setFilterPrice}
          filterSort={filterSort}
          setFilterSort={setFilterSort}
        />

        <ProductList filterPrice={filterPrice} filterSort={filterSort} />
      </Container>
    </div>
  );
};

export default ProductPage;
