import { useRef, useContext, useState } from 'react';
import { ContextTodos } from '@/pages/contextTodos';

export default function Searchbox() {
  const [todosreducer, dispatch] = useContext(ContextTodos);
  const searchinpt = useRef();
  const [searchlist, setSearchList] = useState([]);

  function search() {
    const value = searchinpt.current.value;
    todosreducer.map((todo) => {
      if (value == todo.name) {
        setSearchList([...searchlist, todo.name]);
      }
    });
    return;
  }
  return (
    <div>
      <p>search for</p>
      <input type="text" ref={searchinpt}></input>
      <button onClick={search}>search</button>
      <div>{searchlist.map((item) => item)}</div>
    </div>
  );
}
