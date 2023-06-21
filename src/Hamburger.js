import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './index.css';

function Hamburger() {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const navigationItems = [
    { path: '/', label: 'COMPANY' },
    { path: '/products', label: 'PRODUCTS' },
    { path: '/research', label: 'RESEARCH' },
    { path: '/contact', label: 'CONTACT' }
  ];

  const toggle = () => {
    setClick(!click);
  };

  useEffect(() => {
    setClick(false); // Close the hamburger menu when the location changes
  }, [location]);

  return (
    <>
      <span className="hamburger-icon" onClick={toggle}>
        <span className="bar"></span>
      </span>

      <div className={click ? 'drop' : 'pages'}>
        {navigationItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`links ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Hamburger;

