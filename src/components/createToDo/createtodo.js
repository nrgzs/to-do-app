import { ContextTodos } from '@/pages/contextTodos';
import { useContext, useReducer, useRef, useState } from 'react';

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
    <div>
      <h2>Create New Todo</h2>
      <div>
        <input type="text" placeholder="name" ref={nameinpt}></input>
        <label>hightlight todo</label>
        <input type="checkbox" ref={checkinpt}></input>
      </div>
      <div>
        <input type="text" placeholder="enter your task" ref={taskinpt}></input>
        <button onClick={() => addTask()}>add task</button>
        <div>{tasks}</div>
      </div>
      <button onClick={add}>create todo</button>
    </div>
  );
}
