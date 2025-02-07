import * as React from "react"
import "./Home.css"
import Banner from "../Banner/Banner";
// import Search from "../Search/Search";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard";
import Categories from "../Categories/Categories";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


export default function Home({ products, prods2, setProds2, handleDecrement, handleIncrement, cartItems }) {

  const id = useParams().id;
  const [product, setProduct] = React.useState(null)

  useEffect(() => {
    async function fetchProds() {

      try {
        const response = await fetch(`https://codepath-store-api.herokuapp.com/store/${id}`);
        const data = await response.json();


        setProduct(data.product)
        //console.log("Fetched products: ", data.products[0].name);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    if (id) fetchProds();
  }, [id]);
  return (
    <div className="home">
      <Banner />
      {/* <Search /> */}
      {/* <Categories /> */}
      {(id && product !== null) ?
        <ProductCard product={product} />
        :
        (
          <>
            <ProductGrid products={products} prods2={prods2} setProds2={setProds2} handleDecrement={handleDecrement} handleIncrement={handleIncrement} cartItems={cartItems} />
            <About />
            <Contact />
            <Footer />

          </>
        )}

    </div>
  );
}
