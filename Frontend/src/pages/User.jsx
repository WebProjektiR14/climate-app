import '../User.css'
import React from 'react';
import { Link } from 'react-router-dom';
import '../Kirjautuminen';
import '../components/Navbar';


const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
});

function User(){
  return(
    <div id="menu">
    <div id="menu-item">
        <h2 id="menu-items">User's page</h2>
            <li>
                <Link id="menu-items" class='menu-item' to="/Charts">Charts</Link>
            </li>
            <li>
                <Link id="menu-items" class='menu-item' to="/about">About</Link>
            </li>
            <li>
                <Link id="menu-items" class='menu-item' to="/Logout">Log out</Link>
            </li>
    </div>
        <div id="menu-background-pattern"></div>
        <div id="menu-background-image"></div>
    </div>

  )
}

export default User;