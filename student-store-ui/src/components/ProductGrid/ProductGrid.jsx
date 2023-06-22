import React from "react"
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css"


export default function ProductGrid() {
    return (
      <div className="product-grid">
        <ProductCard />
        {/* Render more ProductCard components as needed */}
      </div>
    );
  }