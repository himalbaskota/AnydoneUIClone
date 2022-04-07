import React from "react";
import bg from "../../Images/homepage/Background.png";
import home from "../../Images/homepage/homepage.png";
import Simplifywork from "./Simplifywork";
import quote from "../../Images/homepage/quote.png";
import arrow from "../../Images/homepage/arrow.png";
import solution from "../../Images/homepage/proactiveSolutions.png";
import Savetim from "./Savetim";
import Desk from "./Desk";

const Home = () => {
  return (
    // home text section

    <div>
      <div className="row h-100 position-relative">
        <img src={bg} alt="bg" />
        <div className=" position-absolute  mt-5 text-center">
          <h1>
            Deliver Exceptional Customer Service <br />
            with Anydone Desk
          </h1>
          <div className="text-description">
            <p className="text-center text-secondary mt-4">
              Offer a delightful conversational support that is immediate and
              friendly. Exceed your <br /> customer’s expectation with Anydone
              Desk's AI powered support system.
            </p>
          </div>

          <div className="home-button d-flex justify-content-center mt-4">
            <a className="btn button-primary-rounded_lg  button-primary_lg">
              Try Now
            </a>
            <a className="btn button-primary-rounded_lg  button-outline_lg ms-1">
              Watch Video
            </a>
          </div>

          {/* image section */}

          <div className="home-images mt-5 my-5 py-5 ">
            <img src={home} alt="home" />
          </div>
        </div>

        {/* proactive solution section */}

        <div className="row h-100">
          <div className="col-lg-6 proactive-solutions mt-5 pt-5">
            <h1 className="text-title ms-5">Proactive Solutions</h1>
            <div className="ms-5">
              <img src={quote} alt="quote" />
              <img src={quote} alt="quote" />
            </div>
            <p className=" text-quote ms-5 mb-4  text-lg-left">
              Wouldn't it be
              <span className="text-primary">AWESOME</span> if your problems
              were solved before you even realize they existed.
            </p>
            <p className="desc  ms-5 mb-4">
              Interactively address known customer support issues, resolve, and
              update flutter even before your customers reach you.
            </p>
            <button className="learn_more_button mx-5 ">
              learn more <img src={arrow} alt="arrow" />
            </button>
          </div>
          <div className="col-lg-6 ">
            <a className="ms-5 ps-5">
              <img src={solution} alt="solution" height="480" />
            </a>
          </div>
        </div>

        <Simplifywork />
        <Savetim />
        <Desk />
      </div>
    </div>
  );
};

export default Home;
