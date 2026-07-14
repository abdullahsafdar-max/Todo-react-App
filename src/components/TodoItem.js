function TodoItem({ task, deleteTask, toggleComplete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task._id)}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "#8c929c" : "#111827",
        }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
