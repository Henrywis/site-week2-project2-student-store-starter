import React, { useState, useEffect} from "react";
import ProductCard from "../ProductCard/ProductCard";
import { AiOutlineLoading } from "react-icons/ai";
import "./ProductGrid.css";

export default function ProductGrid({ products }) {
  const [filterCategory, setFilterCategory] = useState("All Categories");
  const [prods2, setProds2] = useState(products);
  // let prods2 = products;

  const handleCategoryClick = (category) => {
    console.log("Filtering to category: " + category)
    setFilterCategory(category);
    const filteredProducts = products.filter((product) => {
      if (category === "All Categories") {
        return true;
      }
      return product.category === category;
    })

    setProds2(filteredProducts)
    // prods2 = filteredProducts;
    
    console.log(prods2[0].name)
  };

  useEffect(() => {
    setProds2(products);
  }, [products]);

  

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
      <div className="product-grid">
        {prods2.length > 0 ? (
          prods2.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))
        ) : (
          <p>No products found for the selected category.</p>
        )}
      </div>
    </>
  );
}
