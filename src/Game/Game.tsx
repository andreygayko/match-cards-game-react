import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

import CardsTable from "./CardsTable";
import Timer from './Timer';
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
      <Grid container direction='row'>
        <Timer />
        <CardsTable cards={cards}/>
      </Grid>
    </>
  );
};

export default Game;