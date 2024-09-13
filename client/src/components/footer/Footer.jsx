import React from 'react';
import { Phone, Print, Email, WhatsApp, Facebook, Person, Accessibility } from '@mui/icons-material';
import '../../App.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <section className="footer-widgets">
        <div className="footer-column">
          <div className="footer-widget widget-contact-info">
            <h5>HEAD OFFICE ADDRESS</h5>
            <p>
              GSUN MARINE SERVICES (INDIA)
              <br />
              General Ship Suppliers &amp; Marine Contractors.
              <br />
              "ALBATROSS TOWERS", #34-36, Devady Street, (Off Kutchury Road) Mylapore, Chennai - 600 004. Tamil Nadu, INDIA
            </p>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-widget widget-contact-info">
            <h5>CONTACT DETAILS</h5>
            <ul>
              <li><Phone /> +91-44-4805 7033</li>
              <li><Print /> +91-44-6565 7864</li>
              <li><Email /> <a href="mailto:info@albatrossmarine.in">info@albatrossmarine.in</a></li>
              <li><WhatsApp /> <a href="https://wa.me/9136284841" target='blank'>Chat on WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-widget widget-contact-info">
            <h5>Mr. SIGAMANI</h5>
            <ul>
              <li><Accessibility /> H/P : +91 9600015786 (24/7)</li>
              <li><Accessibility /> H/P : +91 9176090503 (24/7) (Shipping &amp; Logistics - Supply Chain Management) (General Manager - Operations)</li>
              <li><Email /> <a href="mailto:faizan@albatrossmarine.in">faizan@albatrossmarine.in</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-widget widget-contact-info">
            <h5>Mr. ALEX</h5>
            <ul>
              <li><Accessibility /> H/P : +91 9176090503 (24/7) (Supply &amp; Technical Manager)</li>
              <li><Email /> <a href="mailto:alex@albatrossmarine.in">alex@albatrossmarine.in</a></li>
            </ul>
          </div>
          <div className="footer-widget widget-social-media">
            <ul className="social-media">
              <li className="mail"><Email /><a href="mailto:info@albatrossmarine.in" title="Email">Contact Us</a></li>
              <li className="facebook"><Facebook /><a href="https://www.facebook.com/Albatross-Marine-1799697546961730/" title="Facebook">Follow Us On Facebook</a></li>
            </ul>
          </div>
          <div className="footer-widget widget-text">
            <p>Powered By <a href="http://webwareit.com" target="_blank" rel="noopener noreferrer">Webware</a></p>
          </div>
        </div>
      </section>
      <div className="footer-info-bar">
        <p>© 2024 Albatross Marine Services India. | Disclaimer: This website makes use of Cookies to enhance visitor's user experience</p>
      </div>
    </footer>
  );
};

export default Footer;
