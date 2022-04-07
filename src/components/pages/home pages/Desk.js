import React from "react";
import "../../css/Home.css";
import redline from "../../Images/homepage/bgRedLine.png";
const Desk = () => {
  return (
    <div>
      <div className="bg_color mt-5 pt-5 mb-5 pb-5">
        <h1 className="text_banner text-center ms-5 me-5 ">
          Customers look for solutions, a rather permanent one.
          <img src={redline} alt="redline" />
          <br /> Anydone Desk helps you build a conversational bridge to fill
          the gap.
        </h1>
        <div className="home-button d-flex justify-content-center mt-5">
          <button className="btn button-primary-rounded_lg  button-primary_lg">
            Try Now
          </button>
          <button className="btn button-primary-rounded_lg  button-outline_lg ms-1">
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desk;
