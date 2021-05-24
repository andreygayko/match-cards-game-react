import { Button, Grid, Tooltip, Typography } from "@material-ui/core";

import { useStyles } from '../themes/theme';

interface PropTypes {
  username: string;
  handleDialog: () => void;
}

const Menu = (props: PropTypes) => {

  const classes = useStyles();

  const handleExit = () => {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userEmail');
    props.handleDialog();
  };

  function generateArray(start: number, end: number) {
    const arr = [];
    for( let i = start; i <= end; i+=2) {
      arr.push(i);
    }
    return arr;
  }
  return (
    <Grid className={classes.authForm} container direction='column'>
      <Typography className={[classes.marginCenter, classes.mv1].join(' ')}>Greetings, {props.username}!</Typography>

      <Grid className={classes.m1} item>
        <Grid container alignItems='center'>
          <Grid className={[classes.mr1, classes.textCenter].join(' ')} item xs={8}>
              <Button variant='outlined' className={classes.fullWidth}>Start</Button>
          </Grid>
          <Grid item xs={2} className={classes.textRight}>
            <Tooltip title='Select a number of cards you will have on the table' placement='left-end'>
              <Typography>Difficulty:</Typography>
            </Tooltip>  
          </Grid>
          <Grid item xs={1} className={classes.textLeft}>
             <select className={classes.select}>
               {generateArray(8, 16).map(el => <option value={el}>{el}</option>)}
             </select>
          </Grid>
        </Grid>
      </Grid>
      
      <Button className={classes.mg1} variant='outlined'>Leaderboard</Button>
      <Button className={classes.m1} variant='outlined' onClick={handleExit}>Exit</Button>
    </Grid>
  )
};

export default Menu;