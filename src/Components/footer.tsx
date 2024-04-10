import { useState } from "react";
import "../Styles/footer.css";
import companylogo from "../assets/images/Leadboxlogowhite.png";
import linkedin from "../assets/images/linkedin.svg";
import instagram from "../assets/images/instagram.svg";
import pinterest from "../assets/images/pinterest.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";

const times = {
  sales: "08:00 am - 08:00 pm",
  service: "08:00 am - 05:00 pm",
  parts: "08:00 am - 04:00 pm",
};

export default function Footer() {
  const [currentOption, setCurrentOption] = useState("sales");
  const [currentTime, setCurrentTime] = useState("08:00 am - 08:00pm");

  const handleSelect = (newOption: string) => {
    setCurrentOption(newOption);
    setCurrentTime(times[newOption]);
  };
  return (
    <div id="footer">
      <div className="footer1">
        <p>Street number, City, Province, postal code</p>
        <p>Sales: (XXX) XXX-XXXX</p>
        <p>Parts: (XXX) XXX-XXXX</p>
        <p>Service: (XXX) XXX-XXXX</p>
      </div>
      <div className="footer2">
        <img src={companylogo} className="logofooter" alt="companylogo" />
        <div className="socialicons">
          <a
            href="https://www.instagram.com/leadboxhq/"
            rel="noreferrer nofollow"
            target="_blank"
          >
            <img src={facebook} alt="facebooklogo" />
          </a>
          <a
            href="https://twitter.com/leadbox"
            rel="noreferrer nofollow"
            target="_blank"
          >
            <img src={twitter} alt="twitterlogo" />
          </a>
          <a
            href="https://www.youtube.com/@YourLeadbox"
            rel="noreferrer nofollow"
            target="_blank"
          >
            <img src={youtube} alt="youtubelogo" />
          </a>
          <a
            href="https://www.instagram.com/leadboxhq/"
            rel="noreferrer nofollow"
            target="_blank"
          >
            <img src={instagram} alt="instagramlogo" />
          </a>
          <a
            href="https://www.pinterest.com/leadbox/"
            rel="noreferrer nofollow"
            target="_blank"
          >
            <img src={pinterest} alt="pinterestlogo" />
          </a>
          <a
            href="https://www.linkedin.com/company/leadbox-inc/"
            rel="noreferrer nofollow"
            target="_blank"
          >
            <img src={linkedin} alt="linkedinlogo" />
          </a>
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
        <select
          name=""
          id="selectdept"
          value={currentOption}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="sales">Sales</option>
          <option value="service">Service</option>
          <option value="parts">Parts</option>
        </select>
        <div className="schedules">
          <div className="schedules1">
            <p>Monday: {currentTime}</p>
            <p>Tuesday: {currentTime}</p>
            <p>Wednesday: {currentTime}</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="schedules2">
            <p>Thursday: {currentTime}</p>
            <p>Friday: {currentTime}</p>
            <p>Saturday: {currentTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
