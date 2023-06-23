import React from "react";
import "./ProductCard.css";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-details">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="stars">
          <img src="/stars.png" alt="stars" />
        </div>
      </div>

      <div className="quantity-pad">
        <HiOutlineMinusCircle className="minus sign" onClick={() => removeFromCart(product)} />
        <span className="quantity">0</span>
        <HiOutlinePlusCircle className="plus sign" onClick={() => addToCart(product)} />
      </div>
    </div>
  );
}



