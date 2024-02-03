import React from 'react';
import featureoverview from "../../img/feature-overview.avif";
import "./Overview.css";

const Overview = () => {
  const sectionStyle = {
    color: 'blue', // Set the desired color
  };

  return (
    <div className='overview'>
      <div className="overview-img">
      <img id="feature-overview" src={featureoverview} alt="feature-overview" />
      </div> 

      <div className='overview-text'>
        <h2>Program <strong style={sectionStyle}>Overview</strong></h2>
          <p>
              This internship program is designed to provide hands-on experience in web development. The duration of the internship is 1 Month.
          </p>
          <div className='button'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScd5TRLHUVC8kle_6k4JceWTcfknRoNsuRB6Q4ymhGrAIsnSA/viewform" target="_blank" rel="noopener noreferrer">
            <button>Apply Now for Internship</button>
          </a>
          <a href="https://cognifyz.com/internships/" target="_blank" rel="noopener noreferrer">
            <button>Learn More...</button>
          </a>
          
          
          </div>
        
      </div>
      
    </div>
  )
}

export default Overview