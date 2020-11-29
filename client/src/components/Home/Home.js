import React, { useState, useEffect } from 'react'
import './Home.css'
import background from './background.jpg'
import Products from '../Products/Product'
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from '../../actions/productActions';

function Home() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="home">
                {/* <img 
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

                </div> */}
                <>
                <h1>Latest Products</h1>
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h1>{error}</h1>
                ) : (
                    <div className="home-container">
                    {products.map((product) => (
                        <div className="home-row">
                            <Products product={product} />
                        </div>
                    ))}
                    </div>
                )}
                </>
        </div>
    )
}

export default Home
