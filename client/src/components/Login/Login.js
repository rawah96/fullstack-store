import React, {useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const signIn = e => {
        e.preventDefault();
        // user auth
    }

    const register = e => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <Link to="/">
                <div className="login-logo">HOME</div>
            </Link>

            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <label>Email</label>
                    <input
                        placeholder="Email" 
                        type="text" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input 
                        placeholder="Password"
                        type="password" 
                        value ={pass}
                        onChange={e => setPass(e.target.value)}    
                    />

                    <div className="login-btns">
                        <button
                            type="submit"
                            onClick={signIn}
                        >Sign in</button>
                        <Link to="/signup">
                            <button
                            >Create Account</button>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login
