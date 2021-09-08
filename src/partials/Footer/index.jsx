import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Footer.scss";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  return (
    <footer
      className="footer"
      style={{ backgroundColor: style.backgroundColor }}
    >
      <div className="product-banner">
        <img src="./img/banner/bannerProduct.png" alt="" />
      </div>
      <Container>
        <Row>
          <Col xs="12" sm="6" md="4" className="p-4">
            <div className="about-us">
              <h3 className="heading" style={{ color: style.color }}>
                Về PetsLa
              </h3>
              <p>
                PetsLa ra đời với sứ mệnh Pets hóa thế giới loài người bằng cách
                mang đến cho cộng đồng những content thú vị, đáng yêu về pets.
              </p>
            </div>
          </Col>

          <Col xs="12" sm="6" md="4" className="p-4">
            <div className="customer-support">
              <h3 className="heading" style={{ color: style.color }}>
                Hỗ trợ khách hàng
              </h3>
              <ul>
                <li>
                  <a href="/">
                    <i className="bi bi-arrow-right-short"></i>
                    Gói quà miễn phí
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="bi bi-arrow-right-short"></i>
                    Chính sách đổi trả
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="bi bi-arrow-right-short"></i>
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="bi bi-arrow-right-short"></i>
                    Điều khoản dịch vụ
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs="12" sm="6" md="4" className="p-4">
            <div className="follow-us">
              <h3 className="heading" style={{ color: style.color }}>
                Follow Us
              </h3>
              <div className="follow-us__wrap">
                <div className="follow-us__item facebook">
                  <a
                    href="http://facebook.com/PetsLa.vn"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
                <div className="follow-us__item instagram">
                  <a
                    href="http://instagram.com/_petsla"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
