import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleComplete } from "../redux/todoSlice";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

const TaskList = () => {
  const data = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setIsEditing(id);
    setEditText(text);
  };

  const handleEditSubmit = (id) => {
    if (editText) {
      dispatch(editTodo({ id, text: editText }));
      setIsEditing(null);
      setEditText("");
    }
  };

  return (
    <ul className="space-y-4 max-w-md mx-auto">
      {data.map((todo) => (
        <li
          key={todo.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
        >
          {isEditing === todo.id ? (
            <div className="flex p-4">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-grow border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 px-2 py-1 transition-all duration-300"
                autoFocus
              />
              <button
                onClick={() => handleEditSubmit(todo.id)}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between p-4">
              <span
                className={`flex-grow text-lg ${
                  todo.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(todo.id, todo.text)}
                  className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
                >
                  <FiEdit3 size={20} />
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-500 hover:text-red-600 transition-colors duration-300"
                >
                  <FiTrash2 size={20} />
                </button>
                <button
                  onClick={() => dispatch(toggleComplete(todo.id))}
                  className={`rounded-full p-1 transition-colors duration-300 ${
                    todo.completed
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {todo.completed ? <TiTick size={18} /> : <RxCross1 size={18} />}
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
