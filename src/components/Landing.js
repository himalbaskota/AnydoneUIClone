import React from "react";

import "./css/Navbar.css";
import "./css/Home.css";
import Navbar from "./Navbar.js";
import Home from "./pages/home pages/Home.js";
import Footer from "./Footer.js";

const Landing = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
