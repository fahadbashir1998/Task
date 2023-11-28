import React from "react";
import "./Hero.css";
import { Button } from "bootstrap";

const HeroSection = () => {
  return (
    <div className="hero">
      <div>
        <img className="hero-image" src="Images\bg-hero2.jpg"></img>
      </div>
      <div className="hero-content">
        <div className="row">
          <div className="col-lg-8 hero-content-section">
            <div>
              <img className="hero-logo" src="Images\logo.png"></img>
            </div>
            <div>
                <h2 className="hero-heading mt-5 mx-4">Integrated Health <br></br> Dashboard</h2>
            </div>
            <div className="card hero-card ">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, quo alias dolorum vitae vero natus saepe eveniet cumque minima blanditiis quisquam consequuntur eius perferendis quia laborum nisi numquam ipsum veniam!</p>
          
              <div className="btn btn-primary " style={{width:"160px"}}>Login</div>
          </div>
            </div>
        
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
