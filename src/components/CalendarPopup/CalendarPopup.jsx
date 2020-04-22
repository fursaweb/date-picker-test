import React, { useState, useEffect } from 'react';
// import style from './style.scss';

const popup = {
  display: 'block',
  border: '1px solid #000'
};

const d_flex = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  flex: '0 0 100%/7'
};

const monthes = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const getCurrentDay = () => {
  return new Date().getDay();
};
const getCurrentMonth = () => {
  return new Date().getMonth();
};
const getCurrentYear = () => {
  return new Date().getFullYear();
};

const CalendarPopup = () => {
  const [month, setMonth] = useState(0);

  const prevMonth = () => {
    setMonth(month - 1);
  };

  const nextMonth = () => {
    setMonth(month + 1);
  };

  useEffect(() => {
    setMonth(getCurrentMonth());
  }, []);

  const getDaysInMonth = () => {
    return new Date(getCurrentYear(), month, 0).getDate();
  };

  const renderDate = () => {
    let dates = [];

    for (let i = 1; i <= getDaysInMonth(); i++) {
      dates.push(
        <div className="calendar__date" key={i}>
          {i}
        </div>
      );
    }

    return dates;
  };

  return (
    <div>
      <input type="date" />
      <button onClick={getDaysInMonth}>push</button>
      <div className="calendar-popup" style={popup}>
        <div className="calendar__header" style={d_flex}>
          <span onClick={prevMonth}>-</span>
          <span>{monthes[month]}</span>
          <span onClick={nextMonth}>+</span>
        </div>
        <div className="calender__week" style={d_flex}>
          <div className="calendar__day">sun</div>
          <div className="calendar__day">mon</div>
          <div className="calendar__day">tue</div>
          <div className="calendar__day">wed</div>
          <div className="calendar__day">thu</div>
          <div className="calendar__day">fri</div>
          <div className="calendar__day">sat</div>
        </div>
        <div className="calendar__body" style={d_flex}>
          {renderDate().map((date) => {
            return date;
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarPopup;
