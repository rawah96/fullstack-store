// import React, { useEffect } from "react";
// import Product from "../Product";
// import { useDispatch, useSelector } from "react-redux";
// import { listProducts } from "../../actions/productActions";
// import Message from "../Message";
// import Loader from "../Loader";
// import './Home.css'

// const HomeScreen = () => {
//   const dispatch = useDispatch();

//   const productList = useSelector((state) => state.productList);
//   const { loading, error, products } = productList;

//   useEffect(() => {
//     dispatch(listProducts());
//   }, [dispatch]);

//   return (
//     <div className="homescreen">
//       <h1>Latest Products</h1>
//       {loading ? (
//         <Loader></Loader>
//       ) : error ? (
//         <Message variant="danger">{error}</Message>
//       ) : (
//         <div>
//           {products.map((product) => (
//             <div key={product._id}>
//               <Product product={product} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomeScreen;