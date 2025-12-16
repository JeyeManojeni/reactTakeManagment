// src/components/UserList.js
import React from 'react';
import { useDrop } from 'react-dnd';
import { getTasks, saveTasks, getUsers } from '../utils/storage';

const UserCard = ({ user, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => onDrop(item.id, user.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`user-card ${isOver ? 'over' : ''}`}>
      <p>{user.username}</p>
    </div>
  );
};

const UserList = ({ onDrop }) => {
  const users = getUsers().filter(u => u.role === 'user');

  return (
    <div className="user-list">
      <h3>Users (Drop Tasks Here)</h3>
      {users.map(user => (
        <UserCard key={user.id} user={user} onDrop={onDrop} />
      ))}
    </div>
  );
};

export default UserList;