import React from "react"
import ProductCard from "../ProductCard/ProductCard";
import { AiOutlineLoading } from "react-icons/ai";
import "./ProductGrid.css"


export default function ProductGrid({ products }) {
  return (
    <>
      <h3 className="grid-heading">Best Selling Products</h3>
      <div className="product-grid">
        {products ? 
        (products.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))
      ) : (
        <div className="loading-spinner">
          <AiOutlineLoading className="spinner" />
        </div>
        // <p>Loading...</p>
      )}
      </div>
    </>
  );
};