import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext.js";

import "./ProductDetailPage.scss";

const ProductDetailPage = () => {
  const _product = {
    id: 2,
    image: "./img/productlList/4.png",
    title:
      "Mèo Quạo Phiên Bản Chị Ong Nâu Nâu Mèo Quạo Phiên Bản Chị Ong Nâu Nâu",
    price: 390000,
    quantity: 50,
    desciption: `Mèo Quạo phiên bản chị ong nâu nâu đang làm mưa làm gió tại nhà Mi.
  
      Nhìn mặt thì quạo chút xíu thui nhưng ôm hay tựa lưng đều thoải mái lắm lun nhen. Em này mà mang đi tặng thì Mi đảm bảo là nửa kia sẽ ưng ngay từ cái nhìn đầu tiên luôn nè. `,
    infor: [
      {
        inforTitle: "material",
        inforValue: "Nỉ và bông gòn cao cấp.",
      },
    ],
    option: {
      optionName: "size",
      optionValue: ["35cm", "35cm", "55cm"],
    },
    onSale: {
      isOnSale: true,
      timeOnSale: 1673251016948,
    },
  };
  const [product, setProduct] = useState(_product);

  const { theme } = useContext(ThemeContext);
  const { isLigthTheme, lighthTheme, darkTheme } = theme;
  const style = isLigthTheme ? lighthTheme : darkTheme;

  const [quantitySelected, setQuantitySelected] = useState(0);

  const handlePlusClick = () => {
    setQuantitySelected(quantitySelected + 1);
  };

  const handleSubtract = () => {
    setQuantitySelected(quantitySelected - 1);
  };

  return (
    <div
      className="product-item-page"
      style={{ backgroundColor: style.backgroundColor, color: style.color }}
    >
      <Container>
        <Row>
          <Col md="6">
            <div className="product-img__wrap">
              <img src={product.image} alt="" />
            </div>
          </Col>

          <Col md="6">
            <div className="product-detail-infor">
              <h2 className="product-title">{product.title}</h2>
              <div className="product-price">
                <span>{product.price}</span>
              </div>

              {product.option.optionValue.length > 0 ? (
                <div className="product-option">
                  <div className="option-name">
                    <span>{product.option.optionName}</span>
                  </div>

                  <div className="option-value-list">
                    {product.option.optionValue.map((value) => (
                      <div className="option-value">
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}

              {product.onSale.isOnSale ? (
                <div className="product-sale-wrap">
                  <h3 className="sale-title">Thời gian hết ưu đãi:</h3>
                  <div className="product-sale-time">
                    <div className="sale-time-item">
                      <div className="item-value">00</div>
                      <div className="item-title">days</div>
                    </div>

                    <div className="sale-time-item">
                      <div className="item-value">00</div>
                      <div className="item-title">days</div>
                    </div>

                    <div className="sale-time-item">
                      <div className="item-value">00</div>
                      <div className="item-title">days</div>
                    </div>

                    <div className="sale-time-item">
                      <div className="item-value">00</div>
                      <div className="item-title">days</div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="product-desc">{product.desciption}</div>
              <div className="product-infor">
                {product.infor.map((item) => (
                  <>
                    <span className="infor-title">{item.inforTitle}</span>
                    <span className="infor-value">{item.inforValue}</span>
                  </>
                ))}
              </div>

              <div className="cart-item__quantity">
                <button onClick={() => handleSubtract()}>&ndash;</button>
                <span>{quantitySelected} </span>
                <button onClick={() => handlePlusClick()}>+</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailPage;
