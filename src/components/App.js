import React, { useState } from "react";
import './../styles/App.css';
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  const handleOnMount = () => {
    setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
  };

  return (
    <div>
      <p>You've been on this page for {seconds} seconds.</p>
    </div>
  );
};

export default Timer;
