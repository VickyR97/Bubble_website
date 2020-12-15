import React from "react";
import logo from "../Templates/logo.png";
import fb from "../images/fb.png";
import menulogo from "../images/menu.png";
import sharelogo from "../images/share.png";
import twlogo from "../images/tw.png";
import iglogo from "../images/ig.png";
import infologo from "../images/info.png";
import bubble from "../images/bubble.png"


const Bubbledesign = () => {
  return (
    <div>
      <div className="Background">
        <div className="navbar">
          <img src={logo} className="logo" />
          <button type="button">Sign up</button>
        </div>

        <div className="content">
          <small>Welcome to</small>
          <h1>
            Teezle's <br />
            Creative Studio{" "}
          </h1>
          <br />
          <button>Take a tour</button>
        </div>

        <div className="sidebar">
          <img src={menulogo} className="menulogo" />
          <div className="sociallink">
            <img src={fb} />
            <img src={twlogo} />
            <img src={iglogo} />
          </div>
          <div className="usefullink">
            <img src={sharelogo} />
            <img src={infologo} />
          </div>
        </div>

        <div className="bubble">
            <img src={bubble} />
            <img src={bubble} />
            <img src={bubble} />
            <img src={bubble} />
            <img src={bubble} />
            <img src={bubble} />
            <img src={bubble} />    
        </div>


      </div>
    </div>
  );
};

export default Bubbledesign;
