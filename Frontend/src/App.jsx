import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';


// Import pages
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/RegistrationForm/LoginForm';
import HomePage from '../src/pages/HomePage/HomePage';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import Studentinfo from './pages/Studentinfo/Studentinfo';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage/>}  />
        <Route exact path="/HomePage/Login" element={<LoginForm/>} />
        <Route exact path="/Dashboard" element={<Dashboard/>}/>
        <Route exact path="/StudentDashboard" element={<StudentDashboard/>}/>
        <Route exact path="/Studentinfo" element={<Studentinfo/>}/>
      </Routes>
    </>
  );
}

export default App;
