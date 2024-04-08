import carblog from "../assets/images/image55.png";
import '../Styles/cars_blog.css';
export default function CarsBlog(){
    return(
        <div id="carblogcard">
            <img src={carblog} alt="carblog1" />
            <h3 className="carblogTitle">Proin in lorem tortor</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta est a est rutrum ultricies. Etiam placerat id dui eget vestibulum. Praesent aliquam magna nunc, sit amet facilisis ante elementum quis. Curabitur tincidunt neque libero, at pretium nulla mattis ac. Morbi auctor lacus lectus, eget facilisis urna commodo sit amet.
            </p>
        </div>
    )
}