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

  return (
    <>
      <Button className={classes.mv1} startIcon={<ArrowBackIos/>} variant='outlined' onClick={() => props.exitGame()}>Back</Button>
      <Grid style={{maxWidth:'10000'}} container direction='row'>
        <Grid item xs={1}>
            <Paper style={{width: '100%', height: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Timer /></Paper>
          
        </Grid>
        <Grid item xs={10}>
          <CardsTable cards={cards} increaseCounter={() => setCounter(prev => ++prev)}/>
        </Grid>
        <Grid item xs={1}>
        <Paper style={{width: '100%', height: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><ClickCounter count={counter}/></Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Game;