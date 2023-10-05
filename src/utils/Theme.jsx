import React from 'react';
import {
  createTheme,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from '@mui/material/styles';

const wineBase = '#6B2737';
const wineMain = alpha(wineBase, 0.7);

const charcoalBase = '#373F51';
const charcoalMain = alpha(charcoalBase, 0.7);

const chamoiseeBase = '#937B63';
const chamoiseeMain = alpha(chamoiseeBase, 0.7);

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#F1F7ED',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#344E41',
    },
    secondary: {
      main: '#F1F7ED',
    },
    wine: {
      main: wineMain,
      light: alpha(wineBase, 0.5),
      dark: alpha(wineBase, 0.9),
      contrastText: getContrastRatio(wineMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
    charcoal: {
      main: charcoalMain,
      light: alpha(charcoalBase, 0.5),
      dark: alpha(charcoalBase, 0.9),
      contrastText:
        getContrastRatio(charcoalMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
    chamoisee: {
      main: chamoiseeMain,
      light: alpha(chamoiseeBase, 0.5),
      dark: alpha(chamoiseeBase, 0.9),
      contrastText:
        getContrastRatio(chamoiseeMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
