import { useRef, useContext, useState } from 'react';
import { ContextTodos } from '@/pages/contextTodos';
import styles from './style.module.css';

export default function Searchbox() {
  const [todosreducer, dispatch] = useContext(ContextTodos);
  const searchinpt = useRef();
  const [searchlist, setSearchList] = useState([]);

  function search() {
    const value = [];
    value.push(searchinpt.current.value);

    const found = [];

    todosreducer.map((todo) => {
      if (todo.name.match(value)) {
        found.push(todo);
      }
      todo.tasks.map((task) => {
        if (task.match(value)) {
          found.push(task);
        }
      });
      setSearchList(found);
    });

    if (value.includes('')) {
      setSearchList([]);
    }
  }
  return (
    <div className={styles.searchbox}>
      <input
        type="text"
        ref={searchinpt}
        onChange={search}
        className={styles.input}
      ></input>
      <button className={styles.button}>search</button>
      <div className={styles.searchlist}>
        {searchlist.map((i) => {
          return (
            <div className={styles.itemBox}>
              <p className={styles.item}>{i.name || i}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
