import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/login",
        form
      );
      // Optionally store token: localStorage.setItem("token", res.data.token);
      navigate("/homepage");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-emerald-900">
          Login
        </h2>
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-700"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-700"
          required
        />
        <button
          type="submit"
          className="w-full bg-emerald-900 text-white py-2 rounded hover:bg-emerald-800 transition cursor-pointer"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Don't have an account? </span>
          <Link to="/register" className="text-emerald-900 hover:underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;