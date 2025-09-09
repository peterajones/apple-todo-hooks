import useLocalStorage from '../../hooks/useLocalStorage';
import ListName from '../ListName/ListName';
import TodoForm from '../TodoForm/TodoForm';
import TodoItems from '../TodoItems/TodoItems';
import TodoListOptions from '../TodoListOptions/TodoListOptions';

function TodoList() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
      hidden: false
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const isCompleted = (id) => {
    setTodos(prevTodos => prevTodos.map((todo) => {
      if (todo.id === id && !todo.completed) {
        return { ...todo, completed: true, hidden: true };
      } else if (todo.id === id && todo.completed && !todo.hidden) {
        return { ...todo, completed: false, hidden: false };
      }
      return todo;
    }));
  };


  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = () => {
    setTodos(prevTodos => prevTodos.map((todo) => {
      if (todo.completed) {
        return { ...todo, hidden: !todo.hidden };
      }
      return todo;
    }));
  };

  return (
    <div className="TodoContainer">
      <ListName todos={todos} />
      <TodoForm addTodo={addTodo} />
      <TodoItems
        todos={todos}
        isCompleted={isCompleted}
        deleteTodo={deleteTodo}
      />
      <TodoListOptions
        todos={todos}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

export default TodoList;
