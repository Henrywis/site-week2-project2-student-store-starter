import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Banner from "../Banner/Banner"
import Search from "../Search/Search"
import ProductGrid from "../ProductGrid/ProductGrid"
// import Categories from "../Categories/Categories"
import About from "../About/About"
import Contact from "../Contact/Contact"
import ProductCard from "../ProductCard/ProductCard"
import Footer from "../Footer/Footer"
import { useState, useEffect } from "react"
import "./App.css"
import Categories from "../Categories/Categories"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function App() {

  const [data, setData] = useState([]);
  const [prods2, setProds2] = useState([]);
  const [cartItems, setCartItems] = useState({}); //Initializing cart state to be zero or empty

  useEffect(() => {
    async function fetchProds() {
      try {
        const response = await fetch('https://codepath-store-api.herokuapp.com/store');
        const data = await response.json();

        setData(data.products);
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
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: Math.max((prevItems[productId] || 0) - 1, 0) //using updater function for decrement that handles whether product exists or not
    }));
  }; //5. Defined the handleIncrement, handleDecrement functions to be passed in the ProductCard


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <div className="content-wrapper">
            <Sidebar cartItems={cartItems} />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    data={data}
                    prods2={prods2}
                    setProds2={setProds2}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    cartItems={cartItems}
                  />
                }
              />
              <Route
                path="/shopping-cart"
                element={
                  <ShoppingCart
                    products={data}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    cartItems={cartItems}                   // Pass cartItems and setCartItems to ShoppingCart
                    setCartItems={setCartItems}
                  />
                }
              />
            </Routes>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}