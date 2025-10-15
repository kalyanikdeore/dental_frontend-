// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://127.0.0.1:8000/api",
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const fileBaseURL = "http://127.0.0.1:8000/uploads/";
import axios from "axios";

// Create an Axios instance with custom configuration
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
// Base URL for file uploads
export const fileBaseURL = "http://127.0.0.1:8000/uploads/";

// Request interceptor to add CSRF token
axiosInstance.interceptors.request.use(
  (config) => {
    // Get CSRF token from meta tag (if using Laravel's default setup)
    const token = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute("content");

    if (token) {
      config.headers["X-CSRF-TOKEN"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Function to log responses (client-side only)
const logResponse = (endpoint, data) => {
  if (typeof window !== "undefined") {
    console.log(`Response from ${endpoint}:`, data);
  }
  return data;
};

// Function to log errors (client-side only)
const logError = (endpoint, error) => {
  if (typeof window !== "undefined") {
    console.error(`Error from ${endpoint}:`, error);
  }
  return Promise.reject(error);
};

// API functions

// Blog API functions
export const fetchBlogsAPI = async (params = {}) => {
  try {
    if (typeof window !== "undefined") {
      console.log("Fetching blogs with params:", params);
    }
    const response = await axiosInstance.get("/blogs", { params });
    return logResponse("/blogs", response.data);
  } catch (error) {
    return logError("/blogs", error);
  }
};

export const fetchBlogDetailAPI = async (slug) => {
  try {
    if (typeof window !== "undefined") {
      console.log("Fetching blog detail for slug:", slug);
    }

    // Fetch all blogs and find the one with matching slug
    const response = await axiosInstance.get("/blogs");
    const allBlogs = response.data.data || response.data || [];

    console.log("All blogs received:", allBlogs);

    // Find the blog with matching slug
    const blogDetail = Array.isArray(allBlogs)
      ? allBlogs.find((blog) => blog.slug === slug)
      : null;

    if (!blogDetail) {
      throw new Error(`Blog with slug '${slug}' not found`);
    }

    return logResponse(`/blogs slug:${slug}`, blogDetail);
  } catch (error) {
    return logError(`/blogs slug:${slug}`, error);
  }
};

export const fetchBlogCategoriesAPI = async () => {
  try {
    const response = await axiosInstance.get("/blogs/categories");
    return logResponse("/blogs/categories", response.data);
  } catch (error) {
    return logError("/blogs/categories", error);
  }
};

export const fetchRecentPostsAPI = async (excludeSlug = null, limit = 3) => {
  try {
    // Fetch all blogs and filter/exclude
    const response = await axiosInstance.get("/blogs");
    let allBlogs = response.data.data || response.data || [];

    // Exclude current blog if excludeSlug is provided
    if (excludeSlug) {
      allBlogs = allBlogs.filter((blog) => blog.slug !== excludeSlug);
    }

    // Limit the results
    const recentPosts = allBlogs.slice(0, limit);

    return logResponse("/blogs/recent", recentPosts);
  } catch (error) {
    return logError("/blogs/recent", error);
  }
};

export default axiosInstance;
