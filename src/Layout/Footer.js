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
        <span>Contact Us</span>
        <span>FAQ's</span>
        <span>Returns</span>
        <span>Warranty</span>
        <span>Test The Best</span>
        <span>Bicycle Registration</span>
        <span>Safety Notifications</span>
        <span>Terms of Use</span>
        <span>Counterfeit Awareness</span>
        <span>Careers</span>
      </div>
      <div>
        <div>
          <span>Privacy Policy</span>
          <span>California Transparency Act</span>
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
