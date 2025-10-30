import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom global styles (optional) */
body {
  @apply bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100;
  font-family: 'Inter', sans-serif;
}
