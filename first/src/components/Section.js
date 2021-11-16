import React from 'react'

function Section(){

  let welcomeMessage = "AVENGERS :"
  let mode = "MARVEL STUDIOUS"
  
  let styles = {

    color:'red',
    backgroundColor:'black',
    fontSize:76
  }

  return <div  className="Hero"> 
  <h1 style={styles}> {`${welcomeMessage} ${mode}`}</h1>
  </div>

}

export default Section;