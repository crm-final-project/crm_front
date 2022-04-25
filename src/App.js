import { useEffect, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Loggin } from './utils/login';
import PublicRouter from './routes/public/router';
import PrivateRouter from './routes/private/router';

import theme from './theme';
import './App.css';

function App() {
  const [isLoggin, setIsLoggin] = useState(false);
  const loggin = new Loggin();

  useEffect(() => setIsLoggin(loggin.isLoggedIn()));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isLoggin ? <PrivateRouter /> : <PublicRouter />}
      </ThemeProvider>
    </>
  );
}

export default App;
