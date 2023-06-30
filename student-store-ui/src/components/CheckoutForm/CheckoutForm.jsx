import React from "react";
import "./CheckoutForm.css";
import { BsCashCoin, BsCreditCard } from "react-icons/bs"

export default function CheckoutForm ({ isOpen, shoppingCart, checkOutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm }) {
    return (
        <form onSubmit={handleOnSubmitCheckoutForm}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={checkOutForm.name}
              onChange={handleOnCheckoutFormChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={checkOutForm.email}
              onChange={handleOnCheckoutFormChange}
            />
          </label>

          <button type="submit">Submit Order</button>
        </form>
      );
}