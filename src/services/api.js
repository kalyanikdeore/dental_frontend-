import axios from "axios";

// Create an Axios instance with custom configuration
const axiosInstance = axios.create({
  //   baseURL: "https://konkanvalley.demovoting.com/api", // Your API base URL
  baseURL: "http://127.0.0.1:8000/api", // Your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

// export const fileBaseURL = "https://konkanvalley.demov oting.com/uploads/";
export const fileBaseURL = "http://127.0.0.1:8000/uploads/";
export default axiosInstance;
