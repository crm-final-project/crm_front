import { createTheme } from '@mui/material/styles';

export default createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#0D3411',
    },
    green: {
      button: '#2d8254',
    },
    gray: {
      main: '#858585',
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Arial'",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  h1: {
    fontFamily: "'Poppins', 'Arial'",
    fontWeight: 300,
    fontSize: '6rem',
    lineHeight: 1.167,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontFamily: "'Poppins', 'Arial'",
    fontWeight: 300,
    fontSize: '3.75rem',
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontFamily: "'Poppins', 'Arial'",
    fontWeight: 400,
    fontSize: '3rem',
    lineHeight: 1.167,
    letterSpacing: '0em',
  },
  h4: {
    fontFamily: "'Poppins', 'Arial'",
    fontWeight: 400,
    fontSize: '2.125rem',
    lineHeight: 1.334,
    letterSpacing: '0.00735em',
  },
  h5: {
    fontFamily: "'Poppins', 'Arial'",
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: 1.6,
    letterSpacing: '0em',
  },
  h6: {
    fontFamily: "'Poppins', 'Arial'",
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontFamily: "'Poppins', 'Arial'",
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontFamily: "'Poppins', 'Arial'",
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },
  body1: {
    fontFamily: "'Poppins', 'Arial'",
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.43,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontFamily: "'Poppins', 'Arial'",
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
});
