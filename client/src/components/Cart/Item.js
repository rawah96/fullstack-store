import React from 'react'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, fas } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../../Context/StateProvider'

function Item({image, description, name, price, rating}) {
    return (
        // name ? <>
        <div className="item">
            <img src={image} alt="product image" width="150px"/>
            <div className="item-info">
                <p className="item-title">{name}</p>
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
        </div>
        // </>:<h2>Empty</h2>
    )
}

export default Item
