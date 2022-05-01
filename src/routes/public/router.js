import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  LandingPage,
  LoginPage,
  UserRegPage,
  RecoveryAccountPage,
  ValidateEmailPage,
  Four0Four,
  QuotesNewPage,
  UserEditPage,
  QuotesPage,
} from '../../components/pages';

import Loader from '../../components/helper/Loader';
import { Loggin } from '../../utils/login';

const loggin = new Loggin();

const PublicRouter = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  });
  return (
    <>
      {loading && (
        <Box sx={{ display: 'flex', height: '100vh' }}>
          <Loader sx={{ opacity: 100 }} />
        </Box>
      )}
      <Routes>
        {/* public routes */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<UserRegPage />} />
        <Route path='/forgot' element={<RecoveryAccountPage />} />
        <Route path='/reset-password/:userId' element={<ValidateEmailPage />} />

        {/* private routes */}
        <Route element={<RequireAuth />}>
          <Route path='/quotes' element={<QuotesPage />} />
          <Route path='/new' element={<QuotesNewPage />} />
          <Route path='/validate' element={<ValidateEmailPage />} />
          <Route path='/edit' element={<UserEditPage />} />
          <Route path='/reset-password/:userId' element={<ValidateEmailPage />} />
          <Route path='*' element={<Four0Four />} />
        </Route>

        <Route path='*' element={<LoginPage />} />
      </Routes>
    </>
  );
};

function RequireAuth() {
  let auth = loggin.isLoggedIn();;
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default PublicRouter;
