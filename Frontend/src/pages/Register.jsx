import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      await axios.post("http://localhost:8080/api/user/register", form);
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message || "Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-10 right-10 w-36 h-36 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 left-20 w-28 h-28 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-44 h-44 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-15 blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-green-300 to-cyan-400 rounded-full opacity-20 blur-2xl animate-pulse delay-1500"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-blue-200 rounded-lg opacity-20 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/6 w-16 h-16 bg-cyan-200 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/6 w-24 h-24 bg-purple-200 rounded-lg opacity-20 rotate-12 animate-bounce delay-2000"></div>
        
        {/* Abstract Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-blue-400 to-transparent opacity-30"></div>
          <div className="absolute bottom-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
          <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 w-px h-1/3 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-30"></div>
        </div>
        
        {/* Additional Decorative Elements */}
        <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-1/6 right-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-ping delay-1000"></div>
        <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 animate-ping delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-md w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Join TodoApp</h2>
            <p className="text-gray-600">Create your account and start organizing your life today</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg animate-pulse">
              <div className="flex items-center">
                <span className="text-xl mr-2">⚠️</span>
                {error}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">👤</span>
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={form.username}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  required
                  autoFocus
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">📧</span>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">🔒</span>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating Account...
                </>
              ) : (
                <>
                  <span className="mr-2">✨</span>
                  Create Account
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors duration-200"
              >
                Sign in here
              </Link>
            </p>
          </div>

          {/* Features Preview */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-cyan-50 rounded-lg">
                <div className="text-2xl mb-1">📋</div>
                <div className="text-xs text-gray-600">Organize</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-2xl mb-1">🎯</div>
                <div className="text-xs text-gray-600">Focus</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-1">📈</div>
                <div className="text-xs text-gray-600">Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;