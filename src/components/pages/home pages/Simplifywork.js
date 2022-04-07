import React from "react";
import simplifybg from "../../Images/homepage/simplifyworkbg.png";
import simplify from "../../Images/homepage/simplifywork.png";
import quote from "../../Images/homepage/quote.png";
import arrow from "../../Images/homepage/arrow.png";
import "../../css/Home.css";
function Simplifywork() {
  return (
    <div>
      <div className="row h-100 mt-5 pt-5">
        <div className="col lg-6 ps-5 mt-5 pt-5">
          <img src={simplify} alt="simplify" height="400" />
        </div>

        <div className="col lg-6 position-relative  ">
          <h1 className="text-title mb-1 mb-md-5 ">Simplify Work</h1>
          <img src={quote} alt="quote" />
          <img src={quote} alt="quote" />
          <p className="text-quotes ms-4 me-5">
            Satisfying every customer can be challenging. But, with Anydone
            Desk, we help you break that ice.
          </p>
          <p className="desc  ms-5 mt-5 mb-4 me-5">
            Let the AI-powered bots handle conversational and personalized
            customer support while your agents can focus on quality service.
          </p>
          <button className="learn_more_button mx-5 ">
            learn more <img src={arrow} alt="arrow" />
          </button>

          <div className="position-absolute top-0 start-50">
            <img src={simplifybg} alt="simplifybg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simplifywork;
