import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as deleteTaskAPI,
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const loadTasks = async () => {
  try {
    const data = await getTasks();
    setTasks(data);
  } catch (error) {
    console.error("Error loading tasks:", error);
  }
};

useEffect(() => {
  loadTasks();
}, []);

  const addTask = async () => {
  const text = task.trim();

  if (text === "") {
    alert("Please enter a task before adding.");
    return;
  }

  try {
    await createTask(text);

    setTask("");

    loadTasks();
  } catch (error) {
    console.error("Error creating task:", error);
  }
};

  const deleteTask = async (id) => {
  try {
    await deleteTaskAPI(id);

    loadTasks();
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

 const toggleComplete = async (id) => {
  try {
    const taskToUpdate = tasks.find((task) => task._id === id);

    await updateTask(id, {
      completed: !taskToUpdate.completed,
    });

    loadTasks();
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

  return (
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
  );
}

export default App;
