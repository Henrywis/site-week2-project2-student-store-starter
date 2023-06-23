import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home(props) {

  return (
    <div className="home">
      <p>Home</p>
      <ProductGrid />
    </div>
  )
}
