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
        // config.headers['Authorization'] = `Bearer `;

      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default $axios;

