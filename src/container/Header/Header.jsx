import React from 'react';

import { SubHeading } from '../../components';
import { images }  from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Home Made Quality"/>
      <h1 className="app__header-h1">Family Recipes Brought to You</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Header Img"></img>
    </div>
  </div>
);

export default Header;
