import "../Styles/about.css";
import aboutimage1 from "../assets/images/image90.png";
import aboutimage2 from "../assets/images/2022_Ford_Ecosport_SES_FR_DiamondWhite1.png";
export default function About() {
  return (
    <div id="aboutus">
      <div className="aboutimages">
        <img
          src={aboutimage2}
          width="818"
          className="aboutimage2"
          alt="Image2"
        />
        <img
          src={aboutimage1}
          width="340"
          className="aboutimage1"
          alt="Image1"
        />
      </div>
      <div className="abouttext">
        <h3>ABOUT US</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vel quam nec metus pellentesque iaculis. Cras lobortis odio a nulla
          condimentum blandit. Donec laoreet euismod diam, in lobortis odio
          tincidunt in.
          <br /> <br />
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Vivamus eleifend, metus ut rutrum dignissim,
          erat diam pulvinar urna, laoreet convallis odio lorem at elit. Morbi
          iaculis metus et vestibulum commodo. Etiam lectus augue, congue vitae
          vestibulum sit amet, mattis finibus nulla. Duis dictum condimentum
          viverra. Curabitur cursus, nisi sit amet maximus imperdiet, odio augue
          tincidunt neque, nec condimentum lectus enim at est. Praesent accumsan
          sed quam id rutrum. Quisque quis turpis eget ex euismod fermentum.
          Fusce id nisi lacus. Vestibulum et aliquet purus.
        </p>
      </div>
    </div>
  );
}
