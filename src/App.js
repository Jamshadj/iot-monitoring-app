// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar/Sidebar';
import Dashboard from './pages/dashboard';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <Router>
         <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add other routes here */}
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
