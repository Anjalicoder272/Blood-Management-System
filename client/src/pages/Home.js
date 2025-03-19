import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to the Blood Bank Donation and Acceptance Platform</h1>
      <p className="text-center">
        Join our community of blood donors and receivers, and help save lives today!
      </p>
      <div className="d-flex justify-content-center">
        <Link to="/register" className="btn btn-primary m-2">
          Register as Donor/Receiver
        </Link>
        <Link to="/login" className="btn btn-secondary m-2">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
