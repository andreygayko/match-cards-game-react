import React, { useEffect, useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import { theme } from './themes/theme';
import Game from './Game';
import Timer from './Timer';
import User from './User';
import LeaderBoard from './LeaderBoard';
import Menu from './Menu/Menu';

function App() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userDialog, setUserDialog] = useState(true);
  const [isLeaderboard, setIsLeaderboard] = useState(false);

  useEffect(() => {
    const userName = sessionStorage.getItem('userName');
    const userEmail = sessionStorage.getItem('userEmail');
    if (userName && userEmail) {
      setName(userName);
      setEmail(userEmail);
      setUserDialog(false);
    }
  }, [userDialog]);

  const toggleDialog = () => {
    setUserDialog(prev => !prev);
  };

  const toggleLeaderboard = () => {
    setIsLeaderboard(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {
        name && email && !userDialog ?
        <>
          {isLeaderboard ? 
            <LeaderBoard
              closeLeaderboard={toggleLeaderboard}/> : 
            <Menu 
              username={name}
              handleDialog={toggleDialog}
              openLeaderboard={toggleLeaderboard}/>
          }
          <Timer/>
          <Container>
            <Game/>
          </Container>
        </> :
          <User handleClose={toggleDialog}/>
      }
    </ThemeProvider>
  );
}

export default App;
