import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LandingPage from './components/landingPage/LandingPage';
import ApplicationForm from './components/applicationForm/ApplicationForm';
import AdminDashboard from './components/adminDashboard/AdminDashboard';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav className='App__header'>
          <h1 className='App__header__title'>Organization Management System</h1>

          <div className='App__header__links'>
            <Link to='/'>Landing Page</Link>
            <Link to='/application'>Application</Link>
            <Link to='/admin'>Admin</Link>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/application' element={<ApplicationForm />} />
          <Route path='/admin' element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
