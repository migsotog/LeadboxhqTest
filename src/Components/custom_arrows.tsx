import nArrow from "../assets/images/NextArrow.svg";
import pArrow from "../assets/images/PrevArrow.svg";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={nArrow} alt="next_arrow" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={pArrow} alt="previous_arrow" />
    </div>
  );
}
export { NextArrow, PrevArrow };
