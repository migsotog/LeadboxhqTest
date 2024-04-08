import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeaderSliderImage from "./header_slider_image";

export default function HeaderSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3
      };
  return (
    <Slider {...settings}>
        <HeaderSliderImage/>
        <HeaderSliderImage/>
        <HeaderSliderImage/>
        
    </Slider>
  )
}

