import React from 'react'
import './Home.css'
import background from './background.jpg'
import Products from '../Products/Products'

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                {/* <img 
                className="home-img"
                // src={background} 
                src="https://images-na.ssl-images-amazon.com/images/I/512ymoq?UnL._AC_SY400_.jpg"
                alt="abstract-shape"/> */}
                <div className="home-row">
                    <Products />
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
