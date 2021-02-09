import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMonthAC } from '../../../redux/actionCreators/calendarAC';
import style from './Month.module.css';

function Month({
  date, active
}) {
  const dispatch = useDispatch();
  const [strMonth] = useState({
    1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
  });
  const setNewMonth = () => {
    dispatch(setMonthAC(date - 1));
  };
  return (
        <div>
            {active
              ? (<li
            onClick={setNewMonth}
            href="#" title={`${strMonth}`}
            className={`${style.month_a} ${style.month_a_active}`}
            >
            {`${strMonth[date]}`}</li>)
              : (<li
            onClick={setNewMonth}
            href="#" title={`${strMonth}`}
            className={`${style.month_a} `}
            >
            {`${strMonth[date]}`}</li>)
            }

        </div>
  );
}

export default Month;
