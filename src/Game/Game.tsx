import React from "react";
import { Button, Grid } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

import CardsTable from "./CardsTable";
import Timer from './Timer';
import { useStyles } from "../themes/theme";


interface PropTypes {
  exitGame: () => void;
}

const Game = (props: PropTypes) => {

  const classes = useStyles();

  return (
    <>
      <Button className={classes.mv1} startIcon={<ArrowBackIos/>} variant='outlined' onClick={() => props.exitGame()}>Back</Button>
      <Grid container direction='row'>
        <Timer />
        <CardsTable />
      </Grid>
      

    </>
  );
};

export default Game;