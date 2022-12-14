import React, { useState } from "react"
import { Link, renderMatches } from "react-router-dom";
import '../Kirjautuminen.css';
import Axios from "axios"
import User from "./User"



    
            class Login extends React.Component{
                constructor(props){
                super(props);
                this.state = {
                    redirect:false}
                    this.handleClick = this.handleClick.bind(this);
                };
    
                 Login =(props) => {
                    const [user, setUser] =useState('');
                    const [pass, setPass] = useState('');

        handleClick = () => {
        Axios.get('http://localhost:3001/login')

        .then((response) => {
            
          this.setState({redirect: true});
        });
    }   
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
      }
    render(){
             if(this.state.redirect){

                <Link to='/user'></Link>
            }
        
            
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={this.handleSubmit}>
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
                <button type="submit"onClick={this.handleClick}>Log in</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
                
                }
            }
            
                }  