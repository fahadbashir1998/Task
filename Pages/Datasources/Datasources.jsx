import React from "react";
import "./Datasources.css";

function Datasources() {
  return (
    <div className="Datasources mt-5 ">
      <h2>Data sources</h2>
      <div className="datasources-p mt-3 row">
        <div className="col-lg-7">
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            cum consectetur, ad repudiandae libero obcaecati veritatis ullam
            autem recusandae voluptates rem quam magnam ea nisi. At laudantium
            vitae numquam harum?autem recusandae voluptates rem quam magnam ea
            nisi. At laudantium vitae numquam harum?
          </p>
        </div>
      </div>
      <div className="datasources-p ">
        <div className="col-lg-12">
          <div className="sources-images">
            <div className="img-cover">
              <img src="Images\edms.jpg" className="src-img"></img>
            </div>
            <div className="img-cover">
              <img src="Images\dhis-logo.jpeg" className="src-img"></img>
            </div>
            <div className="img-cover">
              <img src="Images\me.jpg" className="src-img"></img>
            </div>
            <div className="img-cover">
              <img src="Images\epi.jpg" className="src-img"></img>
            </div>
            <div className="img-cover">
              <img src="Images\mnch-mis.jpg" className="src-img"></img>
            </div>
            <div className="img-cover">
              <img src="Images\M&S.jpg" className="src-img"></img>
            </div>
            <div className="img-cover">
              <img src="Images\lhw.jpg" className="src-img"></img>
            </div>
            <div className="img-cover">
              <img src="Images\zm.jpg" className="src-img"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="datasources-img row" style={{ margin: "0 ! Important" }}>
        <div className="col-lg-12">
          <div className="sources-images">
            <div className="img-cover">
              <img src="Images\cLMIS-logo.png" className="src-img"></img>
            </div>
            <div className="img-cover">
              <img src="Images\vLMIS-logo.png" className="src-img"></img>
            </div>
            <div className="img-cover">
              <img src="Images\dhis2-logo.png" className="src-img"></img>
            </div>
            <div className="img-cover">
              <img src="Images\IDMIS-logo.png" className="src-img"></img>
            </div>
            <div className="img-cover">
              <img src="Images\IDSR-logo.png" className="src-img"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datasources;
