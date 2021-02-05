import React from 'react';
import style from './Logo.module.css';

function Logo() {
  return (
    <div className={style.logo}>
     <h1 className={style.logo_h1}>Say me</h1>
     <p className={style.logo_p}>Tell your partner what's going on with you.</p>
    </div>
  );
}

export default Logo;
