import React from 'react'
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, fas } from '@fortawesome/free-solid-svg-icons'

function Products({name, image, price, description, rating}) {
    return (
        <div className="product">
            <div className="product-info">
                <p>{name}</p>
                <img src={image} className="product-img"/>
                    <p className="price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="rating">
                        <span style={{color: "orange"}}>
                            {Array(rating).fill().map((_,i) => (
                                <FontAwesomeIcon icon={faStar} />
                            ))}
                        </span>
                    </div>
            </div>
            <button className="add-btn">
                <small>Add to Cart</small>
            </button>
        </div>
    )
}

export default Products
