import React from "react";

function Card(props) {

    return (
        <div className="card">
            <img src={props.cardContent.imgSrc} alt=""/>
            <h2>{props.cardContent.name}</h2>
            <p>Email: {props.cardContent.email}</p>
        </div>
    );
}



export default Card;