import React, { useState, useEffect } from 'react'
import './Home.css'
import background from './background.jpg'
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from '../../actions/productActions';
import Loader from '../Loader';
import Message from '../Message';
import Product from '../Products/Product';

function Home() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="home">
                <h1>Latest Products</h1>
                {loading ? (
                    <Loader></Loader>
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <div className="products">
                    {products.map((product) => (
                        <div 
                            className="product"
                            key={product._id}>
                        <Product product={product} />
                        </div>
                    ))}
                    </div>
                )}
        </div>
    )
}

export default Home
