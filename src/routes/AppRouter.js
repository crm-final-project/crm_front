import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from '../components/pages/LoginPage/LoginPage';
import Four0Four from '../components/pages/404/Four0Four';

// import Header from '../components/ui/Header';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={LoginPage} />
        <Route path="*" component={Four0Four} />
      </Routes>
    </Router>
  );
};

export default AppRouter;