import React from "react"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="column">
        <h4 className="column-title">Categories</h4>
        <ul>
          <li>All Categories</li>
          <li>Clothing</li>
          <li>Food</li>
          <li>Accessories</li>
          <li>Tech</li>
        </ul>
      </div>
      <div className="column">
        <h4 className="column-title">Company</h4>
        <ul>
          <li>About Us</li>
          <li>Find a Store</li>
          <li>Terms</li>
          <li>Sitemap</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="column">
        <h4 className="column-title">Support</h4>
        <ul>
          <li>Contact Us</li>
          <li>Money Refund</li>
          <li>Order Status</li>
          <li>Shipping Info</li>
          <li>Open Dispute</li>
        </ul>
      </div>
      <div className="column">
        <h4 className="column-title">Account</h4>
        <ul>
          <li>Login</li>
          <li>Register</li>
          <li>Account Setting</li>
          <li>My Orders</li>
        </ul>
      </div>
      <div className="column">
        <h4 className="column-title">Socials</h4>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
      <div className="column">
        <h4 className="column-title">Our App</h4>
        <ul>
          <li>
            <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" alt="App Store" />
          </li>
          <li>
            <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" alt="Google Play" />
          </li>
        </ul>
      </div>
    </div>

  )
}