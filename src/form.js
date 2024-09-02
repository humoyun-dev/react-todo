import { useState } from "react";

const ToDoForm = ({ todo, setToDo }) => {
  const [task, setTask] = useState({
    title: "",
    done: false,
  });

  function onAddTask() {
    if (task.title.length > 3) {
      setToDo([...todo, task]);
      setTask({
        title: "",
        done: false,
      });
    }
  }

  return (
    <div className="todo-form">
      <input
        type="text"
        value={task.title}
        onChange={(event) => setTask({ ...task, title: event.target.value })}
        placeholder="Type your task ..."
      />
      <button onClick={onAddTask} type="button">
        add
      </button>
    </div>
  );
};

export default ToDoForm;
