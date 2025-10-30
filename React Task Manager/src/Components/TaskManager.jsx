import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';
import useLocalStorage from '../hooks/useLocalStorage';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <Card className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-grow border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex justify-center gap-3 mb-4">
        {['All', 'Active', 'Completed'].map((type) => (
          <Button
            key={type}
            variant={filter === type ? 'primary' : 'secondary'}
            onClick={() => setFilter(type)}
          >
            {type}
          </Button>
        ))}
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-3 rounded-md border ${
                task.completed
                  ? 'bg-green-100 dark:bg-green-900 line-through'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              <span>{task.text}</span>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.completed ? 'Undo' : 'Done'}
                </Button>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
