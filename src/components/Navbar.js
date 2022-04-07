import React from "react";
import logo from "./Images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="nav-link ">
            <img src={logo} alt="Logo" height="60" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to="/" className="nav-link ">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/AboutUs" className="nav-link ">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Features" className="nav-link ">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Solution" className="nav-link ">
                    Solution
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/Pricing" className="nav-link ">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link to="/SignIn" className="nav-link ">
                    Sign In
                  </Link>
                </li>
              </ul>

              <button
                className="btn btn-outline-primary , me-5"
                class="btn btn-primary"
                type="submit"
              >
                <b>Try Now</b>
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
