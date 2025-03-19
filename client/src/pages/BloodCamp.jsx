import React, { useState, useEffect } from 'react';

// Sample data to mock the blood camps (in real-world use, fetch this from an API)
const sampleBloodCamps = [
  {
    id: 1,
    organization: 'Red Cross',
    place: 'Central Park, New York',
    time: '2025-03-30 09:00 AM - 03:00 PM',
    contact: 'redcross@example.com',
  },
  {
    id: 2,
    organization: 'Blood Donation Society',
    place: 'City Hall, Los Angeles',
    time: '2025-03-31 10:00 AM - 05:00 PM',
    contact: 'blooddonation@example.com',
  },
  {
    id: 3,
    organization: 'Life Save Foundation',
    place: 'Downtown Plaza, Chicago',
    time: '2025-04-01 09:00 AM - 03:00 PM',
    contact: 'lifesave@example.com',
  },
];

const BloodCampsPage = () => {
  const [bloodCamps, setBloodCamps] = useState([]);

  useEffect(() => {
    // In real-world use, fetch this data from an API endpoint
    setBloodCamps(sampleBloodCamps);
  }, []);

  const handleBookAppointment = (campId) => {
    // Logic for booking an appointment (e.g., saving the booking or redirecting)
    alert(`Appointment booked for camp ID: ${campId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Upcoming Blood Donation Camps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bloodCamps.map((camp) => (
          <div key={camp.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{camp.organization}</h3>
            <p className="text-gray-600 mb-2">{camp.place}</p>
            <p className="text-gray-600 mb-2">{camp.time}</p>
            <p className="text-gray-600 mb-4">Contact: {camp.contact}</p>
            <button
              onClick={() => handleBookAppointment(camp.id)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodCampsPage;
