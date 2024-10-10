import axios from "axios";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/auth", // Ubah base URL ke endpoint login API
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json", // Ganti ke application/json
  },
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent, e.g., attach tokens, etc.
    return config;
  },
  function (error) {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Handle response data
    return response;
  },
  function (error) {
    // Handle response error
    if (error.response && error.response.status === 401) {
      // For example, handle unauthorized error
      console.error("Unauthorized, redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
