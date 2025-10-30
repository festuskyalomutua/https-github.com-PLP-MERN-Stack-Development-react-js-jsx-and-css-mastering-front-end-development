# 🌟 React Task Manager – Week 3: React.js, JSX, and Tailwind CSS

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwind-css)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Status](https://img.shields.io/badge/Status-Deployed-success)

---

## 🚀 **Overview**

This project is part of **Week 3: React.js, JSX, and Tailwind CSS – Mastering Front-End Development**.

It demonstrates:
- Component-based architecture  
- State management with React Hooks  
- Persistent data using custom hooks  
- API integration with search and pagination  
- Responsive UI with Tailwind CSS  
- Theme switching (light/dark mode)

---

## 🧠 **Learning Objectives**

- Build a modular and scalable React project using Vite
- Apply JSX and React component principles
- Manage state using `useState`, `useEffect`, and `useContext`
- Fetch and display data from a public API
- Style components using Tailwind CSS and dark mode utilities

---

## ⚙️ **Tech Stack**

| Category | Technologies |
|-----------|---------------|
| Frontend | React.js (Vite) |
| Styling | Tailwind CSS |
| State | React Hooks (`useState`, `useEffect`, `useContext`) |
| Persistence | Custom Hook (`useLocalStorage`) |
| Routing | React Router |
| Deployment | Vercel / Netlify |

---

## 🧩 **Features**

✅ Add, complete, and delete tasks  
✅ Filter tasks (All / Active / Completed)  
✅ Persistent tasks using `localStorage`  
✅ Fetch posts from JSONPlaceholder API  
✅ Search and paginate API results  
✅ Light/Dark theme toggle  
✅ Fully responsive design  

---

## 🖼️ **Screenshots**

| Task Manager | API Data Viewer | Dark Mode |
|---------------|----------------|------------|
| ![Task Manager Screenshot](./assets/screenshots/task-manager.png) | ![API Data Screenshot](./assets/screenshots/api-data.png) | ![Dark Mode Screenshot](./assets/screenshots/dark-mode.png) |

*(Add your actual screenshots in `src/assets/screenshots/` and update the links.)*

---

## 🧪 **Project Setup**

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/react-task-manager.git
cd react-task-manager
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Start the Development Server
bash
Copy code
npm run dev
Visit ➡️ http://localhost:5173

🧰 Build for Production
bash
Copy code
npm run build
Output will be generated in the /dist folder.

🌐 Live Demo
🔗 Deployed on Vercel: https://your-project-name.vercel.app

(Replace with your actual deployed URL)

🗂️ Project Structure
css
Copy code
src/
 ├── components/
 │   ├── APIData.jsx
 │   ├── Button.jsx
 │   ├── Card.jsx
 │   ├── Footer.jsx
 │   ├── Layout.jsx
 │   ├── Navbar.jsx
 │   └── TaskManager.jsx
 │
 ├── context/
 │   └── ThemeContext.jsx
 │
 ├── hooks/
 │   └── useLocalStorage.js
 │
 ├── pages/
 │   ├── Home.jsx
 │   ├── Tasks.jsx
 │   └── APIList.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
🧠 Concepts Practiced
React Functional Components

Prop Drilling & Context API

Tailwind Responsive Design

API Fetching & Error Handling

Local Storage Persistence

Conditional Rendering

JSX Composition

💡 Future Improvements
Add user authentication

Integrate a backend API for real data persistence

Add drag-and-drop for task management

Improve accessibility and animations

🧑‍💻 Author
Festus Kyalo Mutua
GitHub • LinkedIn

📄 License
This project is licensed under the MIT License.
