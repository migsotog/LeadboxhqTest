import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCars from "./featured_cars";
import "../Styles/featured_slider.css";
import { NextArrow, PrevArrow } from "./custom_arrows";

export default function FeaturedSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div id="sliderContainer">
      <h2 className="featuredHeader">FEATURED VEHICLES</h2>
      <Slider {...settings}>
        <FeaturedCars />
        <FeaturedCars />
        <FeaturedCars />
        <FeaturedCars />
        <FeaturedCars />
        <FeaturedCars />
      </Slider>
    </div>
  );
}
