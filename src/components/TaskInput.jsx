import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { FiPlus } from 'react-icons/fi';

const TaskInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleAddTodo} className="max-w-md mx-auto mb-8">
      <div className="flex items-center bg-white shadow-lg rounded-full overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow px-6 py-3 text-gray-700 focus:outline-none"
          placeholder="Add a new task"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          <FiPlus size={24} />
        </button>
      </div>
    </form>
  );
};

export default TaskInput;