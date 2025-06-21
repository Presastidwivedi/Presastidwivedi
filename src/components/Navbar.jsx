import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {

  return (
    <>
      {/* navbaar */}

      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{ background: "#988989" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand fw-bold" to="#">
            <img src="" alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Features
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <p class="mt-5 text-center">
        Get Link step-by-step written explanation here:{" "}
        <Link
          to="https://codingyaar.com/responsive-bootstrap-navbar-with-vertical-line-separator/"
          target="_blank"
        >
          Bootstrap Navbar Vertical Line Separator
        </Link>{" "}
      </p>

      <p class="mt-5 text-center">
        Get Link step-by-step video explanation here:{" "}
        <Link to="https://youtu.be/mtpuli9dqPg" target="_blank">
          Bootstrap Navbar Vertical Line Separator
        </Link>{" "}
      </p>

      {/* navbaar */}
    </>
  );
};

export default Navbar;
//  Link
// jkj