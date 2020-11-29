// import React, { useState } from 'react'
// import './Login.css'
// import { Link } from 'react-router-dom';

// function Signup() {
//     const [first, setFirst] = useState('');
//     const [last, setLast] = useState('');
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const signIn = e => {
//         e.preventDefault();
//         // user auth
//     }
//     return (
//         <div className="login">
//         <Link to="/">
//             <div className="login-logo">HOME</div>
//         </Link>

//         <div className="login-container">
//             <h1>Create an Account</h1>
//             <form>
//                 <label>First Name: </label>
//                 <input 
//                     placeholder="First name"
//                     type="text"
//                     value={first}
//                     onChange={e => setFirst(e.target.value)}
//                 />
//                 <label>Last Name: </label>
//                 <input 
//                     placeholder="Last name"
//                     type="text"
//                     value={last}
//                     onChange={e => setLast(e.target.value)}
//                 />
//                 <label>Email</label>
//                 <input
//                     placeholder="Email" 
//                     type="text" 
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                 />

//                 <label>Password</label>
//                 <input 
//                     placeholder="Password"
//                     type="password" 
//                     value ={pass}
//                     onChange={e => setPass(e.target.value)}    
//                 />
//                     <Link to="/signup">
//                         <button
//                         >Create Account</button>
//                     </Link>
//             </form>
//         </div>

//     </div>
//     )
// }

// export default Signup
