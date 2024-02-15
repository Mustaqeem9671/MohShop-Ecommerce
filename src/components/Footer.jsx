// Footer.js

import React from 'react';
import '../styles/Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-icons'>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <FaFacebook />
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <FaInstagram />
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
      </div>
      <div className='footer-details'>
        <p>&copy; 2022 Your Ecommerce Website</p>
        <p>Contact: info@example.com</p>
        <p>Address: 123 Shopping Street, Cityville</p>
      </div>
    </div>
  );
};

export default Footer;
