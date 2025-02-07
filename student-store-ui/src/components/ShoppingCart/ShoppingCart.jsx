import React, { useState } from "react";
import "./ShoppingCart.css";
import { MdAddShoppingCart } from "react-icons/md"
import ProductCard from "../ProductCard/ProductCard";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Receipt from "../Receipt/Receipt";

export default function ShoppingCart({ 
  products, 
  isOpen, 
  checkoutFormData, 
  handleIncrement, 
  handleDecrement, 
  cartItems, 
  setCartItems, 
  updateCredentials,
  // handleOnCheckoutFormChange, 
  handleOnSubmitCheckoutForm, 
  emailError, 
  nameError, 
  success,
  credentials
}) {
  // console.log("products in shopping cart .jsx: ", products);
  //receives cartItems, setCartItems as props from App.jsx
  const getProductById = (productId) => {
    // console.log({products})
    if (products && products.length > 0) {
      const product = products.find((product) => {
        console.log("inside the .find loop: ", typeof product.id, typeof productId)
        return product.id === parseInt(productId); //added a null check to ensure that the products array exists and has numOfItemss before calling the find method
      })
      console.log("Inside getProductsbyID :", product)
      return product
    }
    return null;
  };


  const calculateSubTotal = () => {
    // console.log("Products:", products); //check to see if we get to this line

    let subTotal = 0;
    Object.keys(cartItems).forEach((productId) => {
      const product = getProductById(productId);
      //   const cost = product.price * cartnumOfItemss[productId];   //flagged error because product getProductById returns undefined for some product, hence check if exists first
      const cost = product ? product.price * cartItems[productId] : 0;  //this fix checks if product is defined
      subTotal += cost;
    });
    return subTotal;
  };

  const calculateTaxes = () => {
    const subTotal = calculateSubTotal();
    return 0.09 * subTotal;
  };

  const calculateTotal = () => {
    const subTotal = calculateSubTotal();
    const taxes = calculateTaxes();
    return subTotal + taxes;
  };

  //   const [cartItems, setCartItems] = useState(() => {
  //     const initialCartItems = {};
  //     products.forEach((product) => {
  //       initialCartItems[product.id] = 0; // Initialize quantity to 0 for each product
  //     });
  //     return initialCartItems;
  //   });

  const subTotal = calculateSubTotal();
  const taxes = calculateTaxes();
  const total = calculateTotal();

  return (
    <div className="shopping-cart">
      <h2><MdAddShoppingCart />{" "} Shopping Cart</h2>              {/*  6. To Display the title with cart emoji */}
      {Object.keys(cartItems).length === 0 ? (                                           // 7.  Check if cartItems is empty
        <p>No items added to cart yet. Start shopping now!</p>                                   // 8. if empty, Display a message for an empty cart
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
              {/* Generate rows for each numOfItems in the cart */}
              {Object.keys(cartItems).map((productId) => {
                console.log("cartItems in loop : ", productId)
                const items = cartItems[productId];
                const product = getProductById(productId);   // Replaced with my own function to get product by ID (where it eas fetched by product id)
                console.log("Product: ", product)
                // if (product) {
                // if (product && items > 0) {
                  const cost = product.price * items;
                  return (
                    <tr key={productId}>
                      <td>{product.name}</td>
                      <td>{items}</td>
                      {/* <ProductCard
                            product={product}
                            quantity={numOfItems}
                            handleDecrement={handleDecrement}
                            handleIncrement={handleIncrement}
                            cartItems={cartItems}
                            setCartItems={setCartItems}                                 // Pass cartnumOfItemss and setCartItems to ProductCard

                          /> */}

                      <td>${product.price.toFixed(2)}</td>
                      <td>${cost.toFixed(2)}</td>
                    </tr>
                  );
                // } else {
                //   return null;                                                       // Or handle the case when the product is not found
                // }
              })}
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>SubTotal</td>
                <td>${calculateSubTotal().toFixed(2)}</td>
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
      <CheckoutForm
        isOpen={isOpen}
        getProductById={getProductById}
        checkoutFormData={checkoutFormData}
        updateCredentials={updateCredentials}
        // handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        emailError={emailError}
        success={success}
        nameError={nameError}
        subTotal={subTotal}
        total={total}
        cartItems={cartItems}
      />
      {credentials.name && credentials.email && 
      // <p>This is a reciept</p>
      <Receipt cartItems={cartItems}
      credentials ={credentials}
      getProductById ={getProductById}
      subTotal={subTotal}
      total={total}
      />
      }
    </div>
  );
}


