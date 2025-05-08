import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    if (todo.name === "") {
      alert("Please enter a task");
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <div className={styles.inputCon}>
        <input
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          className={styles.inputField}
          placeholder="Enter Todos"
        />
        <button type="submit" className={styles.btnStyle}>
          Add
        </button>
      </div>
    </form>
  );
}
