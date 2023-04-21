import { useContext, useEffect, useReducer, useState } from 'react';
import { ContextTodos } from '@/pages/contextTodos';

export default function Todos() {
  const [todosreducer, dispatch] = useContext(ContextTodos);
  const [unDoneTodos, setunDoneTodos] = useState([]);
  const [doneTodos, setdoneTodos] = useState([]);

  function removeTodo(todo) {
    console.log(todo);
    dispatch({ type: 'remove', todo: todo });
  }

  /*  function doneTodo(id) {
    const newtodos = [];
    for (const todo of todos) {
      if (todo.name == id) {
        const newtodo = {
          ...todo,
          isDone: true,
        };
        newtodos.push(newtodo);

        settodos(newtodos);
      }
    }
  }

  function filterDone() {
    const doneTodos = [];

    for (const todo of todos) {
      if (todo.isDone) {
        doneTodos.push(todo);
        setdoneTodos(doneTodos);
      }
    }
  }

  function filterUndone() {
    const unDoneTodos = [];

    for (const todo of todos) {
      if (todo.isDone) {
        unDoneTodos.push(todo);
        setunDoneTodos(unDoneTodos);
      }
    }
  }

  function filterAll() {
    return todos;
  }
 */
  console.log(todosreducer);

  return (
    <div>
      {/*   <button onClick={filterDone}>Done</button>
      <button onClick={filterUndone}>Undone</button>
      <button onClick={filterAll}>All</button> */}
      <ul>
        {todosreducer.map((todo) => {
          return (
            <li key={Math.random()}>
              {todo.name}
              {JSON.stringify(todo.ishighlighted)}
              {JSON.stringify(todo.tasks)}
              <button
                onClick={() => {
                  removeTodo(todo);
                }}
              >
                delete
              </button>
              <button>edit</button>
              {/*  <button onClick={() => doneTodo(todo.name)}>done</button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
