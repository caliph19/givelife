import React from "react";
import "./iconscomponent.css";
import imgcm1 from "../images/cha11.png";
import imgcm2 from "../images/cha12.png";
import imgcm3 from "../images/cha13.png";
import imgcm4 from "../images/cha14.png";

const Iconscomponent = () => {
  return (
    <div>
      <div className="image-component">
        <div className="image-component-center">
          <div className="image-component-center1" >
            {" "}
            <img src={imgcm1} />
          </div>
          <div className="image-component-center2" >
            <img src={imgcm2} />
          </div>
          <div className="image-component-center3">
            <img src={imgcm3} />
          </div>
          <div className="image-component-center4">
            {" "}
            <img src={imgcm4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iconscomponent;
