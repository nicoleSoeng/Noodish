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
            {data.appetizers.map((appetizer, index) => (
              <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags}/>
            ))}
          </div>
        </div>
    

    <div className="app__specialMenu-menu_img">
      <img src={images.menu} alt="menu img"></img>
    </div>

        <div className="app__specialMenu-menu_noodles flex__center">
          <p className="app__specialMenu-menu_heading">Noodles</p>
          <div className="app__specialMenu_menu_items">
            {data.noodles.map((noodle, index) => (
               <MenuItem key={noodle.title + index} title={noodle.title}  price={noodle.price} tags={noodle.tags}/>
            ))}
          </div>
        </div>

      </div>
      
      <div style={{marginTop: '15px'}}>
        <button className="custom__button">Call to Order</button>
      </div>
  </div>
);

export default SpecialMenu;
