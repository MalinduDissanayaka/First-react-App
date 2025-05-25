import React from 'react'
import './Header.css'
import MenuLink from '../MenuLink/MenuLink'
import logo from "../../assets/react.svg"
import vite from "../../../public/vite.svg"

function Header() {
  return (<>
   <div id="header">
    <img src={vite} alt="React" style={{ height: "40px" }} />

  <a href="http://www.react.dev">
    <img src={logo} alt="React" style={{ height: "40px" }} />
  </a>
   
  <div>
    <MenuLink  linkName = "Home"  url="#home" />
    <MenuLink  linkName = "About"  url="#about" />
    <MenuLink linkName = "Contact"  url="#contact" />
    <MenuLink  linkName = "Login" url="#login" />
  </div>
  
</div>

    
    </>
  )
}

export default Header