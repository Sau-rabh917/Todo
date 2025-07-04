import React, { useState } from 'react'

const TodoList = () => {
  // Backend integration will handle todos, so local state is just a placeholder
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // All CRUD operations will be handled via backend API calls

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold mb-6 text-cyan-900">My Todo List</h1>
      <form className="flex mb-8 w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-cyan-700"
        />
        <button
          type="submit"
          className="bg-cyan-900 text-white px-6 py-2 rounded-r hover:bg-cyan-800 transition"
        >
          Add
        </button>
      </form>
      <div className="w-full max-w-md space-y-6">
        {todos.map(todo => (
          <div
            key={todo.id}
            className="relative bg-yellow-100 border-l-8 border-yellow-400 rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between"
            style={{
              minHeight: "120px",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.10)",
              transform: "rotate(-2deg)",
            }}
          >
            {editId === todo.id ? (
              <div className="flex flex-col md:flex-row md:items-center w-full gap-2">
                <input
                  type="text"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                >
                  Update
                </button>
                <button
                  className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center w-full justify-between">
                <span className="text-gray-800 text-lg font-medium break-words">{todo.text}</span>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition flex items-center"
                    title="Delete"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;