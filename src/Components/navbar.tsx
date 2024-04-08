import logo from '../assets/images/Leadbox_Logo.png'
import search_icon from '../assets/images/Leadbox-Web-Icons.svg'
import '../Styles/navbar.css'
export default function NavBar(){
    return(
        <nav id="navbar">
        <div>
            <img src={logo} alt="Logo" />
        </div>
        <div className='links'>
            <div className='linkElement'>
                <p>NEW</p>
                <ul>
                    <li>New Vehicle Inventory</li>
                    <li>2023 Ford Lightning</li>
                    <li>2023 Ford Bronco</li>
                    <li>New Vehicle Specials</li>
                </ul>
            </div>
            <div className='linkElement'>
                <p>USED</p>
                <ul>
                    <li>Sample Text</li>
                    <li>Sample Text</li>
                    <li>Sample Text</li>
                    <li>Sample Text</li>
                </ul>
            </div>
            <div className='linkElement'>SERVICE</div>
            <div className='linkElement'>PARTS</div>
            <div className='linkElement'>ABOUT</div>
            <img src={search_icon} alt="search_icon" />
        </div>
        </nav>
    )
}