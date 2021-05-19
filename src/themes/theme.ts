import { createMuiTheme } from "@material-ui/core";

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