import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Day.module.css';
import { chooseDayAC } from '../../../redux/actionCreators/calendarAC';

function Day({ year, month, date }) {
  const periodDays = useSelector((state) => state.calendar.periodStart);
  const chooseDay = useSelector((state) => state.calendar.chooseDay);
  const dispatch = useDispatch();
  const [options] = useState({
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const [currentDate] = useState(new Date(year, month, date));
  const dayRef = useRef();

  useEffect(() => {
    if (currentDate.toLocaleDateString('en-US', options) === chooseDay) {
      dayRef.current.classList.add(`${style.days_td_selected}`);
    } else {
      dayRef.current.classList.remove(`${style.days_td_selected}`);
    }
  }, [chooseDay]);

  useEffect(() => {
    if (periodDays.includes(currentDate.toLocaleDateString('en-US', options))) {
      dayRef.current.classList.add(`${style.day_td_period}`);
    } else {
      dayRef.current.classList.remove(`${style.day_td_period}`);
    }
  });

  const setActive = () => {
    dispatch(chooseDayAC(currentDate.toLocaleDateString('en-US', options)));
  };

  return (
        <>
            {currentDate && <td className={style.days_td}
            ref={dayRef}
            onClick={setActive}
            title={date}
            data-value={date}>{currentDate.getDate()}</td>}
        </>
  );
}

export default Day;
