import { useContext, useEffect, useState } from 'react';
import { ContextTodos } from '@/pages/contextTodos';

export default function Todos() {
  const [todos, settodos] = useContext(ContextTodos);

  function removeTodo(id) {
    const newtodos = [];
    console.log(id);
    for (const todo of todos) {
      if (todo.name != id) {
        newtodos.push(todo);
        console.log(newtodos);
        settodos(newtodos);
      }
    }
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.name}>
              {todo.name}
              {JSON.stringify(todo.ishighlighted)}
              {todo.tasks.map((task) => {
                return <p key={Math.random()}>{task}</p>;
              })}
              <button
                onClick={() => {
                  removeTodo(todo.name);
                }}
              >
                delete
              </button>
              <button>edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
