import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/api/v1',
  baseURL: 'https://my-todo-app-backend.onrender.com/api/v1',
  timeout: 10000, // 10 seconds
  withCredentials: true, // Important for handling cookies
});

export default api;
