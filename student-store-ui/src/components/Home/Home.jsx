import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({ data }) {
  const products = data || [];

  return (
    <div className="home">
      <ProductGrid products={products} />
    </div>
  )
}
