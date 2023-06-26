import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, quantity, handleDecrement, handleIncrement}) {
  const navigate = useNavigate(); //2. pass parameters that will handle the increment, decrement
  //4. passed the quantity param, so that it inherits and updates, based on onclick functions and not fixed to zero
  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-details">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="stars">
          <img src="/stars.png" alt="stars" />
        </div>
      </div>

      <div className="quantity-pad">
        <HiOutlineMinusCircle
          className="minus sign"
          onClick={() => handleDecrement(product.id)} //3. modify the onClick event handler for the "+" and "-" buttons to call functions that handle the increment and decrement operations.
        />                                            
        <span className="quantity">{quantity}</span> 
        <HiOutlinePlusCircle
          className="plus sign"
          onClick={() => handleIncrement(product.id)} 
        />
      </div>
    </div>
  );
}
