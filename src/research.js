import React from "react"
import doctor from "./photos/doctor.jpg"
import car from "./photos/car.jpg"
import book from "./photos/book.jpg"
import Navbar from './navbar.js';
import AttributionSection from "./attribution.js"
function Research() {
  return (
    <>
     <Navbar />
      <div className="research-container">
      
        <div className="research-item">
          <img className="research-image" src={doctor} alt="doctor" />
          <h4 className="research-title">Healthcare: Drug Discovery AI</h4>
          <p className="research-description">Arborvitae is conducting ground research in the field of drug discovery using AI. Medical Diagnosis AI: Currently in the ground research phase, Arborvitae is exploring AI applications for medical diagnosis.</p>
        </div>
        <div className="research-item">
          <img className="research-image" src={car} alt="car" />
          <h4 className="research-title">Safety and Automobiles</h4>
          <p className="research-description">DEFA (Real-time defogging AI): In the prototyping phase, Arborvitae is developing DEFA, an AI solution for real-time defogging.</p>
        </div>
        <div className="research-item">
          <img className="research-image" src={book} alt="book" />
          <h4 className="research-title">Education</h4>
          <p className="research-description">Pertinence-Ai Educational Bot: In the prototyping stage Arborvitae is developing Pertinence an ai educational bot which is trained by textbooks using LLM</p>
        </div>
      
      </div>
      <AttributionSection/>
    </>
   
  );
}

export default Research;
