import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
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

export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch('https://codepath-store-api.herokuapp.com/store');
        const data = await response.json();

        setData(data.products);
        console.log(data.products)
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
          {/* <div className="content-wrapper"> */}
          {/* <Banner/> */}
          
          {/* </div> */}
          <Home data={data} />
        </main>
      </BrowserRouter>
    </div>
  );
} 