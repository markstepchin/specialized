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
        <a href='/contact-us'>Contact Us</a>
        <a href='/FAQs'>FAQ's</a>
        <a href='/returns'>Returns</a>
        <a href='/warranty'>Warranty</a>
        <a href='/test-the-best'>Test The Best</a>
        <a href='/registration'>Bicycle Registration</a>
        <a href='/safety'>Safety Notifications</a>
        <a href='/terms'>Terms of Use</a>
        <a href='/conterfeit'>Counterfeit Awareness</a>
        <a href='/careers'>Careers</a>
      </div>
      <div>
        <div>
          <a href='/privacy-policy'>Privacy Policy</a>
          <a href='/transparency'>California Transparency Act</a>
        </div>
        <div style={{ textAlign: 'center' }}>© 2019. Specialized Bicycle Components. All Rights Reserved.</div>
      </div>
    </div>
    <div className='footer-col-3'>
      <button>Find a retailer</button>
      <ul>
        <li><a href='https://www.instagram.com/iamspecialized/' target="_blank" rel="noopener noreferrer" ><ion-icon name="logo-instagram"></ion-icon></a></li>
        <li><a href='https://www.facebook.com/specializedbicycles' target="_blank" rel="noopener noreferrer" ><ion-icon name="logo-facebook"></ion-icon></a></li>
        <li><a href='https://twitter.com/iamspecialized' target="_blank" rel="noopener noreferrer" ><ion-icon name="logo-twitter"></ion-icon></a></li>
        <li><a href='https://www.youtube.com/user/specialized411?sub_confirmation=1' target="_blank" rel="noopener noreferrer" ><ion-icon name="logo-youtube"></ion-icon></a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
