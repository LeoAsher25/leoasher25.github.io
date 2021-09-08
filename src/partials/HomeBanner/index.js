import React, { useRef } from "react";
import Slider from "react-slick";
import "./HomeBanner.scss";

const HomeBanner = () => {
  const slider = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0px",
    autoplaySpeed: 3000,
    autoplay: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: () => (
      <div className="slick__dots--custom">
        <div className="dots-center" />
      </div>
    ),
  };

  return (
    <div>
      <div className="home-banner">
        <Slider ref={slider} {...settings}>
          <div className="banner-item">
            <a href="/">
              <img src="./img/banner/slide1.webp" alt="" />
            </a>
          </div>
          <div className="banner-item">
            <a href="/">
              <img src="./img/banner/slide2.jpg" alt="" />
            </a>
          </div>
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
      </div>
    </div>
  );
};

export default HomeBanner;
