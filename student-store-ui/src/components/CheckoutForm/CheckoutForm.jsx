import React from "react";
import "./CheckoutForm.css";
import { useState } from "react";
import { BsCashCoin, BsCreditCard } from "react-icons/bs"

export default function CheckoutForm ({ isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm }) {
    // const [checkOutForm, setCheckOutForm] = useState({name: "", email: ""}); //Take to App.jsx as Diogo prev advised

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

                    <button type="submit">Submit Order</button>
                </form>
            </div>

        </div>
    );
}