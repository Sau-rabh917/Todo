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

  // Get token and userId from localStorage
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user._id || user.id; // Use _id or id depending on backend

  // Debug: Check user and userId
  useEffect(() => {
    console.log("User from localStorage:", user);
    console.log("userId:", userId);
  }, [user, userId]);

  // Redirect if not logged in
  if (!token || !userId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-cyan-900">Unauthorized</h2>
          <p className="mb-4">Please <a href="/login" className="text-cyan-900 underline">login</a> to access your Todo List.</p>
        </div>
      </div>
    );
  }

  // Fetch todos on mount
  useEffect(() => {
    axios
      .get(`${API_URL}/getAll/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTodos(res.data.todos))
      .catch((err) => setError(err.response?.data?.message || "Failed to fetch todos"));
  }, [token, userId]);

  // Add todo
  const handleAdd = async (e) => {
    e.preventDefault();
    setError("");
    if (!title || !desc) return setError("Title and description required");
    try {
      const res = await axios.post(
        `${API_URL}/create`,
        { title, description: desc, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTodos([...todos, res.data.todo]);
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
    try {
      const res = await axios.put(
        `${API_URL}/update/${id}`,
        { title: editTitle, description: editDesc },
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold mb-6 text-cyan-900">My Todo List</h1>
      <form
        className="flex flex-col md:flex-row gap-2 mb-8 w-full max-w-md"
        onSubmit={handleAdd}
      >
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-700"
        />
        <input
          type="text"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          placeholder="Description"
          className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-700"
        />
        <button
          type="submit"
          className="bg-cyan-900 text-white px-6 py-2 rounded hover:bg-cyan-800 transition"
        >
          Add
        </button>
      </form>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <div className="w-full max-w-md space-y-6">
        {todos.map(todo => (
          <div
            key={todo._id}
            className="bg-yellow-100 border-l-8 border-yellow-400 rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            {editId === todo._id ? (
              <div className="flex flex-col md:flex-row md:items-center w-full gap-2">
                <input
                  type="text"
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Title"
                />
                <input
                  type="text"
                  value={editDesc}
                  onChange={e => setEditDesc(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Description"
                />
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  onClick={() => handleUpdate(todo._id)}
                >
                  Update
                </button>
                <button
                  className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
                  onClick={() => setEditId(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center w-full justify-between">
                <div>
                  <span className="text-gray-800 text-lg font-medium break-words">{todo.title}</span>
                  <div className="text-gray-600">{todo.description}</div>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    onClick={() => handleEdit(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(todo._id)}
                  >
                    Delete
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
