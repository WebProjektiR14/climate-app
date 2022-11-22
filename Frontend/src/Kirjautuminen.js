import React, { useState } from 'react';
import './Kirjautuminen.css';
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

function Kirjautuminen() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="Kirjautuminen">
      {
        currentForm == "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Kirjautuminen;
