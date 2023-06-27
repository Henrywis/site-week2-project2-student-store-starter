import React, { useState } from "react";
import "./ShoppingCart.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ShoppingCart({ products, handleIncrement, handleDecrement, cartItems, setCartItems }) {
    //receives cartItems, setCartItems as props from App.jsx
  const getProductById = (productId) => {
    if (products && products.length > 0) {
      return products.find((product) => product.id === productId);    //added a null check to ensure that the products array exists and has items before calling the find method
      }
    return null;
  };
      

  const calculateSubtotal = () => {
    console.log("Products:", products); 
    
    let subtotal = 0;
    Object.keys(cartItems).forEach((productId) => {
      const product = getProductById(productId);
    //   const cost = product.price * cartItems[productId];   //flagged error because product getProductById returns undefined for some product, hence check if exists first
      const cost = product ? product.price * cartItems[productId] : 0;  //this fix checks if product is defined
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

//   const [cartItems, setCartItems] = useState(() => {
//     const initialCartItems = {};
//     products.forEach((product) => {
//       initialCartItems[product.id] = 0; // Initialize quantity to 0 for each product
//     });
//     return initialCartItems;
//   });



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
                const product = getProductById(productId);                               // Replaced with my own function to get product by ID (where it eas fetched by product id)
                if (product) {
                    const cost = product.price * item;
                    return (
                      <tr key={productId}>
                        <td>{product.name}</td>
                        <td>
                          <ProductCard
                            product={product}
                            quantity={item}
                            handleDecrement={handleDecrement}
                            handleIncrement={handleIncrement}
                            cartItems={cartItems}
                            setCartItems={setCartItems}                                 // Pass cartItems and setCartItems to ProductCard

                          />
                        </td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>${cost.toFixed(2)}</td>
                      </tr>
                    );
                  } else {
                    return null;                                                       // Or handle the case when the product is not found
                  }
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


