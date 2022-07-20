import "../Components/Card.css";
import Loc from "../Images/location.png"

function Card(props) {
  return (
    <div className="MainCardBox">
      <img
        className="PhotoOfPlace"
        src={props.imageUrl}
      ></img>
      <div className="ContentCardDiv">
        <div className="CardTitleDiv">
            <img src={Loc} className="Logo"></img>
            <span>{props.location}</span>
            <a href={props.googleMapsUrl} className="LinkToGoogle" target="_blank">View on Google Maps</a>
        </div>
        <h1 className="NameOfPlace">{props.title}</h1>
        <h3 className="Date">Last visit: {props.lastVisit}</h3>
        <p className="CardDescription">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
