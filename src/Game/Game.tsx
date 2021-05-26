import React, { useState } from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

import CardsTable from "./CardsTable";
import Timer from './Timer';
import ClickCounter from './ClickCounter';
import { getCards } from './cardData';
import { useStyles } from "../themes/theme";


interface PropTypes {
  cardsQty: number;
  exitGame: () => void;
}

const Game = (props: PropTypes) => {

  const classes = useStyles(); 
  const [counter, setCounter] = useState(0);
  const [cards] = useState(getCards(props.cardsQty));
  const [stop, setStop] = useState(false);

  return (
    <>
      <Button className={classes.mv1} startIcon={<ArrowBackIos/>} variant='outlined' onClick={() => props.exitGame()}>Back</Button>
      <Grid container direction='row'>
        <Grid item xs={1}>
          <Paper className={classes.gameBlock}><Timer stop={stop}/></Paper>         
        </Grid>
        <Grid item xs={10}>
          <CardsTable cards={cards} increaseCounter={() => setCounter(prev => ++prev)} stopTimer={() => setStop(true)}/>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.gameBlock}><ClickCounter count={counter}/></Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Game;