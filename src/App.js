import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import './App.css';

const App = () => (
  <div>
    <Intro />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App; 
