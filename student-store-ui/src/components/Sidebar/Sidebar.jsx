import React, { useState } from "react"
import { MdAddShoppingCart } from "react-icons/md"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BsCashCoin, BsCreditCard } from "react-icons/bs"
import "./Sidebar.css"
import ProductCard from "../ProductCard/ProductCard";
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({ products, cartItems, handleIncrement, handleDecrement, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm }) {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => {
		setIsOpen(!isOpen)
  };

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
      />} {/* Renders the ShoppingCart component when the cart is open */}
      {isOpen && <CheckoutForm
      isOpen={isOpen}
      shoppingCart={cartItems}
      checkoutForm={checkoutForm}
      handleOnCheckoutFormChange={handleOnCheckoutFormChange}
      handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
      />}
    </aside>
  );
}
