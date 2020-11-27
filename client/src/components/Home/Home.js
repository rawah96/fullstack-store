import React from 'react'
import './Home.css'
import background from './background.jpg'
import Products from '../Products/Products'

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img 
                    src={background}
                    alt="background"
                    className="home-img"
                />
                <div className="home-row">
                    <Products 
                    id={1}
                    price={1.22}
                    rating={4}
                    image={background} 
                    name="NAME OF PRODUCT #1"/>
                    <Products 
                    id={2}
                    price={99.99} 
                    image={background} 
                    rating={0}
                    name="NAME OF PRODUCT #2"/>
                </div>
                <div className="home-row">

                </div>
                <div className="home-row">

                </div>
            </div>
        </div>
    )
}

export default Home
