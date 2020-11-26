import React from 'react'
import './Products.css'

function Products({title, image, price, description, rating}) {
    return (
        <div className="product">
            <p></p>
            <p className="product-price">
                {/* <small>$</small> */}
                <strong>{price}</strong>
            </p>

            <div className="product-rating">
                {/* <p>star</p> */}
            </div>
        </div>
    )
}

export default Products
