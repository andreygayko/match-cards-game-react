import { Typography } from "@material-ui/core";

interface PropTypes {
    count: number;
  };
  
  const ClickCounter = (props: PropTypes) => {
      
    return (
      <Typography>Clicks: {props.count}</Typography>
    )
  };
  
  export default ClickCounter;