import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core"

import { useStyles } from '../themes/theme';

interface PropTypes {
  stop: boolean;
}

const Timer = (props: PropTypes) => {

  const classes = useStyles();

  const [start] = useState(toSeconds(new Date()));
  const [time, setTime] = useState('00:00:00');
  const [final, setFinal] = useState('');
  
  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setTime(secondsToString(toSeconds(now) - start));
    }, 1000);
    props.stop && setFinal(time);
  }, [props.stop]);
    
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
      <Typography className={classes.timer} variant='h5'>{final ? final : time}</Typography>
    </>
  )
}

export default Timer;