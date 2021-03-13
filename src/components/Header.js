import { React } from "react";

const Header = () => {
  var today = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <header>
      <div className="date">
        <p className="date-num">{today.getDate()}</p>
        <div className="date-month-year">
          <p className="date-month">{months[today.getMonth()]}</p>
          <p className="date-year">{today.getFullYear()}</p>
        </div>
      </div>
      <div className="day">{days[today.getDay()]}</div>
    </header>
  );
};

export default Header;
