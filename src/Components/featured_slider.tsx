import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCars from "./featured_cars";

export default function FeaturedSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <Slider {...settings}>

        <FeaturedCars/>
        <FeaturedCars/>
        <FeaturedCars/>
    </Slider>
  )
}

