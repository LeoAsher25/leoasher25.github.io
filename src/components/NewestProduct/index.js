import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import { NewestProductContext } from "../../contexts/NewestProductContext";
import ProductItem from "../ProductItem";
import "./NewestProduct.scss";

const NewestProduct = () => {
  const { newestProducts } = useContext(NewestProductContext);

  const slider = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerPadding: "0px",
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="newest-product">
      <Container>
        <h3 className="newest-product__title home-section__title">Sản phẩm mới nhất</h3>
        <Row>
          <Slider ref={slider} {...settings}>
            {newestProducts.map((product) => (
              <Col className="p-3" key={product.id}>
                <ProductItem product={product} />
              </Col>
            ))}
          </Slider>

          <div className="btn-wrap">
            <button
              className="arrow arrow-prev"
              onClick={() => slider?.current?.slickPrev()}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="arrow arrow-next"
              onClick={() => slider?.current?.slickNext()}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default NewestProduct;
