// import library
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

//import components
import CartWrapList from "../../components/CartWrapList";

// import context
import { CartContext } from "../../contexts/CartContextProvider";
import { ThemeContext } from "../../contexts/ThemeContext";

// import scss
import "./CartPage.scss";

const CartPage = () => {
  // cart context
  const { cart } = useContext(CartContext);

  // theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  console.log("test", theme);

  const totalInCart = () => {
    let totalProduct = 0,
      totalPrice = 0;

    cart.forEach((product) => {
      totalProduct += product.quantityInCart;
      totalPrice += product.quantityInCart * product.price;
    });

    return { totalProduct, totalPrice };
  };

  // format price
  const formatPrice = (price) => {
    let priceStr = new Intl.NumberFormat("de-DE").format(price);
    return priceStr;
  };

  const handleButtonDown = (e) => {
    e.target.style.boxShadow = "inset 3px 3px 3px rgba(0, 0, 0, .2)";
    e.target.style.transform = "translateY(2px)";
  };

  const handleButtonUp = (e) => {
    e.target.style.boxShadow = "2px 3px 0 rgba(0, 0, 0, .2)";
    e.target.style.transform = "translateY(0)";
  };
  return (
    <div
      className="cart-page"
      style={{ backgroundColor: style.backgroundColor, color: style.color }}
    >
      <Container>
        <h3 className="cart-page-heading">Giỏ hàng của bạn</h3>
        <Row>
          <Col className="p-4" md="8">
            <div className="product-infor">
              <div className="header">
                <span>Bạn đang có </span>
                <strong>{totalInCart().totalProduct} sản phẩm </strong>
                <span>trong giỏ hàng</span>
              </div>

              <div className="body">
                <CartWrapList cart={cart} />
              </div>

              <div className="footer">
                <h3 className="footer-heading">Ghi chú đơn hàng</h3>
                <textarea name="note" className="note" id="note"></textarea>
              </div>
            </div>
          </Col>
          <Col className="p-4" md="4">
            <div className="order-infor">
              <h3 className="header">Thông tin đơn hàng</h3>
              <div className="total-price">
                <span className="total-title">Tổng tiền: </span>
                <span className="total-num">
                  {formatPrice(totalInCart().totalPrice)}đ
                </span>
              </div>
              <ul className="note">
                <li>
                  Bạn cũng có thể nhập mã giảm giá (nếu có) ở trang thanh toán.
                </li>
              </ul>

              <button
                className="pay-btn"
                onMouseDown={(e) => handleButtonDown(e)}
                onMouseUp={(e) => handleButtonUp(e)}
              >
                Thanh toán
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;
