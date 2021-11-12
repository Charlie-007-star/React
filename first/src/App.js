import React from "react";

/* ------------------------------- Components ------------------------------- */
import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"
import Card  from "./components/Card";
import CardData from "./components/CardData"

/* ----------------------------------- CSS ---------------------------------- */
import "./style.css";
import cardData from "./components/CardData";


/* -------------------------------- Main App -------------------------------- */
function App() {
 
  cardData.map((cardItem)=>{
    return (
      
    )
  })

  return (
    <>
  <Header/>
  <Section/>
  <Card
  cardContent= {{}}
  />
  <Footer/>
    </>
  )
}


export default App;
