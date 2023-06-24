import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
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

export default function App() {

  const [data, setData] = useState([]);
  const [prods2, setProds2] = useState([]);


  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch('https://codepath-store-api.herokuapp.com/store');
        const data = await response.json();

        setData(data.products);
        setProds2(data.products)
        // console.log(data.products)

        console.log("Fetched products: ", data.products[0].name);
      } catch (error) {
        console.log("Error fetching products:" , error);
      }
    };

    fetchMovies();
  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <div className="content-wrapper"></div>
            <Sidebar />
          {/* <Categories /> */}
          <Home data={data} prods2={prods2} setProds2={setProds2}/>

        </main>
      </BrowserRouter>
    </div>
  );
} 