import React, { useState } from "react";
import "./ShoppingCart.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ShoppingCart({products}) {
  const [cartItems, setCartItems] = useState({}); //Initializing the state of the shopping cart to empty (zero), umtil theres an increment

  const handleIncrement = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1  //using updater function for increment that handles whether product exists or not
    }));
  };

  const handleDecrement = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: Math.max((prevItems[productId] || 0) - 1, 0) //using updater function for decrement that handles whether product exists or not
    }));
  }; //5. Defined the handleIncrement, handleDecrement functions to be passed in the ProductCard


  const getProductById = (productId) => {
    return products.find((product) => product.id === productId);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    Object.keys(cartItems).forEach((productId) => {
      const product = getProductById(productId);
      const cost = product.price * cartItems[productId];
      subtotal += cost;
    });
    return subtotal;
  };

  const calculateTaxes = () => {
    const subtotal = calculateSubtotal();
    return 0.09 * subtotal;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const taxes = calculateTaxes();
    return subtotal + taxes;
  };

//   return (
//     <div className="shopping-cart">
//       <h2>Shopping Cart</h2>
//       {Object.keys(cartItems).map((productId) => (
//         <ProductCard
//           key={productId}
//           product={product}
//           quantity={cartItems[productId]}
//           handleIncrement={handleIncrement}
//           handleDecrement={handleDecrement}
//         />
//       ))}
//     </div>
//   );


return (
    <div className="shopping-cart">
      <h2><span role="img" aria-label="Cart">🛒</span>{" "} Shopping Cart</h2>              {/*  6. To Display the title with cart emoji */}
      {Object.keys(cartItems).length === 0 ? (                                           // 7.  Check if cartItems is empty
        <p>You have no items in your shopping cart</p>                                   // 8. if empty, Display a message for an empty cart
      ) : (                                                                              //else create a table with the folloeing information
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {/* Generate rows for each item in the cart */}
              {Object.keys(cartItems).map((productId) => {
                const item = cartItems[productId];
                const product = getProductById(productId); // Replaced with my own function to get product by ID (where it eas fetched by product id)
                const cost = product.price * item;
                return (
                  <tr key={productId}>
                    <td>{product.name}</td>
                    <td>{item}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>${cost.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${calculateSubtotal().toFixed(2)}</td> 
              </tr>
              <tr>
                <td>Taxes and fees</td>
                <td>${calculateTaxes().toFixed(2)}</td> 
              </tr>
              <tr>
                <td>Total</td>
                <td>${calculateTotal().toFixed(2)}</td> 
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
} 
