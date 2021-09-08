import React from "react";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { ProductContext } from "../../contexts/ProductContext";
import ProductItem from "../ProductItem";
import "./ProductList.scss";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-list">
      <Row>
        {products
          ? products.map((product) => (
              <Col xs="6" md="4" lg="3" key={product.id} className='p-3'>
                <ProductItem product={product} />
              </Col>
            ))
          : ""}
      </Row>
    </div>
  );
};

export default ProductList;
