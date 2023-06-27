
import React, { useState } from "react";
import Search from "../Search/Search";
import ProductCard from "../ProductCard/ProductCard";
import { AiOutlineLoading } from "react-icons/ai";
import "./ProductGrid.css";

export default function ProductGrid({ products, prods2, setProds2, handleDecrement, handleIncrement, cartItems }) {
  const [filterCategory, setFilterCategory] = useState("All Categories");

  // console.log("prods2", prods2)
  // console.log("products", products)

  const handleCategoryClick = (category) => {
    setFilterCategory(category);
    const filteredProducts = filterProducts(category);
    setProds2(filteredProducts);
  };

  const filterProducts = (category) => {
    if (category === "All Categories") {
      return products;
    } else {
      return products.filter((product) => product.category === category);
    }
  };

  const handleSearch = (searchValue) => {
    const filteredProducts = filterProducts(filterCategory).filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProds2(filteredProducts);
  };

  return (
    <>
      <h3 className="grid-heading">Best Selling Products</h3>
      <div className="category-buttons">
        <button
          className={filterCategory === "All Categories" ? "active" : ""}
          onClick={() => handleCategoryClick("All Categories")}
        >
          All Categories
        </button>
        <button
          className={filterCategory === "Food" ? "active" : ""}
          onClick={() => handleCategoryClick("food")}
        >
          Food
        </button>
        <button
          className={filterCategory === "Clothing" ? "active" : ""}
          onClick={() => handleCategoryClick("clothing")}
        >
          Clothing
        </button>
        <button
          className={filterCategory === "Accessories" ? "active" : ""}
          onClick={() => handleCategoryClick("accessories")}
        >
          Accessories
        </button>
        <button
          className={filterCategory === "Tech" ? "active" : ""}
          onClick={() => handleCategoryClick("tech")}
        >
          Tech
        </button>
      </div>
      <Search handleSearch={handleSearch} />
      <div className="product-grid">
        {prods2.length > 0 ? (
          prods2.map((product, i) => {
            console.log(product)
            return (
            <ProductCard 
              product={product} 
              key={i} 
              handleDecrement={handleDecrement}  
              handleIncrement={handleIncrement}
              quantity={cartItems[product.id]}
              />
            );
          })
        ) : (
          <p>No products found for the selected category.</p>
        )}
      </div>
    </>
  );
}
