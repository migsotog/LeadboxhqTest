import "../Styles/footer.css";
import companylogo from '../assets/images/Leadboxlogowhite.png';
import linkedin from '../assets/images/linkedin.svg';
import instagram from '../assets/images/instagram.svg';
import pinterest from '../assets/images/pinterest.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';
export default function Footer(){
    return(
        <div id="footer">
            <div className="footer1">
                <p>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
                <p>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
                <p>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
            </div>
            <div className="footer2">
                <img src={companylogo} className="logofooter" alt="companylogo" />
                <div className="socialicons">
                    <a href="#" rel="noreferrer nofollow" target="_blank"><img src={facebook} alt="facebooklogo"/></a>
                    <a href="#" rel="noreferrer nofollow" target="_blank"><img src={twitter} alt="twitterlogo"/></a>
                    <a href="#" rel="noreferrer nofollow" target="_blank"><img src={youtube} alt="youtubelogo"/></a>
                    <a href="#" rel="noreferrer nofollow" target="_blank"><img src={instagram} alt="instagramlogo"/></a>
                    <a href="#" rel="noreferrer nofollow" target="_blank"><img src={pinterest} alt="pinterestlogo"/></a>
                    <a href="#" rel="noreferrer nofollow" target="_blank"><img src={linkedin} alt="linkedinlogo"/></a>
                </div>
                <div className="footerlinks">
                    <a href="">Sitemap</a>
                    <span>|</span>
                    <a href="">Terms and Condition</a>
                    <span>|</span>
                    <a href="">Privacy Policy</a>
                    <span>|</span>
                    <a href="">Dealership © 2022 </a>
                    <span>|</span>
                    <a href="">Powered by Leadbox</a>
                   
                </div>
            </div>
            <div className="footer3">
                <select name="" id="selectdept">
                    <option value="sales">Sales</option>
                    <option value="service">Service</option>
                    <option value="parts">Parts</option>
                </select>
                <p>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
            </div>
        </div>
    )
}