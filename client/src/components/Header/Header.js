import React from 'react';
import './Header.css';
import Logo from './Logo';
import Nav from './Nav';

function Header() {
  return (
    <section id="header">
        <div id="logo">
          <Logo/>
        </div>
        <nav id="nav">
          <Nav/>
        </nav>
    </section>
  );
}

export default Header;
