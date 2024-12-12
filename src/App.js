import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import UserPage from './components/UserPage';
import NewReport from './components/Pages/NewReport'; // Import NewReport component
import SectionA from './components/Pages/SectionA'; // Import SectionA component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/register" element={<RegistrationPage />} /> {/* Registration Page */}
        <Route path="/user" element={<UserPage />} /> {/* User Page */}
        <Route path="/user/reporting" element={<NewReport />} /> {/* New Report Page */}
        <Route path="/user/reporting/sectiona" element={<SectionA />} /> {/* Section A Page */}
      </Routes>
    </Router>
  );
};

export default App;
