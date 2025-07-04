import React from 'react'
import { Link } from 'react-router-dom'
import TodoList from './TodoList'


const Homepage = () => {
  return (
    <>
    <nav className="flex items-center justify-between bg-cyan-900 px-8 py-4 shadow">
      <div className="text-2xl font-bold text-white">
        Todo
      </div>
      <div className="flex gap-6">
        <Link to="/homepage" className="text-white hover:text-cyan-200 text-lg">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-cyan-200 text-lg">
          About
        </Link>
      </div>
    </nav>
    <TodoList />
    
    </>
  )
}

export default Homepage