import axios from "axios";
import { getToken } from "./authService";

const API_URL = "http://localhost:5000/api/tasks";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get all tasks
export const getTasks = async () => {
  const response = await axios.get(API_URL, authHeader());
  return response.data;
};

// Create task
export const createTask = async (text) => {
  const response = await axios.post(
    API_URL,
    { text },
    authHeader()
  );

  return response.data;
};

// Update task
export const updateTask = async (id, updatedData) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    authHeader()
  );

  return response.data;
};

// Delete task
export const deleteTask = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    authHeader()
  );

  return response.data;
};