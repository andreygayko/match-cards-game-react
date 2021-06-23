import { Button, Grid, Tooltip, Typography } from "@material-ui/core";

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { useStyles } from '../themes/theme';

const Menu = () => {

  const classes = useStyles();

  const { userName } = useTypedSelector(store => store.gameProcess)
  const { setUser, setDifficulty, setMenu, setGame, setLeaderboard } = useActions();

  const handleExit = () => {
    setUser('', '');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userEmail');
 
  };

  const handleGame = () => {
    setMenu(false);
    setGame(true);
  };

  const handleLeaderboard = () => {
    setMenu(false);
    setLeaderboard(true);
  };

  function generateArray(start: number, end: number) {
    const arr = [];
    for(let i = start; i <= end; i+=2) {
      arr.push(i);
    }
    return arr;
  }
  return (
    <Grid className={classes.authForm} container direction='column'>
      <Typography className={[classes.marginCenter, classes.mv1].join(' ')}>Greetings, {userName}!</Typography>

      <Grid className={classes.m1} item>
        <Grid container alignItems='center'>
          <Grid className={[classes.mr1, classes.textCenter].join(' ')} item xs={8}>
              <Button variant='outlined' className={classes.fullWidth} onClick={handleGame}>Start</Button>
          </Grid>
          <Grid item xs={2} className={classes.textRight}>
            <Tooltip title='Select a number of cards you will have on the table' placement='left-end'>
              <Typography>Difficulty:</Typography>
            </Tooltip>  
          </Grid>
          <Grid item xs={1} className={classes.textLeft}>
             <select className={classes.select} onChange={(event) => setDifficulty(parseInt(event.target.value))}>
               {generateArray(8, 16).map((el, i) => <option key={i} value={el}>{el}</option>)}
             </select>
          </Grid>
        </Grid>
      </Grid>
      
      <Button className={classes.mg1} variant='outlined' onClick={handleLeaderboard} >Leaderboard</Button>
      <Button className={classes.m1} variant='outlined' onClick={handleExit}>Exit</Button>
    </Grid>
  )
};

export default Menu;