import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';

function Nav() {
  return (
    <nav className={style.nav}>
                <ul className={style.nav_ul}>
                    <li className={style.nav_li}><Link className={style.nav_ul_li_a} to="/">Calendar</Link></li>
                    <li className={style.nav_li}><Link className={style.nav_ul_li_a} to="/account">Account</Link></li>
                    <li className={style.nav_li}><Link className={style.nav_ul_li_a} to="/logout">Logout</Link></li>
                </ul>
    </nav>
  );
}

export default Nav;
