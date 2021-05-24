import React, { useEffect, useState } from "react";
import { Button, Grid, ListItem, Typography } from "@material-ui/core";

import '../App.css';

const CardsTable = () => {
    
  const [flipFwId, setFlipFwId] = useState(-1);
  const [flipBwId, setFlipBwId] = useState([-1]);
  const arr = [{id: 'A', related: 'a'}, {id: 'c', related: 'C'}, {id: 'b', related: 'B'}, {id: 'B', related: 'b'}, {id: 'C', related: 'c'}, {id: 'a', related: 'A'}];
  const [content, setContent] = useState(arr.map(() => ''));
  const [openedCard, setOpenedCard] = useState(-1);
  const [guessed, setGuessed] = useState([-1]);
    
  const check = (id: number) => {
    if (openedCard >= 0 && openedCard !== id) {
      if (arr[openedCard].related === arr[id].id) {
       let guess = [...guessed];
       guess.length === 1 ? guess = [openedCard, id] : guess.push(openedCard, id)
       setGuessed(guess);
       setOpenedCard(-1);
    } else {
      setTimeout(() => {
        setFlipBwId([openedCard, id]);
        setOpenedCard(-1);
         const cont = [...content];
        cont[id] = '';
        cont[openedCard] = '';
        setContent(cont);
      }, 1000)
      
      console.log('back');
      
    }
    } else {
      setOpenedCard(id);
    }
  }
  
  const handleFlip = (event: React.MouseEvent) => {
    const id = (event.target as HTMLButtonElement).getAttribute('id');
    if (id && parseInt(id) !== flipFwId && !guessed.includes(parseInt(id))) {
      const numId = parseInt(id);
      const cont = [...content];
      cont[numId] = arr[numId].id;
      setFlipBwId([-1]);
      setContent(cont);
      setFlipFwId(numId);
      check(numId);
    }
  }  
  console.log(flipBwId);
  return (
    <Grid container direction='row' onClick={(event) => handleFlip(event)}>
      {arr.map((el, i) => 
        <Grid item xs={2}>
          <ListItem>
            <div className={`${flipBwId.includes(i) ? 'card-flipping-backward' : (flipFwId === i ? 'card-flipping-forward': '')} card`} id={i.toString()}>
              {
                content[i] ? 
                  <Typography >{content[i]}</Typography> : 
                  <img src='https://sites.google.com/a/netcmmi.com/share/_/rsrc/1473734124982/img/png/s/star-e01.png' style={{width: '100%'}} alt='card back' title='card back' id={i.toString()}/>
              }
            </div>
          </ListItem>
        </Grid>)
      }
    </Grid> 
  )
}

export default CardsTable;