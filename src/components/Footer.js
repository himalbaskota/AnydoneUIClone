import React from "react";
import logo from "../components/Images/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-2 ">
              <img src={logo} alt="footerlogo" />
              <p>
                Ready to serve customers. <br />
                Anywhere, Anytime!
              </p>
            </div>

            <div className="col-md-2 ">
              <h5 >Usability</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#">Education</a>
                </li>
                <li>
                  <a href="#">Software and IT</a>
                </li>
                <li>
                  <a href="#">Telecommunications</a>
                </li>
                <li>
                  <a href="#">Financial Institutions</a>
                </li>
                <li>
                  <a href="#">Government</a>
                </li>
                <li>
                  <a href="#">Health Care</a>
                </li>
                <li>
                  <a href="#">Manufacturing</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
                <li>
                  <a href="#">Retail</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 ">
              <h5 >Company</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Terms of Service</a>
                </li>
                <li>
                  <a href="#!">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 ">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 ">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3 bg-dark text-white">
          © 2021 Anydone Desk. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
