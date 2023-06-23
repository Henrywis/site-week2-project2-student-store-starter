import React, { useState } from "react";
import "./Search.css";

export default function Search({ handleSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <div className="search-wrapper">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="my-cart">
        <button className="cart-button">My Cart</button>
      </div>
    </div>
  );
}
