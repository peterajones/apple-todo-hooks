function TodoItems({ todos, isCompleted, deleteTodo }) {
  return (
    <ul className={todos.length === 0 ? '' : 'todo-list'}>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.hidden ? 'todo-item hide' : 'todo-item'}>
          <span
            className={todo.completed ? 'toggleCompletedOn' : 'toggleCompletedOff'}
            onClick={() => isCompleted(todo.id)}
          >
            &nbsp;
          </span>
          <span 
            className={todo.completed ? 'isCompleted' : 'title'} 
            onClick={() => isCompleted(todo.id)}
          >
            {todo.title}
          </span>
          <span 
            className={todo.completed ? 'delete-todo' : 'hide'} 
            onClick={() => deleteTodo(todo.id)}
          >
            &ndash;
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoItems;