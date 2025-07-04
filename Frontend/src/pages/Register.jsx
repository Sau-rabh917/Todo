import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:8080/api/user/register", form);
      navigate("/login");
    } catch (err) {
      console.log(err);
      
      setError(
        err.response?.data?.message || "Registration failed. Try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-900">
          Register
        </h2>
        {error && (
          <div className="mb-4 text-red-600 text-center">{error}</div>
        )}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-700"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-700"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-700"
          required
        />
        <button
          type="submit"
          className="w-full bg-cyan-900 text-white py-2 rounded hover:bg-cyan-800 transition cursor-pointer"
        >
          Register
        </button>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Already have an account? </span>
          <Link to="/login" className="text-cyan-900 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;