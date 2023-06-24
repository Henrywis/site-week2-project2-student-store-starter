import * as React from "react"
import "./Home.css"
import Banner from "../Banner/Banner";
// import Search from "../Search/Search";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ProductGrid from "../ProductGrid/ProductGrid"
import Categories from "../Categories/Categories";


export default function Home({ data, prods2, setProds2}) {
  // const products = data || [];

  // const [showCategories, setShowCategories] = React.useState(false);

  // const handleToggleCategories = () => {
  //   setShowCategories(!shownpm, Categories);
  // };

  return (
    <div className="home">
      <Banner />
      {/* <Search /> */}
      {/* <Categories /> */}
      <ProductGrid products={data} prods2={prods2} setProds2={setProds2} />
      <About />
      <Contact />
      <Footer />

    </div>
  );
}
