import { useRef, useContext } from 'react';
import { ContextTodos } from '@/pages/contextTodos';

export default function Searchbox() {
  const [todosreducer, dispatch] = useContext(ContextTodos);
  const searchinpt = useRef();

  function search() {
    return;
  }
  return (
    <div>
      <p>search for</p>
      <input type="text" ref={searchinpt}></input>
      <button onClick={search}>search</button>
    </div>
  );
}
