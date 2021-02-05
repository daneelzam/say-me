import React from 'react';
import style from './Header.module.css';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <section className={style.header}>
      <Logo/>
      <Nav/>
    </section>
  );
}

export default Header;
