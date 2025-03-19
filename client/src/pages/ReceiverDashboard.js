// src/pages/ReceiverDashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReceiverDashboard = () => {
  const [receiverInfo, setReceiverInfo] = useState(null);

  useEffect(() => {
    // Fetch receiver information from the backend or local storage
    axios.get('http://localhost:5000/api/receiver-info')  // Adjust API URL as needed
      .then(response => {
        setReceiverInfo(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching receiver info:', error);
      });
  }, []);

  return (
    <div>
      <h2>Receiver Dashboard</h2>
      {receiverInfo ? (
        <div>
          <p>Name: {receiverInfo.name}</p>
          <p>Blood Type: {receiverInfo.bloodType}</p>
          <p>Email: {receiverInfo.email}</p>
          {/* Add other receiver details */}
        </div>
      ) : (
        <p>Loading receiver information...</p>
      )}
    </div>
  );
};

export default ReceiverDashboard;
