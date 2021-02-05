import React from 'react';
import style from './Footer.module.css';

function Footer() {
  return (
      <section className={style.footer}>
      <div className={style.copyright}>
          <ul className={style.copyright_ul}>
              <li className={style.copyright_ul_li}>&copy; SAY ME</li>
              <li className={style.copyright_ul_li}>Design: <a className={style.copyright_a} href="#">VLDO</a></li>
          </ul>
      </div>
      </section>
  );
}

export default Footer;
