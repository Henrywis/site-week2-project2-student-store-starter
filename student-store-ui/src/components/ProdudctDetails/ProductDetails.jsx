import React from "react";
import Banner from "../Banner/Banner";
import ProductCard from "../ProductCard/ProductCard";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";
import { useEffect, useState } from "react";

export default async function ProductDetail({ id, handleDecrement, handleIncrement}) {

    try {
        const response = await fetch(`https://codepath-store-api.herokuapp.com/store/${id}`);
        const product = await response.json();
    } catch (error) {
        console.log("Error getting id", error)
    }

    
    // const [product, setProduct] = useState(null);



    // useEffect(() => {
    //     async function fetchMovies() {
    //       try {
    //         const response = await fetch('https://codepath-store-api.herokuapp.com/store');
    //         const data = await response.json();
    
    //         setData(data.products);
    //         setProds2(data.products)
    //         // console.log(data.products)
    
    //         console.log("Fetched products: ", data.products[0].name);
    //       } catch (error) {
    //         console.log("Error fetching products:" , error);
    //       }
    //     };
    
    //     fetchMovies();
    //   }, []);
    // useEffect(() => {
    //     const fetchProduct = async () => {
    //       try {
    //         const response = await fetch(`https://codepath-store-api.herokuapp.com/store/${id}`);
    //         const data = await response.json();

    //         setProduct(data.product);
           
    //       } catch (error) {
    //         // setError(true);
    //         console.log(error);
           
    //       }
    //     };
    
    //     fetchProduct();
    //   }, [id]);
    
    return (
        <div className="product-detail">
          {isFetching && <p>Loading...</p>}
          {product !== null && (
            <ProductCard
              product={product}
              productId={product.id}
              showDescription={true}
              key={product.id}
              handleDecrement={handleDecrement} 
              handleIncrement={handleIncrement}
            />
          )}
        </div>
      );
    }
