import React, { useEffect, useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import { theme } from './themes/theme';
import Game from './Game/Game';
import User from './User';
import LeaderBoard from './LeaderBoard';
import Menu from './Menu/Menu';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  
  const [difficulty, setDifficulty] = useState(0);

  const { setUser } = useActions();
  const {userName, userEmail, isGame, isMenu, isLeaderboard} = useTypedSelector(store => store.gameProcess);

  useEffect(() => {
    const name = sessionStorage.getItem('userName');
    const email = sessionStorage.getItem('userEmail');
    if (name && email) {
      setUser(name, email);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {
        userName && userEmail ?
        <>
          {isLeaderboard ? 

            <LeaderBoard/> : 

              isGame ? 
                <Container>
                  <Game/>
                </Container> :

                <Menu/>
          }         
        </> :
          <User/>
      }
    </ThemeProvider>
  );
}

export default App;
