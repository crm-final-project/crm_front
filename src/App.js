import theme from './theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;