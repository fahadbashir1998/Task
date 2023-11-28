import React from "react";
import "./Aboutsystem.css";
const Aboutsystem = () => {
  return (
    <div class="Aboutsystem">
      <div class="center">
        <h1>About System</h1>
      </div>
      <div className="row ">
        <div className="col-lg-6 col-sm-12 section-left">
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.A tempora
            <b>pariatur ab ex,consequatur quos voluptate</b> quam in illum ducimus
            accusantium debitis, omnis repellendus dolorem est facilis
            voluptatem neque aut.
          </p>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora
            pariatur ab ex, consequatur quos voluptate quam<b> in illum ducimus
            accusantium debitis,</b> omnis repellendus dolorem est facilis
            voluptatem neque aut.
          </p>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora
            pariatur ab ex, consequatur <b>quos voluptate quam in illum ducimus
            accusantium debitis,</b> omnis repellendus dolorem est facilis
            voluptatem neque aut.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
            <div className="left-image">
                <img src="Images\left-image.png"></img>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsystem;
