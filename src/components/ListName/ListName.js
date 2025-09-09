import useLocalStorage from '../../hooks/useLocalStorage';

function ListName({ todos }) {
  const [listName, setListName] = useLocalStorage('listName', 'Todo List');

  const handleChange = (e) => {
    setListName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const notCompleted = todos.filter((todo) => !todo.completed);
  
  return (
    <form className="listName" onSubmit={handleSubmit}>
      <label htmlFor="listName">
        <input
          type="text"
          name="listName"
          id="listName"
          aria-label="listName"
          value={listName}
          onChange={handleChange}
        />
      </label>
      <span className="notCompleted">{notCompleted.length}</span>
    </form>
  );
}

export default ListName;