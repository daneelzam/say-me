import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Calendar.module.css';
import Month from './Month/Month';
import Weeks from './Weeks/Weeks';

function Calendar() {
  const activeDate = useSelector((state) => state.calendar.chooseDay);
  const activeDay = `${activeDate.split(' ')[1]} ${activeDate.split(' ')[2]}`;
  const activeWeekDay = activeDate.split(' ')[0];
  const year = useSelector((state) => state.calendar.year);
  const month = useSelector((state) => state.calendar.month);

  const [months] = useState(new Array(12).fill('1'));

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
                      i === +month ? active = true : active = false;
                      return <Month key={i + el} date={i + 1} active={active}/>;
                    })}
                    </ul>
                    <table>
                    <thead><tr className="weekday">
                        <th><li><a title="Mon">Mon</a></li></th>
                        <th><li><a title="Tue">Tue</a></li></th>
                        <th><li><a title="Wed">Wed</a></li></th>
                        <th><li><a title="Thu">Thu</a></li></th>
                        <th><li><a title="Fri">Fri</a></li></th>
                        <th><li><a title="Say">Sat</a></li></th>
                        <th><li><a title="Sun">Sun</a></li></th>
                      </tr>
                      </thead>
                      <tbody className="days">
                      {(year && (month || month + 1))
                        && <Weeks/>
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
