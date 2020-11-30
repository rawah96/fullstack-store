import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productActions";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../Rating";
import Loader from "../Loader";
import Message from "../Message";
import "./Product.css"

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      {/* <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link> */}
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="product-screen">
            <img src={product.image} alt={product.name} fluid />
          <div className="right-side">
                <h3>{product.name}</h3>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />

                Price: ${product.price}
                Description: ${product.description}
                      Price:
                      <strong>${product.price}</strong>
                      Status:
                      {product.countInStock > 0 ? " In Stock" : " Out of Stock"}

                {product.countInStock > 0 && (
                  <span>
                    Qty
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                    </span>
                )}

                  <button
                    onClick={addToCartHandler}
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to cart
                  </button>
          </div>
         </div>
      )}
    </>
  );
};

export default ProductScreen;