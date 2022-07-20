import "../Components/ContentPage.css"
import Card from "./Card";
import data from "../data";


function Contentpage() {

    const cards = data.map(item => <Card {...item}/>);

    return (
    <div className="ContentPageDiv">
        {cards}
    </div>
    )
  }
  
export default Contentpage;
  