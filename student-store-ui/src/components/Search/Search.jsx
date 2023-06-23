import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search-wrapper">
      <form className="search-form">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <div className="my-cart">
        <button className="cart-button">My Cart</button>
      </div>
    </div>
  );
}
