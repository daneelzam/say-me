import React, { useState } from 'react';
import Day from '../Day/Day';

function Weeks({ year, month }) {
  const [datesToStr] = useState({
    Sun: 7,
    Sat: 6,
    Fri: 5,
    Thu: 4,
    Wed: 3,
    Tue: 2,
    Mon: 1
  });
  const [date] = useState(new Array(7).fill(1));
  let currentDay = 0;
  const nextStep = () => {
    currentDay += 1;
    return currentDay;
  };
  return (
    <>
    <tr>
    {(date) && date.map((el, i) => {
      const prevDay = currentDay;
      const cdate = new Date(year, month, (prevDay + 1)).toDateString().slice(0, 3);
      if (datesToStr[cdate] === (i + 1)) {
        nextStep();
        return (<Day
            key={`${year}+${month}+${prevDay + 1}`}
            year={year}
            month={month}
            date={(prevDay + 1)}
            />);
      }
      return (<td>-</td>);
    })}
    </tr>
    <tr>
    {(date) && date.map((el, i) => {
      const prevDay = currentDay;
      const cdate = new Date(year, month, (prevDay + 1)).toDateString().slice(0, 3);
      if (datesToStr[cdate] === (i + 1)) {
        nextStep();
        return (<Day
            key={`${year}+${month}+${prevDay + 1}`}
            year={year}
            month={month}
            date={(prevDay + 1)}
            />);
      }
      return (<td>-</td>);
    })}
    </tr>
    <tr>
    {(date) && date.map((el, i) => {
      const prevDay = currentDay;
      const cdate = new Date(year, month, (prevDay + 1)).toDateString().slice(0, 3);
      if (datesToStr[cdate] === (i + 1)) {
        nextStep();
        return (<Day
            key={`${year}+${month}+${prevDay + 1}`}
            year={year}
            month={month}
            date={(prevDay + 1)}
            />);
      }
      return (<td>-</td>);
    })}
    </tr>
    <tr>
    {(date) && date.map((el, i) => {
      const prevDay = currentDay;
      const cdate = new Date(year, month, (prevDay + 1)).toDateString().slice(0, 3);
      if (datesToStr[cdate] === (i + 1)) {
        nextStep();
        return (<Day
            key={`${year}+${month}+${prevDay + 1}`}
            year={year}
            month={month}
            date={(prevDay + 1)}
            />);
      }
      return (<td>-</td>);
    })}
    </tr>
    <tr>
    {(date) && date.map((el, i) => {
      const prevDay = currentDay;
      const cdate = new Date(year, month, (prevDay + 1)).toDateString().slice(0, 3);
      if (datesToStr[cdate] === (i + 1)) {
        nextStep();
        return (<Day
            key={`${year}+${month}+${prevDay + 1}`}
            year={year}
            month={month}
            date={(prevDay + 1)}
            />);
      }
      return (<td>-</td>);
    })}
    </tr>
    </>
  );
}

export default Weeks;
