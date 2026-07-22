import { useState } from "react";

function TodoItem({ task, deleteTask, toggleComplete, editTask }) {

const [isEditing, setIsEditing] = useState(false);
const [editedText, setEditedText] = useState(task.text);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task._id)}
      />
      {isEditing ? (
  <input
    className="edit-input"
    type="text"
    value={editedText}
    onChange={(e)=>setEditedText(e.target.value)}
/>
) : (

  <span
  className={`task-text ${
    task.completed ? "completed-task" : ""
  }`}
>
  {task.text}
</span>

)}
      {isEditing ? (
  <>
    <div className="task-actions">
    <button
        onClick={() => {
            if (editedText.trim() === "") {
                alert("Task cannot be empty.");
                return;
            }

            editTask(task._id, editedText);
            setIsEditing(false);
        }}
    >
        Save
    </button>

    <button
        onClick={() => {
            setEditedText(task.text);
            setIsEditing(false);
        }}
    >
        Cancel
    </button>
</div>
  </>
) : (
  <>
    <div className="task-actions">
    <button onClick={() => setIsEditing(true)}>
        Edit
    </button>

    <button
        onClick={() => {
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this task?"
            );

            if (confirmDelete) {
                deleteTask(task._id);
            }
        }}
    >
        Delete
    </button>
</div>
  </>
)}
    </li>
  );
}

export default TodoItem;
