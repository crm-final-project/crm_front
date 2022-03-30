import { Routes, Route } from 'react-router-dom';
import {
  Four0Four,
  LandingPage,
  LoginPage,
  MyQuotesPage,
  UserRegPage,
} from '../components/pages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<UserRegPage />} />
      <Route path='/myquotes' element={<MyQuotesPage />} />
      <Route path='*' element={<Four0Four />} />
    </Routes>
  );
};

export default AppRouter;
