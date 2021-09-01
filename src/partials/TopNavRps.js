import React, { useContext } from "react";
import { TOGGLE_THEME } from "../reducers/types";
import { ThemeContext } from "../contexts/ThemeContext";
import "../scss/TopNavRps.scss";
import { Link } from "react-router-dom";

const TopNavRps = (props) => {
  const { theme, Themedispatch } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  // const { isAuthenticated, AuthDispatch } = useContext(AuthContext)

  const { handleLoginClick, isAuthenticated, handleLogoutClick } = props;

  function handleBarBtnClick(e) {
    const barBtnEle = document.querySelector(".bar-btn");
    if (barBtnEle) {
      barBtnEle.classList.toggle("active");
    }
    const topNavListEle = document.querySelector(".top-nav__list");
    if (topNavListEle) {
      topNavListEle.classList.toggle("active");
    }

    const topNavOverLayEle = document.querySelector(".top-nav-overlay");
    if (topNavOverLayEle) {
      topNavOverLayEle.classList.toggle("active");
    }

    const topNavRpsEle = document.querySelector(".top-nav-rps");
    if (topNavRpsEle) {
      topNavRpsEle.classList.toggle("active");
    }
  }

  function handleOverlayClick() {
    const topNavRpsEle = document.querySelector(".top-nav-rps");
    if (topNavRpsEle) {
      topNavRpsEle.classList.toggle("active");
    }
  }

  function handleLogoutClickRps() {
    handleOverlayClick();
    handleLogoutClick();
  }

  function handleLoginClickRps() {
    handleOverlayClick();
    handleLoginClick();
  }

  const handleToggleThemeClick = () => {
    Themedispatch({
      type: TOGGLE_THEME,
      payload: null,
    });
  };

  function handlePlusIconClick(e) {
    e.preventDefault();
    const dropDownList = e.target.closest(".dropdown-list");
    if (dropDownList) {
      if (!dropDownList.classList.contains("active")) {
        dropDownList.classList.add("active");
      } else {
        dropDownList.classList.remove("active");
      }
    }
  }

  return (
    <div className="top-nav-rps d-lg-none">
      <div className="bar-btn" onClick={() => handleBarBtnClick()}>
        <div
          style={{ backgroundColor: style.color }}
          className="bar bar1"
        ></div>
        <div
          style={{ backgroundColor: style.color }}
          className="bar bar2"
        ></div>
        <div
          style={{ backgroundColor: style.color }}
          className="bar bar3"
        ></div>
      </div>
      <div
        className="top-nav-overlay"
        onClick={() => handleOverlayClick()}
      ></div>

      <ul className="top-nav__list">
        <div className="top-nav-header">
          <div className="top-nav__branch">
            <img src="./img/logofull2.png" alt="" />
          </div>
          <div className="bar-btn" onClick={() => handleBarBtnClick()}>
            <div
              style={{ backgroundColor: style.color }}
              className="bar bar1"
            ></div>
            <div
              style={{ backgroundColor: style.color }}
              className="bar bar2"
            ></div>
            <div
              style={{ backgroundColor: style.color }}
              className="bar bar3"
            ></div>
          </div>
        </div>

        <li className="top-nav-item">
          <Link to="/" className="top-nav-item-link">
            About
          </Link>
        </li>

        <li className="top-nav-item dropdown-list">
          <div className="top-nav-item-link">
            <Link to="/products" className="top-nav-item-link">
              <span>Sản phẩm</span>
              <i
                onClick={(e) => handlePlusIconClick(e)}
                className="bi bi-plus-lg"
              ></i>
              <i
                onClick={(e) => handlePlusIconClick(e)}
                className="bi bi-dash-lg"
              ></i>
            </Link>
            <ul className="top-nav-product-list">
              <li className="top-nav-product-item  dropdown-list">
                <a href="/">
                  Mềm mại
                  <i
                    onClick={(e) => handlePlusIconClick(e)}
                    className="bi bi-plus-lg"
                  ></i>
                  <i
                    onClick={(e) => handlePlusIconClick(e)}
                    className="bi bi-dash-lg"
                  ></i>
                </a>
                <ul className="product-sub-list">
                  <li className="top-nav-product-item">
                    <a href="/">Gấu bông</a>
                  </li>
                  <li className="top-nav-product-item">
                    <a href="/">Gối ôm</a>
                  </li>
                  <li className="top-nav-product-item">
                    <a href="/">Tựa lưng, Gối cổ</a>
                  </li>
                </ul>
              </li>

              <li className="top-nav-product-item dropdown-list">
                <a href="/">
                  Thư giãn
                  <i
                    onClick={(e) => handlePlusIconClick(e)}
                    className="bi bi-plus-lg"
                  ></i>
                  <i
                    onClick={(e) => handlePlusIconClick(e)}
                    className="bi bi-dash-lg"
                  ></i>
                </a>

                <ul className="product-sub-list">
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
          </div>
        </li>

        <li className="top-nav-item">
          <a href="/" className="top-nav-item-link">
            Gift Station
          </a>
        </li>

        {/* <li className="top-nav-item">
          <a href="/" className="top-nav-item-link">
            Meow's Story
          </a>
        </li> */}

        {isLightTheme ? (
          <li
            className="top-nav__theme top-nav-item"
            onClick={() => handleToggleThemeClick()}
          >
            <div className="top-nav-item-link">
              <i className="bi bi-moon"></i>
              <span> Dark Theme </span>
            </div>
          </li>
        ) : (
          <li
            className="top-nav__theme top-nav-item"
            onClick={() => handleToggleThemeClick()}
          >
            <div className="top-nav-item-link">
              <i className="bi bi-brightness-high-fill"></i>
              <span>Light Theme</span>
            </div>
          </li>
        )}

        <div className="top-nav-item">
          {!isAuthenticated ? (
            <div
              className="top-nav-item-link"
              onClick={() => handleLoginClickRps()}
            >
              <i className="bi bi-person"></i>
              <span>Đăng nhập</span>
            </div>
          ) : (
            <div
              className="top-nav-item-link"
              onClick={() => handleLogoutClickRps()}
            >
              <i className="bi bi-person-check"></i>
              <span>Đăng xuất</span>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default TopNavRps;
