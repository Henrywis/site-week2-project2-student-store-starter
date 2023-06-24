import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h3 className="container-title">Contact Us</h3>
        <div className="contact-info">
          <div>
            <span className="info-label">Email:</span> code@path.org
          </div>
          <div>
            <span className="info-label">Phone:</span> 1-800-CODEPATH
          </div>
          <div>
            <span className="info-label">Address:</span> 123 Fake Street, San Francisco, CA
          </div>
          <div>
            <span className="info-label">Socials:</span> {/* Add your social links here */}
          </div>
        </div>
      </div>
    </div>
  );
}
