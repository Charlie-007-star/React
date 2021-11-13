import React , {useState} from "react";

function Card(props) {

    let favorites = useState("Add to Fav"); 
    let [btnTextState , setBtnTextState] = favorites;

    function addToFavorite() {
       
        setBtnTextState((prevState) => {

           if(prevState === "Add to Fav"){
               return "Added"
           }else{
               return "Add to Fav"
           }
        })
    }

    return (
        <div className="card">
            <img src={props.cardContent.imgSrc} alt=""/>
            <h2>{props.cardContent.name}</h2>
            <p>{props.cardContent.email}</p>
            <button className="button" onClick={addToFavorite}>{btnTextState}</button>
            
        </div>
    );
}



export default Card;