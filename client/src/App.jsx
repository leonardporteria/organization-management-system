import { BrowserRouter, Routes, Route, Link, useMatch } from 'react-router-dom';

import LandingPage from './components/landingPage/LandingPage';
import ApplicationForm from './components/applicationForm/ApplicationForm';
import AdminDashboard from './components/adminDashboard/AdminDashboard';
import Dashboard from './components/dashboard/Dashboard';

import './App.scss';

const NavLink = ({ to, label }) => {
  const match = useMatch(to);

  return (
    <Link to={to} className={match ? 'active' : 'App__header__links'}>
      {label}
    </Link>
  );
};

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav className='App__header'>
          <h1 className='App__header__title'>Organization Management System</h1>

          <div className='App__header__links'>
            <NavLink to='/' label='Home'>
              Home
            </NavLink>
            <NavLink to='/application' label='Application'>
              Application
            </NavLink>
            <NavLink to='/admin' label='Admin'>
              Admin
            </NavLink>
            <NavLink to='/dashboard' label='Dashboard'>
              Dashboard
            </NavLink>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/application' element={<ApplicationForm />} />
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

      <div className='App__Footer'></div>
    </div>
  );
}

export default App;
