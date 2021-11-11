import React from 'react'

let time = new Date()
let hours = time.getHours()
let mode;

if(hours > 18){

    mode = "nightMode" 
}else if(hours < 20){

  mode = "dayMode"
}


function Headers(){

  return(

    <header className={`diplay-flex ${mode}`}>

      <div className="logo">header</div>

      <ul className="nav display-flex">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

    </header>
  )
}


export default Headers;