import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-600 dark:bg-gray-900 text-white py-4 text-center mt-10">
      <p>&copy; {new Date().getFullYear()} React Task Manager. All rights reserved.</p>
      <p className="text-sm">Built with ❤️ using React & Tailwind CSS</p>
    </footer>
  );
}
