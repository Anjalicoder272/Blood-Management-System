import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DonorDashboard = () => {
  const [donorInfo, setDonorInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';  // Redirect to login if not authenticated
    }

    // Fetch donor info
    axios.get('http://localhost:5000/api/donor-info', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => setDonorInfo(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Donor Dashboard</h2>
      {donorInfo ? (
        <div>
          <p>Name: {donorInfo.name}</p>
          <p>Blood Type: {donorInfo.bloodType}</p>
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default DonorDashboard;
