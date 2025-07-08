import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get token and userId from localStorage
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = userData._id || userData.id;

  // Set user data
  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  // Debug: Check user and userId
  useEffect(() => {
    console.log("User from localStorage:", userData);
    console.log("userId:", userId);
  }, [userData, userId]);

  // Redirect if not logged in
  if (!token || !userId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="bg-white p-8 rounded-xl shadow-2xl text-center transform transition-all duration-300 hover:scale-105">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-900">Unauthorized Access</h2>
          <p className="mb-6 text-gray-600">
            Please login to access your personal Todo List and start organizing your tasks.
          </p>
          <a 
            href="/login" 
            className="inline-block bg-cyan-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-800 transition-all duration-300 hover:scale-105"
          >
            Login Now
          </a>
        </div>
      </div>
    );
  }

  // Fetch todos on mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/getAll`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTodos(res.data.todos || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch todos");
        console.error("Fetch todos error:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchTodos();
    }
  }, [token]);

  // Add todo
  const handleAdd = async (e) => {
    e.preventDefault();
    setError("");
    const trimmedTitle = title.trim();
    const trimmedDesc = desc.trim();
    if (!trimmedTitle || !trimmedDesc) {
      setError("Title and description required");
      return;
    }
    
    try {
      const res = await axios.post(
        `${API_URL}/create`,
        { title: trimmedTitle, description: trimmedDesc },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTodos([res.data.todo, ...todos]); // Add new todo at the beginning
      setTitle("");
      setDesc("");
    } catch (err) {
      setError(err.response?.data?.message || "Error adding todo");
      console.error("Add todo error:", err.response?.data || err.message);
    }
  };

  // Delete todo
  const handleDelete = async (id) => {
    setError("");
    try {
      await axios.delete(`${API_URL}/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(todos.filter((t) => t._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Error deleting todo");
    }
  };

  // Start editing
  const handleEdit = (todo) => {
    setEditId(todo._id);
    setEditTitle(todo.title);
    setEditDesc(todo.description);
  };

  // Update todo
  const handleUpdate = async (id) => {
    setError("");
    const trimmedEditTitle = editTitle.trim();
    const trimmedEditDesc = editDesc.trim();
    if (!trimmedEditTitle || !trimmedEditDesc) {
      setError("Title and description required");
      return;
    }
    try {
      const res = await axios.put(
        `${API_URL}/update/${id}`,
        { title: trimmedEditTitle, description: trimmedEditDesc },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTodos(todos.map((t) => (t._id === id ? res.data.todo : t)));
      setEditId(null);
      setEditTitle("");
      setEditDesc("");
    } catch (err) {
      setError(err.response?.data?.message || "Error updating todo");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with User Welcome */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce">📝</div>
          <h1 className="text-4xl font-bold mb-2 text-cyan-900">My Todo List</h1>
          <p className="text-lg text-gray-600 mb-4">Organize your tasks and boost your productivity</p>
          
          {/* User Welcome Section */}
          {user && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-block">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Welcome back,</p>
                  <p className="text-lg font-semibold text-cyan-900">
                    {user.username || user.email || 'User'}! 👋
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Add Todo Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 transform transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-cyan-800 flex items-center">
            <span className="text-3xl mr-3">✨</span>
            Add New Task
          </h2>
          
          {/* User Info in Form */}
          {user && (
            <div className="mb-4 p-3 bg-cyan-50 rounded-lg border-l-4 border-cyan-500">
              <div className="flex items-center space-x-2">
                <span className="text-cyan-600">👤</span>
                <span className="text-sm text-cyan-800">
                  Creating task as: <span className="font-semibold">{user.username || user.email || 'User'}</span>
                </span>
              </div>
            </div>
          )}
          
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Enter task title..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                  placeholder="Enter task description..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={!title.trim() || !desc.trim()}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="text-xl mr-2">➕</span>
              Add Task
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 animate-pulse">
            <div className="flex items-center">
              <span className="text-xl mr-2">⚠️</span>
              {error}
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4 animate-spin">⏳</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">Loading your todos...</h3>
            <p className="text-gray-500">Please wait while we fetch your tasks.</p>
          </div>
        )}

        {/* Todo List */}
        {!loading && (
          <div className="space-y-4">
            {todos.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-8xl mb-4 opacity-50">📋</div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">No tasks yet!</h3>
                <p className="text-gray-500">Add your first task above to get started.</p>
              </div>
            ) : (
              todos.map(todo => (
                <div
                  key={todo._id}
                  className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-cyan-500"
                >
                  {editId === todo._id ? (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                          <input
                            type="text"
                            value={editTitle}
                            onChange={e => setEditTitle(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                            placeholder="Edit title..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                          <input
                            type="text"
                            value={editDesc}
                            onChange={e => setEditDesc(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                            placeholder="Edit description..."
                          />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button
                          className="bg-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                          onClick={() => handleUpdate(todo._id)}
                        >
                          <span className="text-xl mr-2">✅</span>
                          Update
                        </button>
                        <button
                          className="bg-gray-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center"
                          onClick={() => setEditId(null)}
                        >
                          <span className="text-xl mr-2">❌</span>
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-start space-x-3">
                          <div className="bg-cyan-100 p-3 rounded-full mt-1">
                            <span className="text-cyan-600 text-xl">📌</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 break-words">
                              {todo.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed break-words">
                              {todo.description}
                            </p>
                            <div className="mt-3 text-sm text-gray-500">
                              Created: {new Date(todo.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4 md:mt-0">
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center"
                          onClick={() => handleEdit(todo)}
                        >
                          <span className="text-lg mr-2">✏️</span>
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 flex items-center"
                          onClick={() => handleDelete(todo._id)}
                        >
                          <span className="text-lg mr-2">🗑️</span>
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* Stats */}
        {!loading && todos.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-cyan-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">📊</span>
              Task Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-cyan-50 rounded-xl">
                <div className="text-2xl font-bold text-cyan-600">{todos.length}</div>
                <div className="text-sm text-gray-600">Total Tasks</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">0</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-xl">
                <div className="text-2xl font-bold text-yellow-600">{todos.length}</div>
                <div className="text-sm text-gray-600">Pending</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">0%</div>
                <div className="text-sm text-gray-600">Progress</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
