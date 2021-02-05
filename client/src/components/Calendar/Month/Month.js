import React from 'react';

function Month({
  strMonth, date, active, setMonth
}) {
  const setNewMonth = () => {
    setMonth(date - 1);
  };
  return (
        <div>
            <li><a onClick={setNewMonth} href="#" title={`${strMonth}`} data-value={`${date}`} className={active}>{`${strMonth}`}</a></li>
        </div>
  );
}

export default Month;
