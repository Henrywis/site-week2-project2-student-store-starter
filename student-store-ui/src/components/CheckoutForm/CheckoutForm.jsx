import React from "react";
import "./CheckoutForm.css";
import { useState } from "react";
import { BsCashCoin } from "react-icons/bs"

export default function CheckoutForm ({ 
  isOpen, 
  productId, 
  getProductById, 
  checkoutFormData, 
  // handleOnCheckoutFormChange, 
  handleOnSubmitCheckoutForm, 
  updateCredentials,
  emailError, 
  success, 
  nameError, 
  subtotal, 
  total, 
  cartItems
}) {
    // const [checkoutForm, setCheckOutForm] = useState({name: "", email: ""}); //Take to App.jsx as Diogo prev advised
  
    //isOpen prop is already implemented in the Sidebar.jsx
    //shoppingCart state is being updated in the global location, App.jsx
    const [formData,setFormData] = useState({
      name:"",
      email:""
    });
  const [formErrors, setFormErrors] =useState("");

  

    async function handleSubmit(event) {
      event.preventDefault();
      if (Object.keys(cartItems).length === 0){
        setFormErrors("no items in cart")
        console.log("no items in cart")
      } else if (formData.name === "" || formData.email === "") {
        console.log("missing email or name");
        setFormErrors("missing email or name")
      } else {
        setFormErrors("");
        updateCredentials(formData);
      }
      //if there are no items in cart:
      //        //        console.log("no items in cart") print message "no items in cart"
      //if there are items but it's missing name or email, print message
      //      //        console.log("missing email or name");
      //      that says "please provide name or email"
      //else (there's items, there's name, there's email)
      //      do the thing -> call updateCredentials(formData);
      console.log("the form was submitted", formData);

      // updateCredentials(formData);
    }

    function handleChange(event){
      const {name,value} = event.target;
      setFormData((prevData) => ({...prevData, [name]:value}))
    };

    return (
        <div className="checkout-form">
            <div className="payment-info">
                <h2><BsCashCoin />{" "} Payment Info</h2> 
                <form onSubmit={handleSubmit}>
                {/* <form onSubmit={handleOnSubmitCheckoutForm}> */}
                    <label>
                        Name:
                        <input
                        type="text"
                        name="name"
                        placeholder="Student Name"
                        className="checkout-form-input"
                        value={formData.name}
                        onChange={handleChange}
                        // onChange={handleOnCheckoutFormChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                        type="email"
                        name="email"
                        placeholder="student@codepath.org"
                        className="checkout-form-input"
                        value={formData.email}
                        onChange={handleChange}
                        // onChange={handleOnCheckoutFormChange}
                        />
                    </label>
                    {formErrors && <p className="form-errors">{formErrors}</p>}
                    <button type="submit" className="checkout-button">Checkout</button>



                    {/* {emailError ? (
                        <div className="error-popup">
                            <p>Error: Invalid email format</p>
                        </div>
                    ) : success ? (
                        <div className="success-popup">
                            <p>Success!</p>
                        </div>
                    ) : nameError ? (
                        <div className="error-popup">
                            <p>Error: Name is required</p>
                        </div>
                    ) : null} */}
                </form>
            </div>
      
    </div>
  );
}