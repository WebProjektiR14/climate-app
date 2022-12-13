import React, { useState } from "react"
import '../Kirjautuminen.css';
import Axios from 'axios'
import 'cors';

export const Register =(props) => {

    const [user, setUser] =useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
   /* const [jwt,setJwt] = useLocalState("", "jwt"); 
   */
        const register = () => {
            Axios.post('http://localhost:3001/register', {
              name: name,
              user: user,
              pass: pass,
            }).then((response) => {
              console.log(response);
            });
          };

         /* const register = (e) => {
            e.preventDefault();
            console.log(user);
            fetch("http://localhost:8080/user", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(user)
    
            })
            .then((response)=> {
            if (response.status === 200)
                return Promise.all([response.json(), response.headers]);
            else
                return Promise.reject("Invalid registration attempt");
          })
            .then(([body, headers]) => {
                setJwt(headers.get("authorization"));
                window.location.href = "dashboard";
            }).catch((message) => {
                alert(message)
            });*/
            
        

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(user);
        }
   
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder="fullname" />
            <label htmlFor="username">Username</label>
            <input value={user} onChange={(e) => setUser(e.target.value)} type="username" placeholder="username" id="username" name="username"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
            <button type="submit" onClick={register}>Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}


