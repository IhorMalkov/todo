import React, { useEffect, useState } from 'react';
import TodoCard from './TodoForm';

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleRemove = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); 
    setTodos(updatedTodos);
  };


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <TodoCard addTodo={addTodo} todos={todos} handleRemove={handleRemove} />
    </div>
  );
}

export default TodoApp;
