import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5035/api', // Adjust if your backend port is different
  headers: {
    'Content-Type': 'application/json'
  }
});
