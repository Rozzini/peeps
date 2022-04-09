import React from 'react';
import { useCountdown } from './useCountDown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const CountDownTimer = ({ targetDate }) => {

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else  { 
      return (
        <div className="grid grid-cols-2 md:flex md:divide-x gap-1  py-10">
        <div className="px-6 md:px-8">
          <span className="block  text-lg md:text-xl font-bold text-center md:text-left">
            {days} days
          </span>
        </div>

        <div className="px-6 md:px-8">
          <span className="block  text-lg md:text-xl font-bold text-center md:text-left">
            {hours} hours
          </span>
        </div>

        <div className="px-6 md:px-8">
          <span className="block  text-lg md:text-xl font-bold text-center md:text-left">
            {minutes} minutes
          </span>
        </div>

        <div className="px-6 md:px-8">
          <span className="block  text-lg md:text-xl font-bold text-center md:text-left">
            {seconds} seconds
          </span>
        </div>
      </div>
    )
      }
}

export default CountDownTimer;