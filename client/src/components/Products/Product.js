import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../Rating";
import './Product.css'

const Product = ({ product }) => {
  return (
    <div className="container">
      <div className="boxes">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} className="product-img" />
      </Link>
        <Link to={`/product/${product._id}`}>
          <div>
            <strong>{product.name}</strong>
          </div>
        </Link>
        <span className="ratings">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          ></Rating>
          ${product.price}
        </span>
        </div>
    </div>
  );
};

export default Product;
