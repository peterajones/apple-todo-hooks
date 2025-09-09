import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <form className="addTodo" onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input
          type="text"
          name="title"
          id="title"
          aria-label="title"
          placeholder="Add a Todo ..."
          value={title}
          onChange={handleChange}
        />
        <button type="submit" disabled={!title}>
          &#43;
        </button>
      </label>
    </form>
  );
}

export default TodoForm;