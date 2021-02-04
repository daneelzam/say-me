import React from 'react';
import './Header.css';

function Nav() {
  return (
    <nav id="nav">
                <ul>
                    <li><a href="index.html">Calendar</a></li>
                    <li><a href="account.html">Account</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
    </nav>
  );
}

export default Nav;
