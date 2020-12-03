import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../Rating";
import './Product.css'

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <div className="boxes">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} className="product-img" />
      </Link>
        <Link to={`/product/${product._id}`}>
          <div>
            <h4 id="product-name" style={{color: 'black'}}>{product.name}</h4>
          </div>
        </Link>
        <span className="ratings">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          ></Rating>
          <strong>${product.price}</strong>
        </span>
        </div>
    </div>
  );
};

export default Product;
