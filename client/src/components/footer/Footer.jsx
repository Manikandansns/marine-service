import '../../App.css';
import logo from '../../assets/bitmap.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-left">
        <img
          src={logo}
          alt="Profile Picture"
          className="logo"
        />
        <h3 className="p-name">Sigamani</h3>
        <p className="p-job-title">Owner</p>
        <nav aria-label="Footer Navigation">
          <div className="footer-links">
            <a href="/" className="link-1">Home</a>
            <a href="/service">Service</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
        <p className="footer-name">© 2024 Gsun</p>
      </div>

      <div className="footer-center">
        <div className="p-address">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <p>
            <span className="p-street-address">123 This is a Street</span> 
            <span className="p-locality">A Locality</span> 
            <span className="p-region">Region state</span> 
            <span className="p-postal-code">12345</span>
          </p>
        </div>
        <div>
          <i className="fa fa-phone" aria-hidden="true"></i>
          <p className="p-tel">+1 234567890</p>
        </div>
        <div>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <p>
            <a href="mailto:myname@mail.com" className="u-email">myname@mail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-about">
          <span>About Me</span>
          Not a web developer, but have a knack for creating stunning websites and applications. Everywhere @sdavidprince
        </p>
        <div className="footer-socials">
          <a href="#" aria-label="Twitter" className="u-url"><i className="fa-brands fa-x-twitter"><XIcon/></i></a>
          <a href="#" aria-label="Facebook" className="u-url"><i className="fa-brands fa-facebook"><FacebookIcon/></i></a>
          <a href="#" aria-label="Instagram" className="u-url"><i className="fa-brands fa-instagram"><InstagramIcon/></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
