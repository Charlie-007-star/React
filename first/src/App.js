import React from "react";

/* ------------------------------- Components ------------------------------- */
import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"
import Card  from "./components/Card";

/* ----------------------------------- CSS ---------------------------------- */
import "./style.css";


/* -------------------------------- Main App -------------------------------- */
function App() {
  return (
    <>
  <Header/>
  <Section/>
  <Card
  cardContent= {{
    imgSrc:"https://i.pinimg.com/550x/c7/bf/26/c7bf26c7c7ea87fa9e11092925de627c.jpg",
    name:"Barnes",
    email:"bar@gmail.com"
  }}
  />
  <Footer/>
    </>
  )
}


export default App;
