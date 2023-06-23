import * as React from "react"
import "./Home.css"
import Banner from "../Banner/Banner";
import Search from "../Search/Search";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ProductGrid from "../ProductGrid/ProductGrid"
import Categories from "../Categories/Categories";


export default function Home({ data }) {
  const products = data || [];

  // const [showCategories, setShowCategories] = React.useState(false);

  // const handleToggleCategories = () => {
  //   setShowCategories(!shownpm, Categories);
  // };

  return (
    <div className="home">
      <Banner />
      <Search />
      <Categories />
      {/* <div className="hamburger-menu" onClick={handleToggleCategories}>
        <button className="hamburger-icon">&#9776;</button>
        {showCategories && <Categories />}
      </div> */}
      <ProductGrid products={products} />
      <About />
      <Contact />
      <Footer />

    </div>
  );
}
