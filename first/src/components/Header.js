import React from 'react'

function Headers(){
  return(
    <header className="diplay-flex">
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