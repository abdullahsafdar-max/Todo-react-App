import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/api/auth`;

// Signup
export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

// Login
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }

  return response.data;
};

// Google Login
export const googleLogin = async (credential) => {
  const response = await axios.post(`${API_URL}/google`, {
    credential,
  });

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }

  return response.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Get Token
export const getToken = () => {
  return localStorage.getItem("token");
};