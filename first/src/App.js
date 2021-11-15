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

   /* ------------------------------- Fav Images ------------------------------- */
  let [favImages, setFavImages] = useState([])

  /* ------------------------------ set fav image ----------------------------- */
  function getFavImages(imgSrc){
      setFavImages([...favImages, imgSrc])
  }

  /* ---------------------------- remove fav images --------------------------- */
  function removeFavImages(imgSrc){
    setFavImages(favImages.filter(image => image !== imgSrc))
  }

  /* ------------------------ set fav image through map ----------------------- */
  let userFavImage = favImages.map((imgSrc) => {
    return(
      <img src={imgSrc} className="Img" />
    )
  })

  /* -------------------------------- card map -------------------------------- */
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
      removeFavImages = {
        removeFavImages
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
  {userFavImage}
  </aside>
  </div>
  <Footer/>
    </>
  )
}


export default App;
