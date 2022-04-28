import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  LandingPage,
  LoginPage,
  UserRegPage,
  RecoveryAccountPage,
  ValidateEmailPage,
} from '../../components/pages';
import Loader from '../../components/helper/Loader';
import { QuotesPage } from '../../components/pages';
import { Loggin } from '../../utils/login';

const loggin = new Loggin();

const PublicRouter = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <>
      {loading && (
        <Box sx={{ display: 'flex', height: '100vh' }}>
          <Loader sx={{ opacity: 100 }} />
        </Box>
      )}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/quotes' element={
          <RequireAuth redirectTo="/login">
            <QuotesPage />
          </RequireAuth>
        } />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<UserRegPage />} />
        <Route path='/forgot' element={<RecoveryAccountPage />} />
        <Route path='/reset-password/:userId' element={<ValidateEmailPage />} />
        <Route path='*' element={<LoginPage />} />
      </Routes>
    </>
  );
};



function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = loggin.isLoggedIn();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}


export default PublicRouter;
