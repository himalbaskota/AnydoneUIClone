import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../css/AboutUs.css";
import Desk from "../pages/home pages/Desk.js";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center mt-5 mb-4"> About Us</h1>

        {/* text description */}

        <div className="row h-100 ms-5 me-5">
          <div className="col-lg-4">
            <p className="about-us-title font-weight-bolder color-header">
              So it all started with a bad customer service experience.
            </p>
          </div>
          <div className="col-lg-8">
            <p className="about-us-desc mb-4">
              We’ve all been there, right? We, as end users have spent a
              significant amount of time in mind numbing phone calls with
              support agents for minor issues - and we’ve experienced the
              discomfort of explaining the same situation to their ever changing
              agents. And the process never ends.
            </p>
          </div>
        </div>
        <div className="about-us-desc ms-5 me-5 mb-5">
          <p className=" mb-4 mt-4">
            We desperately needed to work this out! There had to be a faster,
            simpler, and more enjoyable way businesses handle their customer
            support. To take on this challenge, we created a team of passionate
            problem-solvers with expertise in artificial intelligence and
            machine learning.
          </p>
          <p className="mb-5 mt-4">
            We did our homework, and to eliminate the distasteful customer
            support experience, we created Anydone Desk– an AI powered bot
            system that learns your customer’s pain points, prioritizes their
            issues, and promptly gets the right team to solve the problem.
          </p>
        </div>

        {/* OUr Mission */}

        <div className="mission-css mt-5 mb-5 ms-5 me-5 ">
          <h1 className="mission-heading mb-5">
            <b>Our Misison</b>
          </h1>
          <p className="mission-desc text-center ">
            <b>
              No matter how technically advanced the world may have become,
              there still seems to be a huge gap between the customers and their
              service providers. It is to eliminate those problems, we have come
              up with a permanent solution. Anydone Desk aspires to provide its
              customers with top-notch customer service with the latest AI tools
              that ensure high customer satisfaction and retention rate.
            </b>
          </p>
        </div>
      </div>

      <Desk />
      <Footer />
    </>
  );
};

export default AboutUs;
