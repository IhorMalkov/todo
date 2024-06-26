import React, { useEffect, useRef, useState } from 'react';
import TodoList from './TodoList';

function TodoCard({ addTodo, todos, handleRemove }) {
  const [todo, setTodo] = useState('');
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === '') {
      return;
    }
    addTodo(todo);
    setTodo('');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-500'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center p-6 space-y-2 bg-white shadow-2xl m-4 min-w-[300px] max-w-full w-auto rounded-md'>
        <label className='text-black font-semibold' >
          Add Todo
        </label>
        <input
          className='border border-gray-600 w-full focus:outline-none rounded px-3 py-2'
          ref={inputRef}
          value={todo}
          id='addTodo'
          placeholder='Type to add todo'
          onChange={(event) => setTodo(event.target.value)}
        />
        <TodoList list={todos} handleRemove={handleRemove} />
        <button className='bg-blue-600 rounded p-3 w-full text-white font-semibold'>
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoCard;
