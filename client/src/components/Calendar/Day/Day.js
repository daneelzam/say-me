import React, { useState } from 'react';
import style from './Day.module.css';

function Day({ year, month, date }) {
  const [currentDate] = useState(new Date(year, month, date));
  const setActive = (e) => {
    e.target.classList.contains(`${style.days_td_selected}`) ? e.target.classList.remove(`${style.days_td_selected}`) : e.target.classList.add(`${style.days_td_selected}`);
  };
  return (
        <>
            {currentDate && <td className={style.days_td}
            onClick={setActive}
            title={date}
            data-value={date}>{currentDate.getDate()}</td>}
        </>
  );
}

export default Day;
