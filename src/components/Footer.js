import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Hamdca | All Rights Reserved</p>
        <ul>
          <li><a href="/facebook">Facebook</a></li>
          <li><a href="/instagram">Instagram</a></li>
          <li><a href="/twitter">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
