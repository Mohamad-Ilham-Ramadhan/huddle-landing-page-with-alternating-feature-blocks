import React from "react";

import logo from "../images/logo.svg";
import illustrationMockups from "../images/illustration-mockups.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="jumbotron jumbotron-header pt-md-5 text-center text-md-left">
        <div className="navbar px-md-5 px-lg-6 px-xl-7">
          <a href="#" className="navbar-brand">
            <img src={logo} alt="" />
          </a>
          <a
            className="btn btn-sm btn-try-it btn-sm rounded-pill bg-white font-weight-bold ml-auto"
            href="#"
            role="button"
          >
            Try It Free
          </a>
        </div>
        <div className="container-fluid px-md-5 px-lg-6 px-xl-7">
          <div className="row no-gutters">
            <div className="col-12 col-md-5 d-flex align-items-center">
              <div>
                <h1 className="heading-1 px-3 px-md-0 mb-4 font-weight-bold">
                  Build The Community Your Fans Will Love
                </h1>
                <p className="jumbotron-text">
                  Huddle re-imagines the way we build communities. You have a
                  voice, but so does your audience. Create connections with your
                  users as you engage in genuine discussion.
                </p>
                <a
                  className="btn btn-get-started btn-primary rounded-pill font-weight-bold"
                  href="#"
                  role="button"
                >
                  Get Started For Free
                </a>
              </div>
            </div>
            <div className="col-12 col-md-7 text-md-right">
              <img
                className="img-fluid img-illustration-mockups"
                src={illustrationMockups}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
