import React, { useState } from "react";
import "./ShoppingCart.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState({}); //Initializing the state of the shopping cart to empty (zero), umtil theres an increment

  const handleIncrement = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1
    }));
  };

  const handleDecrement = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: Math.max((prevItems[productId] || 0) - 1, 0)
    }));
  }; //5. Defined the handleIncrement, handleDecrement functions to be passed in the ProductCard

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {Object.keys(cartItems).map((productId) => (
        <ProductCard
          key={productId}
          product={product}
          quantity={cartItems[productId]}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ))}
    </div>
  );
} 
