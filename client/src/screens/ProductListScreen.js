// import React, { useState, useEffect } from "react";
// import { LinkContainer } from "react-router-bootstrap";
// import { Table, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
// import {
//   listProducts,
//   deleteProduct,
//   createProduct,
// } from "../actions/productActions";
// import { PRODUCT_CREATE_RESET } from '../constants/ProductConstants'

// const ProductListScreen = ({ history, match }) => {
//   const dispatch = useDispatch();

//   const productList = useSelector((state) => state.productList);
//   const { loading, error, products } = productList;

//   const ProductDelete = useSelector((state) => state.productDelete);
//   const {
//     loading: loadingDelete,
//     error: errorDelete,
//     success: successDelete,
//   } = ProductDelete;

//   const ProductCreate = useSelector((state) => state.productCreate);
//   const {
//     loading: loadingCreate,
//     error: errorCreate,
//     success: successCreate,
//     product: createdProduct,
//   } = ProductCreate;

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const deleteHandler = (id) => {
//     dispatch(deleteProduct(id));
//   };

//   const createProductHandler = () => {
//     dispatch(createProduct());
//   };

//   useEffect(() => {
//     dispatch({ type: PRODUCT_CREATE_RESET });
//     if (!userInfo || !userInfo.isAdmin) {
//       history.push("/login");
//     }

//     if (successCreate) {
//       history.push(`/admin/product/${createdProduct._id}/edit`);
//     } else {
//       dispatch(listProducts());
//     }
//   }, [
//     dispatch,
//     history,
//     userInfo,
//     successDelete,
//     successCreate,
//     createdProduct,
//   ]);

//   return (
//     <>
//       <Row className="align-items-center">
//         <Col>
//           <h1>Products</h1>
//         </Col>
//         <Col className="text-right">
//           <button className="my-3" onClick={createProductHandler}>
//              Create Product
//           </button>
//         </Col>
//       </Row>
//       {loadingDelete && <Loader />}
//       {errorDelete && <h1 variant="danger">{errorDelete}</h1>}
//       {loadingCreate && <Loader />}
//       {errorCreate && <h1 variant="danger">{errorCreate}</h1>}
//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">{error}</Message>
//       ) : (
//         <Table striped bordered hover responsive className="table-sm">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>NAME</th>
//               <th>PRICE</th>
//               <th>CATEGORY</th>
//               <th>BRAND</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product._id}>
//                 <td>{product._id}</td>
//                 <td>{product.name}</td>
//                 <td>${product.price}</td>
//                 <td>{product.category}</td>
//                 <td>{product.brand}</td>
//                 <td>
//                   <LinkContainer to={`/admin/product/${product._id}/edit`}>
//                     <Button variant="light" className="btn-sm">
//                       <i className="fas fa-edit">edit</i> 
//                     </Button>
//                   </LinkContainer>
//                   <button
//                     variant="danger"
//                     className="btn-sm"
//                     onClick={() => deleteHandler(product._id)}
//                   >
//                     <i className="fas fa-trash">remove</i>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </>
//   );
// };

// export default ProductListScreen;

import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/ProductConstants"
import './List.css'

const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const ProductDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = ProductDelete;

  const ProductCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = ProductCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
  ]);

  return (
    <div className="product-list">
      <h1>Products</h1>
          <button id="create" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </button>
      <div className="row">
      {loadingDelete && <Loader />}
      {errorDelete && <Message >{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message >{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message >{error}</Message>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  {/* <Link to={`/admin/product/${product._id}/edit`}>
                      <button>Edit</button>
                  </Link> */}
                  <button
                    onClick={() => deleteHandler(product._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default ProductListScreen;