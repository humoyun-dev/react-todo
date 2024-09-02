import { useState } from "react";
import ToDoForm from "./form";
import TodoList from "./list";

export default function App() {
  const [todo, setToDo] = useState([]);

  return (
    <main>
      <div className="todo-body">
        <ToDoForm todo={todo} setToDo={setToDo} />
        <TodoList todo={todo} setToDo={setToDo} />
      </div>
    </main>
  );
}
