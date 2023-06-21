import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContactPage from "./contact.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Research from "./research.js";
import Product from "./product.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/research" element={<Research />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

