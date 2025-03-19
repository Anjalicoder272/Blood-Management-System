import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log(response.status);

      if (response.status === 500 || response.status === 400) {
        toast.error("Some error occurred");
      } else {
        toast.success("Logged in successfully");

        if (response.data.token) {
          // Save the token in localStorage
          localStorage.setItem('token', response.data.token);

          // Decode the JWT token to access the role
          const decodedToken = jwtDecode(response.data.token);
          const role = decodedToken.role;

          // Redirect based on role
          if (role === 'donor') {
            navigate('/donor-dashboard');
          } else if (role === 'receiver') {
            navigate('/receiver-dashboard');
          }
        }
      }
    } catch (err) {
      console.log('Login error:', err);
      toast.error("An error occurred while logging in");
    }
  };

  return (
    <form onSubmit={handleLogin}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
