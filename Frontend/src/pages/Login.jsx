import React, { useState } from "react"
import { Link } from "react-router-dom";
import '../Kirjautuminen.css';

export const Login =(props) => {
    const [user, setUser] =useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={user} onChange={(e) => 
                    setUser(e.target.value)} 
                    type="username" 
                    placeholder="username" 
                    id="username" 
                    name="username"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => 
                    setPass(e.target.value)}
                     type="password" 
                     placeholder="*******"
                     id="password"
                     name="password" />
                <button type="submit">
                <Link to='/user'>
                    Log In
                </Link>
                </button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
