import React, { useState } from 'react';
import './Calendar.css';
import { useSelector } from 'react-redux';
import style from './Calendar.module.css';
import Month from './Month/Month';
import Weeks from './Weeks/Weeks';

function Calendar() {
  const activeDate = useSelector((state) => state.calendar.chooseDay);
  const activeDay = `${activeDate.split(' ')[1]} ${activeDate.split(' ')[2]}`;
  const activeWeekDay = activeDate.split(' ')[0];

  const [date] = useState(new Date());
  const [year] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [months] = useState(new Array(12).fill('1'));
  const [weeks] = useState([0, 1, 2, 3, 4]);
  const [stringMonth] = useState({
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
  });
  return (
    <section>
        <div className={`${style.calendar} container`}>
          <div className={`${style.calendar_col} ${style.leftCol}`}>
          <div className={`${style.content}`}>
            <h1 className={`${style.calendar_h1} date`}>{activeDay}<span className={style.calendar_h1_span}>{activeWeekDay}</span></h1>
            <div className={style.notes}>
              <p>Information about active date</p>
            </div>
            <button className={style.btn}>Select as start date of cycle</button>
              <p className={`${style.tip}`}>"Tip of the day"</p>
          </div>
        </div>
          <div className={`${style.calendar_col} ${style.rightCol}`}>
                <div className={`${style.content}`}>
                    <h2 className={`${style.calendar_h2} ${style.rightCol_h2} year`}>{year}</h2>
                    <ul className={`${style.ul} ${style.month}`}> {months && months.map((el, i) => {
                      let active;
                      i === +month ? active = 'selected' : active = '';
                      return <Month
                      key={`${stringMonth[i + 1]}`}
                      strMonth={stringMonth[i + 1]}
                      date={i + 1}
                      active={active}
                      setMonth={setMonth}
                      />;
                    })}
                    </ul>
                    <table>
                    <thead><tr className="weekday">
                        <th><li><a title="Mon" data-value="1">Mon</a></li></th>
                        <th><li><a title="Tue" data-value="2">Tue</a></li></th>
                        <th><li><a title="Wed" data-value="3">Wed</a></li></th>
                        <th><li><a title="Thu" data-value="4">Thu</a></li></th>
                        <th><li><a title="Fri" data-value="5">Fri</a></li></th>
                        <th><li><a title="Say" data-value="6">Sat</a></li></th>
                        <th><li><a title="Sun" data-value="7">Sun</a></li></th>
                      </tr>
                      </thead>
                      <tbody className="days">
                      {(weeks && year && (month || month + 1))
                        && <Weeks month={month} year={year}/>
                      }
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Calendar;

// <ul className="days">
// {dates && dates.map((el, i) => <Day key={`${year}+${month}+${i}`}
// year={year} month={month} date={i + 1}/>)}
// </ul>
