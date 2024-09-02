const TodoList = ({ todo, setToDo }) => {
  function onDoneTask(index, done) {
    const data = todo.filter((_, i) => i == index);
    const savedTodo = todo.filter((_, i) => i !== index);

    setToDo([...savedTodo, { done: !done, title: data[0].title }]);
  }

  return (
    <ol className="todo-list">
      {todo.map((item, index) => (
        <li key={index}>
          <p>{item.done ? <del>{item.title}</del> : item.title}</p>
          <div className="list-options">
            <input
              onClick={() => onDoneTask(index, item.done)}
              checked={item.done}
              type="checkbox"
            />
            <button>
              <i className="bi bi-pencil-square"></i>
            </button>
            <button>
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default TodoList;
