import React from 'react';
import '../scss/layout.scss';

function Footer() {
  return (
    <footer className='footer'>
      <h1 className='logo'>DINO</h1>

      <div className='footer-nav'>
        <h3>Online Shopping</h3>
        <ul className='footer-nav-list'>
          <li className='footer-list-item'>Mens</li>
          <li className='footer-list-item'>Womens</li>
          <li className='footer-list-item'>Kids</li>
          <li className='footer-list-item'>Beauty</li>
        </ul>
      </div>

      <div className='social-connect'>
        <h3>Connect with Us</h3>
        <ul className='social-connect-list'>
          <li className='social-connect-item'>Facebook</li>
          <li className='social-connect-item'>Instagram</li>
          <li className='social-connect-item'>Twitter</li>
        </ul>
      </div>

      <div className='contact'>
        <h3>Connect with Us</h3>
        <ul className='contact-list'>
          <li className='contact-options'>Ph: +91-1112223333</li>
          <li className='contact-options'>dinocontact@email.com</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
