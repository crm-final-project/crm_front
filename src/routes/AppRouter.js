import { Routes, Route } from 'react-router-dom';
import {
  LandingPage,
  LoginPage,
  Four0Four,
  QuotesPage,
  QuotesNewPage,
  UserRegPage,
  ValidateEmailPage,
} from '../components/pages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<UserRegPage />} />
      <Route path='/quotes' element={<QuotesPage />} />
      <Route path='/quotes/new' element={<QuotesNewPage />} />
      <Route path='/validate' element={<ValidateEmailPage/>}/>
      <Route path='*' element={<Four0Four />} />
    </Routes>
  );
};

export default AppRouter;
