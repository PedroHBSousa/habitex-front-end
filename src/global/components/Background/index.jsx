import Image from "../../../assets/img/background.jpg";
import "./styles.css";

function Background(props) {
  return (
    <div className="container">
      <div className="background-overlay"></div>
      <img src={props.imageUrl} alt="Background" />
    </div>
  );
}
export default Background;
