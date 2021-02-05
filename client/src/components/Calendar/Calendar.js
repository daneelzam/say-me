import React, { useState } from 'react';
import Day from '../Day/Day';
import './Calendar.css';

function Calendar() {
  const [date] = useState(new Date());
  const [year] = useState(date.getFullYear());
  const [month] = useState(date.getMonth());
  const [months] = useState(new Array(12).fill('1'));
  const [dates] = useState(new Array(31).fill('1'));
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
        <div className="calendar container">
            <div className="col rightCol">
                <div className="content">
                    <h2 className="year">{year}</h2>
                    <ul className="months"> {months && months.map((el, i) => {
                      if ((i) === +month) {
                        return <li><a href="#" title={`${stringMonth[i + 1]}`} key={`${stringMonth[i + 1]}`} data-value={`${i + 1}`} className="selected">{`${stringMonth[i + 1]}`}</a></li>;
                      }
                      return <li><a href="#" title={`${stringMonth[i + 1]}`} key={`${stringMonth[i + 1]}`} data-value={`${i + 1}`}>{`${stringMonth[i + 1]}`}</a></li>;
                    })}
                    </ul>
                    <ul className="weekday">
                        <li><a href="#" title="Mon" data-value="1">Mon</a></li>
                        <li><a href="#" title="Tue" data-value="2">Tue</a></li>
                        <li><a href="#" title="Wed" data-value="3">Wed</a></li>
                        <li><a href="#" title="Thu" data-value="4">Thu</a></li>
                        <li><a href="#" title="Fri" data-value="5">Fri</a></li>
                        <li><a href="#" title="Say" data-value="6">Sat</a></li>
                        <li><a href="#" title="Sun" data-value="7">Sun</a></li>
                    </ul>
                    <ul className="days">
                    {dates && dates.map((el, i) => <Day key={`${year}+${month}+${i}`} year={year} month={month} date={i}/>)}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Calendar;
