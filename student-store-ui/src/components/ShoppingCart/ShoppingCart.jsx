import React, { useState } from "react";
import "./ShoppingCart.css";

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
  };
}
