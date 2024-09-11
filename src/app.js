import { useState } from "react";
import ToDoForm from "./form";
import TodoList from "./list";

export default function App() {
  const [todo, setToDo] = useState([]);
  const [bin, setBin] = useState([]);

  function ondDelete(index) {
    const data = bin.filter((_, i) => i !== index);

    setBin(data)
  }

  function onRestore (item, index) {
    const binData = bin.filter((_, i) => i !== index);

    const data = [...todo, item]

    setBin(binData)
    setToDo(data);
  }

  return (
    <main>
      <div className="todo-body">
        <ToDoForm todo={todo} setToDo={setToDo} />
        <TodoList bin={bin} setBin={setBin} todo={todo} setToDo={setToDo} />
        <hr />
        <ul className="todo-list">
          {bin.map((item, index) => (
            <li key={index}>
              <p>
                {index + 1}: {item.done ? <del>{item.title}</del> : item.title}
              </p>
              <div className="list-options">
                <button onClick={()=>onRestore(item, index)}>
                  <i className="bi bi-upload"></i>
                </button>
                <button onClick={()=>ondDelete(index)}>
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
