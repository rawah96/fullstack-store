import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";

function Login({location, history}) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
    const [redirect, setRedirect] = useState('')
  
    // const redirect = location.search ? location.search.split("=")[1] : "/";


    useEffect(() => {
      if (userInfo) {
        history.push(redirect);
      }
    }, [history, userInfo, redirect]);
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      dispatch(login(email, pass));
    };

    return (
        <div className="login">
            <Link to="/">
                <div className="login-logo">HOME</div>
            </Link>

            <div className="login-container">
                {error && <h3>There's an ERROR</h3>}
                {loading && <h1>LOADER SPINNING</h1>}
                <h1>Sign In</h1>
                <form onSubmit={submitHandler}>
                    <label>Email</label>
                    <input
                        placeholder="Enter your email" 
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input 
                        placeholder="Enter your password"
                        type="password" 
                        value ={pass}
                        onChange={e => setPass(e.target.value)}    
                    />

                    <div className="login-btns">
                        <button type="submit">Sign in</button>
                        <Link to="/signup">
                            <button
                            >Create Account</button>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    )
// =======
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const signIn = (e) => {
//     e.preventDefault();
//     // user auth
//   };

//   const register = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="login">
//       <Link to="/">
//         <div className="login-logo">HOME</div>
//       </Link>

//       <div className="login-container">
//         <h1>Sign In</h1>
//         <form onSubmit={signIn}>
//           <label>Email</label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//           />

//           <div className="login-btns">
//             <button type="submit">Sign in</button>
//             <button>Create Account</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// >>>>>>> 0ef81ea2587e72afbafb88b88b71593de79ec34d
}

export default Login;
