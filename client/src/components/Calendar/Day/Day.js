import React, { useState } from 'react';

function Day({ year, month, date }) {
  const [currentDate] = useState(new Date(year, month, date));
  const setActive = (e) => {
    e.target.classList.contains('selected') ? e.target.classList.remove('selected') : e.target.classList.add('selected');
  };
  return (
        <>
            {currentDate && <td><a href="#" onClick={setActive} title={date} data-value={date}>{currentDate.getDate()}</a></td>}
        </>
  );
}

export default Day;
