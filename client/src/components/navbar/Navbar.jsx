import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/bitmap.svg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../../App.css'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 2) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="navbar-logo"><img className='logo' src={logo} alt='logo'></img></Link>
        </div>
        <div className="nav-links">
          <ul className="navbar-menu">
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/service" className="link">Services</Link></li>
            <li><Link to="/gallery" className="link">Gallery</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
          </ul>
        </div>
        <div className="nav-btn">
        <button className="call-btn"><a href="tel:7010534355"><LocalPhoneIcon/></a></button>
          <FaBars className="bars" onClick={() => setShowNav(!showNav)} />
        </div>
      </div>

      <div className={showNav ? 'nav-menu show-nav' : 'nav-menu'}>
        <Link to="/" className="nav-link" onClick={closeNav}>Home</Link>
        <Link to="/service" className="nav-link" onClick={closeNav}>Services</Link>
        <Link to="/galley" className="nav-link" onClick={closeNav}>Gallery</Link>
        <Link to="/contact" className="nav-link" onClick={closeNav}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
