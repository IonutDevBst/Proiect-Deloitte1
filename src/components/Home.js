import React from "react";
import image from "./resoruces2/Group 1443.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="card-allign">
      <div className="text-to-image">
        <img src={image} className="imghome "></img>
        <div className="centered">DONUTS</div>
      </div>
      <div className="text-to-image">
        <img src={image} className="imghome "></img>
        <div className="centered">DONUTS</div>
      </div>
      <div className="text-to-image">
        <img src={image} className="imghome "></img>
        <div className="centered">DONUTS</div>
      </div>
    </div>
  );
};

export default Home;
