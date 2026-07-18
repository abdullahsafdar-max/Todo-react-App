import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import Signup from "./components/Signup";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as deleteTaskAPI,
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // Switch between Login and Signup
  const [showSignup, setShowSignup] = useState(false);

  // Load Tasks
  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      loadTasks();
    }
  }, [isLoggedIn]);

  // Add Task
  const addTask = async () => {
    const text = task.trim();

    if (text === "") {
      alert("Please enter a task.");
      return;
    }

    try {
      await createTask(text);
      setTask("");
      loadTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    await deleteTaskAPI(id);
    loadTasks();
  };

  // Toggle Complete
  const toggleComplete = async (id) => {
    const taskToUpdate = tasks.find((task) => task._id === id);

    await updateTask(id, {
      completed: !taskToUpdate.completed,
    });

    loadTasks();
  };

  // If not logged in
  if (!isLoggedIn) {
    return showSignup ? (
      <Signup showLogin={() => setShowSignup(false)} />
    ) : (
      <Login
        onLogin={() => setIsLoggedIn(true)}
        showSignup={() => setShowSignup(true)}
      />
    );
  }

  // Todo App
  return (
    <>
      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setIsLoggedIn(false);
          setTasks([]);
        }}
      >
        Logout
      </button>

      <div className="container">
        <div className="task-card">
          <Header />

          <TodoInput task={task} setTask={setTask} addTask={addTask} />

          {tasks.length === 0 && <p>No tasks yet. Add one above!</p>}

          <TodoList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
