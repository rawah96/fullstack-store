import React from 'react'
import './Products.css'

function Products({title, image, price, description, rating}) {
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <img src={image} className="product-img"/>
                    <p className="price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="rating">
                        <p>{rating}</p>
                    </div>
            </div>
            <button className="add-btn">
                Add to Cart
            </button>
        </div>
    )
}

export default Products
