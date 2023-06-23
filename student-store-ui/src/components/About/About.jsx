import React from "react";
import "./About.css";
import Logo from "../Logo/Logo";

export default function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-description">
          <p>
            The Codepath student store offers great products at great prices from a great team and for a great cause.
          </p>
          <p>
            We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
          </p>
          <p>
            All proceeds go towards bringing high-quality CS education to college students around the country.
          </p>
        </div>
        <div className="about-logo">
          <Logo />
        </div>
      </div>
    </div>
  );
}
