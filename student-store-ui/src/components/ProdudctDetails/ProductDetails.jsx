import React from "react";
import Banner from "../Banner/Banner";
import ProductCard from "../ProductCard/ProductCard";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";
import { useEffect, useState } from "react";

export default function ProductDetail({id}) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await fetch(`https://codepath-store-api.herokuapp.com/store/${id}`);
            const data = await response.json();

            setProduct(data.product);
           
          } catch (error) {
            // setError(true);
            console.log(error);
           
          }
        };
    
        fetchProduct();
      }, [id]);
    
      return (
        <div className="product-detail">
          {isFetching && <p>Loading...</p>}
          {product !== null && (
            <ProductCard
              product={product}
              productId={product.id}
              showDescription={true}
              key={product.id}
            />
          )}
        </div>
      );
    }
