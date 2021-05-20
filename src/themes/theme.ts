import { createMuiTheme, makeStyles } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    //type: 'dark',
    primary: {
      //light: '#f57c00',
      main: '#f57c00',
      dark: '#f57c00',
      //contrastText: '#f57c00'
    },
    secondary: {
      main: '#fff'
    },
    background: {
      default: '#eee',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: '#fff'
    }
  },
});

export const useStyles = makeStyles((theme) => ({
  marginCenter: {
    margin: '0 auto',
  },
  m1: {
    margin: '1rem',
  },
  mv1: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  inputField: {
    margin: '1rem auto 0',
    width: '80%',
  },
  authForm: {
    margin: '10% auto',
    width: '30%',
    minWidth: '20rem',  
    background: 'white',
    borderRadius: '1rem',
    boxShadow: '0 0 .5rem gray',
  },
  timer: {
    color: '#7cfc00',
    fontWeight: 1200,
  },
}))