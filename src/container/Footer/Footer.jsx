import React from 'react';

import { FooterOverlay } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Street Address</p>
        <p className="p__opensans">City, State, Zip</p>
        <p className="p__opensans">Phone Number</p>
      </div>
      <div className="app__footer-links_logo">
        <h1 className="headtext__cormorant" style={{fontSize: '36px', color: 'var(--color-white)'}}>Noodish</h1>
        <p className="p__opensans">"Made with Love, From Our Kitchen to Yours"</p>
        <hr className="app__subheading-hr" style={{marginRight: 'auto', marginLeft: 'auto', marginBottom:'1rem', width: '10%'}}></hr>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
      </div>
      </div>
 
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Hours</h1>
        <p className="p__opensans">Sunday-Thursday:</p>
        <p className="p__opensans">10:00am-09:00pm</p>
        <p className="p__opensans">Friday-Saturday:</p>
        <p className="p__opensans">10:00am-11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 &copy; Noodish. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
