import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Todo App
          </span>
        </h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  </div>
  );
}

export default App;
