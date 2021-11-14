import React, {useState} from "react";

/* ------------------------------- Components ------------------------------- */
import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"
import Card  from "./components/Card";
import cardData from "./components/CardData";

/* ----------------------------------- CSS ---------------------------------- */
import "./style.css";

/* -------------------------------- Main App -------------------------------- */
function App() {

  let [favImages, setFavImages] = useState([])

  

  function getFavImages(imgSrc){

    
  }
 

  let card = cardData.map((cardItem)=>{
    return (
      <Card 
        cardContent={{
          imgSrc:cardItem.imgSrc,
          name:cardItem.name,
          email:cardItem.email
      }}
      getFavImages = {
         getFavImages 
      }
      />
    )
  })

  return (
    <>
  <Header/>
  <Section/>
  <div className="card-container">{card}
  <aside><h2>Favorites</h2>
  <img src={favImages}  className="Img"/>
  </aside>
  </div>
  <Footer/>
    </>
  )
}


export default App;
