import React, { useState } from 'react';

function DayV({ year, month, date }) {
  const [currentDate] = useState(new Date(year, month, date));
  const setActive = (e) => {
    e.target.classList.contains('selected') ? e.target.classList.remove('selected') : e.target.classList.add('selected');
  };
  return (
        <div>
            {currentDate && <li><a href="#" onClick={setActive} title={date} data-value={date}>{currentDate.getDate()}</a></li>}
        </div>
  );
}

export default DayV;
