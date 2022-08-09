import React from 'react';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem'}}>
    <p className="p__cormorant">{title}</p>
    {/* <img src={images.spoon} alt="spoon" className="spoon__img"></img> */}
    <hr className="app__subheading-hr"></hr>
  </div>
);

export default SubHeading;
