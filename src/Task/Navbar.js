import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fw-bold fixed-top">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto px-4">
            <li class="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item active">
              <Link className="nav-link" to="/aboutus">
                AboutUs
              </Link>
            </li>
            <li class="nav-item active">
              <Link className="nav-link" to="/contactus">
                ContactUs
              </Link>
            </li>
            <li className="nav-item mr-auto px-4">
              <button
                className="nav-link nav_login text-dark fw-bold"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
