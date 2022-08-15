import React from 'react';
import ReactPlayer from 'react-player';
// import { useState } from 'react';

import { Navbar } from '../../components';
// import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { noodlesVid } from '../../constants';
import './Intro.css';

const Intro = () => {
  
  // const [playVideo, setPlayVideo] = useState(false);
  // const vidRef = React.useRef();
  
  // const handleVideo = () => {
  //   setPlayVideo ((prevPlayVideo) => !prevPlayVideo)

  //   if(playVideo) {
  //     vidRef.current.pause();
  //   } else {
  //     vidRef.current.play();
  //   }
  // }

  return (
    <div className="app__video">
     <ReactPlayer 
    url= {noodlesVid}
    playing
    playsinline
    loop
    muted
    width ="100%"
    height = "100%"/>
    <div className="app__video-overlay">
    <Navbar />
    <div className="app__video-overlay_content flex__center">
      <h1 className="headtext__cormorant">Noodish Indo-Asian Cuisine</h1>
      <a href= "#menu" className="custom__button">View Menu</a>
    </div>
    </div>
  </div>
  )
}


export default Intro;
