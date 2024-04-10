import CarsBlog from "./cars_blog_card";
import "../Styles/cars_blog_section.css";
import carblog1 from "../assets/images/image77.png";
import carblog2 from "../assets/images/image76.png";
import carblog3 from "../assets/images/image55.png";
export default function CarsBlogSection() {
  return (
    <div id="cars_blog_section">
      <CarsBlog sourceImage={carblog3} />
      <CarsBlog sourceImage={carblog2} />
      <CarsBlog sourceImage={carblog1} />
    </div>
  );
}
