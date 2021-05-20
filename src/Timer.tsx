import { Typography } from "@material-ui/core"
import { useState } from "react";

import './App.css';

const Timer = () => {

  const [start] = useState(toSeconds(new Date()));
  const [time, setTime] = useState('00:00:00');
  
  setInterval(() => {
    const now  = new Date();
    setTime(secondsToString(toSeconds(now) - start));
    
    //setTime(`${hours}:${minutes}:${seconds}`);
  }, 1000);

  function toSeconds(time: Date) {
    return time.getHours() * 60 * 60 + time.getMinutes() * 60 + time.getSeconds();
  };

  function secondsToString(time: number) {
    return `${Math.floor(time/3600)}:${Math.floor((time%3600)/60)}:${(time%3600)%60}`
  };

  return (
    <>
      <Typography className='timer' variant='h5'>{time}</Typography>
    </>
  )
}

export default Timer;