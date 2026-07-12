function TodoInput({ task, setTask, addTask }) {
  return (
    <div className="input-section">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TodoInput;
