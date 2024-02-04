import React from 'react';
import './Footer.css';  // Import your CSS file for styling
import img from "../../img/footer-img.png";
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-flex-container">
      <div>
      <a href="https://cognifyz.com/" target="https://cognifyz.com/">
      <img id="cognify-logo" src={img} alt="Cognify Logo" />
</a>
        <p>Cognify Technologies - Transforming Ideas into Reality</p>
      </div>

      <div id="quick-links">
        <h3>Quick-Links</h3>
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

      <Link spy={true} to='Contact Us' smooth={true} >
        <li >Contact Us</li>
      </Link>
      
    </ul>
      </div>

      <div id="social-links">
        <h3>How to Contact Us?</h3>
        <a href="https://www.linkedin.com/company/cognifyz-techonologies/people/?viewAsMember=true" target="https://www.linkedin.com/company/cognifyz-techonologies/people/?viewAsMember=true">
          <i class="fab fa-linkedin"></i>
          @cognifyz-Technologies</a>
        <a href="mailto:contact@cognifyz.com">
        <i class="far fa-envelope"></i>
        contact@cognifyz.com</a>
        <a href="https://cognifyz.com/" target="https://cognifyz.com/">
        www.cognifyz.com</a>
        <a href="https://www.instagram.com/cognifyz_tech/" target="https://www.instagram.com/cognifyz_tech/">
        <i class="fab fa-instagram"></i>
        @cognifyz_tech</a>
        {/* Add more social links as needed */}
      </div>
    </div>
    <p>&copy; 2024 Cognify Technologies. All rights reserved by Chinchu Babu.</p>
    </footer>
  );
};

export default Footer;
