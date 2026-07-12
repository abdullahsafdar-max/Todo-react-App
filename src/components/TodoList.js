import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, toggleComplete }) {
    return(
        <ul id="tasks-list">
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ul>
    );
}

export default TodoList;