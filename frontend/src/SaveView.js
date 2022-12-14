import React, { useState } from "react";
import Axios from 'axios'
import 'cors';
import "./CreateView.css"

export const SaveView = (props) => {

    const [name, setName] = useState('');
  
  
  const save = () => {
    Axios.post('http://localhost:3001/createview', {
      name: name,
  
      }).then((response) => {
        console.log(response);
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name);
    }

    return (
        <div className="save-container">
            <label>Save visualization view</label>
                <form className="save-view" onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder="Visual view name" />
                <button className="btn" type="submit" onClick={save}>Save</button>
                </form>
        </div>
    )
}