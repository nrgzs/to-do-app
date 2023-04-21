import { useReducer, createContext, useState } from 'react';

export const ContextTodos = createContext();

export default function ContextComponent({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case 'add':
        return [...state, action.todo];

      case 'addtask':
        return state.map((todo) => {
          return { ...todo, tasks: action.task };
        });

      case 'remove':
        const newtodos = [];
        return state.map((todo) => {
          if (todo.name != action.todo.name) {
            return todo;
          } else {
            return 'deleted';
          }
        });

      default:
        return state;
    }
  }

  const [todosreducer, dispatch] = useReducer(reducer, []);

  return (
    <ContextTodos.Provider value={[todosreducer, dispatch]}>
      {children}
    </ContextTodos.Provider>
  );
}