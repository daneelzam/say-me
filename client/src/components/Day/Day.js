import React, { useState } from 'react';

function DayV({ year, month, date }) {
  const [currentDate] = useState(new Date(year, month, date));
  return (
        <div>
            {currentDate && <li><a href="#" title={date} data-value={date}>{currentDate.getDate()}</a></li>}
        </div>
  );
}

export default DayV;
