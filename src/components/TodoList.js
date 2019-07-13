import React from 'react';

class ListName extends React.Component {
  state = {
    listName: ''
  };

  componentDidMount() {
    if (!localStorage.getItem('listName')) {
      this.setState({
        listName: 'Todo List'
      });
    } else if (localStorage.getItem('listName'))
      localStorage.getItem('listName') &&
        this.setState({
          listName: localStorage.getItem('listName')
        });
  }

  componentDidUpdate() {
    localStorage.setItem('listName', this.state.listName);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const notCompleted = this.props.todos.filter((todos) => !todos.completed);
    return (
      <React.Fragment>
        <form className="listName" onSubmit={this.handleSubmit}>
          <label htmlFor="listName">
            <input
              type="text"
              name="listName"
              id="listName"
              aria-label="listName"
              defaultValue={this.state.listName}
              onChange={this.handleChange}
            />
          </label>
          <span className="notCompleted">{notCompleted.length}</span>
        </form>
      </React.Fragment>
    );
  }
}

class TodoForm extends React.Component {
  state = {
    title: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
    e.target.reset();
  };

  render() {
    return (
      <form className="addTodo" onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            id="title"
            aria-label="title"
            placeholder="Add a Todo ..."
            defaultValue={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" disabled={!this.state.title}>
            &#43;
          </button>
        </label>
      </form>
    );
  }
}

class TodoItems extends React.Component {
  render() {
    const { todos, isCompleted, deleteTodo } = this.props;
    return (
      <React.Fragment>
        <ul className={todos.length === 0 ? '' : 'todo-list'}>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.hidden ? 'todo-item hide' : 'todo-item'}>
              <span
                className={todo.completed ? 'toggleCompletedOn' : 'toggleCompletedOff'}
                onClick={isCompleted.bind(this, todo.id)}
              >
                &nbsp;
              </span>
              <span className={todo.completed ? 'isCompleted' : 'title'} onClick={isCompleted.bind(this, todo.id)}>
                {todo.title}
              </span>
              <span className={todo.completed ? 'delete-todo' : 'hide'} onClick={deleteTodo.bind(this, todo.id)}>
                &ndash;
              </span>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

class TodoListOptions extends React.Component {
  render() {
    const { todos, clearTodos, toggleCompleted, toggleHidden } = this.props;
    const completed = todos.filter((todos) => todos.completed);
    const hidden = todos.filter((todos) => todos.hidden);
    return (
      <div className="todo-options">
        <button onClick={clearTodos.bind(this)} disabled={todos.length === 0}>
          Clear List
        </button>
        <button onClick={toggleCompleted.bind(this)} disabled={completed.length === 0}>
          {hidden.length === 0 ? 'Hide Completed' : 'Show Completed'}
        </button>
        <button onClick={toggleHidden.bind(this)} disabled={todos.length === 0}>
          {hidden.length !== 0 ? 'Show All' : 'Hide All'}
        </button>
      </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    localStorage.getItem('todos') &&
      this.setState({
        listName: localStorage.getItem('listName'),
        todos: JSON.parse(localStorage.getItem('todos'))
      });
  }

  componentDidUpdate() {
    localStorage.setItem('listName', this.state.listName);
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
      hidden: false
    };
    const todos = this.state.todos;
    todos.unshift(newTodo);
    this.setState({ todos });
  };

  isCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id && !todo.completed) {
          todo.completed = !todo.completed;
          todo.hidden = !todo.hidden;
        } else if (todo.id === id && todo.completed && !todo.hidden) {
          todo.completed = false;
          todo.hidden = false;
        }
        return todo;
      })
    });
  };

  isHidden = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.hidden = !todo.hidden;
        }
        return todo;
      })
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  };

  clearTodos = () => {
    this.setState({
      todos: []
    });
  };

  toggleCompleted = () => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.completed && todo.hidden) {
          todo.completed = true;
          todo.hidden = false;
        } else if (todo.completed && !todo.hidden) {
          todo.completed = true;
          todo.hidden = true;
        }
        return todo;
      })
    });
  };

  toggleHidden = () => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (!todo.hidden) {
          todo.hidden = true;
        } else if (todo.hidden) {
          todo.hidden = false;
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <React.Fragment>
        <ListName todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo} />
        <TodoItems
          todos={this.state.todos}
          isCompleted={this.isCompleted}
          isHidden={this.isHidden}
          deleteTodo={this.deleteTodo}
        />
        <TodoListOptions
          todos={this.state.todos}
          clearTodos={this.clearTodos}
          toggleCompleted={this.toggleCompleted}
          toggleHidden={this.toggleHidden}
        />
      </React.Fragment>
    );
  }
}

export default TodoList;
