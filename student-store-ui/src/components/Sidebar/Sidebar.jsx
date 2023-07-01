import React, { useState } from "react"
import { MdAddShoppingCart } from "react-icons/md"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BsCashCoin, BsCreditCard } from "react-icons/bs"
import "./Sidebar.css"
import ProductCard from "../ProductCard/ProductCard";
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({
  products,
  cartItems,
  handleIncrement,
  handleDecrement,
  checkoutFormData,
  // handleOnCheckoutFormChange, 
  handleOnSubmitCheckoutForm,
  emailError,
  success,
  nameError,
  subtotal,
  total
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [credentials, setCredentials] = useState({
    name: "",
    email: ""
  })

  const handleToggle = () => {
    setIsOpen(!isOpen)
  };

function updateCredentials(credentials) {
  //if there are no items in cart, print message "no items in cart"
      //if there are items but it's missing name or email, print message
      //      that says "please provide name or email"
      //else (there's items, there's name, there's email)
      //      do the thing -> setCredentials
    setCredentials({
      "name": credentials.name,
      "email": credentials.email
    });
  }

  console.log("credentials", credentials);
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="toggle-btn" onClick={handleToggle}>
        {isOpen ? (
          <AiOutlineArrowLeft className="arrow" />
        ) : (
          <AiOutlineArrowRight className="arrow" />
        )}
      </div>
      <div className={`sidebar-icons ${isOpen ? "open" : ""}`}>
        <MdAddShoppingCart className="sidebar-icon" onClick={handleToggle} />
        <BsCashCoin className="sidebar-icon" onClick={handleToggle} />
        <BsCreditCard className="sidebar-icon" onClick={handleToggle} />
      </div>
      {isOpen && <ShoppingCart
        isOpen={isOpen}
        products={products}
        cartItems={cartItems}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        checkoutFormData={checkoutFormData}
        updateCredentials = {updateCredentials}
        // handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        credentials={credentials}
      />}
    </aside>
  );
}
