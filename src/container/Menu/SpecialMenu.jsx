import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data }  from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Delicious Flavor in Every Bite"></SubHeading>
        <h1 className="headtext__cormorant">Our Menu</h1>
    </div>
    <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_appetizers flex__center">
          <p className="app__specialMenu-menu_heading">Appetizers</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
          </div>
        </div>
    

    <div className="app__specialMenu-menu_img">
      <img src={images.menu} alt="menu img"></img>
    </div>

        <div className="app__specialMenu-menu_noodles flex__center">
          <p className="app__specialMenu-menu_heading">Noodles</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
               <MenuItem key={cocktail.title + index} title={cocktail.title}  price={cocktail.price} tags={cocktail.tags}/>
            ))}
          </div>
        </div>

      </div>
      
      <div style={{marginTop: '15px'}}>
        <a href="/" className="custom__button">Call to Order</a>
      </div>
  </div>
);

export default SpecialMenu;
