import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  LandingPage,
  LoginPage,
  UserRegPage,
  RecoveryAccountPage,
  ValidateEmailPage,
} from '../../components/pages';
import Loader from '../../components/helper/Loader';

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
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<UserRegPage />} />
        <Route path='/forgot' element={<RecoveryAccountPage />} />
        <Route path='/reset-password' element={<ValidateEmailPage />} />
        <Route path='*' element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default PublicRouter;
