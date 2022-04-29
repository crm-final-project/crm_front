import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';


import PublicRouter from './routes/public/router';


import theme from './theme';
import './App.css';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PublicRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
