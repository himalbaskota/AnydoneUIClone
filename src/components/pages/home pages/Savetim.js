import React from "react";
import savetime from "../../Images/homepage/savetime.png";
import quote from "../../Images/homepage/quote.png";
import arrow from "../../Images/homepage/arrow.png";
import "../../css/Home.css";
const Savetim = () => {
  return (
    <div>
      <div className="row h-100">
        <div className="col-lg-6 ps-5 mt-5 pt-5">
          <h1 className="text-title ms-5 ">Save Time</h1>
          <div className="ms-5">
            <img src={quote} alt="quote" />
            <img src={quote} alt="quote" />
          </div>
          <p className=" text-quote ms-5 mb-4 ps-4 text-lg-left">
            Highly responsive and
            <span className="text-primary">ERRORLESS</span> customer service at
            your fingertips.
          </p>
          <p className="desc  ms-5 mb-4 ps-4">
            Give your customers the gift of time and prompt support with
            real-time solution bots (answer bots and resolution bots).
          </p>
          <div className="ms-5">
            <button className="learn_more_button ms-4 ">
              learn more <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="col-lg-6 mt-5 pt-5 ">
          <a className="ps-5 ">
            <img src={savetime} alt="savetime" height="280" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Savetim;
