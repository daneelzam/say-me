import React, { useState } from 'react';
import Day from '../Day/Day';

function Weeks({ numbWeek, year, month }) {
  const [dates] = useState(new Array(7).fill('1'));
  const [datesToStr] = useState({
    Sun: 7,
    Sat: 6,
    Fri: 5,
    Thu: 4,
    Wed: 3,
    Tue: 2,
    Mon: 1
  });

  return (
        <tr>
        {dates && dates.map((el, i) => {
          const cdate = new Date(year, month, (i + 1) + (7 * numbWeek)).toDateString().slice(0, 3);
          if (datesToStr[cdate] !== (i + 1)) {
            <Day
            key={`${year}+${month}+${i + numbWeek + 1}`}
            year={year}
            month={month}
            date={(i + 1) + (7 * numbWeek)}
            />;
          }
          return (
            <Day
            key={`${year}+${month}+${i + numbWeek + 1}`}
            year={year}
            month={month}
            date={(i + 1) + (7 * numbWeek)}
            />
          );
        })}
        </tr>
  );
}

export default Weeks;

// <Day key={`${year}+${month}+${i}`} year={year} month={month} date={i + 1}/>
