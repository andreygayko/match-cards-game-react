import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import { theme } from './themes/theme';
import Game from './Game';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container>
        <Game/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
