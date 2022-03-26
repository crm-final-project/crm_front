import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage/';
import Four0Four from './components/pages/404/Four0Four';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div id="root">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<Four0Four />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
