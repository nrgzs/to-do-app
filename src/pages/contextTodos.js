import { useReducer, createContext, useState } from 'react';

export const ContextTodos = createContext();

export default function ContextComponent({ children }) {
  function reducer(state, action) {
    const donetodos = [];
    const initialstate = [...state];

    switch (action.type) {
      case 'add':
        return [...initialstate, action.todo];

      case 'remove':
        const newtodos = [];
        initialstate.map((todo) => {
          if (todo.name != action.todo.name) {
            newtodos.push(todo);
          }
        });

        return newtodos.map((todo) => todo);

      case 'done':
        initialstate.map((todo) => {
          if (todo.name == action.todo.name) {
            const newtodo = {
              ...todo,
              isDone: true,
            };
            donetodos.push(newtodo);
          } else {
            donetodos.push(todo);
          }
        });

        return donetodos.map((todo) => todo);

      default:
        return initialstate;
    }
  }

  const [todosreducer, dispatch] = useReducer(reducer, []);

  return (
    <ContextTodos.Provider value={[todosreducer, dispatch]}>
      {children}
    </ContextTodos.Provider>
  );
}
