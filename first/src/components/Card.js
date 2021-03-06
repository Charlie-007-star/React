import React , {useState} from "react";
import heart from "../assets/heart-solid.svg";

function Card(props) {
  
    let favorites = useState("Add to Fav"); 
    let activeClass = useState("");

    let [btnTextState , setBtnTextState] = favorites;
    let [classState, setClassState] = activeClass

    function addToFavorite(imgSrc) {
        
        setBtnTextState((prevState) => {
            
           if(prevState === "Add to Fav"){
              
               props.getFavImages(imgSrc); 
               return "Added"
           }else{

               props.removeFavImages(imgSrc);
               return "Add to Fav"
           }
        })

        setClassState((prevClass) => {

            if(prevClass == ""){

                return "active"
            }else{

                return "";
            }
        })
    }

    return (
        <div className={`card ${classState}`}>
            <img src={heart} className="icon" />
            <img src={props.cardContent.imgSrc} alt=""/>
            <h2>{props.cardContent.name}</h2>
            <p>{props.cardContent.email}</p>
            <button className="button" onClick={(()=>{
                addToFavorite(props.cardContent.imgSrc)
            })}>{btnTextState}</button>
        </div>
    );
}



export default Card;