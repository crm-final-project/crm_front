import { Routes, Route } from 'react-router-dom';
import { LandingPage, LoginPage, Four0Four, ValidateEmailPage } from '../components/pages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/validate' element={<ValidateEmailPage/>}/>
      <Route path='*' element={<Four0Four />} />
    </Routes>
  );
};

export default AppRouter;
