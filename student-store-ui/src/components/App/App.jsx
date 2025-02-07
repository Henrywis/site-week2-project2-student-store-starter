import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { useState, useEffect } from "react"
import "./App.css"



export default function App() {

  const [products, setProducts] = useState([]);
  const [prods2, setProds2] = useState([]);
  const [cartItems, setCartItems] = useState({}); //Initializing cart state to be zero or empty
  const [checkoutFormData, setCheckoutFormData] = useState({name: "", email: ""}); 
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [success, setSuccess] = useState(false);


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

  // console.log("CartItems : ", cartItems);
  // console.log("products in app.jsx: ", products);


  // const handleOnCheckoutFormChange = (event) => {
  //   // event.preventDefault();
  //   const { name, value } = event.target;
  //   setCheckoutFormData((prevForm) => ({
  //     ...prevForm,
  //     [name]: value,
  //   }));
  // };
  
  const handleOnSubmitCheckoutForm = (event) => {
    event.preventDefault();
    // const { name, email } = checkoutForm;
    const { name, email } = checkoutFormData;

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email); 
    };//email format checker for missing "@" to return error msg

    //this updates the state of email checker status
    if (!validateEmail(email)){
      setEmailError(true);
      setSuccess(false);
      return;
    }
    else {
      setEmailError(false);
      setSuccess(true);
    }

    //this updates the state of name checker status if name field is empty or not
    if (name.trim() === "") {
      setNameError(true);
      setSuccess(false);
      return;
    }
    else {
      setNameError(false);
      setSuccess(true);
    }

    //after checkers and making sure name & email are valid, clear cartitems,
    //update states of emailError, success, nameError and reset checkout form to empty str
    // setEmailError(false);
    // setNameError(false);
    // setSuccess(true);
    // setCartItems({});
    // setCheckoutFormData({ name: "", email: "" });

    console.log("success", success)
    console.log("nameError", nameError)
    console.log("the form was submitted", checkoutFormData);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <div className="content-wrapper">
            <Sidebar 
              products={products} 
              cartItems={cartItems} 
              checkoutFormData={checkoutFormData}
              // handleOnCheckoutFormChange={handleOnCheckoutFormChange}
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
              emailError={emailError}
              success={success}
              nameError={nameError}/>
            />
            <div className="home-content">
              <Routes>
                <Route
                  path="/*"
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
                <Route
                  path="/products/:id"
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
              </Routes>
              </div>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}