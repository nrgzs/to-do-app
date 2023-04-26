import { useContext, useEffect, useReducer, useState } from 'react';
import { ContextTodos } from '@/pages/contextTodos';
import Todo from '../todo/todo';
import styles from './style.module.css';

export default function Todos() {
  const [todosreducer, dispatch] = useContext(ContextTodos);

  const filteredObj = {
    filtered: false,
    done: false,
    undone: false,
  };

  const [filtered, setFiltered] = useState({
    filtered: false,
    done: false,
    undone: false,
  });

  function filterDone() {
    setFiltered({
      filtered: true,
      done: true,
      undone: false,
    });
  }

  function filterUndone() {
    setFiltered({
      filtered: true,
      done: false,
      undone: true,
    });
  }

  function filterAll() {
    setFiltered({ filtered: false, done: false, undone: false });
  }

  console.log(todosreducer);

  return (
    <div className={styles.btnbox}>
      <button onClick={filterDone} className={styles.btn}>
        Done
      </button>
      <button onClick={filterUndone} className={styles.btn}>
        Undone
      </button>
      <button onClick={filterAll} className={styles.btn}>
        All
      </button>
      <ul className={styles.todolist}>
        {todosreducer.map((todo) => {
          if (filtered.done) {
            if (todo.isDone) {
              return <Todo key={todo.name} todo={todo} filter={filtered} />;
            }
          } else if (filtered.undone) {
            if (!todo.isDone) {
              return <Todo key={todo.name} todo={todo} filter={filtered} />;
            }
          } else {
            return <Todo key={todo.name} todo={todo} filter={filtered} />;
          }
        })}
      </ul>
    </div>
  );
}
