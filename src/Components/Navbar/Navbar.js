import React from 'react'
import img from "../../img/cognifyz-1.png";
import "./Navbar.css";
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div class="navbar">
    <a href="https://cognifyz.com/" target="https://cognifyz.com/">
    <img src={img} alt="logo"/></a>
    <ul>
      <Link spy={true} to='home-container' smooth={true} activeClass='activeClass'>
        <li >Home</li>
      </Link>
      <Link spy={true} to='aboutus' smooth={true} >
        <li >About Us</li>
      </Link>
      <Link spy={true} to='overview' smooth={true} >
        <li >Overview</li>
      </Link>  
      <Link spy={true} to='highlight' smooth={true} >
        <li >Highlights</li>
      </Link>
      <Link spy={true} to='qualification' smooth={true} >
        <li >Qualification</li>
        </Link>

      <Link spy={true} to='footer' smooth={true} >
        <li >Contact Us</li>
      </Link>
      
      
    </ul>
  </div>
  )
}

export default Navbar