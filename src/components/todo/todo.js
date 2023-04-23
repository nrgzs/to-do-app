import { useContext, useEffect, useReducer, useState } from 'react';
import { ContextTodos } from '@/pages/contextTodos';

export default function Todo({ todo, filtered }) {
  const [todosreducer, dispatch] = useContext(ContextTodos);
  function removeTodo(todo) {
    console.log(todo);
    dispatch({ type: 'remove', todo: todo });
  }

  function doneTodo(todo) {
    dispatch({ type: 'done', todo: todo });
  }

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
}

/* function FilteredList() {
  todosreducer.map((todo) => {
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
  });
}
 */
