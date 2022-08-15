import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';


const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G Letter" />
    </div> */}
    <div className="app__aboutus-content flex__center">
      {/* <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <hr className="app__subheading-hr"></hr>
        <p className="p__opensans">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button type="button" className="custom__button">Know More</button>
      </div> */}
      <div className="app__aboutus-content_img flex__center">
        <img src= {images.about} alt="about_img" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">About Us</h1>
        <hr className="app__subheading-hr" style={{width: '15%'}}></hr>
        <p className="p__opensans">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button type="button" className="custom__button">Learn More</button>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
