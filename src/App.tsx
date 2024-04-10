import "./App.css";
import FeaturedSlider from "./Components/featured_slider";
import CarsBlogSection from "./Components/cars_blog_section";
import NavBar from "./Components/navbar";
import HeaderSlider from "./Components/header_slider";
import About from "./Components/about";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <NavBar />
      <HeaderSlider />
      <FeaturedSlider />
      <CarsBlogSection />
      <About />
      <Footer />
    </>
  );
}

export default App;
