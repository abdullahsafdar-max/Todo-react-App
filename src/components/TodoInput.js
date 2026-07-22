function TodoInput({ task, setTask, addTask }) {
  return (
    <div className="input-section">
      <input
  type="text"
  value={task}
  onChange={(e) => setTask(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && addTask()}
  placeholder="Enter a task"
  maxLength={100}
/>
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TodoInput;
