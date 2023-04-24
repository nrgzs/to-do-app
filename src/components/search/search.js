import { useRef, useContext, useState } from 'react';
import { ContextTodos } from '@/pages/contextTodos';

export default function Searchbox() {
  const [todosreducer, dispatch] = useContext(ContextTodos);
  const searchinpt = useRef();
  const [searchlist, setSearchList] = useState([]);

  function search() {
    const value = [];
    value.push(searchinpt.current.value);
    console.log(value);
    const found = [];

    todosreducer.map((todo) => {
      if (todo.name.match(value)) {
        found.push(todo);
      }
      setSearchList(found);
    });

    if (value.includes('')) {
      setSearchList([]);
    }
  }
  return (
    <div>
      <p>search for</p>
      <input type="text" ref={searchinpt} onChange={search}></input>
      <button>search</button>
      <div>{searchlist.map((i) => JSON.stringify(i))}</div>
    </div>
  );
}
