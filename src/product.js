import React, { useState, useEffect, Suspense } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import logo from './photos/Lindt.png';
import Navbar from './navbar.js';

const LazyLoadedSlider = React.lazy(() => import('react-slick'));

function Product() {
  const [isSliderLoaded, setIsSliderLoaded] = useState(false);

  useEffect(() => {
    setIsSliderLoaded(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="inner-div">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="content-container">
            <p className="lindtp">
              Lindt is an AI-powered chatbot developed by Arborvitae. It offers an interactive and engaging experience
              on Discord. Powered by ChatGPT, Lindt can understand and respond to natural language input. Users can ask
              questions, get recommendations, or simply have a conversation with this friendly and knowledgeable AI.
              Lindt learns and adapts to user preferences over time, providing personalized recommendations and
              insights. Arborvitae continues to explore new and innovative ways to use AI-based chatbots to enhance
              communication and connection.
            </p>
            <div className="photo-slider-container">
              {isSliderLoaded ? (
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyLoadedSlider
                    infinite
                    slidesToShow={1}
                    slidesToScroll={1}
                    className="photo-slider"
                  >
                    <div className="photo-slide">
                      <img src={require('./photos/photo1.jpeg')} alt="Photo 1" className="photo" />
                    </div>
                    <div className="photo-slide">
                      <img src={require('./photos/photo2.jpeg')} alt="Photo 2" className="photo" />
                    </div>
                  </LazyLoadedSlider>
                </Suspense>
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;



