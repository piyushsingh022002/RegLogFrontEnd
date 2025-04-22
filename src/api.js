import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5035/api'
    : 'https://authappbackend-860f.onrender.com/'; // Replace with your actual Render URL

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
