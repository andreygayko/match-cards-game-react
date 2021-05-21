import { useState } from "react";
import { Typography } from "@material-ui/core"

import { useStyles } from './themes/theme';

const Timer = () => {

  const classes = useStyles();

  const [start] = useState(toSeconds(new Date()));
  const [time, setTime] = useState('00:00:00');
  
  setInterval(() => {
    const now = new Date();
    setTime(secondsToString(toSeconds(now) - start));
  }, 1000);

  function toSeconds(time: Date) {
    return time.getHours() * 60 * 60 + time.getMinutes() * 60 + time.getSeconds();
  };

  function secondsToString(time: number) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time % 3600 / 60);
    const seconds = time % 3600 % 60;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <>
      <Typography className={classes.timer} variant='h5'>{time}</Typography>
    </>
  )
}

export default Timer;