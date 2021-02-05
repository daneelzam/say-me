import React from 'react';
import './Header.css';

function Nav() { 
               v
               
  return (
    <nav id="nav">
                <ul>
                    <li><Link to="/">Calendar</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
    </nav>
   );
}

export default Nav;
