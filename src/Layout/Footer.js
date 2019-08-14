import React from 'react';

const Footer = () => (
  <footer>
    <div className='footer-col-1'>
      <div>
        <input placeholder='Join our Newsletter'></input>
        <button>Join</button>
      </div>
      <div>
        By submitting your email address you agree to the 
        <a href='https://www.specialized.com/us/en/terms-and-conditions'>Terms and Conditions</a>
      </div>
    </div>
    <div className='footer-col-2'>
      <div className='footer-links'>
        <a href='#'>Contact Us</a>
        <a href='#'>FAQ's</a>
        <a href='#'>Returns</a>
        <a href='#'>Warranty</a>
        <a href='#'>Test The Best</a>
        <a href='#'>Bicycle Registration</a>
        <a href='#'>Safety Notifications</a>
        <a href='#'>Terms of Use</a>
        <a href='#'>Counterfeit Awareness</a>
        <a href='#'>Careers</a>
      </div>
      <div>
        <div>
          <a href='#'>Privacy Policy</a>
          <a href='#'>California Transparency Act</a>
        </div>
        <div>© 2019. Specialized Bicycle Components. All Rights Reserved.</div>
      </div>
    </div>
    <div className='footer-col-3'>
      <button>Find a retailer</button>
      <div>
        social media icons
      </div>
    </div>
  </footer>
);

export default Footer;
