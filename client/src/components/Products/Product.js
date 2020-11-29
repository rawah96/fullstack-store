import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, fas } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../../Context/StateProvider';
// import Rating from "../components/Rating";
import { Link } from 'react-router-dom'

function Products({ product }) {
    return (
        <div className="product">
            <div className="product-info">
                <p>{product.name}</p>
                <Link to={`/product/${product._id}`}>
                    <img src={product.image} variant="top" />
                </Link>
                    <p className="price">
                        <small>$</small>
                        <strong>{product.price}</strong>
                    </p>
                    <div className="rating">
                        {/* <span style={{color: "orange"}}>
                            {Array(rating).fill().map((_,i) => (
                                <FontAwesomeIcon icon={faStar} />
                            ))}
                        </span> */}
                    </div>
            </div>
            <button className="add-btn">
                <small>Add to Cart</small>
            </button>
        </div>
    )
}

export default Products
