import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

      <div class='footer-links'>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Mosti © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/mostafa.mohammedi.5'
              aria-label='Facebook'>
              <i class='fab fa-facebook-f'/>
            </a>

            <a
              class='social-icon-link Github'
              href="https://github.com/mohmos94"
              aria-label='Github'>
              <i class="fab fa-github"></i>          
            </a>
            <a
              class='social-icon-link facebook'
              href='https://no.linkedin.com/in/mostafa-mohammedi-525aab1a0'
              aria-label='linkedin'>
              <i class="fab fa-linkedin-in"></i>
            </a>
            
            <a
              class='social-icon-link facebook'
              href='https://www.instagram.com/mosti_1994/'
              target='_blank'
              aria-label='Instagram'>
              <i class="fab fa-instagram"></i>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;