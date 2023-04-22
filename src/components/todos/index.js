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

  function doneTodo(todo) {
    dispatch({ type: 'done', todo: todo });
  }

  /* function filter(id) {
    dispatch({ type: 'filter', id: id });
  } */

  function filterDone() {
    dispatch({ type: 'filterdone' });
  }

  function filterUndone() {
    dispatch({ type: 'filterundone' });
  }

  function filterAll() {
    dispatch({ type: 'filterall' });
  }

  console.log(todosreducer);

  return (
    <div>
      <button onClick={filterDone}>Done</button>
      <button onClick={filterUndone}>Undone</button>
      <button onClick={filterAll}>All</button>
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
              {<button onClick={() => doneTodo(todo)}>done</button>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
