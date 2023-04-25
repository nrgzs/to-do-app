import { ContextTodos } from '@/pages/contextTodos';
import { useContext, useReducer, useRef, useState } from 'react';
import styles from './style.module.css';

export default function Createtodo() {
  const [todosreducer, dispatch] = useContext(ContextTodos);

  const [tasks, settasks] = useState([]);

  const nameinpt = useRef();
  const checkinpt = useRef();
  const taskinpt = useRef();

  function add() {
    const todo = {
      name: nameinpt.current.value,
      ishighlighted: checkinpt.current.checked,
      tasks: tasks,
      isDone: false,
      isFiltered: false,
    };

    dispatch({ type: 'add', todo: todo });
    settasks([]);
  }

  function addTask() {
    settasks((prev) => {
      return [...prev, taskinpt.current.value];
    });
  }

  console.log(todosreducer);
  return (
    <div className={styles.createTodo}>
      <h2 className={styles.titleTxt}>Create New Todo</h2>
      <div className={styles.title}>
        <input
          type="text"
          placeholder="name"
          ref={nameinpt}
          className={styles.nameInp}
        ></input>
        <div className={styles.highlight}>
          <label className={styles.highlightTxt}>hightlight todo</label>

          <input
            type="checkbox"
            ref={checkinpt}
            className={styles.highlightCBox}
          ></input>
        </div>
      </div>
      <div className={styles.tasks}>
        <input
          type="text"
          placeholder="enter your task"
          ref={taskinpt}
          className={styles.taskInp}
        ></input>
        <button onClick={() => addTask()} className={styles.taskBtn}>
          add task
        </button>
        <div className={styles.tasksContainer}>
          {tasks.map((t) => (
            <p>{t}</p>
          ))}
        </div>
      </div>
      <button onClick={add} className={styles.createBtn}>
        create todo
      </button>
    </div>
  );
}
