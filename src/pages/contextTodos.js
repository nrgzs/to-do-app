import { useReducer, createContext, useState } from 'react';

export const ContextTodos = createContext();

export default function ContextComponent({ children }) {
  const [todos, settodos] = useState([]);

  return (
    <ContextTodos.Provider value={[todos, settodos]}>
      {children}
    </ContextTodos.Provider>
  );
}
