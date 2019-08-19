import React from "react";
//import ReactDOM from "react-dom";
import { Slide } from "react-slideshow-image";

// import img1 from "./images/1.jpg";
// import img2 from "./images/2.jpg";
// import img3 from "./images/3.jpg";
// import img4 from "./images/4.jpg";
// import img5 from "./images/5.jpg";
// import img6 from "./images/6.jpg";
// import img7 from "./images/7.jpg";

import img1 from "./images/img-a1.jpg";
import img2 from "./images/img-a1.jpg";
import img3 from "./images/img-a1.jpg";
import img4 from "./images/img-a1.jpg";
import img5 from "./images/img-a1.jpg";
import img6 from "./images/img-a1.jpg";
import img7 from "./images/img-a1.jpg";

import * as stylesslideshow from "../style/react-slideshow-style.css";
const slideImages = [img1, img2, img3, img4, img5, img6, img7];

const properties = {
  duration: 2000,
  transitionDuration: 5000,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

export const SlideShow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <div className="text-transparent-background">
              Apps from Notelettes
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <div className="text-transparent-background">
              Modern To-do for Onedrive
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <div className="text-transparent-background">
              Just Use It! ..and <br />
              <bold>Buy Me a Coffee </bold> <br />- if you like it.
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
            <div className="text-transparent-background">
              No Download! <br />
              No Credit Card ! <br />
              No Contact Info ! <br />
              No Data on Notelettes servers!! <br />
              No Worries, Just the Fun
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};
