import React from 'react'
import './Products.css'

function Products({title, image, price, description, rating}) {
    return (
        <div className="product">
            <p></p>
            <p className="price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="rating">
                <p>star-icon</p>
            </div>
            <img src={image} />

            <button className="add-btn">
                Add to Cart
            </button>
        </div>
    )
}

export default Products
