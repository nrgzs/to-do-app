import { useRef, useState } from 'react';

export default function Createtodo() {
  const [todos, settodos] = useState([]);
  const [tasks, settasks] = useState([]);
  const nameinpt = useRef();
  const checkinpt = useRef();
  const taskinpt = useRef();

  function add() {
    const todo = {
      name: nameinpt.current.value,
      ishighlighted: checkinpt.current.checked,
      tasks: tasks,
    };
    settodos((prevtodos) => {
      return [...prevtodos, todo];
    });
  }

  function addTask() {
    settasks((prevtasks) => {
      return [...prevtasks, taskinpt.current.value];
    });
  }

  console.log(todos);
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
        <button onClick={addTask}>add task</button>
        <div>your tasks{tasks}</div>
      </div>
      <button onClick={add}>create todo</button>
    </div>
  );
}
