import React, { useState } from "react"
import '../Kirjautuminen.css';
export const Register =(props) => {

    const [user, setUser] =useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder="full name" />
            <label htmlFor="username">Username</label>
            <input value={user} onChange={(e) => setUser(e.target.value)} type="username" placeholder="username" id="username" name="username"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}

