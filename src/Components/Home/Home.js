import "./Home.css";
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className={`home-container ${isVisible ? 'visible' : ''}`}>
        <h1 className="slideup">Welcome to Web Developer Internship Opportunities at Cognifyz Technologies</h1>
        <p className="slideup">
            Cognifyz Technologies is excited to offer a dynamic and challenging web developer internship program. Gain real-world experience, work with cutting-edge technologies, and receive mentorship from industry experts.
        </p>
      </div>
  )
}

export default Home;