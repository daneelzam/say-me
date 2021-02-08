import React from 'react';
import style from './Month.module.css';

function Month({
  strMonth, date, active, setMonth
}) {
  const setNewMonth = () => {
    setMonth(date - 1);
  };
  return (
        <div>
            <li><a
            onClick={setNewMonth}
            href="#" title={`${strMonth}`}
            data-value={`${date}`}
            className={`${style.month_a} ${active}`}
            >{`${strMonth}`}</a></li>
        </div>
  );
}

export default Month;
