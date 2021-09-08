import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import TopNavRps from "../TopNavRps";
import TopNavCart from "../../components/TopNavCart";

import { TOGGLE_THEME } from "../../reducers/types";
import AuthForm from "../AuthForm";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import "./TopNav.scss";
import { CartContext } from "../../contexts/CartContextProvider";

const TopNav = () => {
  // theme context
  const { theme, Themedispatch } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  //cart context
  const { cart } = useContext(CartContext);

  const { isAuthenticated, AuthDispatch } = useContext(AuthContext);

  // authFormOpen : consider whether authForm open or not
  const [authFormOpen, setAuthFormOpen] = useState(false);

  // handle open auth form when click to Login btn in nav
  function handleLoginClick() {
    setAuthFormOpen(true);
    const userCheckbox = document.querySelector("#user-checkbox");
    if (userCheckbox.checked) {
      userCheckbox.checked = false;
    }
  }

  // handlem when click  to logout btn in nav
  function handleLogoutClick() {
    const logoutConfirmBox = document.querySelector(".confirm-logout");
    if (logoutConfirmBox) {
      logoutConfirmBox.classList.add("active");
    }
    const userCheckbox = document.querySelector("#user-checkbox");
    if (userCheckbox.checked) {
      userCheckbox.checked = false;
    }

    const topNavOverlayEle = document.querySelector(".nav-overlay");
    if (topNavOverlayEle) {
      topNavOverlayEle.classList.add("active");
      console.log("ahihi5");
    }
  }

  function handleLogOutCancel() {
    const logoutConfirmBox = document.querySelector(".confirm-logout");
    if (logoutConfirmBox) {
      logoutConfirmBox.classList.remove("active");
    }

    const topNavOverlayEle = document.querySelector(".nav-overlay");
    if (topNavOverlayEle) {
      topNavOverlayEle.classList.remove("active");
      console.log("ahihi5");
    }
  }

  function handleLogOutConfirm() {
    AuthDispatch({
      type: "TOGGLE_AUTH",
    });
    const logoutConfirmBox = document.querySelector(".confirm-logout");
    if (logoutConfirmBox) {
      logoutConfirmBox.classList.remove("active");
    }

    const topNavOverlayEle = document.querySelector(".nav-overlay");
    if (topNavOverlayEle) {
      topNavOverlayEle.classList.remove("active");
      console.log("ahihi5");
    }
  }

  const handleToggleThemeClick = () => {
    Themedispatch({
      type: TOGGLE_THEME,
      payload: null,
    });
  };

  return (
    <div
      className="top-nav"
      style={{
        backgroundColor: style.backgroundColor,
        color: style.color,
      }}
    >
      <Container>
        {/* TopNavRps for max-widht 992px screen */}
        <TopNavRps
          handleLoginClick={handleLoginClick}
          isAuthenticated={isAuthenticated}
          handleLogoutClick={handleLogoutClick}
        />

        <div className="top-nav__branch">
          <Link to="/">
            <img src="./img/logofull2.png" alt="" />
          </Link>
        </div>

        <ul className="top-nav__list d-none d-lg-flex">
          <li className="top-nav-item">
            <Link to="/about">About</Link>
          </li>

          <li className="top-nav-item">
            <Link to="/products">
              <span>Sản phẩm</span>
              <i className="bi bi-chevron-down"></i>
            </Link>
            <ul
              className="top-nav-product-list"
              style={{ boxShadow: `0px 0px 10px ${style.boxShadowColor}` }}
            >
              <li className="top-nav-product-item">
                <Link to="/products">Mềm mại</Link>
                <i className="bi bi-chevron-right"></i>
                <ul
                  className="product-sub-list"
                  style={{
                    boxShadow: `0px 0px 10px ${style.boxShadowColor}`,
                  }}
                >
                  <li className="top-nav-product-item">
                    <Link to="/products">Gấu bông</Link>
                  </li>
                  <li className="top-nav-product-item">
                    <Link to="/products">Gối ôm</Link>
                  </li>
                  <li className="top-nav-product-item">
                    <Link to="/products">Tựa lưng, Gối cổ</Link>
                  </li>
                </ul>
              </li>

              <li className="top-nav-product-item">
                <a href="/">Thư giãn</a>
                <i className="bi bi-chevron-right"></i>

                <ul
                  className="product-sub-list"
                  style={{
                    boxShadow: `0px 0px 10px ${style.boxShadowColor}`,
                  }}
                >
                  <li className="top-nav-product-item">
                    <a href="/">Nghe nhạc</a>
                  </li>
                  <li className="top-nav-product-item">
                    <a href="/">Đèn ngủ</a>
                  </li>
                  <li className="top-nav-product-item">
                    <a href="/">Máy phun sương</a>
                  </li>
                  <li className="top-nav-product-item">
                    <a href="/">Mùi hương</a>
                  </li>
                  <li className="top-nav-product-item">
                    <a href="/">Đồ chơi</a>
                  </li>
                </ul>
              </li>

              <li className="top-nav-product-item">
                <a href="/">Nhỏ xinh</a>
              </li>

              <li className="top-nav-product-item">
                <a href="/">Tiện ích</a>
              </li>

              <li className="top-nav-product-item">
                <a href="/">Đồ decor</a>
              </li>

              <li className="top-nav-product-item">
                <a href="/">Cuộc sống hàng ngày</a>
              </li>

              <li className="top-nav-product-item">
                <a href="/">Top trending</a>
              </li>
            </ul>
          </li>

          <li className="top-nav-item">
            <a href="/">Gift Station</a>
          </li>

          {/* <li className="top-nav-item">
            <a href="/">Meow's Story</a>
          </li> */}
        </ul>

        <div className="top-nav__user-wrap">
          <div className="top-nav__search">
            <input type="checkbox" name="" id="search-checkbox" hidden />
            <label htmlFor="search-checkbox">
              <i className="bi bi-search"></i>
              <i className="bi bi-x-lg"></i>
            </label>
            <form
              action=""
              className="search-form"
              style={{ boxShadow: `0px 0px 10px ${style.boxShadowColor}` }}
            >
              <input
                type="text"
                name="search"
                id="search-input"
                placeholder="Search"
              />
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div
            className="top-nav__theme d-none d-lg-flex "
            onClick={() => handleToggleThemeClick()}
          >
            {isLightTheme ? (
              <i className="bi bi-moon"></i>
            ) : (
              <i className="bi bi-brightness-high-fill"></i>
            )}
          </div>
          <div className="top-nav__user d-none d-lg-flex ">
            <input type="checkbox" name="" id="user-checkbox" hidden />
            <label htmlFor="user-checkbox">
              {isAuthenticated ? (
                <i className="bi bi-person-check"></i>
              ) : (
                <i className="bi bi-person"></i>
              )}
              <i className="bi bi-x-lg"></i>
            </label>
            <div
              className="user-wrap"
              style={{ boxShadow: `0px 0px 10px ${style.boxShadowColor}` }}
            >
              {!isAuthenticated ? (
                <button
                  className="user-item"
                  onClick={() => handleLoginClick()}
                >
                  Đăng nhập
                </button>
              ) : (
                <button
                  className="user-item"
                  onClick={() => handleLogoutClick()}
                >
                  Đăng xuất
                </button>
              )}
            </div>
          </div>
          <div className="top-nav__cart ">
            <input
              type="checkbox"
              name="top-nav-cart-checkbox"
              id="top-nav-cart-checkbox"
              hidden
            />
            <label htmlFor="top-nav-cart-checkbox" className="">
              <div className="top-nav-cart-icon">
                <i className="bi bi-cart3"></i>
                <span style={{ border: `2px solid ${style.backgroundColor}` }}>
                  {cart.length}
                </span>
              </div>
              <i className="bi bi-x-lg"></i>
            </label>

            <TopNavCart />
          </div>
        </div>
      </Container>
      <div className="nav-overlay"></div>

      {authFormOpen ? (
        <div className="auth-form">
          <AuthForm handleSetAuthFormOpen={(value) => setAuthFormOpen(value)} />
        </div>
      ) : (
        ""
      )}

      <div className="confirm-logout">
        <span>Are you sure you want to log out?</span>
        <div className="confirm-logout-wrap">
          <div className="" onClick={() => handleLogOutCancel()}>
            Cancel
          </div>
          <div className="" onClick={() => handleLogOutConfirm()}>
            Log out
          </div>
        </div>
      </div>
      {/* end of log out  */}
    </div>
  );
};

export default TopNav;
