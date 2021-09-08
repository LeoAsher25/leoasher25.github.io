import React, { useEffect } from "react";
import "./ScrollToTop.scss";

const ScrollToTop = () => {
  useEffect(() => {
    const scrollToTopEle = document.querySelector(".scroll-to-top");
    window.onscroll = () => {
      if (window.scrollY > 300) {
        scrollToTopEle.classList.add("active");
      } else {
        scrollToTopEle.classList.remove("active");
      }
    };
  }, []);

  function handleScrollToTopClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="scroll-to-top" onClick={() => handleScrollToTopClick()}>
      <i className="fas fa-chevron-up"></i>
    </div>
  );
};

export default ScrollToTop;
