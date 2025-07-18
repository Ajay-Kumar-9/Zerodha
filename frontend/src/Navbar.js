import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container d-flex align-items-center justify-content-between p-2">
        
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to={"/"} style={{ marginRight: "auto" }}>
          <img
            src="media/images/ze_logo.svg"
            alt="Logo"
            style={{ maxWidth: "150px", height: "auto" }}
            className="img-fluid"
          />
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler ms-auto"
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center w-100">
            <li className="nav-item">
              <Link className="nav-link active" to={"/signup"}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/product"}>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/pricing"}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/support"}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
