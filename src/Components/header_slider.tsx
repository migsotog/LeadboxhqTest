import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeaderSliderImage from "./header_slider_image";
import "../Styles/header_slider.css";

export default function HeaderSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div id="headerSlider">
      <Slider {...settings}>
        <HeaderSliderImage />
        <HeaderSliderImage />
        <HeaderSliderImage />
      </Slider>
    </div>
  );
}
