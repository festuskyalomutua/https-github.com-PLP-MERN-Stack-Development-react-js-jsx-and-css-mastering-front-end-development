import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">
        React Task Manager
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api" className="hover:underline">API</Link>
        <button
          onClick={toggleTheme}
          className="bg-white text-blue-600 dark:bg-gray-800 dark:text-yellow-300 px-3 py-1 rounded-md"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}
