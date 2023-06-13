import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LandingPage from './components/landingPage/LandingPage';
import ApplicationForm from './components/applicationForm/ApplicationForm';
import AdminDashboard from './components/adminDashboard/AdminDashboard';

function App() {
  return (
    <div className='min-w-full min-h-screen bg-neutral-950 text-neutral-50 flex flex-col items-center'>
      <BrowserRouter>
        <nav className='flex flex-col bg-neutral-800 p-4 w-full'>
          <h1 className='text-3xl font-extrabold text-center'>
            Organization Management System
          </h1>

          <div className='flex justify-evenly p-4'>
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
