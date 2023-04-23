import { useContext, useEffect, useReducer, useState } from 'react';
import { ContextTodos } from '@/pages/contextTodos';
import Todo from '../todo/todo';

export default function Todos() {
  const [todosreducer, dispatch] = useContext(ContextTodos);
  const [filtered, setFiltered] = useState(false);

  function filterDone() {
    setFiltered(true);
  }

  function filterUndone() {
    setFiltered(true);
  }

  function filterAll() {
    setFiltered(false);
  }

  console.log(todosreducer);

  return (
    <div>
      <button onClick={filterDone}>Done</button>
      <button onClick={filterUndone}>Undone</button>
      <button onClick={filterAll}>All</button>
      <ul>
        {todosreducer.map((todo) => {
          return <Todo key={todo.name} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
