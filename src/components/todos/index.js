import { useContext, useEffect, useReducer, useState } from 'react';
import { ContextTodos } from '@/pages/contextTodos';
import Todo from '../todo/todo';

export default function Todos() {
  const [todosreducer, dispatch] = useContext(ContextTodos);

  const filteredObj = {
    filtered: false,
    done: false,
    undone: false,
  };

  const [filtered, setFiltered] = useState({
    filtered: false,
    done: false,
    undone: false,
  });

  function filterDone() {
    setFiltered({
      filtered: true,
      done: true,
      undone: false,
    });
  }

  function filterUndone() {
    setFiltered({
      filtered: true,
      done: false,
      undone: true,
    });
  }

  function filterAll() {
    setFiltered({ filtered: false, done: false, undone: false });
  }

  console.log(todosreducer);

  return (
    <div>
      <button onClick={filterDone}>Done</button>
      <button onClick={filterUndone}>Undone</button>
      <button onClick={filterAll}>All</button>
      <ul>
        {todosreducer.map((todo) => {
          if (filtered.done) {
            if (todo.isDone) {
              return <Todo key={todo.name} todo={todo} filter={filtered} />;
            }
          } else if (filtered.undone) {
            if (!todo.isDone) {
              return <Todo key={todo.name} todo={todo} filter={filtered} />;
            }
          } else {
            return <Todo key={todo.name} todo={todo} filter={filtered} />;
          }
        })}
      </ul>
    </div>
  );
}
