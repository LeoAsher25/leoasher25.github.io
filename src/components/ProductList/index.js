import React, { useEffect } from "react";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { ProductContext } from "../../contexts/ProductContext";
import ProductItem from "../ProductItem";
import "./ProductList.scss";

const ProductList = (props) => {
  const { products } = useContext(ProductContext);

  const { filterPrice, filterSort } = props;

  const getProductsAfterFilter = () => {
    let tmpProducts = [];
    let priceArr = [];
    let isFilter = false;

    for (let filterPriceItem of filterPrice) {
      if (filterPriceItem.checked && filterPriceItem.value === "0-x") {
        tmpProducts = [...products];
        isFilter = true;
        break;
      } else if (
        filterPriceItem.checked &&
        filterPriceItem.value === "1000000-x"
      ) {
        products.forEach((product) => {
          if (product.price >= parseInt(filterPriceItem.value)) {
            tmpProducts.push(product);
          }
        });
        break;
      } else if (filterPriceItem.checked) {
        priceArr = [...priceArr, ...filterPriceItem.value.split("-")];
      }
    }
    if (isFilter === false) {
      products.forEach((product) => {
        if (
          product.price >= parseInt(priceArr[0]) &&
          product.price < parseInt(priceArr[priceArr.length - 1])
        ) {
          tmpProducts.push(product);
        }
      });
      isFilter = true;
    }

    for (let filterSortItem of filterSort) {
      if (filterSortItem.checked) {
        switch (filterSortItem.value) {
          case "ascending price":
            tmpProducts.sort((p1, p2) => p1.price - p2.price);
            break;

          case "descending price":
            tmpProducts.sort((p1, p2) => p2.price - p1.price);
            break;

          case "alphabet a-z":
            tmpProducts.sort((p1, p2) => {
              let titleP1 = p1.title.toLowerCase();
              let titleP2 = p2.title.toLowerCase();

              if (titleP1 < titleP2) {
                return -1;
              }
              if (titleP1 > titleP2) {
                return 1;
              }
              return 0;
            });
            break;

          case "alphabet z-a":
            tmpProducts.sort((p1, p2) => {
              let titleP1 = p1.title.toLowerCase();
              let titleP2 = p2.title.toLowerCase();
              if (titleP1 < titleP2) {
                return 1;
              }
              if (titleP1 > titleP2) {
                return -1;
              }
              return 0;
            });
            break;

          default:
            break;
        }
        break;
      }
    }

    return (tmpProducts = [...tmpProducts]);
  };

  const _products = getProductsAfterFilter();

  return (
    <div className="product-list">
      <Row>
        {_products.length > 0 ? (
          _products.map((product) => (
            <Col xs="6" md="4" lg="3" key={product.id} className="p-3">
              <ProductItem product={product} />
            </Col>
          ))
        ) : (
          <div className="no-products">
            <img className="no-products-img" src="./img/emptyCart.png" alt="" />
            <h3 className="no-products-title">
              Không có sản phẩm nào phù hợp!😔
            </h3>
          </div>
        )}
      </Row>
    </div>
  );
};

export default ProductList;
