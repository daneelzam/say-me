import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Day from '../Day/Day';
import style from './Weeks.module.css';

function Weeks() {
  const year = useSelector((state) => state.calendar.year);
  const month = useSelector((state) => state.calendar.month);

  const [datesToStr] = useState({
    Sun: 7, Sat: 6, Fri: 5, Thu: 4, Wed: 3, Tue: 2, Mon: 1
  });
  const [date] = useState(new Array(7).fill(1));

  let currentDay = 0;
  const nextStep = () => {
    currentDay += 1;
    return currentDay;
  };

  return (
    <>
    <tr className={style.weekday_a}>
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
    <tr className={style.weekday_a}>
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
    <tr className={style.weekday_a}>
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
    <tr className={style.weekday_a}>
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
    <tr className={style.weekday_a}>
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
