import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import DonorDashboard from './pages/DonorDashboard';
import ReceiverDashboard from './pages/ReceiverDashboard';
import './App.css';
import { Toaster } from 'react-hot-toast';
import BloodCampsPage from './pages/BloodCamp';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-center">Blood Bank Donation and Acceptance</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donor-dashboard" element={<DonorDashboard />} />
          <Route path="/receiver-dashboard" element={<ReceiverDashboard />} />
          <Route path="/blood-camps" element={<BloodCampsPage />} />

        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
