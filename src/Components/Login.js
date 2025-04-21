import React, { useState } from 'react';
import axios from 'axios';
import '../styles/auth.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5035/api/auth/login', credentials);
      alert('Login successful!');
      // TODO: Redirect or save token if needed
    } catch (error) {
      if (error.response?.status === 401) {
        alert('Invalid credentials');
      } else {
        alert('Login failed');
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

