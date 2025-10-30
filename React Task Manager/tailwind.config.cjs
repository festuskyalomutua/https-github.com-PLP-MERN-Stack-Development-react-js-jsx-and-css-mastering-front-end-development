/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
        Welcome to React Task Manager 🚀
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Manage your tasks efficiently, explore data from APIs, and learn React.js, JSX, and Tailwind CSS in one interactive app.
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <Link to="/tasks">
          <Button variant="primary">Go to Tasks</Button>
        </Link>
        <Link to="/api">
          <Button variant="secondary">View API Data</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <Card>
          <h3 className="font-semibold text-lg mb-2">✅ Manage Tasks</h3>
          <p>Use our Task Manager to add, complete, and delete tasks — your progress stays saved.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-lg mb-2">🌗 Light/Dark Mode</h3>
          <p>Switch between light and dark mode using Tailwind’s theme configuration.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-lg mb-2">🌐 Fetch API Data</h3>
          <p>Explore posts fetched from a public API with search and pagination features.</p>
        </Card>
      </div>
    </div>
  );
}
