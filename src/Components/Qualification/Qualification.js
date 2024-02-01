import React from 'react'
import "./Qualification.css";
import img from "../../img/qualification-img.avif";

const Qualification = () => {
  return (
    <div className='qualification'>
      <div >
      <img id="qualification-img" src={img} alt="qualification-img" />

      </div>
    <div className='qualification-text'>
    <h2>Qualification</h2>
          <ul>
            <li>The internship program is open to students and individuals with varying levels of experience and educational backgrounds.</li>
            <li>Proficiency in HTML, CSS, and JavaScript.</li>
            <li>Strong problem-solving and communication skills.</li>
            <li>Passion for learning and adapting to new technologies.</li>

          </ul>
    </div>
      
      </div>
  )
}

export default Qualification