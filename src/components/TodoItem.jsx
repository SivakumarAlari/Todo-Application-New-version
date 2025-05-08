import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete now", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log(todos);
  }
  const completedCssStyle = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemNames}>
        <span
          className={completedCssStyle}
          onClick={() => handleClick(item.name)}
        >
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDelete(item)}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
