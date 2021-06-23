import { Typography } from "@material-ui/core";
import { useTypedSelector } from '../hooks/useTypedSelector';
  
  const ClickCounter = () => {

    const counter = useTypedSelector(state => state.gameProcess.counter);
      
    return (
      <Typography>Clicks: {counter}</Typography>
    )
  };
  
  export default ClickCounter;
