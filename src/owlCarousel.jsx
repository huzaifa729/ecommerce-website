import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
/*
  resources:
  1- https://www.npmjs.com/package/react-owl-carousel
  2- https://github.com/seal789ie/react-owl-carousel
*/

const MyOwlCarousel = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true
  };
  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <img src="https://unsplash.it/400/300/?image=511" />
      </div>
      <div className="item">
        <img src="https://unsplash.it/400/300/?image=514" />
      </div>
      <div className="item">
        <img src="https://unsplash.it/400/300/?image=513" />
      </div>
    </OwlCarousel>
  );
};
export default MyOwlCarousel;