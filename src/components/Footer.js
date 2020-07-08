import React from "react";

import logoWhite from "../images/logo_white.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <a href="#">
              <img className="footer-logo" src={logoWhite} alt="" />
            </a>
          </div>
          <div className="col-12 col-md-5">
            <div className="row mb-2">
              <div className="col-1">
                <span className="icon-location"></span>
              </div>
              <div className="col-10">
                <p className="footer-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-1">
                <span className="icon-phone_in_talk"></span>
              </div>
              <div className="col-10">
                <p className="footer-info">+1-543-123-4567</p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-1">
                <span className="icon-mail3"></span>
              </div>
              <div className="col-10">
                <p className="footer-info">example@fylo.com</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-2">
            <ul className="list-unstyled">
              <li>
                <a href="#">Carrer</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <div className="icons text-center my-4 my-md-0">
              <a href="#">
                <span className="icon-facebook"></span>
              </a>
              <a href="#">
                <span className="icon-twitter"></span>
              </a>
              <a href="#">
                <span className="icon-instagram"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright text-center text-md-right">
          &copy; Copyright 2018 Huddle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
