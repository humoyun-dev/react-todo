import { useState } from "react";

const TodoList = ({ todo, setToDo, bin, setBin }) => {
  const [edit, setEdit] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [search, setSearch] = useState("");

  const searchedData = todo.filter((item) =>
    item.title.replaceAll(" ", "").toLowerCase().includes(search.replaceAll(" ", "").toLowerCase())
  );

  function onDoneTask(index, done) {
    const data = todo.map((item, i) => {
      const data = {
        ...item,
        done: !done,
      };

      return index == i ? data : item;
    });

    setToDo(data);
  }

  function ondDelete(item, index) {
    const data = todo.filter((_, i) => i !== index);

    const binData = [...bin, item]

    setBin(binData)
    setToDo(data);
  }

  function onEdit(index) {
    const data = todo.map((item, i) => {
      const data = {
        ...item,
        title: editTitle,
      };

      return index == i ? data : item;
    });

    setToDo(data);
    setEdit(null);
  }

  return (
    <>
      <input
        type="search"
        onChange={(event) => setSearch(event.target.value)}
      />
      <ol className="todo-list">
        {searchedData
          .sort(function (a, b) {
            return a.done - b.done;
          })
          .map((item, index) => (
            <li key={index}>
              {edit == index ? (
                <div>
                  {index + 1}
                  <input
                    defaultValue={item.title}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <button onClick={() => onEdit(index)}>save</button>
                </div>
              ) : (
                <p>
                  {index + 1}:{" "}
                  {item.done ? <del>{item.title}</del> : item.title}
                </p>
              )}
              <div className="list-options">
                <input
                  onClick={() => onDoneTask(index, item.done)}
                  checked={item.done}
                  type="checkbox"
                />
                <button onClick={() => setEdit(index)}>
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button onClick={() => ondDelete(item, index)}>
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </li>
          ))}
      </ol>
    </>
  );
};

export default TodoList;
