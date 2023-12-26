// axiosInstance.js
import axios from 'axios';
import { getUserFromLocalStorage } from './localStorage';

const $axios = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit', // Set your API base URL
//   timeout: 10000, // Set timeout (optional)
  headers: {
  //   'Content-length': "40",
  //   'Content-Type': 'application/json; charset=utf-8',
  // // 'content-type': "application/json; charset=utf-8"
  },
});

// Add an interceptor to add the token to each request
$axios.interceptors.request.use(
    (config) => {
     const user = getUserFromLocalStorage();
      
      if (user) {
        config.headers['Authorization'] = `Bearer ${user.token}`;
        // config.headers['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjUxZWZhZDJjZmE3YTI5NjM1MDE3MjUiLCJpYXQiOjE3MDMwNjA1MDMsImV4cCI6MTcwMzE0NjkwM30.8Z_iR5ohuy4W8pjpCmyW8DVL_hEBJMhx6br9EP1VLRE`;

      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default $axios;

