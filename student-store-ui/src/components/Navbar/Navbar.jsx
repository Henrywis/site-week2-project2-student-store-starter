import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Socials from "../Socials/Socials";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <a href="/">
            <img
              src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
              alt="Codepath logo"
            />
          </a>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
          <a href="#">Buy Now</a>
        </div>
        
        <Socials />
      </div>
    </nav>
  );
}