import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Banner from "../Banner/Banner"
import Search from "../Search/Search"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import ProductCard from "../ProductCard/ProductCard"
import Footer from "../Footer/Footer"
import { useState, useEffect } from "react"
import "./App.css"
import Categories from "../Categories/Categories"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function App() {

  const [products, setProducts] = useState([]);
  const [prods2, setProds2] = useState([]);
  const [cartItems, setCartItems] = useState({}); //Initializing cart state to be zero or empty
  const [checkoutForm, setcheckoutForm] = useState({name: "", email: ""}); 


  useEffect(() => {
    async function fetchProds() {
      try {
        const response = await fetch('https://codepath-store-api.herokuapp.com/store');
        const data = await response.json();

        setProducts(data.products);
        setProds2(data.products)
        // console.log(data.products)

        // console.log("Fetched products: ", data.products[0].name);
      } catch (error) {
        console.log("Error fetching products:" , error);
      }
    };

    fetchProds();
  }, []);


  const handleIncrement = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1  //using updater function for increment that handles whether product exists or not
    }));
  };

  const handleDecrement = (productId) => {
    const newCartItems = {...cartItems} // creates a copy;
    newCartItems[productId] = Math.max((newCartItems[productId] || 0) - 1, 0) // do the logic to update the copy
    if (newCartItems[productId] === 0) delete newCartItems[productId]; // if the quantity is 0, delete
    setCartItems(newCartItems);


    // setCartItems((prevItems) => ({
    //   ...prevItems, // creates a copy
    //   [productId]: Math.max((prevItems[productId] || 0) - 1, 0) //using updater function for decrement that handles whether product exists or not
    // }));

    //create a copy of my state
    //do all the logic to update that copy
    //call my setter function (setCartItems) to the new and improved copy.
  }; //5. Defined the handleIncrement, handleDecrement functions to be passed in the ProductCard

  console.log("CartItems : ", cartItems);
  console.log("products in app.jsx: ", products);


  const handleOnCheckoutFormChange = (event) => {
    const { name, value } = event.target;
    setcheckoutForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  
  const handleOnSubmitCheckoutForm = (event) => {
    event.preventDefault();
  }
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <div className="content-wrapper">
            <Sidebar products={products} cartItems={cartItems} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    prods2={prods2}
                    setProds2={setProds2}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    cartItems={cartItems}
                  />
                }
              />
              {/* <Route
                path="/shopping-cart"
                element={
                  <ShoppingCart
                    products={products}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    cartItems={cartItems}                   // Pass cartItems and setCartItems to ShoppingCart
                    setCartItems={setCartItems}
                  />
                }
              /> */}
            </Routes>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}