import '../Styles/featured_cars.css';
import car1 from '../assets/images/image10.png'
export default function FeaturedCars(){
    return(
        <div className='featuredcard'>
            <img src={car1} alt="Car1"/>
             <span className='featuredTitle'>
                <h5>
                2016 Tesla Model X P90D Ludicrous
                </h5>
            </span> 
            <span className='featuredTag'>
                <p> 
                SOLD
               </p>
            </span>
        </div>
    )
}