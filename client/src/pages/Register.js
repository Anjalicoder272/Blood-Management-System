import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donor'); // Default role set to donor
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For redirection after successful registration

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        role,
      });

      if (response.data.token) {
        // Save the token to local storage
        localStorage.setItem('token', response.data.token);

        // Redirect based on role
        if (role === 'donor') {
          navigate('/donor-dashboard');
        } else {
          navigate('/receiver-dashboard');
        }
      }
    } catch (err) {
      console.log(err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleRegister} className="register-form">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="donor">Donor</option>
          <option value="receiver">Receiver</option>
        </select>
        <button type="submit">Register</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
