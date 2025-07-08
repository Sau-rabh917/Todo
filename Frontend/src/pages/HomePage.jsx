import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TodoList from './TodoList'

const Homepage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-cyan-900 to-blue-900 px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="text-3xl">📝</div>
            <div className="text-2xl font-bold text-white">
              Todo App
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/homepage" 
              className="text-white hover:text-cyan-200 text-lg font-medium transition-colors duration-200 flex items-center"
            >
              <span className="text-xl mr-2">🏠</span>
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-200 text-lg font-medium transition-colors duration-200 flex items-center"
            >
              <span className="text-xl mr-2">ℹ️</span>
              About
            </Link>
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-3 bg-white/10 rounded-full px-4 py-2">
                  <div className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center">
                    <span className="text-cyan-800 font-semibold text-sm">
                      {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
                    </span>
                  </div>
                  <span className="text-white font-medium">
                    {user.username || user.email || 'User'}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 flex items-center"
                >
                  <span className="text-lg mr-2">🚪</span>
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-cyan-700 transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      
      <TodoList />
    </>
  )
}

export default Homepage