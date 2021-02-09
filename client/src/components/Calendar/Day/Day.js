import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Day.module.css';
import { chooseDayAC } from '../../../redux/actionCreators/calendarAC';

function Day({ year, month, date }) {
  const periodDays = useSelector((state) => state.calendar.periodStart);
  const chooseDay = useSelector((state) => state.calendar.chooseDay);
  const dispatch = useDispatch();
  const [currentDate] = useState(new Date(year, month, date));
  const setActive = (e) => {
    e.target.classList.contains(`${style.days_td_selected}`)
      ? e.target.classList.remove(`${style.days_td_selected}`)
      : e.target.classList.add(`${style.days_td_selected}`);
    dispatch(chooseDayAC(currentDate.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })));
  };

  // useEffect(() => {
  //   if (periodDays.includes(chooseDay)) {
  //
  //   }
  // }, [periodDays]);

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
