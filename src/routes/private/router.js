import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  LandingPage,
  Four0Four,
  QuotesNewPage,
  ValidateEmailPage,
  UserEditPage,
  QuotesPage,
} from '../../components/pages';
import Loader from '../../components/helper/Loader';

const PrivateRouter = () => {
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
        <Route path='quotes' element={<QuotesPage />} />
        <Route path='new' element={<QuotesNewPage />} />
        <Route path='/validate' element={<ValidateEmailPage />} />
        <Route path='/edit' element={<UserEditPage />} />
        <Route path='*' element={<Four0Four />} />
      </Routes>
    </>
  );
};

export default PrivateRouter;
