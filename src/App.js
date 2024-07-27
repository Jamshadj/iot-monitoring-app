import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import DeviceList from "./pages/devices";
import DeviceDetail from "./pages/deviceDetail";
import UserDetails from "./pages/userDetails";
import LoginPage from "./pages/login";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/devices" element={<DeviceList />} />
          <Route path="/devices/:deviceName" element={<DeviceDetail />} />
          <Route path="/user Details" element={<UserDetails />} />
        </Routes>
    </Router>
  );
}

export default App;
