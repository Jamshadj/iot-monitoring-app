// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/Navbar/Navbar";
import DeviceList from "./pages/devices";
import DeviceDetail from "./pages/deviceDetail";
import UserDetails from "./pages/userDetails";
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/devices" element={<DeviceList />} />
          <Route path="/devices/:deviceName" element={<DeviceDetail />} />
          <Route path="/user Details" element={<UserDetails />} />
          {/* Add other routes here */}
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
