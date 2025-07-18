import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Inline Custom CSS with Bootstrap */}
      <style>
        {`
          .navbar-nav .nav-link {
            position: relative;
            color: #333;
            font-weight: 500;
            transition: color 0.3s ease;
          }
          .navbar-nav .nav-link:hover {
            color: #0d6efd; /* Bootstrap primary color */
          }
          .navbar-nav .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            width: 0;
            background-color: #0d6efd;
            transition: width 0.3s ease;
          }
          .navbar-nav .nav-link:hover::after {
            width: 100%;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg border-bottom bg-white">
        <div className="container d-flex align-items-center justify-content-between p-2">
          
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to={"/"}>
            <img
              src="media/images/ze_logo.svg"
              alt="Logo"
              style={{ maxWidth: "150px", height: "auto" }}
              className="img-fluid"
            />
          </Link>

          {/* Hamburger button */}
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

          {/* Nav Links */}
          <div className="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center text-lg-start">
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/product"}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/support"}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
