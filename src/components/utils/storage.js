// src/utils/storage.js
export const getTasks = () => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getUsers = () => {
  const storedUsers = localStorage.getItem('users');
  return storedUsers ? JSON.parse(storedUsers) : [
    { id: 1, username: 'user1', password: 'user123', role: 'user' },
    { id: 2, username: 'admin', password: 'admin123', role: 'admin' }
  ];
};

export const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};