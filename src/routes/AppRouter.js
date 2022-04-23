import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  LandingPage,
  LoginPage,
  Four0Four,
  QuotesNewPage,
  UserRegPage,
  ValidateEmailPage,
  UserEditPage,
  RecoveryAccountPage,
} from '../components/pages';
import { makeStyles } from '@mui/styles';
import Loader from '../components/helper/Loader';

const useStyles = makeStyles((theme) => ({
  loader : {
    opacity: 0
  },
  loaderActive: {
    opacity: 100
  }
}));

const AppRouter = () => {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

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
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<UserRegPage />} />
        <Route path='/quotes/new' element={<QuotesNewPage />} />
        <Route path="/validate" element={<ValidateEmailPage />} />
        <Route path="/recovery" element={<RecoveryAccountPage />} />
        <Route path='/edit' element={<UserEditPage/>}/>
        <Route path="*" element={<Four0Four />} />
      </Routes>
    </>
  );
};

export default AppRouter;
