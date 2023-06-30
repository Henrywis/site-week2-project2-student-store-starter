import React from "react";
import "./CheckoutForm.css";
import { useState } from "react";
import { BsCashCoin, BsCreditCard } from "react-icons/bs"

export default function CheckoutForm ({ isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, emailError, success, nameError}) {
    // const [checkoutForm, setCheckOutForm] = useState({name: "", email: ""}); //Take to App.jsx as Diogo prev advised
  
    //isOpen prop is already implemented in the Sidebar.jsx
    //shoppingCart state is being updated in the global location, App.jsx
    return (
        <div className="checkout-form">
            <div className="payment-info">
                <h2><BsCashCoin />{" "} Payment Info</h2> 
                <form onSubmit={handleOnSubmitCheckoutForm}>
                    <label>
                        Name:
                        <input
                        type="text"
                        name="name"
                        placeholder="Student Name"
                        className="checkout-form-input"
                        value={checkoutForm.name}
                        onChange={handleOnCheckoutFormChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                        type="email"
                        name="email"
                        placeholder="student@codepath.org"
                        className="checkout-form-input"
                        value={checkoutForm.email}
                        onChange={handleOnCheckoutFormChange}
                        />
                    </label>

                    <button type="submit" className="checkout-button">Checkout</button>

                    {emailError ? (
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
                    ) : null}
                    {/* states for these statuses have been initialized in App.jsx */}
                </form>
            </div>

        </div>
    );
}