// src/components/TaskForm.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getTasks, saveTasks, getUsers } from '../utils/storage';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assigneeId, setAssigneeId] = useState('');
  const [message, setMessage] = useState('');

  const users = getUsers().filter(u => u.role === 'user');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tasks = getTasks();
    const newTask = {
      id: uuidv4(),
      title,
      description,
      assigneeId: parseInt(assigneeId),
      status: 'Pending'
    };
    tasks.push(newTask);
    saveTasks(tasks);
    setTitle('');
    setDescription('');
    setAssigneeId('');
    setMessage('Task created successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="task-form">
      <h3>Create Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select value={assigneeId} onChange={(e) => setAssigneeId(e.target.value)} required>
          <option value="">Select Assignee</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
        </select>
        <button type="submit">Create Task</button>
      </form>
      {message && <p className="success">{message}</p>}
    </div>
  );
};

export default TaskForm;