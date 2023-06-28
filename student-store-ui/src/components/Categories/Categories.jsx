import React, { useState } from "react";
import "./Categories.css";

export default function Categories() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="categories">
      <div className={`hamburger-menu ${isMenuOpen ? "active" : ""}`} onClick={handleToggleMenu}>
        <div className="line" />
        {/* <div className="line" />
        <div className="line" /> */}
      </div>
      <div className={`menu-content ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li
            className={activeCategory === "All Categories" ? "active" : ""}
            onClick={() => handleCategoryClick("All Categories")}
          >
            All Categories
          </li>
          <li
            className={activeCategory === "Food" ? "active" : ""}
            onClick={() => handleCategoryClick("Food")}
          >
            Food
          </li>
          <li
            className={activeCategory === "Clothing" ? "active" : ""}
            onClick={() => handleCategoryClick("Clothing")}
          >
            Clothing
          </li>
          <li
            className={activeCategory === "Accessories" ? "active" : ""}
            onClick={() => handleCategoryClick("Accessories")}
          >
            Accessories
          </li>
          <li
            className={activeCategory === "Tech" ? "active" : ""}
            onClick={() => handleCategoryClick("Tech")}
          >
            Tech
          </li>
        </ul>
      </div>
    </div>
  );
}
