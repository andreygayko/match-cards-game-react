import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

import { useActions } from '../hooks/useActions';
import CardsTable from "./CardsTable";
import Timer from './Timer';
import ClickCounter from './ClickCounter';
import { useStyles } from "../themes/theme";

const Game = () => {

  const { setDifficulty, setCounter, setTimer, setGame, setMenu } = useActions();
  const classes = useStyles(); 

  const handleExit = () => {
    setDifficulty(8);
    setCounter(0);
    setTimer('00:00:00');
    setGame(false);
    setMenu(true);
  };

  return (
    <>
      <Button className={classes.mv1} startIcon={<ArrowBackIos/>} variant='outlined' onClick={handleExit}>Back</Button>
      <Grid container direction='row'>
        <Grid item xs={1}>
          <Paper className={classes.gameBlock}><Timer/></Paper>         
        </Grid>
        <Grid item xs={10}>
          <CardsTable/>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.gameBlock}><ClickCounter/></Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Game;