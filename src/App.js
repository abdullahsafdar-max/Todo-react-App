import {useState} from 'react';
import './App.css';

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [nextId, setNextId] = useState(1);

  function addTask() {
    const text = task.trim();

    if (text === "") {
      alert("Please enter a task before adding.");
      return;
    }

    const newTask = {
      id: nextId,
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
    setTask("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div className="container">
      <div className="task-card">

        <Header />

        <TodoInput
          task={task}
          setTask={setTask}
          addTask={addTask}
        />

        {tasks.length === 0 && (
          <p>No tasks yet. Add one above!</p>
        )}

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