import React, { useEffect } from 'react';
import { Element, Link } from 'react-scroll';
import './Highlight.css';

const Highlight = () => {
  useEffect(() => {
    const handleScroll = () => {
      const fpart = document.querySelector('.fpart');
      const spart = document.querySelector('.spart');

      const fpartRect = fpart.getBoundingClientRect();
      const spartRect = spart.getBoundingClientRect();

      const isVisibleFpart = fpartRect.top < window.innerHeight - 100;
      const isVisibleSpart = spartRect.top < window.innerHeight - 100;

      if (isVisibleFpart) {
        fpart.classList.add('visible');
      }

      if (isVisibleSpart) {
        spart.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Element name="highlight" className='highlight'>
      <Link to="highlight" smooth={true} duration={500} offset={-50}>
       <h2>Highlights</h2> 
      </Link>

      <div className="fpart">
      <h3>Benefits</h3>
        <ul className='benefits'>
              <li>Real-world development projects</li>
              <li>Mentorship from experienced professionals</li>
              <li>Opportunity to enhance technical skills</li>
              <li>Exposure to a collaborative work environment</li>
          </ul>
      </div>
      <div className="spart">
          <h3>What you will receive</h3>
          <ul className='benefits'>
                    
              <li>Offer Letter from Cognifyz Technologies</li>
              <li>Internship Certificate</li>
              <li>Resume Building Support</li>
              <li>Letter of recommendation based on Performance</li>
              <li>After clearing interview stipend ranging from 5K - 10K</li>
            
          </ul>
      </div>
        
      </Element>
  )
}

export default Highlight