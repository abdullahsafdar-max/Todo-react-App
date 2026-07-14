import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

// Get all tasks
export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create a task
export const createTask = async (text) => {
  const response = await axios.post(API_URL, {
    text,
  });

  return response.data;
};

// Update a task
export const updateTask = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};

// Delete a task
export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};