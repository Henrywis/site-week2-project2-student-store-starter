// import React, { useState } from "react";
// import "./Sidebar.css";

// export default function Sidebar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleToggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
//       <div className="toggle-button">
//         <button onClick={handleToggleSidebar}>Toggle</button>
//       </div>
//       <div className="shopping-cart">
//         <div className="icons">
//           <button>Icon 1</button>
//           <button>Icon 2</button>
//           <button>Icon 3</button>
//         </div>
//       </div>
//     </div>
//   );


import React, { useState } from "react"
import { MdAddShoppingCart } from "react-icons/md"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BsCashCoin, BsCreditCard } from "react-icons/bs"
import "./Sidebar.css"
// import ShoppingCart from "../ShoppingCart/ShoppingCart"
// import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<aside className={`sidebar ${isOpen ? "open" : ""}`}>
			<div className="toggle-btn" onClick={handleToggle}>
				{isOpen ? <AiOutlineArrowLeft className="arrow" /> : <AiOutlineArrowRight className="arrow" />}
			</div>
			<div className={`sidebar-icons ${isOpen ? "open" : ""}`}>
				<MdAddShoppingCart className="sidebar-icon" onClick={handleToggle}/>
				<BsCashCoin className="sidebar-icon" onClick={handleToggle}/>
				<BsCreditCard className="sidebar-icon" onClick={handleToggle}/>
			</div>
			<div className="sidebar-content">
				{/* <ShoppingCart />
				<CheckoutForm /> */}
			</div>
		</aside>
	)
}