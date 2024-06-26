import React, { useState } from 'react';

function TodoList({ list, handleRemove }) {
  const [checked, setChecked] = useState([]);

  const handleCheck = (index) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = !updatedChecked[index];
    setChecked(updatedChecked);
  };

  return (
    <div className='w-full'>
      <ul className='flex flex-col gap-2 w-full'>
        {list.map((item, index) => (
          <li key={index} className={`flex items-center justify-between text-black p-2 rounded ${checked[index] ? 'line-through' : ''}`}>
            <span className="flex-grow break-all mr-3">
              {item}
            </span>
            <div>
              <input
                className="mr-3"
                type='checkbox'
                checked={checked[index] || false}
                onChange={() => handleCheck(index)}
              />
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
