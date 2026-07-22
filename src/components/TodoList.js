import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, toggleComplete, editTask }) {
  return (
    <ul id="tasks-list">
      {tasks.map((task) => (
        <TodoItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;