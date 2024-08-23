import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './connexion/login/Login';


import Location from './connexion/location/Location';

import Dashboard from './dashboard/Dashboard';
import SignUp from './connexion/SignUp/SignUp';
import ProfInfo from './connexion/info/ProfInfo';

function App() {
  return (
    <div className="App">
      {/* Ajout de BrowserRouter pour encapsuler Routes */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/location' element={<Location/>}/>
          <Route path='/professional' element={<ProfInfo/>}/>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
