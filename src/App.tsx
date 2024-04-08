import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FeaturedCars from './Components/featured_cars'
import './App.css'
import FeaturedSlider from './Components/featured_slider'
import CarsBlog from './Components/cars_blog_card'
import CarsBlogSection from './Components/cars_blog_section'
import NavBar from './Components/navbar'
import HeaderSlider from './Components/header_slider'
import About from './Components/about'


function App() {
  const [count, setCount] = useState(0)

  return (
    //<FeaturedSlider/>
    //  <CarsBlog/>
    // <CarsBlogSection/>
    // <NavBar/>
    // <HeaderSlider/>
    <About/>
  )
}

export default App
