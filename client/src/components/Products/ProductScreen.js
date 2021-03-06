import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productActions";
import Rating from "../Rating";
import "./Product.css"
import background from './background.jpg'

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
      {loading ? (
        <h4>Loading...</h4>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        <div className="product-screen">
            <img src={product.image} alt={product.name} />
          <div className="right-side">
                <h3>{product.name}</h3>

                {/* Price: ${product.price} */}
                <span id="description">Description: ${product.description}</span>
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