function TodoListOptions({ todos, toggleCompleted }) {
  const completed = todos.filter((todo) => todo.completed);
  const hidden = todos.filter((todo) => todo.hidden);
  
  return (
    <div className="todo-options">
      <button onClick={toggleCompleted} disabled={completed.length === 0}>
        {hidden.length === 0 ? 'Hide Completed' : 'Show Completed'}
      </button>
    </div>
  );
}

export default TodoListOptions;