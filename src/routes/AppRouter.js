import { Routes, Route } from 'react-router-dom';
import { LandingPage, LoginPage, Four0Four } from '../components/pages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<Four0Four />} />
    </Routes>
  );
};

export default AppRouter;
