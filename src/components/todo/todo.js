import { useContext, useEffect, useReducer, useState } from 'react';
import { ContextTodos } from '@/pages/contextTodos';
import { styles } from './style.module.css';

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
      <h4> {todo.name}</h4>

      {todo.tasks.map((t) => (
        <p>{t}</p>
      ))}

      <button
        onClick={() => {
          removeTodo(todo);
        }}
      >
        delete
      </button>
      <button>edit</button>

      <button onClick={() => doneTodo(todo)}>done</button>
    </li>
  );
}
