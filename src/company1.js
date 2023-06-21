import React, { useEffect } from 'react';
import './index.css';
import image from "./photos/logo.png";
import AI from "./photos/AI.jpeg";
import bicycle from "./photos/bicycle.jpeg";
import mission from "./photos/mission.jpeg";
import { Link} from 'react-router-dom';

function Logo() {
  useEffect(() => {
    // Preload the images
    const images = [image, AI, bicycle, mission];
    images.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  return (
    <>
      <div className="logo_div">
        <img src={image} alt="Arborvitae logo" className="logo_image" />

        <div className="logo_div2">
          <img className="AI_image" src={AI} alt="" />
          <div class="ver">
            <p className="detail">
              <span className="A">ARBORVITAE</span> is a dynamic and innovative company dedicated to finding AI-driven solutions for existing problems in our country. Our vision is to create a world where AI is used to its fullest potential to solve pressing societal challenges.
            </p>
            <Link to="/contact" className="button">CONTACT US</Link>
          </div>
        </div>
        <img className="bicycle_image" src={bicycle} alt="" />
      </div>
      <div className="logo_div3">
        <img src={mission} alt="Mission" class="mission-image" />
        <p className="At">
          At Arborvitae, we envision a future where AI revolutionizes industries, transforms economies, and improves lives worldwide. Our goal is to drive innovation and lasting impact by leveraging AI and machine learning.
        </p>
      </div>
    </>
  );
}

export default Logo;

